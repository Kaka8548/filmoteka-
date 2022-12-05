import { onRederLibrary } from './utilities/onRenderLibrary';
import { openModalWindow } from './modal-window';
import { libraryEventListeners } from './utilities/onRenderLibrary';
import './firebase';
import { loadUserData } from './utilities/loadUserData';

const userID = JSON.parse(localStorage.getItem('user'))?.user_id;
onRederLibrary(`watched${userID}`, 1);
libraryEventListeners();
