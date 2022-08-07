// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";


const gallery = document.querySelector('.gallery');

const galleryElTemplate = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" data-caption="${description}" alt="${description}"/>
    </a>`;
};

const galleryMarkup = galeryItemsArr => {
  return galeryItemsArr.map(galleryElTemplate).join('');
};

const renderGallery = galleryArr => {
  gallery.innerHTML = galleryMarkup(galleryArr);
};

renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
  scrollZoom: false,
  showCaptions: true,
  captionType: 'data',
  captionsData: 'caption',
  captionPosition: 'bottom',
  captionDelay: 250,
});
