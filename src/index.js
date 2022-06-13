import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { markupCountryList, markupCountryInfo } from './js/adjacentHTML'

const refs = {
countryInput: document.querySelector('#search-box'),
countryList: document.querySelector('.country-list'),
countryInfo: document.querySelector('.country-info'),
}

const DEBOUNCE_DELAY = 300;
refs.countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

function onCountryInput() {
  
  const name = refs.countryInput.value.trim(); //input without spaces
  if (name === '') { //if input clear - nothing to build
    return (refs.countryList.innerHTML = ''), (refs.countryInfo.innerHTML = '');
  }

  fetchCountries(name) //our main function
    .then(country => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';

      // below conditions for building html
      if (country.length === 1) { //if one country
        refs.countryInfo.insertAdjacentHTML('beforeend', markupCountryInfo(country));
      } else if (country.length >= 10) { //if more then one country
        ifTooManyMatchesAlert();
      } else {
        refs.countryList.insertAdjacentHTML('beforeend', markupCountryList(country));
      }
    })

    .catch(ifWrongNameAlert);
}

//ERROR SECTION

// ERROR in Input / wrong country
function ifWrongNameAlert() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

// Error for more coincidence
function ifTooManyMatchesAlert() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}

