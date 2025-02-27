
const thumbnails = document.querySelectorAll('.thumbnail')
const lightbox = document.getElementById('lightbox')
const lightboxImage = document.getElementById('lightbox-image')
const close = document.getElementById('close')

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function (){
        lightbox.style.display = 'flex';
        lightboxImage.src = thumbnail.src
    })
})
close.addEventListener('click', function (){
    lightbox.style.display = 'none'
})