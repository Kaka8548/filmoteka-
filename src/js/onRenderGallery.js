export const onRenderGallery = (films) => {
    const gallery = document.querySelector('.film-selection');
    let imgUrl = '';
    gallery.innerHTML = '';
    const markup = films
    .map(film => {
        const {poster_path, title, release_date} = film;
        if (poster_path === null) {
            imgUrl = "https://via.placeholder.com/700?text=NoImageFound"
        } else {
            imgUrl = "https://image.tmdb.org/t/p/w500" + poster_path;
        }
        
     return `
     <article class="film">
        <img class="film__poster" src=${imgUrl} alt="" />
        <h2 class="film__title">${title}</h2>
        <p class="film__info">Drama, Action | ${release_date}</p>
     </article>
     `
        
        })
    .join("")
    gallery.insertAdjacentHTML('beforeend', markup)
}