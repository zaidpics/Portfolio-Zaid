import { useEffect } from 'react';
import Lenis from 'lenis';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import Work from './components/Work';
import MotionReel from './components/MotionReel';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        <Work />
        <MotionReel />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
