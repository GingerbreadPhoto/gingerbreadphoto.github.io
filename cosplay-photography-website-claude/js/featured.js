/* ============================================================================
   featured.js — homepage only. Makes the "Featured work" photos open in the
   shared lightbox (js/lightbox.js), the same way the portfolio grid does.

   The items are read straight from the .featured-grid markup in index.html,
   so you keep editing the photos/labels there — no data file needed.
   ============================================================================ */

(function () {
  "use strict";

  var grid = document.querySelector(".featured-grid");
  if (!grid || typeof createLightbox !== "function") return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll(".photo-card"));
  if (!cards.length) return;

  var items = cards.map(function (card) {
    var img = card.querySelector("img");
    var labelEl = card.querySelector(".photo-card__label");
    var label = labelEl ? labelEl.textContent.trim() : "";
    // Don't show the "EDIT ME" placeholder text as a real caption
    var caption = label && label.indexOf("EDIT ME") === -1 ? gbEscapeHtml(label) : "";
    return {
      src: img ? img.getAttribute("src") : "",
      alt: img ? img.getAttribute("alt") : "",
      caption: caption,
    };
  });

  var lightbox = createLightbox(items);

  cards.forEach(function (card, index) {
    card.addEventListener("click", function (event) {
      event.preventDefault();
      lightbox.open(index);
    });
  });
})();
