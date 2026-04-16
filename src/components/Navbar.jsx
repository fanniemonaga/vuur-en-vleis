import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#specials', label: 'Specials' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.compact : ''}`}>
        <a href="#hero" className={styles.logo} onClick={e => handleNav(e, '#hero')}>
          VUUR <em>&amp;</em> VLEIS
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleNav(e, l.href)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.navRight}>
          <div className={styles.divider} />
          <a href="#book" className={styles.cta} onClick={e => handleNav(e, '#book')}>
            Reserve a Table
          </a>
          <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Open menu">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        <button className={styles.mobileClose} onClick={() => setOpen(false)} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={e => handleNav(e, l.href)}>{l.label}</a>
        ))}
        <a href="#book" className={styles.mobileCta} onClick={e => handleNav(e, '#book')}>
          Reserve a Table
        </a>
      </div>
    </>
  );
}
