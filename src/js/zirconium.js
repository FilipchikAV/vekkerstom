const modal = document.getElementById('zirconium');
const openBtn = document.getElementById('openZirconiumBtn');
const closeBtn = document.getElementById('closeZirconiumBtn');

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