// Shared behaviour: footer year; on narrow screens, scroll the active tab into view.
(function () {
  var y = new Date().getFullYear();
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = y; });
  var nav = document.querySelector('.navlinks');
  var cur = nav && nav.querySelector('a[aria-current="page"]');
  if (cur && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2;
  }
})();
