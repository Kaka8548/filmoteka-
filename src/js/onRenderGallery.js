import {fetchData,FIND_GENRE} from './fetchData';

export const onRenderGallery = async (films) => {
    const gallery = document.querySelector('.film-selection');
    let imgUrl = '';
    gallery.innerHTML = '';

    const res = await fetchData(FIND_GENRE)

        films.forEach(item => {
            item.genreNames = item.genre_ids.map(
                (id) => res.data.genres.find(({id : filmId}) => id === filmId).name
            )
        })

    const markup = films
    .map(({poster_path, title, release_date = '', genreNames}) => {
        
        if (poster_path === null) {
            imgUrl = "https://via.placeholder.com/700?text=NoImageFound"
        } else {
            imgUrl = "https://image.tmdb.org/t/p/w500" + poster_path;
        }
        
     return `
     <article class="film">
        <img class="film__poster" src=${imgUrl} alt="" />
        <h2 class="film__title">${title}</h2>
        <p class="film__info"> ${genreNames.length > 2
            ? genreNames[0] + ", " + genreNames[1] + ", " + genreNames[2]
            : genreNames.join(", ")}
             | ${release_date.split('-')[0]}</p>
     </article>
     `
    })
    .join("")
    gallery.insertAdjacentHTML('beforeend', markup)
}
