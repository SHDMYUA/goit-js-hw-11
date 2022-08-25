import { getRefs } from './refs';
import { loadImages } from './service';

// smooth page scrolling
const refs = getRefs();

export function scrollDocument() {
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

// infinity scroll
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(handleIntersection, options);
export const target = refs.spinners;

export function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImages();
    }
  });
}
// end infinity scroll