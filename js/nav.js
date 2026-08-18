(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  var toggle = nav.querySelector('.nav-toggle');
  var list = document.getElementById('menu-links');
  var mq = window.matchMedia('(min-width: 768px)');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (list) list.setAttribute('aria-hidden', mq.matches ? 'false' : open ? 'false' : 'true');
    document.body.classList.toggle('nav-open', open && !mq.matches);
  }

  function syncForViewport() {
    if (mq.matches) {
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      if (list) list.setAttribute('aria-hidden', 'false');
    } else if (!nav.classList.contains('is-open') && list) {
      list.setAttribute('aria-hidden', 'true');
    }
  }

  if (toggle && list) {
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
  }

  if (list) {
    list.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        setOpen(false);
      });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', syncForViewport);
  } else if (typeof mq.addListener === 'function') {
    mq.addListener(syncForViewport);
  }
  syncForViewport();
})();
