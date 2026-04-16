# 🔥 Vuur & Vleis — React Website

> Pretoria's finest live-fire grill & braai restaurant. Built with React + Vite, deployed on Vercel.

## Stack

- **Frontend:** React 18 + Vite + CSS Modules
- **Backend:** Vercel Serverless Functions (`/api/reserve.js`)
- **Email (optional):** Resend.com
- **Hosting:** Vercel

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev
# → Opens at http://localhost:5173
```

---

## Deploy to Vercel (5 minutes)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click **Deploy** — done ✅

---

## Enable Real Email Notifications (Optional)

1. Sign up free at [resend.com](https://resend.com) (500 emails/month free)
2. Get your API key
3. In Vercel Dashboard → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = `re_your_key_here`
   - `RESTAURANT_EMAIL` = `reservations@yourdomain.co.za`
4. Open `api/reserve.js` and uncomment the Resend block

---

## Project Structure

```
vuur-en-vleis/
├── api/
│   └── reserve.js          ← Vercel serverless function (booking API)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/.module.css
│   │   ├── Hero.jsx/.module.css
│   │   ├── Marquee.jsx/.module.css
│   │   ├── About.jsx/.module.css
│   │   ├── Menu.jsx/.module.css
│   │   ├── Specials.jsx/.module.css
│   │   ├── Gallery.jsx/.module.css
│   │   ├── Testimonials.jsx/.module.css
│   │   ├── Visit.jsx/.module.css
│   │   ├── BookingForm.jsx/.module.css
│   │   └── Footer.jsx/.module.css
│   ├── data/
│   │   └── menu.js         ← All 51 menu items
│   ├── hooks/
│   │   └── useReveal.js    ← Intersection Observer scroll animations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           ← Global tokens + utilities
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── vercel.json
├── .env.example
└── package.json
```

---

## Grow Online — Recommended Next Steps

| Action | Tool | Cost |
|--------|------|------|
| Accept online bookings by email | Resend | Free 500/mo |
| Store bookings in a database | Supabase | Free tier |
| Website analytics | Vercel Analytics | Free |
| Google Business Profile | Google | Free |
| Accept online payments / deposits | Stripe | Pay per use |

---

## Customisation

- **Menu items** → edit `src/data/menu.js`
- **Opening hours** → edit `src/components/Visit.jsx`
- **Specials** → edit `src/components/Specials.jsx`
- **Phone / address** → search for `27123456789` and replace with your number
- **Primary colour** → change `--ember` in `src/index.css`
