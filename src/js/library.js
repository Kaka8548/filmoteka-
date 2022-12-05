import { onRederLibrary } from './utilities/onRenderLibrary';
import { openModalWindow } from './modal-window';
import { libraryEventListeners } from './utilities/onRenderLibrary';
import './utilities/paginationLib';

onRederLibrary('watched', 1);
libraryEventListeners();
