import * as utils from './add-remove-utilities.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function removeFilmFromQueued(id) {
  try {
    const arrayKey = 'queued';
    let queuedArray = utils.getFilmsFromLocalStorage(arrayKey);

    utils.removeFilmFromLocalStorage(queuedArray, id);
    utils.addFilmsToLocalStorage(queuedArray, arrayKey);

    Notify.success('Removed from QUEUED!');
  } catch (error) {
    console.log('Error', error.message);
  }
}
