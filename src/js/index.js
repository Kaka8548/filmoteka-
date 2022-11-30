import axios from 'axios';
import { Pagination } from 'tui-pagination';
import { onFindFilmTitle } from './onFindFilmTitle';

import { onCloseModal } from './modal-window';

import { fetchData, FIND_MOVIE } from './fetchData';
const FILMS_LIST = document.querySelector('.film-selection');

const renderFilm = async id => {
  const MODAL_WINDOW = document.querySelector('.modal-window');
  const PICTURE = MODAL_WINDOW.querySelector('.detailed-info__image');
  const TITLE = MODAL_WINDOW.querySelector('.detailed-info__caption');
  const ABOUT = MODAL_WINDOW.querySelector('.about__text');

  console.log(PICTURE);
  const filmData = await fetchData(FIND_MOVIE, { id });
  console.log(filmData.data);
  const { poster_path, overview, original_title } = filmData.data;

  const imgUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;

  PICTURE.src = imgUrl;
  TITLE.textContent = original_title;
  ABOUT.textContent = overview;

  MODAL_WINDOW.classList.remove('hidden');
};

const openModalWindow = event => {
  if (event.target.className === 'film-selection') return;
  const film = event.target.closest('.film');
  const filmId = film.dataset.id;
  console.log(filmId);
  renderFilm(filmId);
};

FILMS_LIST.addEventListener('click', openModalWindow);
