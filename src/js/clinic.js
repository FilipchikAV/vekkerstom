export function initClinic() {
	document.addEventListener("DOMContentLoaded", () => {
		const slider = document.querySelector('.clinic__container');
		const list = document.querySelector('.clinic__list');
		const btnPrev = document.querySelector('.clinic__prev');
		const btnNext = document.querySelector('.clinic__next');
		const dotsContainer = document.querySelector('.clinic__dots');

		const originalSlides = Array.from(list.children);
		if (originalSlides.length < 2) {
			console.error("Мало слайдов для работы");
			return;
		}

		// === 1. СОЗДАНИЕ ТОЧЕК ===
		originalSlides.forEach((_, index) => {
			const dot = document.createElement('li'); // Если в HTML у вас <ul>
			dot.classList.add('clinic__dot');
			if (index === 0) dot.classList.add('active');

			dot.addEventListener('click', () => {
				moveSlider(index + 1);
			});

			dotsContainer.appendChild(dot);
		});

		// Находим созданные точки в DOM
		const dots = document.querySelectorAll('.clinic__dot');

		// === 2. ПРАВИЛЬНОЕ КЛОНИРОВАНИЕ (как в вашем первом коде) ===
		list.appendChild(originalSlides[0].cloneNode(true));
		list.insertBefore(originalSlides[originalSlides.length - 1].cloneNode(true), list.firstElementChild);

		const allSlides = list.children.length;
		let currentIndex = 1;
		let isTransitioning = false;

		// Начальная позиция
		list.style.transition = 'none';
		list.style.transform = `translateX(-${currentIndex * 100}%)`;

		// === 3. ФУНКЦИЯ ОБНОВЛЕНИЯ ЦВЕТА ТОЧЕК ===
		function updateDots(index) {
			let dotIndex = index - 1;

			// Если доехали до правого клона -> подсвечиваем 1-ю точку
			if (index === allSlides - 1) {
				dotIndex = 0;
				// Если доехали до левого клона -> подсвечиваем последнюю точку
			} else if (index === 0) {
				dotIndex = dots.length - 1;
			}

			// Меняем активный класс
			dots.forEach((dot, i) => {
				if (i === dotIndex) {
					dot.classList.add('active');
				} else {
					dot.classList.remove('remove'); // На всякий случай очищаем старый баг
					dot.classList.remove('active');
				}
			});
		}

		function moveSlider(newIndex) {
			if (isTransitioning) return;
			isTransitioning = true;
			currentIndex = newIndex;
			list.style.transition = 'transform 0.7s ease-in-out';
			list.style.transform = `translateX(-${currentIndex * 100}%)`;

			// Переключаем цвет точек сразу в момент старта анимации
			updateDots(currentIndex);
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
			// Подстраховка для точек после прыжка через клон
			updateDots(currentIndex);
		});

		// Кнопки
		btnNext.addEventListener('click', () => moveSlider(currentIndex + 1));
		btnPrev.addEventListener('click', () => moveSlider(currentIndex - 1));

		// === АВТОПРОКРУТКА И ПАУЗА ===
		let autoTimer = null;

		function startAutoPlay() {
			if (autoTimer) clearInterval(autoTimer);
			autoTimer = setInterval(() => {
				moveSlider(currentIndex + 1);
			}, 3000);
		}

		function stopAutoPlay() {
			clearInterval(autoTimer);
		}

		startAutoPlay();

		// Проверьте, чтобы в HTML класс был именно .actions__container (с подчёркиваниями)
		if (slider) {
			slider.addEventListener('mouseenter', stopAutoPlay);
			slider.addEventListener('mouseleave', startAutoPlay);
			slider.addEventListener('touchstart', stopAutoPlay, { passive: true });
			slider.addEventListener('touchend', startAutoPlay);
		}
	});
}
