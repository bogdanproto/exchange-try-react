import { createTheme } from '@mui/material/styles';
import { cyan, grey } from '@mui/material/colors';

import PlayRegularWoff2 from '../../fonts/fonts/play-regular.woff2';
import PlayBoldWoff2 from '../../fonts/fonts/play-bold.woff2';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: cyan[800],

      contrastText: grey[200],
    },
    text: {
      primary: grey[200],
    },

    secondary: {
      main: '#000000',
    },
    success: {
      main: grey[200],
    },
    info: {
      main: cyan[900],
    },
  },

  typography: {
    fontFamily: 'Play',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Play';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Play Regular'), local('Play Regular'), url(${PlayRegularWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Play';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Play Bold'), local('Play Bold'), url(${PlayBoldWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: grey[400],
            background: cyan[900],
            '&:hover': {
              background: cyan[900],
            },
          },

          color: grey[400],
        },
      },
    },
    //-----------Styles BottomNavigation----------
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            // fontSize: '24',
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: grey[400],
        },
      },
    },
  },
});
