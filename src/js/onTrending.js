import { onRenderGallery } from './onRenderGallery';
import { fetchData, TRENDING } from './fetchData';
import { loading } from './constants/loading';

export const onTrending = async page => {
  const gallery = document.querySelector('.film-selection');
  gallery.innerHTML = loading;
  const res = await fetchData(TRENDING, { page: (page = 1) });

  onRenderGallery(res.data.results);
};

onTrending();
