import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
    {
        title: 'Award Winning Skincare',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/e37d3f233781339.Y3JvcCwzODM1LDMwMDAsMzMyLDA.png",
        color: '#E31E24',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/287922233781339.68b69208abcdc.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/8d9955233781339.68b69208ab696.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/55c2b1233781339.68b69208ac400.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/87c822233781339.68b69208aaf7f.png"
        ]
    },
    {
        title: 'Does Your Skincare Hydrate',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/3eda2a233702835.Y3JvcCwzODM1LDMwMDAsODUsMA.png",
        color: '#7241ff',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/08b234233702835.68b5328ae9613.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/f6a8b6233702835.68b5328aea50f.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/ccb573233702835.68b5328aeac32.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/ee9e0b233702835.68b5328aeb1a7.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/c2f5ca233702835.68b5328ae9e46.png"
        ]
    },
    {
        title: 'SKINCARE CA',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/98d9b3233701945.Y3JvcCwzODM1LDMwMDAsODUsMA.png",
        color: '#00D1FF',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/502a73233701945.68b52cbe3bc1b.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/71bf17233701945.68b52cbe3ca7f.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/d09632233701945.68b52cbe3c10b.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/62b413233701945.68b52cbe3ae97.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/37c6ff233701945.68b52cbe3c5b3.png"
        ]
    },
    {
        title: 'Viral Dubai Chocolate branding | Concept 02',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/90febe216722323.Y3JvcCwyNTU2LDIwMDAsMCww.png",
        color: '#FFD700',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ccc40216722323.67851c141492f.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b2974d216722323.67851c1421aec.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/aa1577216722323.67851c1414425.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ee8f99216722323.67851c1413ed1.png"
        ]
    },
    {
        title: 'Social Media Artworks - Recognized Brands',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/236b45212129159.Y3JvcCwxMzgwLDEwODAsMjU2LDA.png",
        color: '#FF4D4D',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/9fded4212129159.672f9f1628a0e.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/847857212129159.672f8b5b7e296.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e4986d212129159.672f8b5b7ce83.png"
        ]
    },
    {
        title: 'Viral Dubai Chocolate Branding | Concept 01',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/b5825a215961161.Y3JvcCwyNTU2LDIwMDAsMTIsMA.png",
        color: '#8B4513',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1da614215961161.67851c7c02594.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1884af215961161.6777cc1069d30.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cf1935215961161.6777cc10690ae.png"
        ]
    },
    {
        title: 'Verdura | Jewellry Logo Identity',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/0fa2a3216725591.Y3JvcCwzNjUzLDI4NTgsNjY5LDA.jpg",
        color: '#2E8B57',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d1c141216725591.67852538cf7e4.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/299e88216725591.67852538cf02a.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/57530e216725591.67852538cea7e.png"
        ]
    },
    {
        title: 'Evolution Auto Logo Branding',
        category: 'Visual Design',
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/d76901211648989.Y3JvcCw1MDYsMzk1LDE5OSw3Nw.png",
        color: '#E31E24',
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/d7cb38211648989.67277cb196ab8.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4550c6211648989.67277dbb5037a.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/99cd54211648989.67277dbb52702.png"
        ]
    }
];

const Work = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openProject = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeProject = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

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
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>A collection of projects fetched directly from my Behance portfolio.</p>
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
                            onClick={() => openProject(project)}
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

            <ProjectModal
                isOpen={isModalOpen}
                onClose={closeProject}
                project={selectedProject}
            />

            <style>{`
        @media (max-width: 500px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Work;
