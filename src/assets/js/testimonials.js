(function () {
  var root = document.querySelector("[data-testimonials]");
  if (!root) return;

  var track = root.querySelector("[data-track]");
  var prev = root.querySelector("[data-prev]");
  var next = root.querySelector("[data-next]");
  if (!track || !prev || !next) return;

  function step() {
    var card = track.querySelector(".testimonial-card");
    if (!card) return 320;
    var styles = window.getComputedStyle(track);
    var gap = parseFloat(styles.columnGap || styles.gap || "24") || 24;
    return card.getBoundingClientRect().width + gap;
  }

  prev.addEventListener("click", function () {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });

  next.addEventListener("click", function () {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });
})();
