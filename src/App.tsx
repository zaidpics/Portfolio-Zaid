import { useEffect } from 'react';
import Lenis from 'lenis';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import Work from './components/Work';
import MotionReel from './components/MotionReel';
import CV from './components/CV';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <FloatingNavbar />
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <Work />
        <MotionReel />
        <CV />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
