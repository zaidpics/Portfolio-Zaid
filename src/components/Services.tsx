import { motion } from 'framer-motion';
import { Palette, Code2, Rocket, Layout } from 'lucide-react';

const services = [
    {
        icon: <Palette size={32} />,
        title: 'Brand Identity',
        desc: 'Crafting unique visual stories that resonate with your target audience and build lasting impressions.'
    },
    {
        icon: <Layout size={32} />,
        title: 'UI/UX Design',
        desc: 'Designing intuitive, aesthetically pleasing interfaces that provide seamless user experiences across all devices.'
    },
    {
        icon: <Code2 size={32} />,
        title: 'Web Development',
        desc: 'Building high-performance, responsive websites using modern technologies and clean code practices.'
    },
    {
        icon: <Rocket size={32} />,
        title: 'Digital Strategy',
        desc: 'Planning and executing data-driven strategies to help your business grow and thrive in the digital landscape.'
    }
];

const Services = () => {
    return (
        <section id="services" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '60px', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Our <span className="italic-highlight">Services</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Combining design and technology to deliver outstanding digital solutions.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            style={{ padding: '40px', borderRadius: '32px', transition: 'background 0.3s ease' }}
                            className="glass"
                            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent-vibrant)'}
                            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                        >
                            <div style={{ color: 'var(--accent-vibrant)', marginBottom: '24px' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
