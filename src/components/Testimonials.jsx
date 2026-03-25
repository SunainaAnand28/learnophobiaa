import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Alex Dev",
        role: "Frontend Developer",
        text: "Learnophobiaa's breakdown of React optimization completely changed how I build apps. Finally, concepts that felt intimidating make total sense.",
        avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "CS Student",
        text: "The visuals and animations used to explain CPU architecture are mind-blowing. I aced my computer organization exam thanks to these videos!",
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: 3,
        name: "David Chen",
        role: "Self-taught Coder",
        text: "I used to be terrified of backend concepts. The 'Learn Without Fear' motto is real—the tutorials here are approachable, deep, and actually fun.",
        avatar: "https://i.pravatar.cc/150?img=33"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Student <span className="gradient-text">Feedback</span></h2>
                    <p className="section-subtitle">Real stories from our learning community.</p>
                </motion.div>

                <div className="testimonials-grid">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <span className="author-role">{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
