import styles from './Footer.module.css';

const navLinks = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#specials', label: 'Specials' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit Us' },
  { href: '#book', label: 'Reservations' },
];

// Proper SVG brand icons
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);
const IconTripadvisor = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
  </svg>
);

const socials = [
  { label: 'Facebook',    href: '#',                              Icon: IconFacebook },
  { label: 'Instagram',   href: '#',                              Icon: IconInstagram },
  { label: 'TripAdvisor', href: '#',                              Icon: IconTripadvisor },
  { label: 'WhatsApp',    href: 'https://wa.me/27123456789',      Icon: IconWhatsApp },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>VUUR <em>&</em> VLEIS</div>
          <p className={styles.tagline}>
            Pretoria's home of live-fire cooking.<br />
            Where every meal is an occasion.
          </p>
          <div className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colHead}>Quick Links</div>
          <ul>
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colHead}>Contact</div>
          <ul className={styles.contactList}>
            <li>123 Burnett Street, Hatfield</li>
            <li>Pretoria, 0083</li>
            <li><a href="tel:+27123456789">+27 12 345 6789</a></li>
            <li><a href="mailto:reservations@vuurenvleis.co.za">reservations@vuurenvleis.co.za</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colHead}>Hours</div>
          <ul className={styles.hoursList}>
            <li><span>Mon – Tue</span><span>12:00 – 21:00</span></li>
            <li><span>Wed – Thu</span><span>12:00 – 22:00</span></li>
            <li><span>Friday</span><span>12:00 – 23:00</span></li>
            <li><span>Saturday</span><span>11:00 – 23:00</span></li>
            <li><span>Sunday</span><span>11:00 – 21:00</span></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Vuur &amp; Vleis. All rights reserved. Pretoria, South Africa.</p>
        <p className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Service</a>
          <span>·</span>
          <a href="#">Allergen Information</a>
        </p>
      </div>
    </footer>
  );
}
