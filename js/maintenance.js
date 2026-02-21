// MAINTENANCE MODE - Remove this file's script tags from all HTML pages to disable
(function () {
  if (/maintenance\.html$/i.test(window.location.pathname)) return;
  var scriptEl = document.currentScript;
  if (!scriptEl) return;
  var src = scriptEl.src;
  var base = src.substring(0, src.lastIndexOf('/js/maintenance.js'));
  window.location.replace(base + '/maintenance.html');
})();
