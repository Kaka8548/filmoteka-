import { onRenderGallery } from './onRenderGallery';
export const onRederLibrary = storageEl => {
  const films = JSON.parse(localStorage.getItem(storageEl));
  console.log('hello');
  onRenderGallery(films);
};

onRederLibrary('queued');

const WATCHED = 

