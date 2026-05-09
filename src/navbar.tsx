import { memo, useCallback, useState, useEffect } from 'react';
import './navbar.css';
import logo from './assets/logo_text.png';

type NavbarProps = {
  setPage: (page: number) => void;
  hideLinks?: boolean;
};

const Navbar = memo(({ setPage, hideLinks }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useCallback((page: number) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  }, [setPage]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const pages = [
    { name: 'Home', idx: 0 },
    { name: 'About', idx: 1 },
    { name: 'Projects', idx: 2 },
    { name: 'Join Us', idx: 3 },
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Merryweather Technologies Logo"
          onClick={() => navigate(0)}
        />
      </div>

      {/* Desktop Navigation */}
      {!hideLinks && (
        <div className="navbar-links desktop-only">
          {pages.map((p) => (
            <button
              key={p.idx}
              className="nav-button modern"
              onClick={() => navigate(p.idx)}
            >
              {p.name}
            </button>
          ))}
        </div>
      )}

      <div className="navbar-actions">
        {/* Theme Toggle Button */}
        <button className="icon-button" onClick={toggleTheme} aria-label="Toggle Theme">
          {isDarkMode ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </button>

        {/* Mobile Hamburger Menu */}
        {!hideLinks && (
          <button
            className="icon-button mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        )}
      </div>

      {/* Mobile Sidebar */}
      {!hideLinks && (
        <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <button className="icon-button close-menu" onClick={() => setIsMobileMenuOpen(false)}>
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div className="sidebar-links">
            {pages.map((p) => (
              <button
                key={p.idx}
                className="nav-button modern"
                onClick={() => navigate(p.idx)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dark Overlay for when sidebar is open */}
      {!hideLinks && isMobileMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </nav>
  );
});

export default Navbar;