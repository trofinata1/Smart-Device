export const onAccordionClick = () => {
  if (document.querySelector('.accordion-trigger.with-js')) {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger.with-js');

    accordionTriggers.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        const id = item.getAttribute('data-accordion');
        const content = document.querySelector('.accordion-content.with-js[data-accordion="' + id + '"]');
        const activeTrigger = document.querySelector('.accordion-trigger.with-js.is-active');
        const activeContent = document.querySelector('.accordion-content.with-js.is-active');

        if (evt.target !== activeTrigger && activeTrigger) {
          evt.target.classList.add('is-active');
          content.classList.add('is-active');
          activeTrigger.classList.remove('is-active');
          activeContent.classList.remove('is-active');
        } else if (evt.target !== activeTrigger && !activeTrigger) {
          evt.target.classList.add('is-active');
          content.classList.add('is-active');
        } else if (evt.target === activeTrigger) {
          evt.target.classList.remove('is-active');
          activeContent.classList.remove('is-active');
        }
      });
    });
  }
};
