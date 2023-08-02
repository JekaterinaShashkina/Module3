import { el, setChildren } from '../node_modules/redom/dist/redom.es.js';

const cardData = () => {
  const card = el(
    'div',
    { className: 'card' },
    el('p', { className: 'secure' }, 'Secure Checkout'),
    el('div', { className: 'credit-card' }, [
      el('span', { className: 'card__number' }, 'xxxx xxxx xxxx xxxx'),
      el('div', { className: 'card__personal' }, [
        el('span', { className: 'card__name' }, 'John Doe'),
        el('span', { className: 'card__date' }, '04/24'),
      ]),
    ]),
    el('form', { className: 'form', action: '#', id: 'form' }, [
      el('div', { className: 'form__input-wrap form__input-wrap_holder' }, [
        el(
          'label',
          { className: 'form__label form__holder-label' },
          'Card Holder',
        ),
        el('input', { className: 'input input__holder', type: 'text' }),
      ]),
      el('div', { className: 'form__input-wrap form__input-wrap_number' }, [
        el(
          'label',
          { className: 'form__label form__number-label' },
          'Card Number',
        ),
        el('input', { className: 'input input__number', id: 'cardNumber' }),
      ]),
      el('div', { className: 'form__input-wrap form__input-wrap_date' }, [
        el(
          'label',
          { className: 'form__label form__date-label' },
          'Card Expire',
        ),
        el('input', { className: 'input input__date', type: 'text' }),
      ]),
      el('div', { className: 'form__input-wrap form__input-wrap_cvv' }, [
        el('label', { className: 'form__label form__cvv-label' }, 'CVV'),
        el('input', { className: 'input input__cvv', type: 'text' }),
      ]),
      el('button', { className: 'form__button' }, 'CHECK OUT'),
    ]),
  );

  return el('div', { className: 'wrapper' }, [card]);
};

setChildren(document.body, cardData());
console.log(cardData());
