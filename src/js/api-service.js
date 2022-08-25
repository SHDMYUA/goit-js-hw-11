import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/'; //axios libery
const API_KEY = '28024348-9ac2310d97b674b7de52a4e68';
const perPage = 20; //for pagination

function fetchImages(value, page) {
  const searchParams = new URLSearchParams({
    
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: value,
    per_page: perPage,
    page,
  });

  return axios.get(`?&${searchParams}`);
}

export { fetchImages, perPage };
// add catch