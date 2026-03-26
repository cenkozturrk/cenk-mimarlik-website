import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.title}>Luxury Villa Construction in Bodrum</h1>
        <p style={styles.subtitle}>
          We build modern two-storey villas and deliver high-quality renovation services.
        </p>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#111111',
  },
  subtitle: {
    fontSize: '20px',
    maxWidth: '700px',
    color: '#555555',
    lineHeight: '1.6',
  },
};

export default Home;