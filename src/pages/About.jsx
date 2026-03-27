import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>About Cenk Mimarlik</h1>

          <p style={styles.text}>
            Cenk Mimarlik is a Bodrum-based construction company specializing in
            modern villa construction and renovation. We focus on creating
            high-quality, elegant living spaces that reflect the unique
            architectural style of Bodrum.
          </p>

          <p style={styles.text}>
            With years of experience in residential construction, we are
            committed to delivering projects that combine functionality,
            aesthetics, and durability.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  title: {
    fontSize: '48px',
    marginBottom: '24px',
    color: '#111111',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555555',
    marginBottom: '20px',
  },
};

export default About;