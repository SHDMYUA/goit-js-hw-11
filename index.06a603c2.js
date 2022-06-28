document.querySelector(".search-form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.searchQuery.value,n="https://pixabay.com/api/?key=".concat("28024348-9ac2310d97b674b7de52a4e68","&q=").concat(t,"&image_type=photo");fetch(n).then((function(e){return e.json()})).then(console.log)}));
//# sourceMappingURL=index.06a603c2.js.map
