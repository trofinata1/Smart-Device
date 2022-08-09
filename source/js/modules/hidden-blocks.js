export const onAboutButtonClick = () => {
  if (document.querySelector('.about__button')) {

    const buttonAbout = document.querySelector('.about__button');
    const about = document.querySelector('.about');
    const aboutBlocks = about.querySelectorAll('.hidden');

    aboutBlocks.forEach((item) => {
      buttonAbout.addEventListener('click', function () {
        if (item.classList.contains('hidden--with-js')) {
          item.classList.remove('hidden--with-js');
          buttonAbout.textContent = 'Свернуть';
          buttonAbout.blur();
        } else {
          item.classList.add('hidden--with-js');
          buttonAbout.textContent = 'Подробнее';
          buttonAbout.blur();
        }
      });
    });
  }
};


