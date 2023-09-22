import plugin from 'tailwindcss/plugin.js';
import defaultTheme from 'tailwindcss/defaultTheme.js';

export const colors = {
	base: {
		White: '#ffffff',
		Black: '#000000'
	},
	primary: {
		Gray: {
			25: '#FCFCFD',
			50: '#F9FAFB',
			100: '#F2F4F7',
			200: '#EAECF0',
			300: '#D0D5DD',
			400: '#98A2B3',
			500: '#667085',
			600: '#475467',
			700: '#344054',
			800: '#1D2939',
			900: '#101828'
		},
		Primary: {
			25: '#FCFAFF',
			50: '#F9F5FF',
			100: '#F4EBFF',
			200: '#E9D7FE',
			300: '#D6BBFB',
			400: '#B692F6',
			500: '#9E77ED',
			600: '#7F56D9',
			700: '#6941C6',
			800: '#53389E',
			900: '#42307D'
		},
		Error: {
			25: '#FFFBFA',
			50: '#FEF3F2',
			100: '#FEE4E2',
			200: '#FECDCA',
			300: '#FDA29B',
			400: '#F97066',
			500: '#F04438',
			600: '#D92D20',
			700: '#B42318',
			800: '#912018',
			900: '#7A271A'
		},
		Warning: {
			25: '#FFFCF5',
			50: '#FFFAEB',
			100: '#FEF0C7',
			200: '#FEDF89',
			300: '#FEC84B',
			400: '#FDB022',
			500: '#F79009',
			600: '#DC6803',
			700: '#B54708',
			800: '#93370D',
			900: '#7A2E0E'
		},
		Success: {
			25: '#F6FEF9',
			50: '#ECFDF3',
			100: '#D1FADF',
			200: '#A6F4C5',
			300: '#6CE9A6',
			400: '#32D583',
			500: '#12B76A',
			600: '#039855',
			700: '#027A48',
			800: '#05603A',
			900: '#054F31'
		}
	},
	secondary: {
		'Gray blue': {
			25: '#FCFCFD',
			50: '#F8F9FC',
			100: '#EAECF5',
			200: '#D5D9EB',
			300: '#B3B8DB',
			400: '#717BBC',
			500: '#4E5BA6',
			600: '#3E4784',
			700: '#363F72',
			800: '#293056',
			900: '#101323'
		},
		'Gray cool': {
			25: '#FCFCFD',
			50: '#F9F9FB',
			100: '#EFF1F5',
			200: '#DCDFEA',
			300: '#B9C0D4',
			400: '#7D89B0',
			500: '#5D6B98',
			600: '#4A5578',
			700: '#404968',
			800: '#30374F',
			900: '#111322'
		},
		'Gray modern': {
			25: '#FCFCFD',
			50: '#F8FAFC',
			100: '#EEF2F6',
			200: '#E3E8EF',
			300: '#CDD5DF',
			400: '#9AA4B2',
			500: '#697586',
			600: '#4B5565',
			700: '#364152',
			800: '#202939',
			900: '#121926'
		},
		'Gray neutral': {
			25: '#FCFCFD',
			50: '#F9FAFB',
			100: '#F3F4F6',
			200: '#E5E7EB',
			300: '#D2D6DB',
			400: '#9DA4AE',
			500: '#6C737F',
			600: '#4D5761',
			700: '#384250',
			800: '#1F2A37',
			900: '#111927'
		},
		'Gray iron': {
			25: '#FCFCFC',
			50: '#FAFAFA',
			100: '#F4F4F5',
			200: '#E4E4E7',
			300: '#D1D1D6',
			400: '#A0A0AB',
			500: '#70707B',
			600: '#51525C',
			700: '#3F3F46',
			800: '#26272B',
			900: '#18181B'
		},
		'Gray true': {
			25: '#FCFCFC',
			50: '#FAFAFA',
			100: '#F5F5F5',
			200: '#E5E5E5',
			300: '#D6D6D6',
			400: '#A3A3A3',
			500: '#737373',
			600: '#525252',
			700: '#424242',
			800: '#292929',
			900: '#141414'
		},
		'Gray warm': {
			25: '#FDFDFC',
			50: '#FAFAF9',
			100: '#F5F5F4',
			200: '#E7E5E4',
			300: '#D7D3D0',
			400: '#A9A29D',
			500: '#79716B',
			600: '#57534E',
			700: '#44403C',
			800: '#292524',
			900: '#1C1917'
		},
		Moss: {
			25: '#FAFDF7',
			50: '#F5FBEE',
			100: '#E6F4D7',
			200: '#CEEAB0',
			300: '#ACDC79',
			400: '#86CB3C',
			500: '#669F2A',
			600: '#4F7A21',
			700: '#3F621A',
			800: '#335015',
			900: '#2B4212'
		},
		'Green light': {
			25: '#FAFEF5',
			50: '#F3FEE7',
			100: '#E4FBCC',
			200: '#D0F8AB',
			300: '#A6EF67',
			400: '#85E13A',
			500: '#66C61C',
			600: '#4CA30D',
			700: '#3B7C0F',
			800: '#326212',
			900: '#2B5314'
		},
		Green: {
			25: '#F6FEF9',
			50: '#EDFCF2',
			100: '#D3F8DF',
			200: '#AAF0C4',
			300: '#73E2A3',
			400: '#3CCB7F',
			500: '#16B364',
			600: '#099250',
			700: '#087443',
			800: '#095C37',
			900: '#084C2E'
		},
		Teal: {
			25: '#F6FEFC',
			50: '#F0FDF9',
			100: '#CCFBEF',
			200: '#99F6E0',
			300: '#5FE9D0',
			400: '#2ED3B7',
			500: '#15B79E',
			600: '#0E9384',
			700: '#107569',
			800: '#125D56',
			900: '#134E48'
		},
		Cyan: {
			25: '#F5FEFF',
			50: '#ECFDFF',
			100: '#CFF9FE',
			200: '#A5F0FC',
			300: '#67E3F9',
			400: '#22CCEE',
			500: '#06AED4',
			600: '#088AB2',
			700: '#0E7090',
			800: '#155B75',
			900: '#164C63'
		},
		'Blue light': {
			25: '#F6FEFC',
			50: '#F0FDF9',
			100: '#CCFBEF',
			200: '#99F6E0',
			300: '#5FE9D0',
			400: '#2ED3B7',
			500: '#15B79E',
			600: '#0E9384',
			700: '#107569',
			800: '#125D56',
			900: '#134E48'
		},
		Blue: {
			25: '#F5FBFF',
			50: '#F0F9FF',
			100: '#E0F2FE',
			200: '#B9E6FE',
			300: '#7CD4FD',
			400: '#36BFFA',
			500: '#0BA5EC',
			600: '#0086C9',
			700: '#026AA2',
			800: '#065986',
			900: '#0B4A6F'
		},
		'Blue dark': {
			25: '#F5F8FF',
			50: '#EFF4FF',
			100: '#D1E0FF',
			200: '#B2CCFF',
			300: '#84ADFF',
			400: '#528BFF',
			500: '#2970FF',
			600: '#155EEF',
			700: '#004EEB',
			800: '#0040C1',
			900: '#00359E'
		},
		Indigo: {
			25: '#F5F8FF',
			50: '#EEF4FF',
			100: '#E0EAFF',
			200: '#C7D7FE',
			300: '#A4BCFD',
			400: '#8098F9',
			500: '#6172F3',
			600: '#444CE7',
			700: '#3538CD',
			800: '#2D31A6',
			900: '#2D3282'
		},
		Violet: {
			25: '#FBFAFF',
			50: '#F5F3FF',
			100: '#ECE9FE',
			200: '#DDD6FE',
			300: '#C3B5FD',
			400: '#A48AFB',
			500: '#875BF7',
			600: '#7839EE',
			700: '#6927DA',
			800: '#5720B7',
			900: '#491C96'
		},
		Purple: {
			25: '#FAFAFF', // var(--css-variable)
			50: '#F4F3FF',
			100: '#EBE9FE',
			200: '#D9D6FE',
			300: '#BDB4FE',
			400: '#9B8AFB',
			500: '#7A5AF8',
			600: '#6938EF',
			700: '#5925DC',
			800: '#4A1FB8',
			900: '#3E1C96'
		},
		Fuchsia: {
			25: '#FEFAFF',
			50: '#FDF4FF',
			100: '#FBE8FF',
			200: '#F6D0FE',
			300: '#EEAAFD',
			400: '#E478FA',
			500: '#D444F1',
			600: '#BA24D5',
			700: '#9F1AB1',
			800: '#821890',
			900: '#6F1877'
		},
		Pink: {
			25: '#FEF6FB',
			50: '#FDF2FA',
			100: '#FCE7F6',
			200: '#FCCEEE',
			300: '#FAA7E0',
			400: '#F670C7',
			500: '#EE46BC',
			600: '#DD2590',
			700: '#C11574',
			800: '#9E165F',
			900: '#851651'
		},
		Rosé: {
			25: '#FFF5F6',
			50: '#FFF1F3',
			100: '#FFE4E8',
			200: '#FECDD6',
			300: '#FEA3B4',
			400: '#FD6F8E',
			500: '#F63D68',
			600: '#E31B54',
			700: '#C01048',
			800: '#A11043',
			900: '#89123E'
		},
		'Orange dark': {
			25: '#FFF9F5',
			50: '#FFF4ED',
			100: '#FFE6D5',
			200: '#FFD6AE',
			300: '#FF9C66',
			400: '#FF692E',
			500: '#FF4405',
			600: '#E62E05',
			700: '#BC1B06',
			800: '#97180C',
			900: '#771A0D'
		},
		Orange: {
			25: '#FEFAF5',
			50: '#FEF6EE',
			100: '#FDEAD7',
			200: '#F9DBAF',
			300: '#F7B27A',
			400: '#F38744',
			500: '#EF6820',
			600: '#E04F16',
			700: '#B93815',
			800: '#932F19',
			900: '#772917'
		},
		Yellow: {
			25: '#FEFDF0',
			50: '#FEFBE8',
			100: '#FEF7C3',
			200: '#FEEE95',
			300: '#FDE272',
			400: '#FAC515',
			500: '#EAAA08',
			600: '#CA8504',
			700: '#A15C07',
			800: '#854A0E',
			900: '#713B12'
		}
	}
};

