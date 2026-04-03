import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiYoutube, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <p className="contact-desc">
                        Have questions, feedback, or want to suggest a tutorial topic?
                        Drop a message or connect with us on social media.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FiMail size={20} />
                            </div>
                            <div>
                                <h4>Email Us</h4>
                                <p>learnophobiaa@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FiMapPin size={20} />
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>India</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="YouTube"><FiYoutube size={22} /></a>
                        <a href="#" className="social-link" aria-label="Twitter"><FiTwitter size={22} /></a>
                        <a href="#" className="social-link" aria-label="GitHub"><FiGithub size={22} /></a>
                        <a href="#" className="social-link" aria-label="LinkedIn"><FiLinkedin size={22} /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper glass-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">System ID / Name</label>
                            <input type="text" id="name" placeholder="Enter your name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Transmission Email</label>
                            <input type="email" id="email" placeholder="Enter your email address" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message Payload</label>
                            <textarea id="message" rows="5" placeholder="Typing your message..." required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Transmit Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
