import { getRefs } from './refs';
import { loadImages } from './service';

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

// infinity scroll

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(handleIntersection, options);

const target = refs.spinners;

observer.observe(target);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImages();
    }
  });
}

export { observer, handleIntersection };