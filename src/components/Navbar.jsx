import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Cenk Mimarlık</div>

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
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px 48px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
  },
  logo: {
    fontSize: '26px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    color: '#111111',
  },
  links: {
    display: 'flex',
    gap: '28px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#222222',
    fontSize: '15px',
    fontWeight: '500',
    letterSpacing: '0.3px',
  },
};

export default Navbar;