//GET response
const countriesBase = 'https://restcountries.com/v3.1/name/';
const countriesInfoFields = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${countriesBase}${name}?${countriesInfoFields}`)
  .then(response =>{
    if(!response.ok){
      throw new Error('Oops, there is no country with that name');
      
    }
    return response.json();
  })

  .catch(error => console.log(error));
};
