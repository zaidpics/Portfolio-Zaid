import { motion } from 'framer-motion';
import './CV.css';

const experiences = [
    {
        role: "MOTION GRAPHIC DESIGNER",
        company: "SPA CEYLON – INTERNATIONAL",
        period: "Jan 2025 – Present",
        description: "Create high-quality motion graphics and brand visuals for campaigns, product launches, and digital ads. Translate brand identity into cinematic motion-led storytelling for social and marketing platforms."
    },
    {
        role: "CREATIVE / BRAND DESIGNER",
        company: "VISUAL STUDIOS PLUS",
        period: "Feb 2024 – Dec 2024",
        description: "Designed brand identities, logo systems, and packaging/product visuals for multiple clients. Delivered cohesive brand direction, visual systems, and marketing-ready assets."
    },
    {
        role: "CREATIVE DESIGNER",
        company: "FOXLABS DIGITAL MARKETING",
        period: "Apr 2022 – Feb 2023",
        description: "Produced branding assets, logos, social media creatives, and campaign visuals in a fast-paced agency setting. Focused on brand consistency and strong visual storytelling."
    },
    {
        role: "FREELANCE BRAND & LOGO DESIGNER",
        company: "FIVERR / FREELANCER.COM / DESIGNCROWD",
        period: "Jan 2021 – Present",
        description: "Worked with international clients on logo design, brand identity systems, and product/packaging-related design deliverables, tailored to client goals and brand positioning."
    }
];

const tools = [
    "After Effects", "Premiere Pro", "Photoshop", "Illustrator", "InDesign", "Blender"
];

const coreFocus = [
    "Brand Identity", "Logo Design", "Product Design", "Packaging Design", "Campaign Visuals", "Motion Design", "Typography"
];

const education = [
    {
        degree: "DIPLOMA IN DIGITAL MARKETING",
        institution: "ICBT Campus",
        year: "2022"
    },
    {
        degree: "DIPLOMA IN GRAPHIC DESIGNING",
        institution: "ESOFT Metro Campus",
        year: "2019"
    },
    {
        degree: "GRAPHIC DESIGNING & MS OFFICE",
        institution: "Future World IPS",
        year: "2018"
    }
];

const CV = () => {
    return (
        <section className="cv-section" id="resume">
            <div className="cv-container">

                {/* Section Header */}
                <motion.div
                    className="cv-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="cv-title">CURRICULUM VITAE</h2>
                    <div className="cv-underline"></div>
                </motion.div>

                <div className="cv-grid">
                    {/* Left Column: Experience */}
                    <div className="cv-left">
                        <h3 className="cv-column-title">PROFESSIONAL HISTORY</h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4 className="role-title">{exp.role}</h4>
                                            <span className="period">{exp.period}</span>
                                        </div>
                                        <h5 className="company-name">{exp.company}</h5>
                                        <p className="description">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Skills & Education */}
                    <div className="cv-right">

                        {/* Technical Arsenal */}
                        <motion.div
                            className="cv-block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="cv-column-title">TECHNICAL ARSENAL</h3>

                            <div className="skills-group">
                                <h4 className="skills-subtitle">TOOLS</h4>
                                <div className="skills-cloud">
                                    {tools.map((tool, i) => (
                                        <span key={i} className="skill-pill">{tool}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skills-group">
                                <h4 className="skills-subtitle">CORE FOCUS</h4>
                                <div className="skills-cloud">
                                    {coreFocus.map((skill, i) => (
                                        <span key={i} className="skill-pill">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <div className="cv-divider"></div>

                        {/* Education */}
                        <motion.div
                            className="cv-block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="cv-column-title">EDUCATION</h3>
                            <div className="education-list">
                                {education.map((edu, index) => (
                                    <div key={index} className="education-item">
                                        <h4 className="edu-degree">{edu.degree}</h4>
                                        <div className="edu-details">
                                            <span>{edu.institution}</span>
                                            <span className="edu-year">{edu.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Background Texture similar to Hero/About */}
            <div className="cv-bg-grid"></div>
        </section>
    );
};

export default CV;
