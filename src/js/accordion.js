export function initAccordion() {
	document.addEventListener('DOMContentLoaded', () => {
		const items = document.querySelectorAll('.mature__item');

		items.forEach(item => {
			const btn = item.querySelector('.mature__btn');
			const content = item.querySelector('.mature__wrap');

			// Начальное состояние — закрыто
			btn.setAttribute('aria-expanded', 'false');

			btn.addEventListener('click', () => {
				const isOpen = btn.getAttribute('aria-expanded') === 'true';

				// Закрываем все остальные аккордеоны
				items.forEach(otherItem => {
					if (otherItem !== item) {
						const otherBtn = otherItem.querySelector('.mature__btn');
						const otherContent = otherItem.querySelector('.mature__wrap');

						otherBtn.setAttribute('aria-expanded', 'false');
						otherContent.style.maxHeight = null; // возвращаем к CSS (0)
					}
				});

				// Переключаем текущий
				if (isOpen) {
					// Закрываем
					btn.setAttribute('aria-expanded', 'false');
					content.style.maxHeight = null;
				} else {
					// Открываем
					btn.setAttribute('aria-expanded', 'true');
					content.style.maxHeight = content.scrollHeight + 'px';
				}
			});
		});
	});
}