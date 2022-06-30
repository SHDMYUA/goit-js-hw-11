import { getRefs } from './refs';

// smooth page scrolling
const refs = getRefs();

function scrollDocument() {
  const firstImageInMarkup = refs.gallery.firstElementChild;

  if (firstImageInMarkup) {
    return;
  }

  const { height: cardHeight } = firstImageInMarkup.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

export { scrollDocument };