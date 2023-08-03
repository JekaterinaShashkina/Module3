import { el, setChildren } from 'redom';
const creditcardutils = require('creditcardutils');

const cardData = () => {
  const cardNumber = el(
    'span',
    { className: 'card__number' },
    'xxxx xxxx xxxx xxxx',
  );
  const cardName = el('span', { className: 'card__name' }, 'John Doe');
  const cardDate = el('span', { className: 'card__date' }, '04/24');
  const cardPersonal = el(
    'div',
    { className: 'card__personal' },
    cardName,
    cardDate,
  );

  const creditCard = el(
    'div',
    { className: 'credit-card' },
    cardNumber,
    cardPersonal,
  );
  const card = el(
    'div',
    { className: 'card' },
    el('p', { className: 'secure' }, 'Secure Checkout'),
    creditCard,

    el('form', { className: 'form', action: '#', id: 'form' }, [
      el('div', { className: 'form__input-wrap form__input-wrap_holder' }, [
        el(
          'label',
          { className: 'form__label form__holder-label' },
          'Card Holder',
        ),
        el('input', {
          className: 'input input__holder',
          type: 'text',
          oninput() {
            cardName.innerHTML = this.value;
          },
        }),
      ]),
      el('div', { className: 'form__input-wrap form__input-wrap_number' }, [
        el(
          'label',
          { className: 'form__label form__number-label' },
          'Card Number',
        ),
        el('input', {
          className: 'input input__number',
          id: 'cardNumber',
          oninput() {
            this.value = creditcardutils.formatCardNumber(this.value);
            cardNumber.innerHTML = this.value;
          },
        }),
      ]),
      el(
        'div',
        {
          className: 'form__input-wrap form__input-wrap_date',
        },
        [
          el(
            'label',
            { className: 'form__label form__date-label' },
            'Card Expire',
          ),
          el('input', {
            className: 'input input__date',
            type: 'text',
            oninput() {
              this.value = creditcardutils.formatCardExpiry(this.value);
              cardDate.innerHTML = this.value;
            },
          }),
        ],
      ),
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
