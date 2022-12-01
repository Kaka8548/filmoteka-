import { loading } from '../constants/loading';
import { fetchData, FIND_MOVIE } from '../utilities/fetchData';
import sprite from '../../images/sprite.svg';
import { addFilmToQueued } from '../add-remove-local-storage/add-to-queued';
import { addFilmToWatched } from '../add-remove-local-storage/add-to-watched';

export const renderFilm = async id => {
  const MODAL_WINDOW = document.querySelector('.modal-window');
  MODAL_WINDOW.innerHTML = `${loading}`;
  MODAL_WINDOW.classList.remove('hidden');
  const filmData = await fetchData(FIND_MOVIE, { id });
  const { poster_path, overview, title, original_title, release_date, genres } =
    filmData.data;
  let imgUrl;
  console.log(filmData.data);
  if (poster_path === null) {
    imgUrl = 'https://via.placeholder.com/700?text=NoImageFound';
  } else {
    imgUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;
  }

  MODAL_WINDOW.innerHTML = `
  <div class="detailed-info">
  <svg class="modal-close__btn" data-close>
    <use href=${sprite + '#icon-cross'}></use>
  </svg>
    <img class="detailed-info__image" src=${imgUrl} alt=${title}>
    <div class="description-wrapper">
      <div class="detailed-info__caption">${title}</div>
      <table class="descript-table">
        <tr class="descript-el">
          <th class="description-el__caption">
            Vote / Votes
          </th>
          <td class="description-el__value">
            <span class="description-el__rating description-el__rating--orrange">7.3</span>
            <span class="description-el__slash">/</span>
            <span class="description-el__rating description-el__rating--white">1260</span>
          </td>
        </tr>
        <tr class="descript-el">
          <th class="description-el__caption">
            Popularity
          </th>
          <td class="description-el__value">100.2</td>
        </tr>
        <tr class="descript-el">
          <th class="description-el__caption"> Original Title</th>
          <td class="description-el__value">A FISTFUL OF LEAD</td>
        </tr>
        <tr class="descript-el">
          <th class="description-el__caption">
            Genre
          </th>
          <td class="description-el__value">Western</td>
        </tr>
      </table>

      <article class="about">
        <h4 class="about__caption">ABOUT</h4>
        <p class="about__text">Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the
          most corrupt
          settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with
          bags
          of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves
          were
          planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of
          gold are filled with lead... they’ve been double crossed – but by who and how?</p>
      </article>

      <ul class="detailed-info__button-list">
        <li><button class="detailed-info__button active watched">add to Watched</button></li>
        <li><button class="detailed-info__button queue">add to queue</button></li>
      </ul>

    </div>
  </div>

  `;

  const genre_ids = genres.map(genre => genre.id);

  console.log(genre_ids);

  const filmProps = {
    poster_path,
    title,
    release_date,
    id,
    genre_ids,
    hello: 'dfsdf',
  };
  const QUEOUE = MODAL_WINDOW.querySelector('.queue');
  const WATCHED = MODAL_WINDOW.querySelector('.queue');

  QUEOUE.addEventListener('click', () => {
    addFilmToQueued(filmProps);
  });
};

console.log(localStorage.getItem('queued'));
