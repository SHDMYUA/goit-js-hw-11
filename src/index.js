import 'simplelightbox/dist/simple-lightbox.min.css';

import { markupHtml, galleryLightbox } from './js/templates';
import { getDataFromForm } from './js/service';
import { scrollDocument } from './js/scroll';
import { getRefs } from './js/refs';
//import { observer, handleIntersection } from './js/scroll';

const refs = getRefs();
refs.form.addEventListener('submit', getDataFromForm);

function makeCards(data) {
  const markup = markupHtml(data);
  createGallery(markup);
  galleryLightbox.refresh();
}

function createGallery(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export function updateInterface(response) {
  makeCards(response);
  scrollDocument();
}
