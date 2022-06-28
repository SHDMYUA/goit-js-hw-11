import { refs } from "./refs";

const API_KEY = "28024348-9ac2310d97b674b7de52a4e68";

//GET response
const MAIN_URL = "https://pixabay.com/api/";
const typeOfsearch = "image_type=photo";
const orientationType = "orientation=horizontal";
const adultContent = "safesearch=true";
const fetchURL = MAIN_URL+"?key="+API_KEY+"&q="+encodeURIComponent('refs.usererInput')+"&"+typeOfsearch+"&"+orientationType+"&"+adultContent;

