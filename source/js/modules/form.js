import {sendData} from './api';
import {onSuccessSubmit, onErrorSubmit} from './show-error-or-success';
import {form, submitButton} from './dom-nodes';

const SENDING_DATA_URL = 'https://echo.htmlacademy.ru/';

export const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю';
};

export const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const inputName = evt.target.querySelector('[type="text"]');
  const inputTel = evt.target.querySelector('[type="tel"]');

  if (inputName.checkValidity() && inputTel.checkValidity()) {

    blockSubmitButton();
    sendData(SENDING_DATA_URL, onSuccessSubmit, onErrorSubmit, formData);
    if (document.querySelector('[data-modal="feedback"]')) {
      const feedbackActive = document.querySelector('[data-modal="feedback"]');
      feedbackActive.classList.remove('is-active');
    }
  }
};

export const onFormReset = () => {
  form.reset();
};

export const interactWithForm = () => {

  let forms = document.querySelectorAll('.form');

  forms.forEach(function (item) {
    item.addEventListener('submit', onFormSubmit);
    item.addEventListener('reset', onFormReset);
  });
};

