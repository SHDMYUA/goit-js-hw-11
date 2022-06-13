import {Notify} from 'notiflix';

export const messageOk = (data) => {
  Notify.success('Hooray! We found totalHits images.');
};

export const messageError = (data) => {
  Notify.success('Sorry, there are no images matching your search query. Please try again.');
};

export const messageEmpty = (data) => {
  Notify.success("There's nothing to search.");
};

export const messageEnd = (data) => {
  Notify.success("We're sorry, but you've reached the end of search results.");
};