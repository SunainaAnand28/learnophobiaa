import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import './YouTubeVideos.css';

// Mock data (since auto-fetch requires YouTube API key)
const VIDEO_DATA = [
    { id: '1', title: 'Understanding CPU Architecture', category: 'Hardware', thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: '2', title: 'React Performance Optimization', category: 'Software', thumb: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: '3', title: 'Python Basics in 10 Minutes', category: 'Programming', thumb: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: '4', title: 'How RAM Works visually explained', category: 'Hardware', thumb: 'https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: '5', title: 'CSS Grid vs Flexbox', category: 'Programming', thumb: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: '6', title: 'What is an API? - Basics', category: 'Basics', thumb: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: '7', title: 'Git & GitHub Shorts', category: 'Shorts', thumb: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: '8', title: 'Software Design Patterns', category: 'Software', thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
];

const CATEGORIES = ['All', 'Hardware', 'Software', 'Programming', 'Basics', 'Shorts'];

const YouTubeVideos = () => {
    const [filter, setFilter] = useState('All');

    const filteredVideos = filter === 'All'
        ? VIDEO_DATA
        : VIDEO_DATA.filter(video => video.category === filter);

    return (
        <section className="videos-section" id="videos">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Latest <span className="gradient-text">Tutorials</span></h2>
                    <p className="section-subtitle">Level up your skills with our deep dives.</p>
                </motion.div>

                <motion.div
                    className="filter-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="videos-grid">
                    <AnimatePresence>
                        {filteredVideos.map((video) => (
                            <motion.div
                                key={video.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="video-card glass-card"
                            >
                                <div className="video-thumb-wrapper">
                                    <img src={video.thumb} alt={video.title} className="video-thumb" />
                                    <div className="play-overlay">
                                        <FiPlay className="play-icon" />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <span className="video-category">{video.category}</span>
                                    <h3 className="video-title">{video.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="view-more-container">
                    <a href="https://youtube.com/@learnophobiaa" target="_blank" rel="noreferrer" className="btn btn-primary magnetic-hover">
                        View All on YouTube
                    </a>
                </div>
            </div>
        </section>
    );
};

export default YouTubeVideos;
