import {aboutButton, hiddenInAboutBlock} from './dom-nodes';
import {notMobile, mobile} from './window-width';

export const onAboutButtonClick = () => {
  if (document.querySelector('.about__button')) {
    const about = document.querySelector('.about');
    const aboutBlocks = about.querySelectorAll('.is-hidden');

    aboutBlocks.forEach((item) => {
      aboutButton.addEventListener('click', function () {
        if (item.classList.contains('is-hidden', 'with-js', 'hidemobile')) {
          item.classList.remove('is-hidden', 'with-js', 'hidemobile');
          hiddenInAboutBlock.style.display = 'inline';
          aboutButton.textContent = 'Свернуть';
          aboutButton.blur();
        } else {
          item.classList.add('is-hidden', 'with-js');
          aboutButton.textContent = 'Подробнее';
          aboutButton.blur();
          if (notMobile.matches) {
            hiddenInAboutBlock.style.display = 'inline';
          } else if (mobile.matches) {
            hiddenInAboutBlock.style.display = 'none';
          }
        }
      });
    });
  }
};

export const resizeHiddenBlocks = () => {
  window.onresize = function () {
    if (window.innerWidth < 768 && hiddenInAboutBlock && aboutButton.textContent === 'Подробнее') {
      hiddenInAboutBlock.style.display = 'none';
    } else if (window.innerWidth >= 768 && hiddenInAboutBlock) {
      hiddenInAboutBlock.style.display = 'inline';
    } else if (window.innerWidth < 768 && hiddenInAboutBlock && aboutButton.textContent === 'Свернуть') {
      hiddenInAboutBlock.style.display = 'inline';
    }
  };
};
