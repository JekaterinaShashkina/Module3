// 1. Вам дан массив с именами файлов
// ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js']
// Напишите функцию которая может перебрать такой массив и отфильтрует его оставив только имена файлов с расширениями .js .jsx .ts
const array = [
  'module.jsx',
  'index.html',
  'style.css',
  'index.js',
  'file.ts',
  'library.css',
  'my.plugin.js',
];

const filter = (arr) => {
  const regexp = /\S+.(jsx|js|ts)/g;
  const string = arr.join(' ');
  return string.match(regexp);
};
console.log(filter(array));

// 2. Напишите регулярное выражение, которое находит email адреса:
// До символа @ email может содержать не менее одного символа класса \w.
// После символа @ и до .(точки), после которой начинается домен, может содержать только буквы и быть не короче трех символов.
// После .(точки) может содержать только буквы и быть от 2 до 5 символов в длину.

const reg2 = /^\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/g;

const mail = 'my-mail@yandex.ru';
console.log(reg2.test(mail));

// 3. Напишите регулярное выражение, которое находит текст в скобках
const string = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, 
гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды 
(по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. 
Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, 
экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.`;

const reg3 = /\(.+?\)/g;
console.log(string.match(reg3));

// 4. Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег
// домены вида http://site.ru, https://site.com на

const string1 = 'dhsjhfls ajkdhas ajdhwhqio https://site.com sakldjl dsdlls';
const returnTag = (str) => {
  const reg4 = /https\:\/\/.+\.[a-zA-Z]+/g;
  return string1.replace(
    reg4,
    `<a href="${string1.match(reg4).join()}">${string1
      .match(reg4)
      .join()
      .slice(8)}</a>`,
  );
};

console.log(returnTag(string1));
