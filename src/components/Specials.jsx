import styles from './Specials.module.css';

// SVG icons — no emojis
const IconFire = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z"/>
    <path d="M12 12c0 2-2 3-2 5a2 2 0 0 0 4 0c0-2-2-3-2-5z"/>
  </svg>
);
const IconMeat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l4-4 9 9-4 4-9-9z"/>
    <path d="M14 4l3 3"/>
    <path d="M7 17l-4 4"/>
    <circle cx="17" cy="7" r="3"/>
  </svg>
);
const IconBeer = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
    <path d="M9 12v6"/>
    <path d="M13 12v6"/>
    <path d="M5 7l1-1h12l1 1v2H5V7z"/>
    <path d="M5 9v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/>
  </svg>
);
const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const specials = [
  {
    day: 'Mon – Tue',
    title: 'Boerewors Monday',
    desc: '500g house boerewors + pap + chakalaka',
    price: 'R99',
    Icon: IconMeat,
    img: 'https://i.pinimg.com/1200x/19/6f/4c/196f4c748a830fb6a513d782eca69497.jpg',
  },
  {
    day: 'Wednesday',
    title: 'Half-Price Ribs Night',
    desc: 'Full rack honey mustard ribs, all evening',
    price: '50% off',
    Icon: IconFire,
    img: 'https://i.pinimg.com/1200x/31/f2/3d/31f23d5ffbd7e269df83e6b1bcaa5566.jpg',
  },
  {
    day: 'Thursday',
    title: 'Craft Beer Happy Hour',
    desc: 'Any draft or craft bottle 17:00 – 19:00',
    price: 'R35',
    Icon: IconBeer,
    img: 'https://i.pinimg.com/1200x/75/4f/2d/754f2dfaf40a4ba384cad2248d25c315.jpg',
  },
  {
    day: 'Friday',
    title: 'Tomahawk Friday',
    desc: '1kg+ aged tomahawk, two sides included',
    price: 'R499',
    Icon: IconFire,
    img: 'https://www.tastingtable.com/img/gallery/grilled-tomahawk-rib-eye-steak-with-fines-herb-compound-butter-recipe/l-intro-1700693699.jpg',
  },
  {
    day: 'Sunday',
    title: 'Family Braai Platter',
    desc: 'Wors, chops, sosaties, pap & sides for 4',
    price: 'R299',
    Icon: IconUsers,
    img: 'https://www.functionfoods.co.za/wp-content/uploads/2020/07/image-1024x1024.png',
  },
];

export default function Specials() {
  return (
    <section id="specials" className={styles.specials}>
      {/* Left — title + cards */}
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Weekly Specials
        </div>
        <h2 className={styles.title}>
          DEALS WORTH<br />COMING BACK FOR
        </h2>
        <p className={styles.body}>
          Every night at Vuur &amp; Vleis is an occasion. Our weekly specials celebrate the best of South African produce at prices that keep the whole table happy.
        </p>

        <div className={styles.cards}>
          {specials.map(s => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardImgWrap}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className={styles.cardImgOverlay} />
                <span className={styles.dayTag}>{s.day}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardIcon}><s.Icon /></div>
                <div className={styles.cardInfo}>
                  <div className={styles.cardTitle}>{s.title}</div>
                  <div className={styles.cardDesc}>{s.desc}</div>
                </div>
                <div className={styles.cardPrice}>{s.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — feature box */}
      <div className={styles.right}>
        <div className={styles.featureBox}>
          <div className={styles.featureTag}>
            <IconStar /> This Week Only
          </div>
          <div className={styles.featureImgWrap}>
            <img
              src="https://i.pinimg.com/1200x/cb/cc/b4/cbccb4d5a9f1c5b1b2d8f7e3a4d2c1e0.jpg"
              alt="The Vuur Feast — Tomahawk for two"
              loading="lazy"
            />
            <div className={styles.featureImgOverlay} />
          </div>
          <div className={styles.featureName}>The Vuur Feast</div>
          <div className={styles.featureDesc}>
            Tomahawk + 2 sides + craft beer flight + dessert for two.
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
            Book the Feast
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M1 1l6 5.5-6 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
