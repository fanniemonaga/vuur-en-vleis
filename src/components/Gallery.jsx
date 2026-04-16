import { useReveal } from '../hooks/useReveal';
import styles from './Gallery.module.css';

const frames = [
  { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80', label: 'Live Fire Grill Station' },
  { img: 'https://cdn.tasteatlas.com/images/dishes/21969a86fa63497ca7bd15dc0db7de6d.jpg', label: 'The Braai Pit' },
  { img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=700&q=80', label: 'Tomahawk, Fire-Finished' },
  { img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&q=80', label: 'Premium Cuts Selection' },
  { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80', label: 'The Full Braai Spread' },
  { img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80', label: 'Craft Bar Cocktails' },
  { img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=700&q=80', label: 'Ribeye, Just Right' },
  { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80', label: 'The Dining Experience' },
];

export default function Gallery() {
  const headRef = useReveal();

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={`${styles.head} reveal`} ref={headRef}>
        <div className="eyebrow">Gallery</div>
        <h2 className="section-title">FIRE IN <em>EVERY FRAME</em></h2>
      </div>
      <div className={styles.strip}>
        {frames.map((f, i) => (
          <div key={i} className={styles.frame}>
            <img src={f.img} alt={f.label} loading="lazy" />
            <div className={styles.label}>{f.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
