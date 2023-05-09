import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '45px',
      fontWeight: 700,
      color: '#3f51b5',
    },
    h2: {
      fontSize: '30px',
      fontWeight: 600,
      color: '#6a1b9a',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#424242',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#212121',
    },
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#6a1b9a',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});


export default theme;
