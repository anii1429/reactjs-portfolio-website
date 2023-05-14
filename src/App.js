import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ExperiencePage from './pages/Experience';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutMe />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/experience" element={<ExperiencePage />} />
    </Routes>
    </>
  );
}

export default App;
