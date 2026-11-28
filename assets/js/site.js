// Shared behaviour: footer year and central page navigation.
(function () {
  var y = new Date().getFullYear();
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = y; });
  var nav = document.querySelector('.navlinks');
  var cur = nav && nav.querySelector('a[aria-current="page"]');
  if (cur && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2;
  }
})();


document.addEventListener('DOMContentLoaded', function () {
  var selector = document.querySelector('.page-navigation');
  if (selector) selector.addEventListener('change', function () {
    if (selector.value) window.location.href = selector.value;
  });
});
