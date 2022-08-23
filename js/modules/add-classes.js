import {triggers, contents, aboutButton, hiddenBlocks, hiddenInAboutBlock} from './dom-nodes';
import {mobile} from './window-width';

export const addClassForAccordion = () => {

  triggers.forEach((trigger) => {
    trigger.classList.add('with-js');
  });
  contents.forEach((content) => {
    content.classList.add('with-js');
  });
};

export const removeClassForAccordion = () => {

  triggers.forEach((trigger) => {
    trigger.classList.remove('with-js');
  });
  contents.forEach((content) => {
    content.classList.remove('with-js');
  });
};

export const addClassForButton = () => {
  if (document.querySelector('.about__button')) {
    aboutButton.classList.add('btn', 'with-js');
    aboutButton.style.display = 'inline-flex';
  }
};

export const addClassForHiddenBlocks = () => {
  if (document.querySelector('.is-hidden')) {

    hiddenBlocks.forEach((hiddenBlock) => {
      hiddenBlock.classList.add('is-hidden', 'with-js');
    });
  }
};

export const addClassForHiddenInAboutBlocks = () => {
  hiddenInAboutBlock.classList.add('is-hidden', 'with-js');
  hiddenInAboutBlock.classList.add('hidemobile');
};

export const mobileChecker = () => {
  if (mobile.matches && hiddenInAboutBlock) {
    addClassForHiddenInAboutBlocks();
  }
};
