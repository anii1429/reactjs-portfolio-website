import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '45px',
      fontWeight: 700,
      color: '#3f51b5',
    },
    h2: {
      fontSize: '30px',
      fontWeight: 600,
      color: '#3f51b5',
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
    mode: 'light', // Default mode is set to light
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Set the button text color for light theme
        },
      },
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '45px',
      fontWeight: 700,
      color: '#e0e0e0',
    },
    h2: {
      fontSize: '30px',
      fontWeight: 600,
      color: '#FFFF00',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#e0e0e0',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#e0e0e0',
    },
    h5:{
      color:"#FFFF00"
    },
    h6:{
      color:"#FFFF00"
    }
  },
  palette: {
    mode: 'dark', // Switches to dark mode
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#6a1b9a',
    },
    text: {
      primary: '#e0e0e0',
      secondary: 'white',
      disabled: '#616161',
    },
    background: {
      default: '#121212',
      paper: '#212121',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000000', // Set the button text color for dark theme
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
