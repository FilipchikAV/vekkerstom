const modal = document.getElementById('bite');
const openBtn = document.getElementById('openBiteBtn');
const closeBtn = document.getElementById('closeBiteBtn');

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