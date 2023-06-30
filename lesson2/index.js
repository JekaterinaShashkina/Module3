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

const debounce = (callback, delay) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};

const inputText = () => {
  par.textContent = input.value;
};
input.addEventListener('change', debounce(inputText, 300));
