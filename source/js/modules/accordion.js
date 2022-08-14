export const onAccordionClick = () => {
  if (document.querySelector('.accordion-trigger--with-js')) {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger--with-js');

    accordionTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const id = trigger.getAttribute('data-accordion');
        const content = document.querySelector('.accordion-content--with-js[data-accordion="' + id + '"]');
        const activeTrigger = document.querySelector('.accordion-trigger--with-js.is-active');
        const activeContent = document.querySelector('.accordion-content--with-js.is-active');

        if (activeTrigger) {
          activeTrigger.classList.remove('is-active');
          activeContent.classList.remove('is-active');
        } else {
          trigger.classList.add('is-active');
          content.classList.add('is-active');
        }
      });
    });
  }
};
