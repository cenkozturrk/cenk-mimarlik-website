import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import heroVilla from '../assets/images/hero-villa.jpg';
import ProjectsSection from '../components/ProjectsSection';

function Home() {
  return (
    <>
      <Navbar />
      <section style={styles.hero}>
        <img src={heroVilla} alt="Luxury villa in Bodrum" style={styles.heroImage} />
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          <h1 style={styles.title}>Luxury Villa Construction in Bodrum</h1>
          <p style={styles.subtitle}>
            We build modern two-storey villas and deliver high-quality renovation services.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primaryButton}>View Projects</button>
            <button style={styles.secondaryButton}>Contact</button>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '90vh',
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
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#ffffff',
    padding: '0 20px',
    maxWidth: '900px',
  },
  title: {
    fontSize: '64px',
    lineHeight: '1.1',
    marginBottom: '20px',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: '22px',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '14px 28px',
    border: 'none',
    backgroundColor: '#c8a97e',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
  },
  secondaryButton: {
    padding: '14px 28px',
    border: '1px solid #ffffff',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
  },
};

export default Home;