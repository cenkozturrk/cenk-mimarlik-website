import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';

function Projects() {
  const projects = [
    {
      title: 'Sea View Villa',
      location: 'Bodrum',
      year: '2023',
      image: project1,
    },
    {
      title: 'Luxury Family Villa',
      location: 'Bodrum',
      year: '2022',
      image: project2,
    },
    {
      title: 'Modern Stone Villa',
      location: 'Bodrum',
      year: '2022',
      image: project3,
    },
    {
      title: 'Hillside Villa',
      location: 'Bodrum',
      year: '2021',
      image: project4,
    },
  ];

  return (
    <>
      <Navbar />

      <section style={styles.section}>
        <div style={styles.container}>
          <h1 style={styles.title}>Our Projects</h1>

          <div style={styles.grid}>
            {projects.map((project) => (
              <div key={project.title} style={styles.card}>
                <img src={project.image} alt={project.title} style={styles.image} />

                <div style={styles.content}>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  <p style={styles.meta}>
                    {project.location} · {project.year}
                  </p>
                </div>
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
    backgroundColor: '#f9f7f4',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '48px',
    marginBottom: '40px',
    color: '#111111',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #ece7df',
  },
  image: {
    width: '100%',
    height: '260px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '22px',
    marginBottom: '8px',
    color: '#111111',
  },
  meta: {
    fontSize: '16px',
    color: '#666666',
  },
};

export default Projects;