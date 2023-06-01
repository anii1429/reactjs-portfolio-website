import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ExperiencePage from './pages/Experience';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import { useState } from 'react';

function App() {
  const [currentTheme,setCurrentTheme] = useState("light")
  
  return (
    <>
    <ThemeProvider theme={currentTheme=="light" ? lightTheme : darkTheme}>
    <NavBar setCurrentTheme={setCurrentTheme}  currentTheme={currentTheme}/>
    <Routes>
    <Route path="/" element={<HomePage currentTheme={currentTheme} />} />
    <Route path="/about" element={<AboutMe currentTheme={currentTheme} />} />
    <Route path="/projects" element={<Projects currentTheme={currentTheme} />} />
    <Route path="/experience" element={<ExperiencePage currentTheme={currentTheme} />} />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
