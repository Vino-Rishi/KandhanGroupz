document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.image-thumbnail');
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function(event) {
        event.preventDefault();
        var newSrc = this.getAttribute('data-src');
        var newTitle = this.getAttribute('data-title');
        var mainImage = document.getElementById('main-image');
        mainImage.setAttribute('src', newSrc);
        var mainImageLink = mainImage.closest('a');
        mainImageLink.setAttribute('href', newSrc);
        var mainTitle = document.getElementById('main-title');
        mainTitle.textContent = newTitle;
      });
    });
  });