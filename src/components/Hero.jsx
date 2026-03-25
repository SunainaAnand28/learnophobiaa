import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiYoutube, FiPlayCircle } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="hero-section" id="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Learn <span className="gradient-text">Without Fear</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Master tech, programming, and complex computer concepts in a futuristic learning universe. Join the journey to demystify code.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a href="https://youtube.com/@learnophobiaa" target="_blank" rel="noreferrer" className="btn btn-primary magnetic-hover">
                            <FiYoutube size={20} /> Watch on YouTube
                        </a>
                        <a href="#videos" className="btn btn-secondary magnetic-hover">
                            <FiPlayCircle size={20} /> Explore Tutorials
                        </a>
                    </motion.div>
                </motion.div>

                {/* Floating elements inside hero for parallax */}
                <motion.div className="hero-floating-elements" style={{ y: y1 }}>
                    <div className="glass-card hero-card card-1">
                        <div className="card-icon">⚡</div>
                        <span>Hardware</span>
                    </div>
                    <div className="glass-card hero-card card-2">
                        <div className="card-icon">💻</div>
                        <span>Software</span>
                    </div>
                </motion.div>

                <motion.div className="hero-floating-elements right" style={{ y: y2 }}>
                    <div className="glass-card hero-card card-3">
                        <div className="card-icon">🚀</div>
                        <span>Programming</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
