// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
        </li>
        `
    ).join("");
}

new SimpleLightbox('.gallery a', {
    captionType:'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});