function filterImages() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        var title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = 'block';  // Show the item
        } else {
            item.style.display = 'none';   // Hide the item
        }
    });
}