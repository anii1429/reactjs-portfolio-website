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
    <ThemeProvider theme={darkTheme}>
    <NavBar setCurrentTheme={setCurrentTheme}  currentTheme={currentTheme}/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutMe />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/experience" element={<ExperiencePage />} />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
