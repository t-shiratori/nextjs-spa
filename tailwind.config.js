module.exports = {
	mode: 'jit',
	purge: [
		'./public/**/*.html',
		'./views/**/*.{js,jsx,ts,tsx,vue}',
		'./utils/**/*.{js,jsx,ts,tsx,vue}',
		'./pages/**/*.{js,jsx,ts,tsx,vue}',
		'./logic/**/*.{js,jsx,ts,tsx,vue}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans JP', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
