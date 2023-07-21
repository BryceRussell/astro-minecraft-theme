import path from 'path';
import fg from 'fast-glob';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const fileName = (path: string) => path.split("/").pop()?.split(".")[0];

const blockSpacings = Array.from({ length: 99 }).reduce(
  (obj: Record<string, string>, _, i) => {
    i++
    return {
			...obj,
			[i + '-block']: 'calc(var(--mc-block-size) * ' + i + ')'
		};
  }, {}
)

function backgroundImageClasses(folder: string) {
  const files = fg.sync(`./src/assets/${folder}/*.{png,jpg,jpeg,PNG,JPEG,gif}`, { onlyFiles: true });

  return files.reduce((values: Record<string, string>, file: string) => {
    const key = 'mc-' + folder.replace(/s$/, '') + '-' + fileName(file);
    values[key] = 'var(--' + key + ')';
    return values;
  }, {});
}

const blockSizeUtility = Array.from({ length: 64 }).reduce(
  (obj: Record<string, Record<string, string>>, _, i) => {
		i = (i + 1) * 4
    return {
			...obj,
			['.mc-block-size-' + i]: {
				'--mc-block-size': i + 'px'
			}
		};
  }, {}
)

const guiZoomUtility = Array.from({ length: 32 }).reduce(
  (obj: Record<string, Record<string, string>>, _, i) => {
		i++
    return {
			...obj,
			['.mc-gui-zoom-' + i]: {
				'--mc-gui-zoom': i + ''
			}
		};
  }, {}
)

