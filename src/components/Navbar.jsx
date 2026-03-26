import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Cenk Mimarlik</div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #e5e5e5',
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111111',
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    textDecoration: 'none',
    color: '#111111',
    fontSize: '16px',
  },
};

export default Navbar;