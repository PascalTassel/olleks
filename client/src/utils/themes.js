import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const themes = {
  dark: {
    ...darkTheme,
    palette: {
      ...darkTheme.palette,
      text: {
        ...darkTheme.palette.text,
        primary: 'rgba(255,255,255,.8)',
      },
      primary: {
        ...darkTheme.palette.primary,
        main: '#2492be',
        light: 'rgb(79, 167, 203)',
        dark: 'rgb(25, 102, 133)',
        contrastText: 'rgba(255,255,255,0.87)',
      },
      background: {
        default: '#121212',
        paper: '#121212',
        component: '#1e1e1e',
      },
    },
  },
  light: {
    ...lightTheme,
    palette: {
      ...lightTheme.palette,
      background: {
        default: '#ededed',
        paper: '#fff',
        component: '#f7f7f7',
      },
    },
  },
};

const getTheme = (mode) => ({
  ...themes[mode],
  palette: {
    ...themes[mode].palette,
    header: {
      main: '#121212',
      contrastText: '#fff',
    },
    sheet: {
      main: '#121212',
      contrastText: '#fff',
    },
  },
  typography: {
    ...themes[mode].typography,
    h1: {
      ...themes[mode].typography.h1,
      fontSize: '2.8rem',
      color: themes[mode].palette.primary.main,
      marginBottom: '.5em',
    },
    h2: {
      ...themes[mode].typography.h2,
      fontSize: '2rem',
      marginBottom: '.5em',
    },
    h3: {
      ...themes[mode].typography.h3,
      fontSize: '1.75rem',
      fontWeight: 300,
      marginBottom: '.5em',
    },
    h4: {
      ...themes[mode].typography.h4,
      fontSize: '1.5rem',
      fontWeight: 300,
      marginBottom: '.5em',
    },
    h5: {
      ...themes[mode].typography.h5,
      fontSize: '1.25rem',
      fontWeight: 300,
      marginBottom: '.5em',
    },
    h6: {
      ...themes[mode].typography.h6,
      fontSize: '1rem',
      marginBottom: '.5em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TjASc3CsTKlA.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TjASc-CsTKlA.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TjASc2CsTKlA.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TjASc5CsTKlA.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TjASc1CsTKlA.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TjASc0CsTKlA.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xMIzIFKw.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xLIzIFKw.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xHIzIFKw.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xGIzIFKw.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xIIzI.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ACc3CsTKlA.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ACc-CsTKlA.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ACc2CsTKlA.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ACc5CsTKlA.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ACc1CsTKlA.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ACc0CsTKlA.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBic3CsTKlA.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBic-CsTKlA.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBic2CsTKlA.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBic5CsTKlA.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBic1CsTKlA.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBic0CsTKlA.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* HAND SCRIPT */
        /* thai */
        @font-face {
          font-family: 'Sriracha';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/sriracha/v8/0nkrC9D4IuYBgWcI9NbLTwHSoQ.woff2) format('woff2');
          unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Sriracha';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/sriracha/v8/0nkrC9D4IuYBgWcI9NbQTwHSoQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Sriracha';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/sriracha/v8/0nkrC9D4IuYBgWcI9NbRTwHSoQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Sriracha';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/sriracha/v8/0nkrC9D4IuYBgWcI9NbfTwE.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    },
  },
});

export default getTheme;
