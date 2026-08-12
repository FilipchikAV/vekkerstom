import './less/styles.less'; // Подключаем стили

// Запускаем ОБЩИЕ скрипты
if (document.querySelector('.menu-button')) {
	await import('./js/menu.js');
}
if (document.querySelector('.modal')) {
	await import('./js/modal.js');
}

// Запускаем только ДЕТСКИЕ скрипты
await import('./js/children.js');
