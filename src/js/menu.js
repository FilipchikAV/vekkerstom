export function initMenu() {
	const btn = document.querySelector('.header__btn');
	const menu = document.querySelector('.header__list');

	// Безопасность: если на странице нет меню, просто выходим
	if (!btn || !menu) return;

	// Возвращаем вашу родную логику, но меняем 'load' на проверочную функцию
	function enableAnimation() {
		menu.classList.add('animation');
	}

	// Если страница УЖЕ загрузилась (как часто бывает в Vite с новыми страницами),
	// то сразу включаем анимацию. Если ещё загружается — ждем load.
	if (document.readyState === 'complete') {
		enableAnimation();
	} else {
		window.addEventListener('load', enableAnimation);
	}

	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		menu.classList.toggle('open');
		btn.classList.toggle('open');
	});
}
