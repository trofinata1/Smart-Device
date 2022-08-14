import {showPopup} from './popup';
import {unblockSubmitButton, onFormReset} from './form';

export const onSuccessSubmit = () => {
  showPopup('[data-modal="success"]');
  unblockSubmitButton();
  onFormReset();
};

export const onErrorSubmit = () => {
  showPopup('[data-modal="error"]');
  unblockSubmitButton();
};
