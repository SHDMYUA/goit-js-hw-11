

const userInput = document.querySelector('.search-form');
userInput.addEventListener('submit', onSearch);

// const API_KEY = "28024348-9ac2310d97b674b7de52a4e68";
// const MAIN_URL = "https://pixabay.com/api/";
// const typeOfsearch = "image_type=photo";
// const orientationType = "orientation=horizontal";
// const adultContent = "safesearch=true";

//MAIN_URL+"?key="+API_KEY+"&q="+encodeURIComponent('refs.usererInput')+"&"+typeOfsearch+"&"+orientationType+"&"+adultContent;

function onSearch(event){
  event.preventDefault();
  const { searchQuery } = event.currentTarget;
  const textInput = searchQuery.value;
  const API_KEY = "28024348-9ac2310d97b674b7de52a4e68";
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${textInput}&image_type=photo`;
  fetch(URL)
  .then(r => r.json())
  .then(console.log)
}