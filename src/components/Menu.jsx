import { useState, useEffect, useRef } from 'react';
import { MENU, CATEGORIES } from '../data/menu';
import styles from './Menu.module.css';

const PAGE_SIZE = 9;

function MenuCard({ item }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <div className={styles.cardImg}>
        <img src={item.img} alt={item.alt} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTag}>{item.tag}</div>
        <div className={styles.cardName}>{item.name}</div>
        <div className={styles.cardDesc}>{item.desc}</div>
        <div className={styles.cardFoot}>
          <span className={styles.cardPrice}>{item.price}</span>
          <span className={styles.cardBadge}>{item.badge}</span>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('all');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = active === 'all' ? MENU : MENU.filter(i => i.cat === active);
  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - visible;

  const handleFilter = (key) => {
    setActive(key);
    setVisible(PAGE_SIZE);
  };

  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.header}>
        <div>
          <div className="eyebrow">The Menu</div>
          <h2 className="section-title">FIRE-CRAFTED <em>DISHES</em></h2>
        </div>
        <div className={styles.cats} id="menuCats">
          {CATEGORIES.map(c => (
            <button
              key={c.key}
              className={`${styles.catBtn} ${active === c.key ? styles.catActive : ''}`}
              onClick={() => handleFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {shown.map((item, i) => <MenuCard key={`${item.name}-${i}`} item={item} />)}
      </div>

      <div className={styles.footer}>
        <span className={styles.tally}>
          Showing {shown.length} of {filtered.length} items
        </span>
        {remaining > 0 && (
          <button
            className={styles.loadBtn}
            onClick={() => setVisible(v => v + PAGE_SIZE)}
          >
            Load {Math.min(remaining, PAGE_SIZE)} More
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
