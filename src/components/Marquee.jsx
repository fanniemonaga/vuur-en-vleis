import styles from './Marquee.module.css';

const items = [
  'Live Fire Grilling',
  'Authentic Braai Culture',
  'Premium Aged Cuts',
  'SA Craft Drinks',
  'Open Daily 12–22:00',
  'Private Events Welcome',
  'Pretoria Hatfield',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep} />
          </span>
        ))}
      </div>
    </div>
  );
}
