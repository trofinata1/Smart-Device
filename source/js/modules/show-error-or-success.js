import {showPopup} from './popup.js';
import {unblockSubmitButton, onFormReset} from './form.js';

export const onSuccessSubmit = () => {
  showPopup('[data-modal="success"]');
  unblockSubmitButton();
  onFormReset();
};

export const onErrorSubmit = () => {
  showPopup('[data-modal="error"]');
  unblockSubmitButton();
};
