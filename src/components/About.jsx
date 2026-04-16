import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

const pillars = [
  { icon: '🔥', title: 'Live Fire', desc: 'Every dish touched by real flame — no shortcuts, no shortcuts.' },
  { icon: '🥩', title: 'Premium Cuts', desc: 'Locally sourced, dry-aged beef and game from trusted SA farms.' },
  { icon: '🌿', title: 'Heritage Recipes', desc: 'Classic braai traditions passed down, refined over 12 years.' },
  { icon: '🍺', title: 'SA Craft Bar', desc: 'Curated local craft beers, wines, and signature cocktails.' },
];

export default function About() {
  const imgRef = useReveal();
  const bodyRef = useReveal();

  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.imgWrap} reveal`} ref={imgRef}>
        <img
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Chef grilling over live coals at Vuur en Vleis"
          loading="lazy"
        />
        <div className={styles.badge}>
          <div className={styles.badgeNum}>12+</div>
          <div className={styles.badgeSub}>Years of Fire</div>
        </div>
      </div>

      <div className={`${styles.body} reveal`} ref={bodyRef}>
        <div className="eyebrow">Our Story</div>
        <h2 className="section-title">
          BORN FROM THE <em>BRAAI</em>
        </h2>
        <p>
          Vuur &amp; Vleis was born from a simple obsession: <strong>the perfect South African braai.</strong> Since 2012, we've been honouring the art of live-fire cooking in Pretoria — blending traditional braai culture with the precision of a fine dining kitchen.
        </p>
        <p>
          Our pitmasters source exclusively from <strong>local farms and craft producers</strong>. Every cut is hand-selected, every marinade made in-house, every flame carefully tended. This is not fast food. This is fire food.
        </p>

        <div className={styles.pillars}>
          {pillars.map(p => (
            <div key={p.title} className={styles.pillar}>
              <div className={styles.pillarHead}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <span className={styles.pillarTitle}>{p.title}</span>
              </div>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
