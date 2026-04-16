import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Visit from './components/Visit';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Specials />
        <Gallery />
        <Testimonials />
        <Visit />
        <BookingForm />
      </main>
      <Footer />
      <a
        href="https://wa.me/27123456789"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position:'fixed',bottom:'2rem',right:'2rem',zIndex:9999,
          background:'#25D366',color:'#fff',width:'52px',height:'52px',
          borderRadius:'50%',display:'flex',alignItems:'center',
          justifyContent:'center',fontSize:'1.5rem',
          boxShadow:'0 4px 20px rgba(0,0,0,0.35)',
          transition:'transform 0.2s',textDecoration:'none',
        }}
        onMouseEnter={e=>e.currentTarget.style.transform='scale(1.1)'}
        onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
        aria-label="WhatsApp"
      >💬</a>
    </>
  );
}
