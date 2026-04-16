import styles from './Specials.module.css';

const pills = [
  { icon: '🍖', label: 'Mon–Tue: Boerewors Monday — R99' },
  { icon: '🥩', label: 'Wed: Half-Price Ribs Night' },
  { icon: '🍺', label: 'Thu: R35 Craft Beer Happy Hour 17–19h' },
  { icon: '🔥', label: 'Fri: Fire-Grilled Tomahawk Special — R499' },
  { icon: '👨‍👩‍👧', label: 'Sun: Family Braai Platter R299' },
];

export default function Specials() {
  return (
    <section id="specials" className={styles.specials}>
      <div className={styles.left}>
        <div className={`${styles.eyebrow} eyebrow`}>Weekly Specials</div>
        <h2 className={styles.title}>
          DEALS WORTH<br />COMING BACK FOR
        </h2>
        <p className={styles.body}>
          Every night at Vuur &amp; Vleis is an occasion. Our weekly specials celebrate the best of South African produce at prices that keep the whole table happy.
        </p>
        <div className={styles.pills}>
          {pills.map(p => (
            <div key={p.label} className={styles.pill}>
              <span>{p.icon}</span>
              {p.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.featureBox}>
          <div className={styles.featureTag}>This Week Only</div>
          <div className={styles.featureName}>The Vuur Feast</div>
          <div className={styles.featureDesc}>
            Tomahawk + 2 sides + craft beer flight + dessert for two.<br />
            A full fire experience at a celebration price.
          </div>
          <div className={styles.featurePrice}>R899 <span>for two</span></div>
          <button
            className={styles.featureBtn}
            onClick={() => {
              const el = document.querySelector('#book');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book the Feast →
          </button>
        </div>
      </div>
    </section>
  );
}
