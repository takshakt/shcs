document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Accordion (one open at a time per accordion)
  document.querySelectorAll('.accordion').forEach(function (acc) {
    acc.querySelectorAll('.accordion__q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var answer = document.getElementById(btn.getAttribute('aria-controls'));
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        acc.querySelectorAll('.accordion__q').forEach(function (other) {
          other.setAttribute('aria-expanded', 'false');
          var a = document.getElementById(other.getAttribute('aria-controls'));
          if (a) a.hidden = true;
        });
        if (!isOpen && answer) {
          btn.setAttribute('aria-expanded', 'true');
          answer.hidden = false;
        }
      });
    });
  });

  // Scroll reveals — content stays visible if JS fails or motion is reduced
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealed = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window && revealed.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealed.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible'); // above the fold: render instantly
      } else {
        io.observe(el);
      }
    });
  } else {
    revealed.forEach(function (el) {
      el.classList.add('visible');
    });
  }
});
