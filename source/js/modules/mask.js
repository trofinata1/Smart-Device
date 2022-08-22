import {telInputs} from './dom-nodes';

export const showTelMask = () => {
  if (document.querySelector('[name="tel"]')) {

    const eventCallback = function (e) {
      let el = e.target;
      let clearVal = el.dataset.phoneClear;
      let pattern = el.dataset.phonePattern;
      let matrixDef = '+7(___)_______';
      let matrix = pattern ? pattern : matrixDef;
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = e.target.value.replace(/\D/g, '');


      telInputs.forEach(() => {
        const currentForm = e.target.closest('form');
        const errorForm = currentForm.querySelector('[data-phone-error]');

        if (clearVal !== 'false' && e.type === 'blur') {

          if (val.length < matrix.match(/([\_\d])/g).length) {
            errorForm.style.display = 'block';
            return;
          }
        }

      });

      telInputs.forEach(() => {

        const currentForm = e.target.closest('form');
        const errorForm = currentForm.querySelector('[data-phone-error]');

        e.target.onfocus = function () {
          if (errorForm.style.display === 'block') {
            errorForm.style.display = 'none';
          }
        };
      });


      if (def.length >= val.length) {
        val = def;
      }

      e.target.value = matrix.replace(/./g, function (a) {
        if (/[_\d]/.test(a) && i < val.length) {
          return val.charAt(i++);
        } else if (i >= val.length) {
          return '';
        } else {
          return a;
        }
      });
    };

    let phoneInputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCallback);
      }
    }
  }
};
