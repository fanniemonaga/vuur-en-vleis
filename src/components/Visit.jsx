import { useReveal } from '../hooks/useReveal';
import styles from './Visit.module.css';

// SVG icons replacing all emojis
const IconMapPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconParking = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
  </svg>
);
const IconAlert = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconMap = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const hours = [
  { day: 'Monday – Tuesday', time: '12:00 – 21:00' },
  { day: 'Wednesday – Thursday', time: '12:00 – 22:00' },
  { day: 'Friday', time: '12:00 – 23:00' },
  { day: 'Saturday', time: '11:00 – 23:00' },
  { day: 'Sunday', time: '11:00 – 21:00' },
];

export default function Visit() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="visit" className={styles.visit}>
      <div className="reveal" ref={leftRef}>
        <div className="eyebrow">Opening Hours</div>
        <h2 className="section-title">PLAN YOUR <em>VISIT</em></h2>
        <div className={styles.hoursList}>
          {hours.map(h => (
            <div key={h.day} className={styles.hourRow}>
              <strong>{h.day}</strong>
              <span className={styles.hourTime}>{h.time}</span>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          <span className={styles.noteIcon}><IconAlert /></span>
          Kitchen closes 30 minutes before closing time. Reservations strongly recommended on weekends.
        </p>
      </div>

      <div className="reveal" ref={rightRef}>
        <div className="eyebrow">Find Us</div>
        <h2 className="section-title">HATFIELD, <em>PRETORIA</em></h2>
        <div className={styles.locationCard}>
          <div className={styles.locRow}>
            <span className={styles.locIcon}><IconMapPin /></span>
            <div>
              <span className={styles.locLabel}>Address</span>
              123 Burnett Street, Hatfield, Pretoria, 0083
            </div>
          </div>
          <div className={styles.locRow}>
            <span className={styles.locIcon}><IconPhone /></span>
            <div>
              <span className={styles.locLabel}>Reservations</span>
              <a href="tel:+27123456789">+27 12 345 6789</a>
            </div>
          </div>
          <div className={styles.locRow}>
            <span className={styles.locIcon}><IconMail /></span>
            <div>
              <span className={styles.locLabel}>Email</span>
              <a href="mailto:reservations@vuurenvleis.co.za">reservations@vuurenvleis.co.za</a>
            </div>
          </div>
          <div className={styles.locRow}>
            <span className={styles.locIcon}><IconParking /></span>
            <div>
              <span className={styles.locLabel}>Parking</span>
              Free on-site parking · Hatfield Square nearby
            </div>
          </div>
          <div className={styles.locLinks}>
            <a href="https://maps.google.com/?q=Hatfield+Pretoria" target="_blank" rel="noopener noreferrer" className={styles.locLink}>
              <IconMap /> Open in Google Maps
            </a>
            <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className={styles.locLink}>
              <IconWhatsApp /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
