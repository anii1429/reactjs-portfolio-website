// import HomePage from './pages/Home';
// import About from './pages/About';
import Skills from './pages/Skills';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ExperiencePage from './pages/Experience';
import ContactMe from './pages/ContactMe';
// import Projects from './pages/Projects';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutMe />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/experience" element={<ExperiencePage />} />
    <Route path="/contactme" element={<ContactMe />} />
    </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;
