import { useReveal } from '../hooks/useReveal';
import styles from './Visit.module.css';

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
      <div className={`reveal`} ref={leftRef}>
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
          ⚠️ Kitchen closes 30 minutes before closing time. Reservations strongly recommended on weekends.
        </p>
      </div>

      <div className={`reveal`} ref={rightRef}>
        <div className="eyebrow">Find Us</div>
        <h2 className="section-title">HATFIELD, <em>PRETORIA</em></h2>
        <div className={styles.locationCard}>
          <div className={styles.locRow}>
            <span className={styles.locIcon}>📍</span>
            <div>
              <span className={styles.locLabel}>Address</span>
              123 Burnett Street, Hatfield, Pretoria, 0083
            </div>
          </div>
          <div className={styles.locRow}>
            <span className={styles.locIcon}>📞</span>
            <div>
              <span className={styles.locLabel}>Reservations</span>
              <a href="tel:+27123456789">+27 12 345 6789</a>
            </div>
          </div>
          <div className={styles.locRow}>
            <span className={styles.locIcon}>✉️</span>
            <div>
              <span className={styles.locLabel}>Email</span>
              <a href="mailto:reservations@vuurenvleis.co.za">reservations@vuurenvleis.co.za</a>
            </div>
          </div>
          <div className={styles.locRow}>
            <span className={styles.locIcon}>🅿️</span>
            <div>
              <span className={styles.locLabel}>Parking</span>
              Free on-site parking · Hatfield Square nearby
            </div>
          </div>
          <div className={styles.locLinks}>
            <a
              href="https://maps.google.com/?q=Hatfield+Pretoria"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locLink}
            >
              Open in Google Maps →
            </a>
            <a
              href="https://wa.me/27123456789"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locLink}
            >
              WhatsApp Enquiry →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
