import { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Motion', href: '#motion' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-1px' }}>
          ZAID<span style={{ color: 'var(--accent-vibrant)' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-muted)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="glass" style={{ padding: '10px 24px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
            Let's talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none' }}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>

      {/* Mobile Menu Overlay could be added here */}
    </nav>
  );
};

export default Navbar;
