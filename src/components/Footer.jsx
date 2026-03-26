function Footer() {
  return (
    <footer style={styles.footer}>
      <h3 style={styles.title}>Cenk Mimarlik</h3>
      <p style={styles.text}>Luxury Villa Construction & Renovation in Bodrum</p>
      <p style={styles.text}>Bodrum, Turkey</p>
      <p style={styles.copy}>© 2026 Cenk Mimarlik. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '40px',
    textAlign: 'center',
    borderTop: '1px solid #e5e5e5',
    backgroundColor: '#fafafa',
    marginTop: '60px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '12px',
    color: '#111111',
  },
  text: {
    fontSize: '16px',
    marginBottom: '8px',
    color: '#555555',
  },
  copy: {
    fontSize: '14px',
    marginTop: '20px',
    color: '#888888',
  },
};

export default Footer;