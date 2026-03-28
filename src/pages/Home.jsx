import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutPreviewSection from '../components/AboutPreviewSection';
import CtaSection from '../components/CtaSection';
import heroVilla from '../assets/images/hero-villa.jpg';

function Home() {
  return (
    <>
      <Navbar />

      <section style={styles.hero}>
        <img src={heroVilla} alt="Luxury villa in Bodrum" style={styles.heroImage} />
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          <p style={styles.eyebrow}>Cenk Mimarlık · Bodrum</p>

          <h1 style={styles.title}>
            Luxury Villa
            <br />
            Construction in Bodrum
          </h1>

          <p style={styles.subtitle}>
            We build modern two-storey villas and deliver high-quality renovation
            services with a clean architectural approach.
          </p>

          <div style={styles.buttons}>
            <Link to="/projects" style={styles.linkReset}>
              <button style={styles.primaryButton}>View Projects</button>
            </Link>

            <Link to="/contact" style={styles.linkReset}>
              <button style={styles.secondaryButton}>Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ProjectsSection />
      <AboutPreviewSection />
      <CtaSection />
      <Footer />
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '92vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.30))',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#ffffff',
    padding: '0 24px',
    maxWidth: '860px',
  },
  eyebrow: {
    fontSize: '13px',
    letterSpacing: '2.4px',
    textTransform: 'uppercase',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.88)',
  },
  title: {
    fontSize: '72px',
    lineHeight: '1.02',
    marginBottom: '24px',
    fontWeight: '600',
    letterSpacing: '-1.5px',
  },
  subtitle: {
    fontSize: '20px',
    lineHeight: '1.8',
    marginBottom: '36px',
    color: 'rgba(255, 255, 255, 0.92)',
    maxWidth: '720px',
    marginInline: 'auto',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  linkReset: {
    textDecoration: 'none',
  },
  primaryButton: {
    padding: '15px 30px',
    border: 'none',
    backgroundColor: '#c8a97e',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.3px',
    cursor: 'pointer',
    borderRadius: '8px',
  },
  secondaryButton: {
    padding: '15px 30px',
    border: '1px solid rgba(255, 255, 255, 0.85)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.3px',
    cursor: 'pointer',
    borderRadius: '8px',
    backdropFilter: 'blur(4px)',
  },
};

export default Home;