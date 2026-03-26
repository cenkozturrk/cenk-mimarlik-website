function ServicesSections(){
    const services = [
        {
            title: 'Villa Construction',
            description:
                'We build modern two-storey villas in Bodrum with a focus on quality, comfort, and elegant design.',
        },
        {
            title: 'Villa Renovation',
            description:        
                'We transform existing villas into modern living spaces with high-quality renovation solutions.',
        },
    ];

    return(
        <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.eyebrow}>Our Services</p>
        <h2 style={styles.heading}>What We Do</h2>
        <div style={styles.grid}>
          {services.map((service) => (
            <div key={service.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
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
  eyebrow: {
    fontSize: '14px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#8a7f73',
    marginBottom: '12px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '40px',
    color: '#111111',
    textAlign: 'center',
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

export default ServicesSection;
