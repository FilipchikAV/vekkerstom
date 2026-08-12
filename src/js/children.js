const modal = document.getElementById('childrenStoma');
const openBtn = document.getElementById('openChildrenStomaBtn');
const closeBtn = document.getElementById('closeChildrenStomaBtn');

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