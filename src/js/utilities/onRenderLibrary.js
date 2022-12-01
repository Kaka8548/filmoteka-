import { onRenderGallery } from './onRenderGallery';
export const onRederLibrary = storageEl => {
  const films = JSON.parse(localStorage.getItem(storageEl));
  if (films === null) {
    const gallery = document.querySelector('.film-selection');
    gallery.innerHTML = '<h1>Library is ampty</h1>';
    return;
  }
  console.log('hello');
  onRenderGallery(films);
};

onRederLibrary('watched');

const WATCHED = document.querySelector('.watched');
const QUEUE = document.querySelector('.queue');

WATCHED.addEventListener('click', () => {
  onRederLibrary('watched');
});

QUEUE.addEventListener('click', () => {
  onRederLibrary('queued');
});
