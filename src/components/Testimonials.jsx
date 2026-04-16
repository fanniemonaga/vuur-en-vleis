import { useReveal } from '../hooks/useReveal';
import styles from './Testimonials.module.css';

const reviews = [
  {
    stars: 5,
    text: "Best braai experience in Pretoria, full stop. The tomahawk was perfectly charred outside, blush pink inside. That bone marrow butter... I'm still dreaming about it.",
    name: 'Thabo M.',
    meta: 'Google Review · Verified',
    location: 'Pretoria East',
  },
  {
    stars: 5,
    text: "Took my family for a Sunday lunch — the Braai Platter for Two easily fed three of us. The chakalaka was homemade, the pap was silky. Staff were warm and genuinely proud of the food.",
    name: 'Anelize van der Berg',
    meta: 'TripAdvisor · Top Reviewer',
    location: 'Centurion',
  },
  {
    stars: 5,
    text: "We hosted a corporate dinner for 24 people. The private dining setup was immaculate, the service flawless. Every single guest commented on the food. We'll be back every quarter.",
    name: 'Marcus T.',
    meta: 'Google Review · Verified',
    location: 'Sandton',
  },
  {
    stars: 5,
    text: "As a vegetarian, I usually dread braai restaurants. Not here. The halloumi skewers and chargrilled cauliflower steak were genuinely outstanding. Finally a place that treats veggies with respect.",
    name: 'Priya S.',
    meta: 'Google Review · Verified',
    location: 'Hatfield',
  },
  {
    stars: 5,
    text: "The Flaming Espresso Martini is a showstopper. The whole table went quiet when it arrived. Wednesday ribs night is now a standing booking for our friend group.",
    name: 'Riaan Botha',
    meta: 'Facebook Review',
    location: 'Menlyn',
  },
  {
    stars: 5,
    text: "Espetada on a laurel branch, open flame table — theatrical and delicious. The wine pairing with the Pinotage blend was spot on. This place has real soul.",
    name: 'Lindiwe K.',
    meta: 'TripAdvisor · Verified',
    location: 'Midrand',
  },
];

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const headRef = useReveal();
  return (
    <section id="testimonials" className={styles.section}>
      <div className={`reveal`} ref={headRef}>
        <div className="eyebrow">What Guests Say</div>
        <h2 className="section-title">4.8★ ON <em>GOOGLE</em></h2>
        <p className={styles.sub}>Over 1,200 verified reviews from real guests.</p>
      </div>
      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
      <div className={styles.trust}>
        {['Google 4.8★', 'TripAdvisor Certificate of Excellence', 'Best Braai Pretoria 2023', 'SA Gourmet Awards Nominee'].map(t => (
          <div key={t} className={styles.trustBadge}>{t}</div>
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const ref = useReveal();
  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <Stars count={review.stars} />
      <p className={styles.text}>"{review.text}"</p>
      <div className={styles.reviewer}>
        <div className={styles.avatar}>{review.name[0]}</div>
        <div>
          <div className={styles.name}>{review.name}</div>
          <div className={styles.meta}>{review.meta} · {review.location}</div>
        </div>
      </div>
    </div>
  );
}
