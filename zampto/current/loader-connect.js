document.getElementById('redirect-link').addEventListener('click', function(event) {
    event.preventDefault();

    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    setTimeout(function() {
      window.location.href = event.target.href;
    }, 1000);
  });