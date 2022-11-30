import * as utils from './add-remove-utilities.js';

function addFilmToWatched(film) {
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
      return;
    }

    utils.addFilmToArray(watchedArray, film);
    utils.addFilmsToLocalStorage(watchedArray, arrayKey);
  } catch (error) {
    console.log('Error', error.message);
  }
}
