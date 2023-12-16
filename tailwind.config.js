/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#c8b6ff',
				secondary: '#bbd0ff',
				dark: '#3c096c'
			},
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#c8b6ff',
					secondary: '#bbd0ff',
					dark: '#3c096c'
				},
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#c8b6ff',
					secondary: '#bbd0ff',
					dark: '#3c096c'
				}
			}
		]
	}
};
