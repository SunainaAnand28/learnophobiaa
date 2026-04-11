import React from 'react';
import { motion } from 'framer-motion';
import { FiList, FiPlay } from 'react-icons/fi';
import './Playlists.css';

const PLAYLISTS = [
    { id: 1, title: 'IT Tool and Network Basics', count: 6, color: 'var(--primary)' },
    { id: 2, title: 'Basics of Programming', count: 3, color: '#8a6cbd' },
    { id: 3, title: 'Software Requirement Specification', count: 1, color: '#aa8de3' },
    { id: 4, title: 'HTML CSS Basic Projects', count: 3, color: '#3e2070' },
];

const Playlists = () => {
    return (
        <section className="playlists-section" id="playlists">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Popular <span className="gradient-text">Playlists</span></h2>
                    <p className="section-subtitle">Curated learning paths for every skill level.</p>
                </motion.div>

                <div className="playlists-grid">
                    {PLAYLISTS.map((playlist, index) => (
                        <motion.div
                            key={playlist.id}
                            className="playlist-card glass-card magnetic-hover"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="playlist-icon" style={{ background: playlist.color }}>
                                <FiList size={24} color="white" />
                            </div>
                            <div className="playlist-info">
                                <h3 className="playlist-title">{playlist.title}</h3>
                                <span className="playlist-count">{playlist.count} Videos</span>
                            </div>
                            <button className="play-btn">
                                <FiPlay size={20} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Playlists;
