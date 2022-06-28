document.querySelector(".search-form").addEventListener("submit",(function(e){e.preventDefault();const{searchQuery:t}=e.currentTarget,a=t.value;fetch(`https://pixabay.com/api/?key=28024348-9ac2310d97b674b7de52a4e68&q=${a}&image_type=photo`).then((e=>e.json())).then(console.log)}));
//# sourceMappingURL=index.aadd6d15.js.map
