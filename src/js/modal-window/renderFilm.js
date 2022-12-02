import { loading } from '../constants/loading';
import { fetchData, FIND_MOVIE } from '../utilities/fetchData';
import sprite from '../../images/sprite.svg';
import { addFilmToQueued } from '../add-remove-local-storage/add-to-queued';
import { addFilmToWatched } from '../add-remove-local-storage/add-to-watched';
import { removeFilmFromWatched } from '../add-remove-local-storage/remove-from-watched';
import { removeFilmFromQueued } from '../add-remove-local-storage/remove-from-queued';

import { onRederLibrary } from '../utilities/onRenderLibrary';
export const renderFilm = async id => {
  const MODAL_WINDOW = document.querySelector('.modal-window');
  MODAL_WINDOW.innerHTML = `${loading}`;
  MODAL_WINDOW.classList.remove('hidden');
  const filmData = await fetchData(FIND_MOVIE, { id });
  const {
    poster_path,
    overview,
    title,
    original_title,
    release_date,
    genres,
    popularity,
    vote_average,
    vote_count,
  } = filmData.data;

  let imgUrl;
  if (poster_path === null) {
    imgUrl = 'https://via.placeholder.com/700?text=NoImageFound';
  } else {
    imgUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;
  }

  const genreNames = genres.map(genre => genre.name);

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
            <span class="description-el__rating description-el__rating--orrange">${vote_average}</span>
            <span class="description-el__slash">/</span>
            <span class="description-el__rating description-el__rating--white">${vote_count}</span>
          </td>
        </tr>
        <tr class="descript-el">
          <th class="description-el__caption">
            Popularity
          </th>
          <td class="description-el__value">${popularity}</td>
        </tr>
        <tr class="descript-el">
          <th class="description-el__caption"> Original Title</th>
          <td class="description-el__value">${original_title}</td>
        </tr>
        <tr class="descript-el">
          <th class="description-el__caption">
            Genre
          </th>
          <td class="description-el__value">${genreNames.join(', ')}</td>
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
        <li><button class="detailed-info__button  watched_btn">add to Watched</button></li>
        <li><button class="detailed-info__button queue_btn">add to queue</button></li>
      </ul>

    </div>
  </div>

  `;

  const genre_ids = genres.map(genre => genre.id);
  const libraryActions = () => {
    const filmProps = {
      poster_path,
      title,
      release_date,
      id,
      genre_ids,
      hello: 'dfsdf',
    };
    const QUEOUE = MODAL_WINDOW.querySelector('.queue_btn');
    const WATCHED = MODAL_WINDOW.querySelector('.watched_btn');

    const isFilmInWatched = (
      JSON.parse(localStorage.getItem('watched')) || []
    ).some(film => film.id === id);
    const isFilmInQueued = (
      JSON.parse(localStorage.getItem('queued')) || []
    ).some(film => film.id === id);

    console.log(isFilmInWatched, isFilmInQueued);

    if (isFilmInWatched) {
      WATCHED.textContent = WATCHED.textContent.replace(
        'add to',
        'remove from'
      );
      WATCHED.classList.remove('active');
    }

    if (!isFilmInWatched) {
      WATCHED.textContent = WATCHED.textContent.replace(
        'remove from',
        'add to'
      );
      WATCHED.classList.add('active');
    }

    if (isFilmInQueued) {
      QUEOUE.textContent = QUEOUE.textContent.replace('add to', 'remove from');
      QUEOUE.classList.remove('active');
    }

    if (!isFilmInQueued) {
      QUEOUE.textContent = QUEOUE.textContent.replace('remove from', 'add to');
      QUEOUE.classList.add('active');
    }

    WATCHED.addEventListener('click', () => {
      const isFilmInWatched = (
        JSON.parse(localStorage.getItem('watched')) || []
      ).some(film => film.id === id);
      if (isFilmInWatched) {
        console.log('hello');
        WATCHED.textContent = WATCHED.textContent.replace(
          'remove from',
          'add to'
        );
        WATCHED.classList.add('active');
        removeFilmFromWatched(id);
      }

      if (!isFilmInWatched) {
        console.log('hello2');
        WATCHED.textContent = WATCHED.textContent.replace(
          'add to',
          'remove from'
        );
        WATCHED.classList.remove('active');
        addFilmToWatched(filmProps);
      }
      if (document.querySelector('.watched')?.classList.contains('active')) {
        onRederLibrary('watched', 1);
      }
    });

    QUEOUE.addEventListener('click', () => {
      const isFilmInQueued = (
        JSON.parse(localStorage.getItem('queued')) || []
      ).some(film => film.id === id);
      if (isFilmInQueued) {
        console.log('hello');
        QUEOUE.textContent = QUEOUE.textContent.replace(
          'remove from',
          'add to'
        );
        QUEOUE.classList.add('active');
        removeFilmFromQueued(id);
      }

      if (!isFilmInQueued) {
        console.log('hello2');
        QUEOUE.textContent = QUEOUE.textContent.replace(
          'add to',
          'remove from'
        );
        QUEOUE.classList.remove('active');
        addFilmToQueued(filmProps);
      }
      if (document.querySelector('.queue')?.classList.contains('active')) {
        onRederLibrary('queued', 1);
      }
    });
  };
  libraryActions();
};
