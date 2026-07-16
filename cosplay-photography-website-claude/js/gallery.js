/* ============================================================================
   gallery.js — portfolio page: renders the grid from PORTFOLIO (see
   portfolio-data.js), lazy-loads images, and provides a keyboard-accessible
   lightbox with a crossfade between photos.

   Captions show: cosplayer → character → event.

   You should not need to edit this file to manage content — edit
   js/portfolio-data.js instead.
   ============================================================================ */

(function () {
  "use strict";

  var galleryEl = document.getElementById("gallery");
  if (!galleryEl || typeof PORTFOLIO === "undefined") return;

  // Treat unfilled placeholders as empty
  function field(item, key) {
    var v = (item[key] || "").trim();
    return v.indexOf("EDIT ME") === -1 ? v : "";
  }

  /* ---- Lazy loading ---- */
  var lazyObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                loadImage(entry.target);
                lazyObserver.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "300px 0px" } // start loading a bit before it scrolls in
        )
      : null;

  function loadImage(img) {
    img.src = img.dataset.src;
    img.addEventListener("load", function () {
      img.classList.remove("lazy");
      img.classList.add("loaded");
    });
  }

  /* ---- Render the grid ---- */
  PORTFOLIO.forEach(function (item, index) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery__item";
    btn.setAttribute("aria-label", "Open larger view: " + item.alt);
    btn.addEventListener("click", function () { openLightbox(index); });

    var img = document.createElement("img");
    img.alt = item.alt;
    img.className = "lazy";
    img.dataset.src = encodeURI(item.src);
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");

    // Reserve the right space before the photo loads (prevents layout
    // shift and makes lazy loading actually lazy). Falls back to a
    // portrait ratio when w/h aren't provided in portfolio-data.js.
    if (item.w && item.h) {
      img.width = item.w;
      img.height = item.h;
    } else {
      img.style.aspectRatio = "2 / 3";
    }

    if (lazyObserver) {
      lazyObserver.observe(img);
    } else {
      loadImage(img);
    }

    btn.appendChild(img);

    // Hover caption: cosplayer · character, with the event underneath
    var mainText = [field(item, "cosplayer"), field(item, "character")]
      .filter(Boolean).join(" · ");
    var eventText = field(item, "event");
    if (mainText || eventText) {
      var cap = document.createElement("span");
      cap.className = "gallery__caption";
      if (mainText) cap.appendChild(document.createTextNode(mainText));
      if (eventText) {
        var small = document.createElement("small");
        small.textContent = eventText;
        cap.appendChild(small);
      }
      btn.appendChild(cap);
    }

    galleryEl.appendChild(btn);
  });

  /* ---- Lightbox ---- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = lightbox.querySelector(".lightbox__img");
  var lightboxCaption = lightbox.querySelector(".lightbox__caption");
  var lightboxIndex = 0;
  var lastFocused = null;
  var FADE_MS = 200; // keep in sync with the .lightbox__img transition

  function openLightbox(index) {
    lightboxIndex = index;
    lastFocused = document.activeElement;
    updateLightbox();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox__close").focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  // Fade the current photo out, swap, fade the new one in
  function stepLightbox(direction) {
    lightboxIndex = (lightboxIndex + direction + PORTFOLIO.length) % PORTFOLIO.length;
    lightboxImg.classList.add("is-fading");

    window.setTimeout(function () {
      updateLightbox();
      var finish = function () {
        lightboxImg.classList.remove("is-fading");
        lightboxImg.removeEventListener("load", finish);
      };
      lightboxImg.addEventListener("load", finish);
      if (lightboxImg.complete) finish();
    }, FADE_MS);
  }

  function updateLightbox() {
    var item = PORTFOLIO[lightboxIndex];
    lightboxImg.src = encodeURI(item.src);
    lightboxImg.alt = item.alt;

    // Caption order: cosplayer first, then character, then event
    var parts = [];
    if (field(item, "cosplayer")) parts.push("<strong>" + escapeHtml(field(item, "cosplayer")) + "</strong>");
    if (field(item, "character")) parts.push(escapeHtml(field(item, "character")));
    if (field(item, "event")) parts.push(escapeHtml(field(item, "event")));
    lightboxCaption.innerHTML =
      (parts.length ? parts.join(" · ") + ' <span aria-hidden="true">—</span> ' : "") +
      (lightboxIndex + 1) + " / " + PORTFOLIO.length;
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox__prev").addEventListener("click", function () { stepLightbox(-1); });
  lightbox.querySelector(".lightbox__next").addEventListener("click", function () { stepLightbox(1); });

  // Click on the dark backdrop closes
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });
})();
