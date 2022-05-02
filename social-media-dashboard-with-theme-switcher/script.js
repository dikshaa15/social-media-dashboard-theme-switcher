const toggle = document.getElementById('toggle');
const dark = document.getElementById('black');
const light = document.getElementById('white');
const theme = document.getElementById('theme');
const h1 = document.getElementById('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const p = document.querySelectorAll('p');
const small = document.querySelectorAll('small');
const card = document.querySelectorAll('.card');
const box = document.querySelectorAll('.box');

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    theme.classList.remove('dark');
    h1.classList.remove('dark');
    small.forEach((tog) => tog.classList.remove('dark'));
    h2.forEach((tog) => tog.classList.remove('dark'));
    h3.forEach((tog) => tog.classList.remove('dark'));
    p.forEach((tog) => tog.classList.remove('dark'));
    card.forEach((tog) => tog.classList.remove('dark'));
    box.forEach((tog) => tog.classList.remove('dark'));
    dark.style.display = 'none';
    light.style.display = 'inline-block';
  } else {
    html.classList.add('dark');
    theme.classList.add('dark');
    h1.classList.add('dark');
    small.forEach((tog) => tog.classList.add('dark'));
    h2.forEach((tog) => tog.classList.add('dark'));
    h3.forEach((tog) => tog.classList.add('dark'));
    p.forEach((tog) => tog.classList.add('dark'));
    card.forEach((tog) => tog.classList.add('dark'));
    box.forEach((tog) => tog.classList.add('dark'));
    h2.forEach((tog) => tog.classList.add('dark'));
    dark.style.display = 'inline-block';
    light.style.display = 'none';
  }
});
