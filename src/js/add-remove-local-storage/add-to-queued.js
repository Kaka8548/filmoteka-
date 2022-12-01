import * as utils from './add-remove-utilities.js';

export function addFilmToQueued(film) {
  try {
    if (
      utils.checkFilmForBeingObject(film) ||
      utils.checkFilmProperties(film)
    ) {
      return;
    }

    const arrayKey = 'queued';
    let queuedArray = utils.getFilmsFromLocalStorage(arrayKey);
    const { id } = film;

    if (utils.checkFilmForBeingInCollection(queuedArray, id)) {
      return;
    }

    utils.addFilmToArray(queuedArray, film);
    utils.addFilmsToLocalStorage(queuedArray, arrayKey);
  } catch (error) {
    console.log('Error', error.message);
  }
}
