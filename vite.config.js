import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	base: '/vekkerstom/',
	build: {
		rollupOptions: {
			input: {
				// Главная страница
				main: resolve(__dirname, 'index.html'),
				// Страница для взрослых
				adult: resolve(__dirname, 'mature.html'),
				// Детская страница
				children: resolve(__dirname, 'children.html'),
			},
		},
	},
})
