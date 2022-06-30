import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRefs } from './refs';
import { fetchImages, perPage } from './api-service';
import { updateInterface } from '../index';

const refs = getRefs();
let value = '';
let page = 0;

// infinity scroll
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(handleIntersection, options);
const target = refs.spinners;

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImages();
    }
  });
}
// end infinity scroll

async function getDataFromForm(evt) {
  evt.preventDefault();
  observer.unobserve(target);
  refs.gallery.innerHTML = '';
  value = evt.currentTarget.elements.searchQuery.value.trim();
  document.getElementById('search-form').reset();

  if (!value) {
    Notify.failure(`There is nothing to search!`);
    return;
  }

  page = 1;
  try {
    const dataRes = await fetchImages(value, page);
    onFormSubmit(dataRes);
    updateInterface(dataRes);
    observer.observe(target);
  } catch (error) {
    Notify.failure(`Sorry, there are no images matching your search query. Please try again`);
    }
}

function onFormSubmit(response) {
  refs.gallery.innerHTML = '';
  const countOfImages = response.data.hits.length;
  
  if (countOfImages === 0) {
    refs.spinners.classList.add('d-none');
    refs.form.reset();

    return;
  }

  if (response.data.totalHits <= countOfImages) {
    refs.spinners.classList.add('d-none');
  } else {
    refs.spinners.classList.remove('d-none');
  }

  Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
}

async function loadImages() {
  page += 1;

  try {
    const dataRes = await fetchImages(value, page);

    if (!morePages(dataRes)) {
      endMessage();
      Notify.warning(`We're sorry, but you've reached the end of search results`);
      refs.spinners.classList.add('d-none');
    }

    updateInterface(dataRes);
  } catch (error) {
    Notify.failure(`Sorry, there are no images matching your search query. Please try again`);
  }
}

function morePages(response) {
  const currentPage = page;
  const totalPages = Math.floor(response.data.totalHits / perPage);

  return currentPage === totalPages ? false : true;
}

export { getDataFromForm, loadImages };
