const modal = document.getElementById('implantation');
const openBtn = document.getElementById('openImplantationBtn');
const closeBtn = document.getElementById('closeImplantationBtn');

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