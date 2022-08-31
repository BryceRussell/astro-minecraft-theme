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
	const item_name = `item-${file.split('.')[0]}`
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
				//Text colors
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
				//Biome colors
				grass: {
					'jungle': '#59C93C',
					'dark-forest': '#507A32',
					'swamp-green': '#4C763C',
					'plains': '#91BD59',
					'forest': '#79C05A',
					'birch-forest': '#88BB67',
					'ocean': '#8EB971',
					'meadow': '#83BB6D',
					'tiaga': '#86B783',
					'snowy': '#80B497',
					'swamp': '#6A7039',
					'badlands': '#90814D',
					'desert': '#BFB755'
				},
				foilage: {
					'jungle': '#30BB0B',
					'dark-forest': '#507A32',
					'swamp-green': '#4C763C',
					'plains': '#77AB2F',
					'forest': '#59AE30',
					'birch-forest': '#6BA941',
					'ocean': '#71A74D',
					'meadow': '#63A948',
					'tiaga': '#68A464',
					'snowy': '#60A17B',
					'swamp': '#6A7039',
					'badlands': '#9E814D',
					'desert': '#AEA42A'
				},
				//Misc
				"link": "#aaaaff",
				"gui": "#C6C6C6",
				"gui-dark": "#5F5F5F",
				"gui-darker": "#373737"
			},
			backgroundImage: {
				...background_obj
			},
			spacing: {
				'1/2-block': 'calc(var(--block-size) / 2)',
				'1/4-block': 'calc(var(--block-size) / 4)',
				'1/8-block': 'calc(var(--block-size) / 8)',
				'1/16-block': 'calc(var(--block-size) / 16)',
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
