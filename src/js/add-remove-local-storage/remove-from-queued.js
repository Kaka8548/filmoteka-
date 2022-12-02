import * as utils from './add-remove-utilities.js';

export function removeFilmFromQueued(id) {
  try {
    const arrayKey = 'queued';
    let queuedArray = utils.getFilmsFromLocalStorage(arrayKey);

    utils.removeFilmFromLocalStorage(queuedArray, id);
    utils.addFilmsToLocalStorage(queuedArray, arrayKey);
  } catch (error) {
    console.log('Error', error.message);
  }
}
