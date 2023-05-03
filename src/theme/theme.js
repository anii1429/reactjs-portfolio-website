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
      color: '#fca311',
    },
    h2: {
      fontSize: '30px',
      fontWeight: 600,
      color: '#ef233c',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#666666',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#000000',
    },
  },
  palette: {
    primary: {
      main: '#fca311',
    },
    secondary: {
      main: '#ef233c',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
      disabled: '#cfcfcf',
    },
    background: {
      default: '#ffffff',
      paper: '#cfcfcf',
    },
  },
});

export default theme;
