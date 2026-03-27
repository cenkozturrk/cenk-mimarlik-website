import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Contact Us</h1>

          <p style={styles.text}>
            Get in touch with us to discuss your villa construction or renovation project in Bodrum.
          </p>

          <div style={styles.grid}>
            {/* Contact Info */}
            <div style={styles.info}>
              <h3 style={styles.infoTitle}>Contact Information</h3>
              <p style={styles.infoText}>Bodrum, Turkey</p>
              <p style={styles.infoText}>Phone: +90 532 283 55 78</p>
              <p style={styles.infoText}>Email: info@cenkmimarlik.com</p>
            </div>

            {/* Contact Form */}
            <form style={styles.form}>
              <input type="text" placeholder="Your Name" style={styles.input} />
              <input type="email" placeholder="Your Email" style={styles.input} />
              <textarea placeholder="Your Message" style={styles.textarea}></textarea>

              <button type="submit" style={styles.button}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#f9f7f4',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#111111',
  },
  text: {
    fontSize: '18px',
    marginBottom: '40px',
    color: '#555555',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  info: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #ece7df',
  },
  infoTitle: {
    fontSize: '22px',
    marginBottom: '16px',
  },
  infoText: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#555555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '6px',
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    minHeight: '120px',
    border: '1px solid #ddd',
    borderRadius: '6px',
  },
  button: {
    padding: '14px',
    backgroundColor: '#111111',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '6px',
  },
};

export default Contact;