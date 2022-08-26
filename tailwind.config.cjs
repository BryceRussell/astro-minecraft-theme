/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

//The dir inside the public folder where blocks are being stored no trailing slash
const BLOCK_DIR = 'imgs/blocks';
//Maximum number of block spacings like: '1-block', '2-block' , ...'${BLOCK_SPACING_MAX}-block'
const BLOCK_SPACING_MAX = 99;



const background_obj = {};
const spacing_obj = {};
const safelist_array = [];

//Create backgrounds like 'bg-stone' from a dir and safelist them
const fs = require('fs');
fs.readdirSync(`./public/${BLOCK_DIR}`).forEach(file => {
	const block_name = file.split('.')[0]
	background_obj[block_name] = `url('${BLOCK_DIR}/${file}')`
	safelist_array.push(`bg-${block_name}`)
});

//Create spacings like '1-block' '2-block' up to '99-block'
Array.from({length: BLOCK_SPACING_MAX}, (_, i) => i + 1).forEach((i) => {
	spacing_obj[`${i}-block`] = `calc(var(--block-size) * ${i})`
})

console.log(JSON.stringify(background_obj))

module.exports = {
	plugins: [],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '480px',
			...defaultTheme.screens
		},
		fontFamily: {
			'sans': ['Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'minecraft': ['Minecraft', 'Arial', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				mc: {
					//Text
					'dark-blue': '#0000AA',
					'dark-green': '#00AA00',
					'dark-aqua': '#00AAAA',
					'dark-red': '#AA0000',
					'dark-purple': '#AA00AA',
					'gold': '#FFAA00',
					'gray': '#AAAAAA',
					'dark-gray': '#555555',
					'blue': '#5555FF',
					'green': '#55FF55',
					'aqua': '#55FFFF',
					'red': '#FF5555',
					'light-purple': '#FF55FF',
					'yellow': '#FFFF55',
					//Misc
					"link": "#aaaaff"
				}
			},
			backgroundImage: {
				...background_obj
			},
			spacing: {
				...spacing_obj
			}
		},
	},
	safelist: [
		{
			pattern: /(w|h)-([0-9]+)-block/
		},
		...safelist_array
	]
}
