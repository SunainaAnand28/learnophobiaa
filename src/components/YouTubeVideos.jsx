import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import './YouTubeVideos.css';
import CPU_Architecture from '../assets/cpu_architecture.png';
import Compiler_Interpreter from '../assets/compiler_interpreter.png';
import Coding_Apps from '../assets/coding_apps.png';
import Analog_Digital from '../assets/ana_digital.png';
import Hardware_Software from '../assets/hard_soft.png';

// Mock data (since auto-fetch requires YouTube API key)
const VIDEO_DATA = [
    {
        id: '1',
        title: 'Understanding CPU Architecture',
        category: 'Hardware',
        thumb: CPU_Architecture,
        link: 'https://youtu.be/WS2Y9ciJHCg?si=Isp6MV57ba3TIA2F'
    },
    {
        id: '2',
        title: 'Compiler Interpreter in 1 minute',
        category: 'Software',
        thumb: Compiler_Interpreter,
        link: ''
    },
    {
        id: '3',
        title: 'Best Coding Apps for Programming on Mobile',
        category: 'Programming',
        thumb: Coding_Apps,
        link: ''
    },
    {
        id: '4',
        title: 'Analog and Digital Computer',
        category: 'Hardware',
        thumb: Analog_Digital,
        link: ''
    },
    {
        id: '5',
        title: 'Hardware & Software',
        category: 'Basics',
        thumb: Hardware_Software,

    },
    //     { id: '6', title: 'What is an API? - Basics', category: 'Basics', thumb:  },
    //     { id: '7', title: 'Git & GitHub Shorts', category: 'Shorts', thumb:  },
    //     { id: '8', title: 'Software Design Patterns', category: 'Software', thumb:  },
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
                                href={video.link}
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
