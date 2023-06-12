
import Cursor from './components/Cursor'; // Cursor import
import NavBar from './components/NavBar'; // Navbar import
import Hero from './components/Hero'; // Hero import
import ScrollToExplore from './components/ScrollToExplore'; // Scrol To Explore import
import PortfolioSection from './components/PortfolioSection' // Portfolio Section import
import About from './components/About' // About import
import Projects from './components/Projects' // Projects import
import Skills from './components/Skills' // Skills import
import Testimonials from './components/Testimonials' // Testimonials import
import Contact from './components/Contact' // Contact import
import Footer from './components/Footer' // Footer import


import './index.css';

function App() {
  return (
    <div>

    <Cursor />
    <NavBar />
    <Hero />
    <ScrollToExplore />
    <PortfolioSection/>
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
    <Footer />

    </div>
  );
}

export default App;
