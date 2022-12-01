import { onRenderGallery } from './onRenderGallery';
export const onRederQueue = () => {
  const films = localStorage.getItem('queued');
  console.log('hello');
  onRenderGallery(films);
};

onRederQueue();
