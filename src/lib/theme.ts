const gridUnit = 5;

const shadows = {
  medium: `
    shadow-color: #34485b;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.3;
    shadow-radius: 3;
    elevation: 5;
    `,
  mediumBlack: `
    shadow-color: #000000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.3;
    shadow-radius: 3;
    elevation: 5;`,
  banner: `
    shadow-color: #3b3b48;
    shadow-offset: 0px 1px;
    shadow-radius: 9;
    shadow-opacity: 0.3;
    elevation: 18;
    `,
};

const borderRadius = {
  small: 4,
};

export const theme = {
  gridUnit,
  colors: {
    transparent: 'transparent',
    lightBlackOpacity: '#00000066',
    white: '#ffffff',
    lightGray: '#e3e6e8',
    paleGray: '#f1f3f3',
    gray: '#969da2',
    mediumGray: '#2f393e',
    charcoalGray: '#464d52',
    outerSpaceGray: '#303a3f',
    darkGray: '#17242a',
    black: '#000000',
    semiTransparentBlack: '#00000080',
    primary: '#bd1622',
    secondary: '#f9e71c',
    error: '#fa5555',
    success: '#5bbf3f',
    successLight: '#ecfee7',
    skyBlue: '#1990dd',
    appleGreen: '#70cd5e',
    grassGreen: '#568b20',
    validGreen: '#6ee34e',
  },
  fontSizes: {
    tiny: 10,
    small: 12,
    medium: 14,
    large: 16,
    big: 18,
  },
  shadows,
  borderRadius,
};

export type Theme = typeof theme;
