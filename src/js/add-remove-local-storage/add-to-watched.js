import * as utils from './add-remove-utilities.js';
import { Report } from 'notiflix/build/notiflix-report-aio';

export function addFilmToWatched(film) {
  try {
    if (
      utils.checkFilmForBeingObject(film) ||
      utils.checkFilmProperties(film)
    ) {
      return;
    }

    const arrayKey = 'watched';
    let watchedArray = utils.getFilmsFromLocalStorage(arrayKey);
    const { id } = film;

    if (utils.checkFilmForBeingInCollection(watchedArray, id)) {
      Report.info(
        'Info',
        'The film is already in your library.<br/><br/>',
        'Back'
        );
      return;
    }

    utils.addFilmToArray(watchedArray, film);
    utils.addFilmsToLocalStorage(watchedArray, arrayKey);
  } catch (error) {
    console.log('Error', error.message);
  }
}
