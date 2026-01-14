import { motion } from 'framer-motion';

import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                {/* Left Side: Text */}
                <motion.div
                    className="contact-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="contact-title">
                        Get in<br />
                        <span className="serif-italic">Touch</span>
                    </h2>
                    <p className="contact-message">
                        Great ideas deserve exceptional visuals.<br />
                        Let's create something incredible together!
                    </p>
                </motion.div>

                {/* Right Side: Form Card */}
                <motion.div
                    className="contact-right"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="glass-form-card">
                        <h3 className="form-header">CONTACT</h3>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={4} placeholder=""></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
