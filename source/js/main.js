import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {onAccordionClick} from './modules/accordion';
import {onAboutButtonClick} from './modules/hidden-blocks';
import {interactWithForm} from './modules/form.js';
import {addClassForAccordion, addClassForButton, addClassForHiddenBlocks, addClassForHiddenInAboutBlocks} from './modules/add-classes';
import {showTelMask} from './modules/mask';
import {toggleModal} from './modules/dom-nodes';
import {setInput} from './modules/modals/modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  addClassForAccordion();
  addClassForButton();
  addClassForHiddenBlocks();
  addClassForHiddenInAboutBlocks();

  onAccordionClick();
  onAboutButtonClick();
  showTelMask();

  if (document.querySelector('.form')) {
    interactWithForm();
  }


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

    if (document.querySelector('[data-open-modal="feedback"]')) {
      toggleModal.addEventListener('click', () => {
        setInput();
      });
    }
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
