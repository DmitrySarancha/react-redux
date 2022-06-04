module.exports = {
	content: ['./src/**/*.{js,jsx,scss}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	/**
	 *  daisyUI config (optional)
	 */
	daisyui: {
		themes: true,
		prefix: 'daisyUI-',
		darkTheme: 'night',
	},
};
