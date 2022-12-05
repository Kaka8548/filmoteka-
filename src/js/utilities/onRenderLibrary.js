import { onRenderGallery } from './onRenderGallery';
import PaginationLib from './paginationLib';

let totalPages;
let page;

export const onRederLibrary = (storageEl, pageNum) => {
  const films = JSON.parse(localStorage.getItem(storageEl));
  page = pageNum;
  totalPages = films.length;
  if (films === null || films.length === 0) {
    const gallery = document.querySelector('.film-selection');
    gallery.innerHTML = '<h1>Library is empty</h1>';
    return;
  }
  const pageSize = 20;
  const filmsPage = films.slice(
    pageNum * pageSize - pageSize,
    pageNum * pageSize
  );
  onRenderGallery(filmsPage);
  PaginationLib(pageNum, totalPages, storageEl);
};

export const libraryEventListeners = () => {
  const WATCHED = document.querySelector('.watched');
  const QUEUE = document.querySelector('.queue');

  WATCHED.addEventListener('click', () => {
    onRederLibrary('watched', 1);
    console.log(totalPages);
    PaginationLib(page, totalPages, 'watched');
    WATCHED.classList.add('active');
    QUEUE.classList.remove('active');
  });

  QUEUE.addEventListener('click', () => {
    onRederLibrary('queued', 1);
    PaginationLib(page, totalPages, 'queued');
    WATCHED.classList.remove('active');
    QUEUE.classList.add('active');
  });
};
