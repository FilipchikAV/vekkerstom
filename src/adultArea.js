import './less/styles.less'; // Подключаем стили

// Запускаем ОБЩИЕ скрипты (только если элементы есть на этой странице)
if (document.querySelector('.menu-button')) {
	await import('./js/menu.js');
}
if (document.querySelector('.modal')) {
	await import('./js/modal.js');
}
if (document.querySelector('.slider')) {
	await import('./js/slider.js');
}

// Запускаем только ВЗРОСЛЫЕ скрипты
if (document.querySelector('.implantation-section')) { // замените класс на свой
	await import('./js/implantation.js');
}
if (document.querySelector('.zirconium-section')) {
	await import('./js/zirconium.js');
}
if (document.querySelector('.bite-section')) {
	await import('./js/bite.js');
}