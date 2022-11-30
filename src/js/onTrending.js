import { onRenderGallery } from './onRenderGallery';
import { fetchData, TRENDING } from './fetchData';

export const onTrending = async page => {
  const res = await fetchData(TRENDING, { page: (page = 1) });

  onRenderGallery(res.data.results);
};

onTrending();
