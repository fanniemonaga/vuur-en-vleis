// Vercel Serverless Function — /api/reserve
// Receives reservation POST, validates, returns confirmation.
// Optionally wire up Resend/SendGrid for real email notifications.

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, date, time, guests, message } = req.body || {};

  // Validation
  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'Name, email, date and time are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  // ─────────────────────────────────────────────────────────────
  // OPTIONAL: Send email notification using Resend
  // 1. npm install resend
  // 2. Add RESEND_API_KEY to your Vercel environment variables
  // 3. Uncomment the block below
  // ─────────────────────────────────────────────────────────────
  /*
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'reservations@vuurenvleis.co.za',
    to: ['reservations@vuurenvleis.co.za'],
    subject: `New Reservation: ${name} — ${date} at ${time}`,
    html: `
      <h2>New Reservation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Message:</strong> ${message || 'None'}</p>
    `,
  });

  // Also send guest confirmation
  await resend.emails.send({
    from: 'reservations@vuurenvleis.co.za',
    to: [email],
    subject: `Reservation Received — Vuur & Vleis`,
    html: `
      <h2>We'll see you at the fire, ${name}!</h2>
      <p>Your reservation request has been received:</p>
      <ul>
        <li>Date: ${date}</li>
        <li>Time: ${time}</li>
        <li>Guests: ${guests}</li>
      </ul>
      <p>We'll confirm within 2 hours. If you need to reach us: +27 12 345 6789</p>
    `,
  });
  */

  return res.status(200).json({
    success: true,
    message: `Reservation received for ${name} on ${date} at ${time}.`,
  });
}
