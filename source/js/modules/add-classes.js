import {triggers, contents, aboutButton, hiddenBlocks, hiddenInAboutBlock} from './dom-nodes';

export const addClassForAccordion = () => {
  if (window.innerWidth < 768 && document.querySelector('.accordion-trigger')) {

    triggers.forEach((trigger) => {
      trigger.classList.add('with-js');
    });
    contents.forEach((content) => {
      content.classList.add('with-js');
    });
  }
};

export const addClassForButton = () => {
  if (document.querySelector('.about__button')) {
    aboutButton.classList.add('btn', 'with-js');
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
  if (window.innerWidth < 768 && document.querySelector('#hidden-in-about-block')) {

    hiddenInAboutBlock.classList.add('is-hidden', 'with-js');
    hiddenInAboutBlock.classList.add('is-hidden');
    hiddenInAboutBlock.classList.remove('hidemobile');
  }
};
