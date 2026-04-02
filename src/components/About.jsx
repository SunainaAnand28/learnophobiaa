import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-image-glow glass-card">
                        <div className="about-avatar">
                            <span style={{ fontSize: '4rem' }}>👨‍💻</span>
                        </div>
                        <div className="about-decoration shape-a"></div>
                        <div className="about-decoration shape-b"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        About <span className="gradient-text">Learnophobiaa</span>
                    </h2>
                    <p className="about-text">
                        We believe that learning complex computer concepts shouldn't be intimidating.
                        Learnophobiaa is dedicated to breaking down difficult software, hardware, and
                        programming topics into digestible, engaging, and visually stunning tutorials.
                    </p>
                    <p className="about-text">
                        Whether you are a beginner taking your first steps into code, or a seasoned
                        developer looking to brush up on computer science fundamentals, you will find
                        a welcoming space here to learn without fear.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <h3 className="gradient-text">65+</h3>
                            <span>Tutorials</span>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">Deep</h3>
                            <span>Dives</span>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">Zero</h3>
                            <span>Fear</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
