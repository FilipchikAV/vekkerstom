export function initVekker () {
	const modal = document.getElementById('vekker');
	const openBtn = document.getElementById('openVekkerBtn');
	const closeBtn = document.getElementById('closeVekkerBtn');

// Открытие окна
	openBtn.addEventListener('click', () => {
		modal.showModal();
	});

// Закрытие по кнопке «Закрыть»
	closeBtn.addEventListener('click', () => {
		modal.close();
	});

// Закрытие при клике на полупрозрачный фон (overlay)
	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			modal.close();
		}
	});
}