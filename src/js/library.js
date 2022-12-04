import { onRederLibrary } from './utilities/onRenderLibrary';
import { openModalWindow } from './modal-window';
import { libraryEventListeners } from './utilities/onRenderLibrary';
import './firebase';
import { loadUserData } from './utilities/loadUserData';

onRederLibrary('watched', 1);
libraryEventListeners();
