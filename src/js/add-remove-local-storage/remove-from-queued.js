import * as utils from './add-remove-utilities.js';

export function removeFilmFromQueued(film) {
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

    utils.removeFilmFromLocalStorage(queuedArray, id);
    utils.addFilmsToLocalStorage(queuedArray, arrayKey);
  } catch (error) {
    console.log('Error', error.message);
  }
}
