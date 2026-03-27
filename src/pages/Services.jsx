import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
  const services = [
    {
      title: 'Villa Construction',
      description:
        'We build modern two-storey villas in Bodrum with a focus on quality materials, elegant design, and comfortable living spaces.',
    },
    {
      title: 'Villa Renovation',
      description:
        'We renovate existing villas to create updated, modern, and functional homes while preserving architectural character.',
    },
    {
      title: 'Project Planning',
      description:
        'We approach each project with careful planning, attention to detail, and a clear understanding of the client’s goals.',
    },
  ];

  return (
    <>
      <Navbar />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Our Services</h1>
          <p style={styles.intro}>
            We provide villa-focused construction and renovation services in Bodrum, with an
            emphasis on clean design, quality workmanship, and modern living.
          </p>

          <div style={styles.grid}>
            {services.map((service) => (
              <div key={service.title} style={styles.card}>
                <h2 style={styles.cardTitle}>{service.title}</h2>
                <p style={styles.cardText}>{service.description}</p>
              </div>
            ))}
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
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#111111',
  },
  intro: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555555',
    maxWidth: '800px',
    marginBottom: '48px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#f8f6f2',
    padding: '32px',
    borderRadius: '12px',
    border: '1px solid #ece7df',
  },
  cardTitle: {
    fontSize: '24px',
    color: '#111111',
    marginBottom: '16px',
  },
  cardText: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#555555',
  },
};

export default Services;