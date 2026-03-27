import { Link } from 'react-router-dom';


function AboutPreviewSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.eyebrow}>About Cenk Mimarlık</p>
        <h2 style={styles.heading}>Modern villa construction with a Bodrum perspective</h2>
        <p style={styles.text}>
          Cenk Mimarlik is a Bodrum-based construction company specializing in villa
          construction and villa renovation. We focus on clean design, quality materials, and
          comfortable living spaces that reflect the modern Bodrum lifestyle.
        </p>
        <Link to="/about" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Learn More</button>
        </Link>
      </div>
    </section>
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
    textAlign: 'center',
  },
  eyebrow: {
    fontSize: '14px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#8a7f73',
    marginBottom: '12px',
  },
  heading: {
    fontSize: '40px',
    lineHeight: '1.2',
    color: '#111111',
    marginBottom: '24px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555555',
    marginBottom: '32px',
  },
  button: {
    padding: '14px 28px',
    border: 'none',
    backgroundColor: '#111111',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
  },
};

export default AboutPreviewSection;