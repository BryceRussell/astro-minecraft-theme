/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

//The dir inside the public folder where blocks are being stored no trailing slash
const BLOCK_DIR = 'imgs/blocks';
const ITEM_DIR = 'imgs/items';
const PAINTING_DIR = 'imgs/paintings';
//Number of block sizes (1-block, 2-block) to generate
const BLOCK_SPACING_MAX = 99;



const background_obj = {};
const spacing_obj = {};
const safelist_array = [];
const fs = require('fs');
//Create block backgrounds like 'bg-stone' from a dir and safelist them
fs.readdirSync(`./public/${BLOCK_DIR}`).forEach(file => {
	const block_name = file.split('.')[0]
	background_obj[block_name] = `url('/${BLOCK_DIR}/${file}')`
	safelist_array.push(`bg-${block_name}`)
});
//Create item backgrounds like 'bg-i-diamond' from a dir and safelist them
fs.readdirSync(`./public/${ITEM_DIR}`).forEach(file => {
	const item_name = `i-${file.split('.')[0]}`
	background_obj[item_name] = `url('/${ITEM_DIR}/${file}')`
	safelist_array.push(`bg-${item_name}`)
});
//Create painting backgrounds like 'bg-painting-skull' from a dir and safelist them
fs.readdirSync(`./public/${PAINTING_DIR}`).forEach(file => {
	const painting_name = `painting-${file.split('.')[0]}`
	background_obj[painting_name] = `url('/${PAINTING_DIR}/${file}')`
	safelist_array.push(`bg-${painting_name}`)
});
//Create spacings like '1-block' '2-block' up to '99-block'
Array.from({length: BLOCK_SPACING_MAX}, (_, i) => i + 1).forEach((i) => {
	spacing_obj[`${i}-block`] = `calc(var(--block-size) * ${i})`
})




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
			'minecraft': ['Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'minecrafter': ['Minecrafter', 'Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'minecrafter-alt': ['Minecrafter Alt', 'Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'minecraft-evenings': ['Minecraft Evenings', 'Minecraft', 'Arial', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
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
				"link": "#aaaaff",
				"gui": "#C6C6C6"
			},
			backgroundImage: {
				...background_obj
			},
			spacing: {
				'1/2-block': 'calc(var(--block-size) / 2)',
				'1/4-block': 'calc(var(--block-size) / 4)',
				'1/8-block': 'calc(var(--block-size) / 8)',
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
