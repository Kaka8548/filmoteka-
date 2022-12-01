import * as utils from './add-remove-utilities.js';

export function removeFilmFromWatched(id) {
  try {
    const arrayKey = 'watched';
    let watchedArray = utils.getFilmsFromLocalStorage(arrayKey);

    utils.removeFilmFromLocalStorage(watchedArray, id);
  } catch (error) {
    console.log('Error', error.message);
  }
}
