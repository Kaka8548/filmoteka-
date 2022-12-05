import { onRenderGallery } from './onRenderGallery';
export const onRederLibrary = (storageEl, pageNum) => {
  const films = JSON.parse(localStorage.getItem(storageEl));
  if (films === null || films.length === 0) {
    const gallery = document.querySelector('.film-selection');
    gallery.innerHTML = '<h1>Library is ampty</h1>';
    return;
  }
  const pageSize = 20;
  const filmsPage = films.slice(
    pageNum * pageSize - pageSize,
    pageNum * pageSize
  );
  onRenderGallery(filmsPage);
};

export const libraryEventListeners = () => {
  const WATCHED = document.querySelector('.watched');
  const QUEUE = document.querySelector('.queue');
  const userID = JSON.parse(localStorage.getItem('user'))?.user_id;
  WATCHED.addEventListener('click', () => {
    onRederLibrary(`watched${userID}`, 1);
    WATCHED.classList.add('active');
    QUEUE.classList.remove('active');
  });

  QUEUE.addEventListener('click', () => {
    onRederLibrary(`queued${userID}`, 1);
    WATCHED.classList.remove('active');
    QUEUE.classList.add('active');
  });
};
