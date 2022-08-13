const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    removePopupAndListeners();
  }
};

function removePopupAndListeners() {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);

  const activeModals = document.querySelectorAll('.is-active');
  activeModals.forEach((item) => {
    item.classList.remove('is-active');
  });

  if (document.querySelector('.scroll-lock')) {
    document.querySelector('.scroll-lock').style.padding = '0';
    document.querySelector('.scroll-lock').classList.remove('scroll-lock');
  }
}

function onDocumentClick() {
  removePopupAndListeners();
}

export const showPopup = (querySelector) => {

  const modal = document.querySelector(querySelector);
  modal.classList.add('is-active');

  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);

};