type ColorObject = {
	[key: string]: string | ColorObject;
};

function hexToRgb(hex: string): string {
	// Parse the hex string, excluding the initial '#' (using slice(1)), as a base 16 (hexadecimal) number.
	// This will give us a number where the red channel is in the highest byte,
	// the green in the middle byte, and the blue in the lowest byte.
	// the parseInt converts the hex string from a 16-base string into a 10-base string
	const completeInt = parseInt(hex.slice(1), 16);
	// To extract the red channel:
	// 1. We shift the number 16 bits to the right (using '>> 16'). This moves the red byte to the lowest position.
	// 2. We then bitwise AND with 255 (binary 11111111) to keep only the last 8 bits.
	const r = (completeInt >> 16) & 255;
	// Similar to the red channel, but only shift 8 bits to the right to get the green byte to the lowest position.
	const g = (completeInt >> 8) & 255;
	// For the blue channel, since it's already in the lowest byte, we don't need to shift.
	// We just mask the lowest 8 bits to get the blue value.
	const b = completeInt & 255;

	return `'${r}, ${g}, ${b}'`;
}
function convertAllHexColorsToRGB(obj: ColorObject, parentKey?: string): ColorObject {
	const formatKey = (key: string): string => {
		const formattedParentKey = parentKey ? `${parentKey.toLowerCase().replace(' ', '-')}-` : '';
		return `--color-untld-${formattedParentKey}${key.toLowerCase()}`;
	};

	const newObj: ColorObject = {};

	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'string' && value.startsWith('#')) {
			newObj[key] = `'${formatKey(key)}': ${hexToRgb(value)}`.replace('"', '');
		} else if (typeof value === 'object') {
			newObj[key] = convertAllHexColorsToRGB(value, key);
		} else {
			newObj[key] = value;
		}
	}

	return newObj;
}

