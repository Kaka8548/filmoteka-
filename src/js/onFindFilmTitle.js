import { onRenderGallery } from './onRenderGallery';
import { fetchData, SEARCH_MOVIES } from './fetchData';
import { loading } from './loading';

export const onFindFilmTitle = () => {
  const form = document.querySelector('.header__form');
  let query;
  const errorField = document.querySelector('.header-error__text');

  form.addEventListener('submit', onSubmit);

  async function onSubmit(e) {
    e.preventDefault();
    const gallery = document.querySelector('.film-selection');
    gallery.innerHTML = loading;
    errorField.textContent = '';

    const { searchQuery } = e.currentTarget;
    if (query === searchQuery.value) {
      return;
    }
    query = searchQuery.value;

    const res = await fetchData(SEARCH_MOVIES, { page: 1, query });

    if (res.data.results.length === 0) {
      errorField.textContent =
        'There is no films with such name. Please, try again.';
      return;
    }
    onRenderGallery(res.data.results);
  }
};

onFindFilmTitle();
