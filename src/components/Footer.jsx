import styles from './Footer.module.css';

const navLinks = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#specials', label: 'Specials' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit Us' },
  { href: '#book', label: 'Reservations' },
];

const socials = [
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: '◎' },
  { label: 'TripAdvisor', href: '#', icon: '✦' },
  { label: 'WhatsApp', href: 'https://wa.me/27123456789', icon: '💬' },
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
            {socials.map(s => (
              <a key={s.label} href={s.href} className={styles.social} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.icon}
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
        <p>© {new Date().getFullYear()} Vuur & Vleis. All rights reserved. Pretoria, South Africa.</p>
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
