import sprite from '../../images/sprite.svg';
import { loading } from '../constants/loading';


export const onRenderVideo = (key = '') => {
    const MODAL_WINDOW = document.querySelector('.modal-window');
    
if (!key) {
    MODAL_WINDOW.innerHTML = `
    <div class="video-modal">
        <svg class="modal-close__btn" data-close>
        <use href=${sprite + '#icon-cross'}></use>
        </svg>
        <div class="video-modal__wrapper">
            <img class="video-default__img" src='https://via.placeholder.com/700?text=NoVideoFound' width="640" height="360" />
            <button class="detailed-info__button video-back__btn">Back to Info</button>
        </div>
    </div>
    `
} else {
    MODAL_WINDOW.innerHTML = `
    <div class="video-modal">
        <svg class="modal-close__btn" data-close>
        <use href=${sprite + '#icon-cross'}></use>
        </svg>
        <div class="video-modal__wrapper">
            <iframe class="video-trailer__window" src="https://www.youtube.com/embed/${key}" frameborder="0" allowfullscreen></iframe>
            <button class="detailed-info__button video-back__btn">Back to Info</button>
        </div>
    </div>
    `
}
    
}

onRenderVideo();