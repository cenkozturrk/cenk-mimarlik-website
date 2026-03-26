import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';

function ProjectsSection() {
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
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.eyebrow}>Selected Projects</p>
        <h2 style={styles.heading}>Recent Work</h2>

        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} style={styles.card}>
              <img
                src={project.image}
                alt={project.title}
                style={styles.image}
              />
              <div style={styles.content}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.meta}>
                  {project.location} · {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #ece7df',
  },
  image: {
    width: '100%',
    height: '260px',
    objectFit: 'cover',
    display: 'block',
  },
  content: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    color: '#111111',
    marginBottom: '8px',
  },
  meta: {
    fontSize: '16px',
    color: '#666666',
  },
};

export default ProjectsSection;