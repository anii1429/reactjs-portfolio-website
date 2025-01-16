import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ExperiencePage from './pages/Experience';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import { useEffect, useState } from 'react';
import ServicesPage from './pages/Services';
import ContactPage from './pages/ContactMe';

function App() {
  const [currentTheme, setCurrentTheme] = useState("light")

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor =
      currentTheme === 'dark' ? darkTheme.palette.background.default : lightTheme.palette.background.default;
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <NavBar setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
        <Routes>
          <Route path="/" element={<HomePage currentTheme={currentTheme} />} />
          <Route path="/about" element={<AboutMe currentTheme={currentTheme} />} />
          <Route path="/projects" element={<Projects currentTheme={currentTheme} />} />
          <Route path="/experience" element={<ExperiencePage currentTheme={currentTheme} />} />
          <Route path="/services" element={<ServicesPage currentTheme={currentTheme} />} />
          <Route path="/contact" element={<ContactPage currentTheme={currentTheme} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
