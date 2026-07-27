/* ============================================================================
   gallery.js — portfolio page: renders the grid from PORTFOLIO (see
   portfolio-data.js), lazy-loads images, and opens the shared lightbox
   (js/lightbox.js) with a crossfade between photos.

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

  /* ---- Lightbox: build the items list once, order = cosplayer → character → event ---- */
  var lightboxItems = PORTFOLIO.map(function (item) {
    var parts = [];
    if (field(item, "cosplayer")) parts.push("<strong>" + gbEscapeHtml(field(item, "cosplayer")) + "</strong>");
    if (field(item, "character")) parts.push(gbEscapeHtml(field(item, "character")));
    if (field(item, "event")) parts.push(gbEscapeHtml(field(item, "event")));
    return { src: item.src, alt: item.alt, caption: parts.join(" · ") };
  });
  var lightbox = createLightbox(lightboxItems);

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
    btn.addEventListener("click", function () { lightbox.open(index); });

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
})();
