/* ============================================================================
   main.js — shared behavior: mobile nav, hero slideshow, scroll reveals.
   Loaded on every page. No libraries, no build step.
   ============================================================================ */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Mobile navigation toggle ---- */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu when a link is chosen (mobile)
    navLinks.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Hero slideshow (homepage only) ---- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".hero__slide"));
  var dotsWrap = document.querySelector(".hero__dots");

  if (slides.length > 1 && dotsWrap) {
    var current = 0;
    var INTERVAL = 5500; // ms per slide
    var timer = null;
    var dots = slides.map(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "hero__dot" + (i === 0 ? " is-active" : "");
      dot.type = "button";
      dot.setAttribute("aria-label", "Show slide " + (i + 1) + " of " + slides.length);
      dot.addEventListener("click", function () {
        goTo(i);
        restart();
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    function goTo(index) {
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots[current].classList.add("is-active");
    }

    function restart() {
      if (timer) clearInterval(timer);
      if (!prefersReducedMotion) {
        timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
      }
    }

    // Pause the show while the tab is hidden (battery + sanity)
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        if (timer) clearInterval(timer);
        timer = null;
      } else {
        restart();
      }
    });

    restart();
  }

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  var revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length && "IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // No observer support or reduced motion: just show everything
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
