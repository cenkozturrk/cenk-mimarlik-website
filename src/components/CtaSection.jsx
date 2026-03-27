function CtaSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Start your project with us</h2>
        <p style={styles.text}>
          Contact us to discuss your villa construction or renovation project in Bodrum.
        </p>
        <button style={styles.button}>Contact Us</button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#f5f1eb',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '42px',
    color: '#111111',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#555555',
    lineHeight: '1.8',
    marginBottom: '32px',
  },
  button: {
    padding: '14px 28px',
    border: 'none',
    backgroundColor: '#c8a97e',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
  },
};

export default CtaSection;