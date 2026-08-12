export function initMenu() {
	const btn = document.querySelector('.header__btn');
	const menu = document.querySelector('.header__list');

	// Если кнопки или меню нет на этой странице, просто выходим, чтобы не было ошибок
	if (!btn || !menu) return;

	// Добавляем анимацию сразу, без ожидания window.load
	menu.classList.add('animation');

	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		menu.classList.toggle('open');
		btn.classList.toggle('open');
	});
}
