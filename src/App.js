import NavBar from './pages/NavBar';
import HomePage from './pages/Home';
// import About from './pages/About';
// import Skills from './pages/Skills';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
// import Projects from './pages/Projects';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    {/* 
    <Route path="/skills" element={<Skills />} /> */}
    </Routes>
    </>
  );
}

export default App;
