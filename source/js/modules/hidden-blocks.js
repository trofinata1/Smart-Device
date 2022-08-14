import {aboutButton} from './dom-nodes';

export const onAboutButtonClick = () => {
  if (document.querySelector('.about__button')) {
    const about = document.querySelector('.about');
    const aboutBlocks = about.querySelectorAll('.is-hidden');

    aboutBlocks.forEach((item) => {
      aboutButton.addEventListener('click', function () {
        if (item.classList.contains('is-hidden--with-js')) {
          item.classList.remove('is-hidden--with-js');
          aboutButton.textContent = 'Свернуть';
          aboutButton.blur();
        } else {
          item.classList.add('is-hidden--with-js');
          aboutButton.textContent = 'Подробнее';
          aboutButton.blur();
        }
      });
    });
  }
};
