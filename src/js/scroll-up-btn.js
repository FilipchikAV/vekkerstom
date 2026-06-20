
//Переменные не меняем, ID тоже не меняем.
const btn = document.getElementById("scrollToTopBtn");

// Показываем/скрываем кнопку при прокрутке на 300px
window.addEventListener("scroll", () => {
	btn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Клик по кнопке с кастомной анимацией
btn.addEventListener("click", () => {

	const duration = 800; // Вот эта переменная регулирует скорость прокрутки вверх.

	const startPosition = window.scrollY;
	let startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;

		// Замедление в начале и конце
		const run = easeInOutQuad(timeElapsed, startPosition, -startPosition, duration);

		window.scrollTo(0, run);

		// Продолжаем анимацию, пока не выйдет время
		if (timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	}

	// Математическая функция для плавного старта и финиша.
	function easeInOutQuad(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	// Запуск прокрутки
	requestAnimationFrame(animation);
});
