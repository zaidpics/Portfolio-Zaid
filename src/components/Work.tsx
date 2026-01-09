import { motion } from 'framer-motion';
import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';

const projects = [
    {
        title: 'Aurum Luxury Collective',
        category: 'UI/UX Design',
        image: project1,
        color: '#D4AF37'
    },
    {
        title: 'Aurora Creative Agency',
        category: 'Mobile App',
        image: project2,
        color: '#7241ff'
    },
    {
        title: 'Nexus Logic Branding',
        category: 'Visual Identity',
        image: project3,
        color: '#00D1FF'
    }
];

const Work = () => {
    return (
        <section id="work">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Selected Work</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>A collection of projects that define my creative journey.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer' }}
                            className="glass"
                        >
                            <div style={{ height: '400px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '30px', position: 'relative' }}>
                                <span style={{ color: project.color, fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 500px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Work;
