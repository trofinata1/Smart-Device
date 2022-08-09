import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {onAccordionClick} from './modules/accordion.js';
import {onAboutButtonClick} from './modules/hidden-blocks.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  if (window.innerWidth < 768 && document.querySelector('.accordion-trigger')) {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    const contents = document.querySelectorAll('.accordion-trigger__content');

    accordionTriggers.forEach((trigger) => {
      trigger.classList.add('accordion-trigger--with-js');
    });
    contents.forEach((content) => {
      content.classList.add('accordion-trigger__content--with-js');
    });

    onAccordionClick();
  }

  if (document.querySelector('.about__button')) {
    const aboutButton = document.querySelector('.about__button');

    aboutButton.classList.add('btn--with-js');
  }

  if (document.querySelector('.hidden')) {
    const hiddenBlocks = document.querySelectorAll('.hidden');

    hiddenBlocks.forEach((hiddenBlock) => {
      hiddenBlock.classList.add('hidden--with-js');
    });
  }

  if (window.innerWidth < 768 && document.querySelector('#hidden-about-block')) {
    const hiddenAboutBlock = document.querySelector('#hidden-about-block');

    hiddenAboutBlock.classList.add('hidden--with-js');
    hiddenAboutBlock.classList.add('hidden');
    hiddenAboutBlock.classList.remove('hidemobile');
  }

  onAboutButtonClick();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
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
