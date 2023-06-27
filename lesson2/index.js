const div = document.querySelector('body');

const label = document.createElement('label');

const input = document.createElement('input');
label.append(input);
const textDiv = document.createElement('div');
textDiv.style =
  'width: 150px; height: 50px; border: 1px solid black; margin-top: 50px';
const par = document.createElement('p');
textDiv.append(par);
div.append(label, textDiv);

input.addEventListener('change', () => {
  const text = input.value;
  setTimeout(
    function set(par, text) {
      par.textContent = text;
    },
    300,
    par,
    text,
  );
});
