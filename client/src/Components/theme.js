import {createTheme} from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#32b2b7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d2c457',
    },
  },
});