const mcUtilityPlugin = plugin(function ({ addUtilities }) {
	addUtilities({
		...blockSizeUtility,
		...guiZoomUtility
	})
})

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', path.join(path.dirname(require.resolve('astrocraft')), '**/*.astro')],
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
				mc: {
					light: {
						'purple': '#FF55FF',
					},
					gray: {
						DEFAULT: '#AAAAAA',
						1: 'var(--mc-color-gray-1)',
						2: 'var(--mc-color-gray-2)',
						3: 'var(--mc-color-gray-3)',
						4: 'var(--mc-color-gray-4)',
						5: 'var(--mc-color-gray-5)',
						6: 'var(--mc-color-gray-6)',
					},
					dark: {
						blue: '#0000AA',
						green: '#00AA00',
						aqua: '#00AAAA',
						red: '#AA0000',
						purple: '#AA00AA',
						gray: '#555555',
					},
					accent: 'var(--mc-color-text-accent)',
					active: 'var(--mc-color-text-active)',
					text: '#e0d0d0',
					gold: '#FFAA00',
					blue: '#5555FF',
					green: '#55FF55',
					aqua: '#55FFFF',
					red: '#FF5555',
					yellow: '#FFFF55',
				},
				wool: {
					light: {
						blue: '#6699D8',
						gray: '#999999',
					},
					orange: '#D87F33',
					magenta: '#B24CD8',
					yellow: '#E5E533',
					lime: '#7FCC19',
					pink: '#F27FA5',
					gray: '#4C4C4C',
					cyan: '#4C7F99',
					purple: '#7F3FB2',
					blue: '#334CB2',
					brown: '#664C33',
					green: '#667F33',
					red: '#993333',
					black: '#191919'
				},
				steve: {
					shirt: '#00a8a8',
					pants: '#463aa5',
				},
				grass: {
					DEFAULT: '#79C05A',
					'dark-forest': '#507A32',
					'swamp-green': '#4C763C',
					'birch-forest': '#88BB67',
					jungle: '#59C93C',
					plains: '#91BD59',
					forest: '#79C05A',
					ocean: '#8EB971',
					meadow: '#83BB6D',
					tiaga: '#86B783',
					snowy: '#80B497',
					swamp: '#6A7039',
					badlands: '#90814D',
					desert: '#BFB755',
				},
				foilage: {
					DEFAULT: '#59AE30',
					'dark-forest': '#507A32',
					'swamp-green': '#4C763C',
					'birch-forest': '#6BA941',
					jungle: '#30BB0B',
					plains: '#77AB2F',
					forest: '#59AE30',
					ocean: '#71A74D',
					meadow: '#63A948',
					tiaga: '#68A464',
					snowy: '#60A17B',
					swamp: '#6A7039',
					badlands: '#9E814D',
					desert: '#AEA42A',
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
				...backgroundImageClasses('blocks'),
				...backgroundImageClasses('items'),
				...backgroundImageClasses('paintings'),
				...backgroundImageClasses('icons')
			},
			spacing: {
				'1/16-block': 'calc(var(--mc-block-size) / 16)',
				'1/8-block': 'calc(var(--mc-block-size) / 8)',
				'1/4-block': 'calc(var(--mc-block-size) / 4)',
				'1/2-block': 'calc(var(--mc-block-size) / 2)',
				'3/4-block': 'calc((var(--mc-block-size) / 4) * 3)',
				...blockSpacings
			},
			typography: {
				DEFAULT: {
					css: {
						a: null,
						'code::before': null,
						'code::after': null,
						thead: null,
						'thead th': null,
						'thead th:first-child': null,
						'thead th:last-child': null,
						'tbody tr': null,
						'tbody td': null,
						'tbody td:first-child': null,
						'tbody td:first-child, tfoot td:first-child': null,
						tfoot: null,
						'tfoot td': null,
						'tfoot td:first-child': null,

						textShadow: 'var(--mc-text-shadow)',
						'--tw-prose-body': "var(--mc-color-text)",
						'--tw-prose-headings': "var(--mc-color-text)",
						'--tw-prose-bold': "var(--mc-color-text)",
						'--tw-prose-links': "var(--mc-color-text-accent)",
						'--tw-prose-code': "var(--mc-color-text)",
						'--tw-prose-pre-bg': "var(--mc-color-dark)",
						'h1, h2, h3, h4, h5, h6': {
							fontWeight: 'normal'
						},
						blockquote: {
							padding: '0 1.5rem 0 2.5rem'
						},
						pre: {
							borderWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 10))',
							borderImage: 'var(--mc-gui-achievement)',
							borderImageWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 10))',
							borderImageSlice: '45.5% 45.5% fill',
							borderImageRepeat: 'stretch',
							fontSize: '0.825rem',
						},
						code: {
							fontSize: '0.825rem',
						},
						'code:not(pre code)': {
							textAlign: 'center',
							padding: '0.075rem 0.15rem 0.025rem 0.2rem',
							borderWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 12))',
							borderImage: 'var(--mc-gui-achievement)',
							borderImageWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 12))',
							borderImageSlice: '45.5% 45.5% fill',
							borderImageRepeat: 'stretch',
							fontWeight: 'normal',
						},
						table: {
							width: null,
							textAlign: null,
							borderWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 10))',
							borderImage: 'var(--mc-gui-panel)',
							borderImageWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 10))',
							borderImageSlice: '43% 43% fill',
							borderImageRepeat: 'stretch',
						},
						'table th': {
							padding: '.125rem',
							textShadow: 'none',
							fontWeight: 'normal',
							fontSize: '1.2rem',
							color: 'var(--mc-color-gray-4)',
						},
						'table td': {
							position: 'relative',
							padding: '0 0.25rem',
							color: 'var(--mc-color-white)',
							borderWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 24))',
							borderImage: 'var(--mc-gui-slot)',
							borderImageWidth: 'calc(var(--mc-block-size) / var(--mc-gui-zoom, 24))',
							borderImageSlice: '33.5% 33.5% fill',
							borderImageRepeat: 'stretch',
						}
					},
				},
			},
		},
	},
  plugins: [
    require('@tailwindcss/typography'),
		mcUtilityPlugin
  ],
}
