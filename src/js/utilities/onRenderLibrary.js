import { onRenderGallery } from './onRenderGallery';
export const onRederLibrary = storageEl => {
  const films = JSON.parse(localStorage.getItem(storageEl));
  if (films === null) {
    const gallery = document.querySelector('.film-selection');
    gallery.innerHTML = '<h1>Library is ampty</h1>';
    return;
  }
  onRenderGallery(films);
};

onRederLibrary('watched');

const WATCHED = document.querySelector('.watched');
const QUEUE = document.querySelector('.queue');

WATCHED.addEventListener('click', () => {
  onRederLibrary('watched');
  WATCHED.classList.add('active');
  QUEUE.classList.remove('active');
});

QUEUE.addEventListener('click', () => {
  onRederLibrary('queued');
  WATCHED.classList.remove('active');
  QUEUE.classList.add('active');
});
