document.addEventListener("DOMContentLoaded", () => {
	const slider = document.querySelector('.actions-container');
	const list = document.querySelector('.actions__list');
	const btnPrev = document.querySelector('.actions__prev');
	const btnNext = document.querySelector('.actions__next');

	// Клонирование для бесконечного эффекта
	const originalSlides = Array.from(list.children);
	if (originalSlides.length < 2) {
		console.error("Мало слайдов для работы");
		return;
	}

	list.appendChild(originalSlides[0].cloneNode(true));
	list.insertBefore(originalSlides[originalSlides.length - 1].cloneNode(true), list.firstElementChild);

	const allSlides = list.children.length;
	let currentIndex = 1;
	let isTransitioning = false;

	// Начальная позиция
	list.style.transition = 'none';
	list.style.transform = `translateX(-${currentIndex * 100}%)`;

	function moveSlider(newIndex) {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = newIndex;
		list.style.transition = 'transform 0.7s ease-in-out';
		list.style.transform = `translateX(-${currentIndex * 100}%)`;
	}

	list.addEventListener('transitionend', () => {
		isTransitioning = false;

		if (currentIndex === allSlides - 1) {
			list.style.transition = 'none';
			currentIndex = 1;
			list.style.transform = `translateX(-${currentIndex * 100}%)`;
		} else if (currentIndex === 0) {
			list.style.transition = 'none';
			currentIndex = allSlides - 2;
			list.style.transform = `translateX(-${currentIndex * 100}%)`;
		}
	});
	// Кнопочки жмем здесь
	btnNext.addEventListener('click', () => moveSlider(currentIndex + 1));
	btnPrev.addEventListener('click', () => moveSlider(currentIndex - 1));

	// Автопрокрутка
	let autoTimer = setInterval(() => {
		moveSlider(currentIndex + 1);
	}, 3000);

	slider.addEventListener('mouseenter', () => clearInterval(autoTimer));
	slider.addEventListener('mouseleave', () => {
		autoTimer = setInterval(() => moveSlider(currentIndex + 1), 3000);
	});
});