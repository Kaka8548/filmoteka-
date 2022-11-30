import axios from 'axios';
import { Pagination } from 'tui-pagination';
import { onTrending } from './onTrending';
import { onFindFilmTitle } from './onFindFilmTitle';

import { onCloseModal } from './modal-window';

import { fetchData, FIND_MOVIE } from './fetchData';
const FILMS_LIST = document.querySelector('.film-selection');

const renderFilm = async id => {
  const MODAL_WINDOW = document.querySelector('.modal-window');
  MODAL_WINDOW.innerHTML =
    '  <div class="detailed-info"><h1>LOADING...</h1></div>';
  MODAL_WINDOW.classList.remove('hidden');
  const filmData = await fetchData(FIND_MOVIE, { id });
  console.log(filmData.data);
  const { poster_path, overview, title, original_title } = filmData.data;
  let imgUrl;
  if (poster_path === null) {
    imgUrl = 'https://via.placeholder.com/700?text=NoImageFound';
  } else {
    imgUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;
  }

  MODAL_WINDOW.innerHTML = `
  <div class="detailed-info">
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
        <li><button class="detailed-info__button active">add to Watched</button></li>
        <li><button class="detailed-info__button">add to queue</button></li>
      </ul>

    </div>
  </div>

  `;
};

const openModalWindow = event => {
  if (event.target.className === 'film-selection') return;
  const film = event.target.closest('.film');
  const filmId = film.dataset.id;
  console.log(filmId);
  renderFilm(filmId);
};

FILMS_LIST.addEventListener('click', openModalWindow);
