import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, ExternalLink, MessageCircle, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const contactLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/zaid-jauffer/',
        icon: <Linkedin size={22} />,
        color: '#0077B5'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/zaidjauffer/',
        icon: <Instagram size={22} />,
        color: '#E4405F'
    },
    {
        name: 'Email',
        url: 'mailto:zaidjauffer07@gmail.com',
        icon: <Mail size={22} />,
        color: '#EA4335'
    },
    {
        name: 'Behance',
        url: 'https://www.behance.net/Zaid_Jauffer',
        icon: <ExternalLink size={22} />,
        color: '#1769FF'
    },
    {
        name: 'WhatsApp',
        url: 'https://wa.me/0741966790',
        icon: <MessageCircle size={22} />,
        color: '#25D366'
    }
];

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <motion.div
                    className="contact-header-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="contact-kicker">GET IN TOUCH</span>
                    <h2 className="contact-headline">LET'S CONNECT</h2>
                    <p className="contact-subtext">Feel free to reach out directly through any of the platforms below.</p>
                </motion.div>

                <div className="contact-cards-grid">
                    {contactLinks.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.url}
                            target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="contact-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div className="contact-card-icon" style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <span className="contact-card-name">{item.name}</span>
                            <div className="contact-card-arrow">
                                <ArrowUpRight size={18} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
