(function () {
  var toggle = document.querySelector(".nav-toggle");
  var navlinks = document.getElementById("navlinks");
  if (!toggle || !navlinks) return;

  function close() {
    toggle.setAttribute("aria-expanded", "false");
    navlinks.classList.remove("open");
  }

  function open() {
    toggle.setAttribute("aria-expanded", "true");
    navlinks.classList.add("open");
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      close();
    } else {
      open();
    }
  });

  navlinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      close();
      toggle.focus();
    }
  });
})();
