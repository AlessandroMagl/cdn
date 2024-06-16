function redirectTo(url) {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    setTimeout(function() {
      window.location.href = url;
    }, 1000);
  }

  document.addEventListener('click', function(event) {
    var target = event.target;

    var url = target.href || target.getAttribute('data-href');

    if (url) {
      event.preventDefault();

      redirectTo(url);
    }
  });
