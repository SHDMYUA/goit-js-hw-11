// Build list of countries in html
export function markupCountryList(country) {
  const layoutCountryList = country
    .map(({ name, flags }) => {
      const layout = `
          <li class="country-list__item">
              <img class="country-list__item--flag" src="${flags.svg}" width="200" height="100" alt="Flag of ${name.official}">
              <h2 class="country-list__item--name">${name.official}</h2>
          </li>
          `;
      return layout;
    })
    .join('');
  return layoutCountryList;
}

// Build information about one country in html
export function markupCountryInfo(country) {
  const layoutCountryInfo = country
    .map(({ name, flags, capital, population, languages }) => {
      const layout = `
        <ul class="country-info__list">
            <li class="country-info__item">
              <img class="country-info__item--flag" src="${flags.svg}" width="200" height="100" alt="Flag of ${
        name.official
      }">
              <h2 class="country-info__item--name">${name.official}</h2>
            </li>
            <li class="country-info__item"><span class="country-info__item--categories">Capital: </span>${capital}</li>
            <li class="country-info__item"><span class="country-info__item--categories">Population: </span>${population}</li>
            <li class="country-info__item"><span class="country-info__item--categories">Languages: </span>${Object.values(
              languages,
            ).join(', ')}</li>
        </ul>
        `;
      return layout;
    })
    .join('');
  return layoutCountryInfo;
}