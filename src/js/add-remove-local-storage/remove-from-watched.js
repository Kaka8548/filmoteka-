import * as utils from "./add-remove-utilities.js";

function removeFilmFromWatched(film) {
  try {
    if (
      utils.checkFilmForBeingObject(film) ||
      utils.checkFilmProperties(film)
    ) {
      return;
    }

    const arrayKey = "watched";
    let watchedArray = utils.getFilmsFromLocalStorage(arrayKey);
    const { id } = film;

    utils.removeFilmFromLocalStorage(watchedArray, id);
    utils.addFilmsToLocalStorage(watchedArray, arrayKey);
  } catch (error) {
    console.log("Error", error.message);
  }
}
