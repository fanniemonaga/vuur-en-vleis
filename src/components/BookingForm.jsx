import { useState } from 'react';
import styles from './BookingForm.module.css';

const TIME_SLOTS = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00',
];

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again or call us directly.');
      setStatus('error');
    }
  };

  return (
    <section id="book" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className="eyebrow">Reservations</div>
          <h2 className="section-title">BOOK YOUR <em>TABLE</em></h2>
          <p className={styles.sub}>
            Reserve your spot around the fire. Walk-ins welcome, but weekends fill fast. Booking takes 30 seconds.
          </p>
          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <div className={styles.infoLabel}>Response Time</div>
                <div className={styles.infoValue}>Confirmation within 2 hours</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>👥</span>
              <div>
                <div className={styles.infoLabel}>Large Groups</div>
                <div className={styles.infoValue}>10+ guests — call us directly</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <div className={styles.infoLabel}>Prefer to call?</div>
                <div className={styles.infoValue}>
                  <a href="tel:+27123456789">+27 12 345 6789</a>
                </div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>💬</span>
              <div>
                <div className={styles.infoLabel}>WhatsApp</div>
                <div className={styles.infoValue}>
                  <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3>Reservation Received!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>. We've received your booking request for <strong>{form.date}</strong> at <strong>{form.time}</strong>. You'll receive a confirmation at <strong>{form.email}</strong> within 2 hours.
              </p>
              <p className={styles.successSub}>We look forward to seeing you at the fire.</p>
              <button className={styles.resetBtn} onClick={() => { setStatus('idle'); setForm({ name:'',email:'',phone:'',date:'',time:'',guests:'2',message:'' }); }}>
                Make Another Booking
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Full Name <span className={styles.req}>*</span></label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={set('name')} required />
                </div>
                <div className={styles.field}>
                  <label>Email Address <span className={styles.req}>*</span></label>
                  <input type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} required />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+27 XX XXX XXXX" value={form.phone} onChange={set('phone')} />
                </div>
                <div className={styles.field}>
                  <label>Number of Guests <span className={styles.req}>*</span></label>
                  <select value={form.guests} onChange={set('guests')}>
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Preferred Date <span className={styles.req}>*</span></label>
                  <input type="date" min={today()} value={form.date} onChange={set('date')} required />
                </div>
                <div className={styles.field}>
                  <label>Preferred Time <span className={styles.req}>*</span></label>
                  <select value={form.time} onChange={set('time')} required>
                    <option value="">Select a time</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <label>Special Requests</label>
                <textarea
                  placeholder="Dietary requirements, occasion, seating preferences…"
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                />
              </div>
              {errorMsg && <div className={styles.error}>{errorMsg}</div>}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>Sending Reservation…</>
                ) : (
                  <>
                    Confirm Reservation
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
              <p className={styles.privacy}>
                Your details are used solely for your reservation. We never share or sell your data.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
