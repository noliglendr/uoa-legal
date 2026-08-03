function tOpen(id) {
  document.getElementById(id).classList.add("open");
}
function tClose(id) {
  document.getElementById(id).classList.remove("open");
}
document.querySelectorAll(".t-overlay").forEach(function (ov) {
  ov.addEventListener("click", function (e) {
    if (e.target === ov) ov.classList.remove("open");
  });
  var closeBtn = ov.querySelector(".t-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      ov.classList.remove("open");
    });
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".t-overlay.open").forEach(function (ov) {
      ov.classList.remove("open");
    });
  }
});
