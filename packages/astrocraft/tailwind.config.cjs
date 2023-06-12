const fs = require('fs');
const defaultTheme = require('tailwindcss/defaultTheme')

const blockSpacingClasses = Array.from({ length: 99 }).reduce(
  (obj, _, i) => {
    const key = `${i + 1}-block`;
    const value = `calc(var(--block-size) * ${i + 1})`;
    return { ...obj, [key]: value };
  },
  {}
)

function createBackgroundImageClasses(folder) {
	const values = {}
	const files = fs.readdirSync(`./node_modules/astrocraft/assets/${folder}`)
	for (const file of files) {
		const key = folder + '-' + file.split('.')[0]
		values[key] = `url('/assets/${folder}/${file}')`
	}
	return values
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/astrocraft/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
			'minecraft-evenings': ['Minecraft Evenings', 'Minecraft', 'Arial', ...defaultTheme.fontFamily.sans],
			'mono': ['Monocraft', ...defaultTheme.fontFamily.mono],
			'monocraft': ['Monocraft', 'Minecraft', ...defaultTheme.fontFamily.mono],
		},
		extend: {
			colors: {
				"link": "#aaaaff",
				"panel": "#C6C6C6",
				"panel-dark": "#373737",
				//Text colors
				text: {
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
				...createBackgroundImageClasses('block'),
				...createBackgroundImageClasses('item'),
				...createBackgroundImageClasses('painting'),
				'sign': "url(/assets/ui/sign.png)",
			},
			spacing: {
				'1/16-block': 'calc(var(--block-size) / 16)',
				'1/8-block': 'calc(var(--block-size) / 8)',
				'1/4-block': 'calc(var(--block-size) / 4)',
				'1/2-block': 'calc(var(--block-size) / 2)',
				...blockSpacingClasses
			},
			typography: {
        DEFAULT: {
          css: {
						textShadow: '0.095rem 0.095rem #000',
						'--tw-prose-body': '#fff',
						'--tw-prose-headings': '#fff',
						'--tw-prose-bold': '#fff',
						'--tw-prose-links': "theme('colors.link')",
						'--tw-prose-code': '#fff',
						'--tw-prose-pre-bg': "theme('colors.panel-dark')",
            a: {
							textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
						pre: {
							'--zoom': '10',
							borderWidth: 'calc(var(--block-size) / var(--zoom))',
							borderImage: 'url("/assets/ui/achievement-panel.png")',
							borderImageWidth: 'calc(var(--block-size) / var(--zoom))',
							borderImageSlice: '45.5% 45.5% fill',
							borderImageRepeat: 'stretch',
							fontSize: '0.9rem',
						},
						'code:not(pre code)': {
							'--zoom': '12',
							textAlign: 'center',
							padding: '0.075rem 0.2rem',
							borderWidth: 'calc(var(--block-size) / var(--zoom))',
							borderImage: 'url("/assets/ui/achievement-panel.png")',
							borderImageWidth: 'calc(var(--block-size) / var(--zoom))',
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
						thead: {
							textShadow: 'none',
							fontSize: '2rem'
						}
          },
        },
      },
		},
	},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