type StringMap = {
	[key: string]: string | StringMap;
};

function extractRootVariables(obj: StringMap): Record<string, string> {
	const root: Record<string, string> = {};

	function processObject(object: StringMap): void {
		for (const value of Object.values(object)) {
			if (typeof value === 'string') {
				const [key, val] = value.split(':').map((str) => str.replace(/['"]/g, '').trim());
				root[key] = val;
			} else {
				processObject(value);
			}
		}
	}

	processObject(obj);

	return root;
}

const colorsAsVars = convertAllHexColorsToRGB(colors);
const rootVariables = extractRootVariables(colorsAsVars);

function getVarColorFunction(varName: string) {
	return ({
		opacityVariable,
		opacityValue
	}: { opacityVariable?: string; opacityValue?: string } = {}) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${varName}), ${opacityValue})`;
		}
		if (opacityVariable !== undefined) {
			return `rgba(var(${varName}), var(${opacityVariable}, 1))`;
		}
		return `rgb(var(${varName}))`;
	};
}

const rootVariablesKeys = Object.keys(rootVariables);

// Initialize an empty object named `untld`.
const untld: { [key: string]: any } = {};

rootVariablesKeys.forEach((key) => {
	// Handle colors that match the following regex: (mainly primary and secondary colors, should also contain é)
	const matches = key.match(/--color-untld-([\p{L}-]+)-(\d+)/u);
	if (matches) {
		// Handle colors with shades
		const colorName = matches[1];
		const shade = matches[2];
		if (!untld[colorName]) {
			untld[colorName] = {};
		}
		untld[colorName][shade] = getVarColorFunction(key);
	} else {
		// Handle potential base colors without a shade and include letters like é
		const baseMatch = key.match(/--color-untld-([a-z\p{L}-]+)/u);
		if (baseMatch) {
			const baseColorName = baseMatch[1];
			if (!untld[baseColorName]) {
				const splitBaseColorName = baseColorName.split('-');
				untld[splitBaseColorName[1]] = getVarColorFunction(key);
			}
		}
	}
});
export default plugin(
	function ({ addBase }) {
		addBase({
			'@font-face': {
				'font-family': 'Inter',
				src: "url('assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf')",
				'font-weight': '1 999'
			},
			// add css variables to the root, so we can manipulate the colors within the docs, users will be able to do so as well
			':root': {
				...rootVariables
			}
		});
	},
	{
		theme: {
			extend: {
				colors: {
					untld
				},
				fontFamily: {
					sans: ['Inter', ...defaultTheme.fontFamily.sans]
				}
			}
		}
	}
);
