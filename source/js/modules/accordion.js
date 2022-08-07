export const onAccordionClick = () => {
  if (document.querySelector('.accordion-trigger')) {

    let accordionTriggers = document.querySelectorAll('.accordion-trigger--with-js');

    accordionTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        let id = trigger.getAttribute('data-accordion');
        let content = document.querySelector('.accordion-trigger__content--with-js[data-accordion="' + id + '"]');
        let activeTrigger = document.querySelector('.accordion-trigger--with-js.active');
        let activeContent = document.querySelector('.accordion-trigger__content--with-js.active');

        if (activeTrigger) {
          activeTrigger.classList.remove('active');
          activeContent.classList.remove('active');
        } else {
          trigger.classList.add('active');
          content.classList.add('active');
        }
      });
    });
  }
};


