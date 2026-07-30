const btn = document.querySelector('.header__btn');
const menu = document.querySelector('.header__list');

window.addEventListener('load', () => {
	menu.classList.add('animation');
});

btn.addEventListener('click', (e) => {
	e.stopPropagation();
	menu.classList.toggle('open');
	btn.classList.toggle('open');
});
