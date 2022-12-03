import { onCloseModal } from './onCloseModal';

export const footerModalOpen = () => {
  const studentsLinkEl = document.querySelector('#students-list');
  const footerModal = document.querySelector('.footer-modal__wrapper');
  const closeBtnEl = document.querySelector('#footer-modal-close-btn');
  console.log(studentsLinkEl);

  function onStudentsElClick(event) {
    event.preventDefault();
    footerModal.classList.remove('hidden');
  }

  function onCloseBtnClick(event) {
    event.preventDefault();
    footerModal.classList.add('hidden');
  }

  studentsLinkEl.addEventListener('click', onStudentsElClick);
  closeBtnEl.addEventListener('click', onCloseBtnClick);
};

footerModalOpen();
