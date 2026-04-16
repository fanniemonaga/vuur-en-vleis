import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1800&q=85"
          alt="Flames and grilling meat at Vuur en Vleis"
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          Pretoria's Finest Grill &amp; Braai
        </div>
        <h1>
          WHERE FIRE
          <em>MEETS FLAVOUR</em>
        </h1>
        <p className={styles.sub}>
          Authentic South African braai culture, elevated. Premium cuts, live fire, and generations of heritage — served in the heart of Pretoria.
        </p>
        <div className={styles.actions}>
          <button className="btn-primary" onClick={() => scrollTo('#book')}>
            Reserve a Table
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('#menu')}>
            View Menu
          </button>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNum}>12+</div>
          <div className={styles.statLabel}>Years Firing</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>51</div>
          <div className={styles.statLabel}>Menu Items</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>4.8★</div>
          <div className={styles.statLabel}>Google Rating</div>
        </div>
      </div>
    </section>
  );
}
