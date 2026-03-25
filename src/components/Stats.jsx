import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="stats-section" id="stats" ref={ref}>
            <div className="container">
                <div className="stats-grid glass-card">
                    <div className="stat-box">
                        <h3 className="stat-number gradient-text">
                            {inView ? <CountUp end={80} duration={2.5} separator="," suffix="+" /> : '0'}
                        </h3>
                        <p className="stat-label">Subscribers</p>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat-box">
                        <h3 className="stat-number gradient-text">
                            {inView ? <CountUp end={50} duration={2} suffix="+" /> : '0'}
                        </h3>
                        <p className="stat-label">Video Tutorials</p>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat-box">
                        <h3 className="stat-number gradient-text">
                            {inView ? <CountUp end={15} duration={2.5} decimals={1} suffix="K+" /> : '0'}
                        </h3>
                        <p className="stat-label">Total Views</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
