const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');

modalBtn.on('click', function () {
  modalOrder.show(500);
});
modalClose.on('click', function () {
  modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function () {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(function () {
  modalOrderTitle.text('Заполните форму');
});

$('.modal-order__form').submit(function (event) {
  event.preventDefault();
  $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text(
        'Спаибо, Ваша заявка принята. Номер заявки ' + data.id,
        $('.modal-order__form').slideUp(300),
      );
    },
    error() {
      modalOrderTitle.text('Что то пошло не так. Попробуйте попозже');
    },
  });
});

const burgerBtn = $('.header__burger');
burgerBtn.on('click', function () {
  $('.navigation').animate(
    {
      left: 0,
    },
    500,
    function () {
      $('.navigation__close').animate(
        {
          opacity: 1,
        },
        300,
        'swing',
      );
    },
  );
});
$('.navigation__close').on('click', function () {
  $('.navigation').animate(
    {
      left: -400,
    },
    500,
  );
});
$('body').on('click', function (event) {
  if (
    event.target !== burgerBtn[0] &&
    !$(event.target).closest($('.navigation')[0]).length
  ) {
    $('.navigation').animate(
      {
        left: -400,
      },
      500,
    );
  }
});
