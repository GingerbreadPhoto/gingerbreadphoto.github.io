/* ============================================================================
   gallery.js — portfolio page: renders the grid from PORTFOLIO (see
   portfolio-data.js), builds the "shoot type" filter buttons, lazy-loads
   images, and opens the shared lightbox (js/lightbox.js) with a crossfade.

   Captions show: cosplayer → character → event.
   Filter buttons are built automatically from each photo's `type` field.

   You should not need to edit this file to manage content — edit
   js/portfolio-data.js instead.
   ============================================================================ */

(function () {
  "use strict";

  var galleryEl = document.getElementById("gallery");
  if (!galleryEl || typeof PORTFOLIO === "undefined") return;

  var filterBar = document.getElementById("filter-bar");
  var countEl = document.getElementById("gallery-count");

  // Treat unfilled placeholders as empty
  function field(item, key) {
    var v = (item[key] || "").trim();
    return v.indexOf("EDIT ME") === -1 ? v : "";
  }

  function captionFor(item) {
    var parts = [];
    if (field(item, "cosplayer")) parts.push("<strong>" + gbEscapeHtml(field(item, "cosplayer")) + "</strong>");
    if (field(item, "character")) parts.push(gbEscapeHtml(field(item, "character")));
    if (field(item, "event")) parts.push(gbEscapeHtml(field(item, "event")));
    return parts.join(" · ");
  }

  var lightbox = createLightbox([]);

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

  /* ---- Build the grid: one entry per photo, kept so we can filter later ---- */
  var entries = PORTFOLIO.map(function (item) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery__item";
    btn.setAttribute("aria-label", "Open larger view: " + (item.alt || captionFor(item) || "photo"));

    var img = document.createElement("img");
    img.alt = item.alt || "";
    img.className = "lazy";
    img.dataset.src = encodeURI(item.src);
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");

    // Reserve the right space before the photo loads (prevents layout shift).
    if (item.w && item.h) {
      img.width = item.w;
      img.height = item.h;
    } else {
      img.style.aspectRatio = "2 / 3";
    }

    if (lazyObserver) lazyObserver.observe(img);
    else loadImage(img);

    btn.appendChild(img);

    // Hover caption: cosplayer · character, with the event underneath
    var mainText = [field(item, "cosplayer"), field(item, "character")].filter(Boolean).join(" · ");
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

    var entry = { item: item, card: btn, lbItem: { src: item.src, alt: item.alt, caption: captionFor(item) }, visibleIndex: -1 };
    btn.addEventListener("click", function () {
      if (entry.visibleIndex >= 0) lightbox.open(entry.visibleIndex);
    });
    return entry;
  });

  /* ---- Filtering by shoot type ---- */
  function applyFilter(type) {
    var visible = [];
    entries.forEach(function (entry) {
      var show = !type || field(entry.item, "type") === type;
      entry.card.style.display = show ? "" : "none";
      if (show) {
        entry.visibleIndex = visible.length;
        visible.push(entry.lbItem);
      } else {
        entry.visibleIndex = -1;
      }
    });
    lightbox.setItems(visible);
    if (countEl) {
      countEl.textContent =
        visible.length === entries.length
          ? entries.length + " photos"
          : visible.length + " of " + entries.length + " photos";
    }
  }

  // Collect the distinct shoot types, in first-seen order
  var types = [];
  PORTFOLIO.forEach(function (item) {
    var t = field(item, "type");
    if (t && types.indexOf(t) === -1) types.push(t);
  });

  if (filterBar && types.length > 1) {
    var chips = [];

    function makeChip(label, value) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "filter-chip";
      chip.textContent = label;
      chip.setAttribute("aria-pressed", value === null ? "true" : "false");
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        applyFilter(value);
      });
      chips.push(chip);
      filterBar.appendChild(chip);
      return chip;
    }

    makeChip("All", null);
    types.forEach(function (t) { makeChip(t, t); });
  }

  /* ---- Initial paint ---- */
  applyFilter(null);
})();
