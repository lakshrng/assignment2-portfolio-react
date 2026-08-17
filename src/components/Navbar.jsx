import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMoon } from 'react-icons/io';
import { MdWbSunny } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);

      if (!mobileView) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="logo" aria-label="Laksh home">
          Laksh
        </Link>

        {(isMobile ? menuOpen : true) && (
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <IoMdMoon /> : <MdWbSunny />}
        </button>

        {isMobile && (
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prevState) => !prevState)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        )}
      </nav>
    </header>
  );
}
