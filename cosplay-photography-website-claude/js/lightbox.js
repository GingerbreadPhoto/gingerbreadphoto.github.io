/* ============================================================================
   lightbox.js — a small, reusable, keyboard-accessible lightbox with a
   crossfade between photos. Shared by the portfolio gallery and the
   homepage "Featured work" grid.

   Requires a #lightbox element in the page (see the markup in
   portfolio.html / index.html).

   Usage:
     var lb = createLightbox([
       { src: "path.jpg", alt: "…", caption: "<strong>Name</strong> · Character" }
     ]);
     lb.open(0);   // open at a given index

   `caption` is an HTML string (already escaped) shown before the "n / total"
   counter; pass "" for no caption. Use gbEscapeHtml() to escape user text.
   ============================================================================ */

function gbEscapeHtml(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str == null ? "" : str));
  return div.innerHTML;
}

function createLightbox(items) {
  var lightbox = document.getElementById("lightbox");
  if (!lightbox || !items || !items.length) return { open: function () {} };

  var img = lightbox.querySelector(".lightbox__img");
  var caption = lightbox.querySelector(".lightbox__caption");
  var index = 0;
  var lastFocused = null;
  var FADE_MS = 200; // keep in sync with the .lightbox__img transition

  function open(i) {
    index = i;
    lastFocused = document.activeElement;
    update();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox__close").focus();
  }

  function close() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  // Fade the current photo out, swap the source, fade the new one in
  function step(direction) {
    index = (index + direction + items.length) % items.length;
    img.classList.add("is-fading");

    window.setTimeout(function () {
      update();
      var finish = function () {
        img.classList.remove("is-fading");
        img.removeEventListener("load", finish);
      };
      img.addEventListener("load", finish);
      if (img.complete) finish();
    }, FADE_MS);
  }

  function update() {
    var item = items[index];
    img.src = encodeURI(item.src);
    img.alt = item.alt || "";
    caption.innerHTML =
      (item.caption ? item.caption + ' <span aria-hidden="true">—</span> ' : "") +
      (index + 1) + " / " + items.length;
  }

  lightbox.querySelector(".lightbox__close").addEventListener("click", close);
  lightbox.querySelector(".lightbox__prev").addEventListener("click", function () { step(-1); });
  lightbox.querySelector(".lightbox__next").addEventListener("click", function () { step(1); });

  // Click on the dark backdrop closes
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  });

  return { open: open };
}
