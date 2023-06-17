const fg = require('fast-glob');
const defaultTheme = require('tailwindcss/defaultTheme');

// console.log('TAILWIND', fg.sync(`./src/assets/blocks/*`, { onlyFiles: true }))

const fileName = (path) => path.split("/").pop().split(".")[0];

const blockSpacingClasses = Array.from({ length: 99 }).reduce(
  (obj, _, i) => {
    const key = `${i + 1}-block`;
    const value = `calc(var(--mc-block-size) * ${i + 1})`;
    return { ...obj, [key]: value };
  },
  {}
)

function createBackgroundImageClasses(folder) {
	const values = {}
	const files = fg.sync(`./src/assets/${folder}/*.{png,jpg,jpeg,PNG,JPEG}`, { onlyFiles: true })
	for (const file of files) {
		const key = folder.replace(/s$/, '') + '-' + fileName(file)
		values[key] = `var(--mc-${folder.replace(/s$/, '')}-${fileName(file)})`
	}
	return values
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/astrocraft/**/*.{astro,js,md,mdx,ts}'],
	corePlugins: {
    preflight: false,
  },
	theme: {
		screens: {
			'xs': '480px',
			...defaultTheme.screens
		},
		fontFamily: {
			'sans': ['var(--mc-font)', 'Arial', 'Helvetica', ...defaultTheme.fontFamily.sans],
			'mono': ['var(--mc-font-mono)', ...defaultTheme.fontFamily.mono],
			'minecraft': ['Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'minecrafter': ['Minecrafter', 'Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'minecrafter-alt': ['Minecrafter Alt', 'Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'minecraft-evenings': ['Minecraft Evenings', 'Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'monocraft': ['Monocraft', 'Minecraft', ...defaultTheme.fontFamily.mono],
		},
		color: {
			white: 'var(--mc-color-white)',
			black: 'var(--mc-color-black)',
		},
		extend: {
			colors: {
				'gray-1': 'var(--mc-color-gray-1)',
				'gray-2': 'var(--mc-color-gray-2)',
				'gray-3': 'var(--mc-color-gray-3)',
				'gray-4': 'var(--mc-color-gray-4)',
				'gray-5': 'var(--mc-color-gray-5)',
				link: 'var(--mc-color-text-accent)',
				active: 'var(--mc-color-text-active)',
				light: 'var(--mc-color-light)',
				dark: 'var(--mc-color-dark)',
				//Text colors
				text: {
					DEFAULT: '#e0d0d0',
					'gold': '#FFAA00',
					'gray': '#AAAAAA',
					'blue': '#5555FF',
					'green': '#55FF55',
					'aqua': '#55FFFF',
					'red': '#FF5555',
					'light-purple': '#FF55FF',
					'yellow': '#FFFF55',
					dark: {
						'blue': '#0000AA',
						'green': '#00AA00',
						'aqua': '#00AAAA',
						'red': '#AA0000',
						'purple': '#AA00AA',
						'gray': '#555555',
					},
				},
				//Wool colors
				wool: {
					'orange': '#D87F33',
					'magenta': '#B24CD8',
					'light-blue': '#6699D8',
					'yellow': '#E5E533',
					'lime': '#7FCC19',
					'pink': '#F27FA5',
					'gray': '#4C4C4C',
					'light-gray': '#999999',
					'cyan': '#4C7F99',
					'purple': '#7F3FB2',
					'blue': '#334CB2',
					'brown': '#664C33',
					'green': '#667F33',
					'red': '#993333',
					'black': '#191919'
				},
				//Terrain/Biome colors
				grass: {
					DEFAULT: '#79C05A',
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
					DEFAULT: '#59AE30',
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
				water: {
					DEFAULT: '#44AFF5',
					ocean: {
						DEFAULT: '#1787D4',
						'warm': '#02B0E5',
						'lukewarm': '#0D96DB',
						'cold': '#2080C9',
						'frozen': '#2570B5'
						
					},
					forest : {
						DEFAULT: '#1E97F2',
						'birch': '#0677CE',
						'birch-hills': '#0A74C4',
						'dark': '#3B6CD1',
						'flower': '#20A3CC',
					},
					'meadow': '#0E4ECF',
					'river': '#0084FF',
					'mountain-gravel': '#0E63AB',
					'mountain': '#007BF7',
					'beach': '#157CAB',
					'beach-snowy': '#1463A5',
					'stone-shore': '#0D67BB',
					'jungle': '#14A2C5',
					'jungle-hills': '#1B9ED8',
					'tiaga': '#287082',
					'tiaga-hills': '#236583',
					'tiaga-snowy': '#205E83',
					'savanna': '#2C8B9C',
					'savanna-plateau': '#2590A8',
					'desert': '#32A598',
					'desert-hills': '#1A7AA1',
					'badlands': '#4E7F81',
					'badlands-plateau': '#55809E',
					'swamp': '#4C6559',
					'swamp-hills': '#4C6156',
					'mushroom': '#8A8997',
					'mushroom-shore': '#818193',
					'end': '#62529E',
					'nether': '#905957'
				}
			},
			backgroundImage: {
				...createBackgroundImageClasses('blocks'),
				...createBackgroundImageClasses('items'),
				...createBackgroundImageClasses('paintings'),
				...createBackgroundImageClasses('icons'),
				'sign': 'url("/_mc/ui/sign.png")',
			},
			spacing: {
				'1/16-block': 'calc(var(--mc-block-size) / 16)',
				'1/8-block': 'calc(var(--mc-block-size) / 8)',
				'1/4-block': 'calc(var(--mc-block-size) / 4)',
				'1/2-block': 'calc(var(--mc-block-size) / 2)',
				...blockSpacingClasses
			},
			typography: {
				DEFAULT: {
					css: {
						textShadow: '0.095rem 0.095rem var(--mc-color-black)',
						'--tw-prose-body': "var(--mc-color-text)",
						'--tw-prose-headings': "var(--mc-color-text)",
						'--tw-prose-bold': "var(--mc-color-text)",
						'--tw-prose-links': "var(--mc-color-text-accent)",
						'--tw-prose-code': "var(--mc-color-text)",
						'--tw-prose-pre-bg': "var(--mc-color-dark)",
						'h1, h2, h3, h4, h5, h6': {
							fontWeight: 'normal'
						},
						a: {
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline'
							}
						},
						pre: {
							'--mc-ui-zoom': '10',
							borderWidth: 'calc(var(--mc-block-size) / var(--mc-ui-zoom))',
							borderImage: 'url("/_mc/ui/achievement-panel.png")',
							borderImageWidth: 'calc(var(--mc-block-size) / var(--mc-ui-zoom))',
							borderImageSlice: '45.5% 45.5% fill',
							borderImageRepeat: 'stretch',
						},
						code: {
							fontSize: '0.825rem',
						},
						'code:not(pre code)': {
							'--mc-ui-zoom': '12',
							textAlign: 'center',
							padding: '0.075rem 0.15rem 0.025rem 0.2rem',
							borderWidth: 'calc(var(--mc-block-size) / var(--mc-ui-zoom))',
							borderImage: 'url("/_mc/ui/achievement-panel.png")',
							borderImageWidth: 'calc(var(--mc-block-size) / var(--mc-ui-zoom))',
							borderImageSlice: '45.5% 45.5% fill',
							borderImageRepeat: 'stretch',
							fontWeight: 'normal',
						},
						'code::before': {
							content: '""',
							display: 'none',
						},
						'code::after': {
							content: '""',
							display: 'none',
						},
						'thead th': {
							color: 'var(--mc-color-gray-4)',
							fontWeight: 'normal',
							textShadow: 'none',
						},
						'tbody td': {
							padding: '.25rem .5rem !important' // !important is needed here due to the way the typoragphy plugin styles padding on td elements
						},
					},
				},
			},
		},
	},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
