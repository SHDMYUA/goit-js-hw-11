// Build list of countries in html
export function markupGallery(country) {
  const layoutCountryList = country
    .map(({ name, flags }) => {
      const layout = `
      <div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b>"${likes}"
        </p>
        <p class="info-item">
          <b>Views</b>"${views}"
        </p>
        <p class="info-item">
          <b>Comments</b>"${comments}"
        </p>
        <p class="info-item">
          <b>Downloads</b>"${downloads}"
        </p>
      </div>
    </div>`;
      return layout;
    })
    .join('');
  return layoutCountryList;
}





// Clear gallary
export const clearGalery = () => {
  refs.itemsList.innerHtml = "";
  
};
