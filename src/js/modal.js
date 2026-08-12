export function initModal() {
	const modal = document.getElementById('oralHygiene');
	const openBtn = document.getElementById('openOralHygieneBtn');
	const closeBtn = document.getElementById('oralHygieneBtn');

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