export function getRefs() {
  return {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    // loadMoreBtn: document.querySelector('.load-more'), 
    spinners: document.querySelector('.spinners_wrap'), //add loadind spiners 
  };
}
