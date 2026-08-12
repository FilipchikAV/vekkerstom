import './less/styles.less'; // Общие стили

// Импортируем функции
import { initMenu } from './js/menu.js';
import { initModal } from './js/modal.js';
import { initSlider } from './js/slider.js';
import { initActions } from './js/actions.js';
import { initClinic } from './js/clinic.js';
import { initSpecialists } from './js/specialists.js';
import { initVekker } from './js/vekker.js';

// Запускаем только то, что нужно на главной странице
initMenu();
initModal();
initSlider();
initActions();
initClinic();
initSpecialists();
initVekker();
