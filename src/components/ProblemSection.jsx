import React, { useState, useEffect, useRef } from 'react';
import './ProblemSection.css';
import imgProblem from '../assets/Problem Section.png';

const problems = [
    {
        id: 0,
        title: "From TikTok to ChatGPT to Google Maps, it adds up",
        description: "Planning a trip today means bouncing between apps and still not knowing how your days will look. Waynix brings it together into a clear, day-by-day plan with a visual map."
    },
    {
        id: 1,
        title: "Finding good places takes way too much time",
        description: "You don't want random spots, you want places people actually loved. That usually means hours of videos, reviews, and second-guessing. Waynix shows the most recommended places upfront, so you can decide faster."
    },
    {
        id: 2,
        title: "Turning places into a real plan",
        description: "Good spots don’t automatically make a good trip. What goes on which day, and what's nearby, matters. Waynix turns places into a clear, day-by-day itinerary you can actually follow."
    }
];

const ProblemSection = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const duration = 12000; // 12 seconds per step
    const intervalTime = 100; // Update every 100ms
    const isTransitioning = useRef(false);
    const sectionRef = useRef(null);

    // Initial observer to start the sequence
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect(); // Start only once
                }
            },
            { threshold: 0.3 } // Start when 30% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return; // Don't start until visible

        // Reset the transition lock when the step actually updates
        isTransitioning.current = false;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                const step = 100 / (duration / intervalTime);
                return prev + step;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [activeStep, hasStarted]);

    // Handle step change when progress completes
    useEffect(() => {
        if (progress >= 100 && !isTransitioning.current) {
            isTransitioning.current = true;
            const nextStep = (activeStep + 1) % problems.length;
            setActiveStep(nextStep);
            setProgress(0);
        }
    }, [progress, activeStep]);

    // Reset progress when user manually changes step
    const handleStepClick = (index) => {
        setActiveStep(index);
        setProgress(0);
        setHasStarted(true); // Ensure it starts if clicked before scroll triggers
    };

    return (
        <section className="problem-section" id="problem" ref={sectionRef}>
            <div className="container">
                <div className="problem-header">
                    <h2>Trip planning is more<br />complicated than it needs to be</h2>
                    <p className="problem-subheading">
                        Because juggling multiple tools just to plan a trip is exhausting.
                    </p>
                </div>

                <div className="problem-grid">
                    <div className="problem-visual">
                        <img
                            src={imgProblem}
                            alt="Travel planning across TikTok Reddit and Google Maps"
                            className="problem-image"
                            loading="lazy"
                        />
                    </div>

                    <div className="problem-points">
                        {problems.map((problem, index) => {
                            const isActive = index === activeStep;
                            return (
                                <div
                                    key={problem.id}
                                    className={`problem-point ${isActive ? 'active' : ''}`}
                                    onClick={() => handleStepClick(index)}
                                >
                                    <div className="progress-container">
                                        {isActive && (
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{ height: `${progress}%` }}
                                                ></div>
                                            </div>
                                        )}
                                        {!isActive && <div className="progress-bar-placeholder"></div>}
                                    </div>

                                    <div className="content">
                                        <h3 className={isActive ? 'active-title-text' : 'dimmed-text'}>
                                            {problem.title}
                                        </h3>
                                        {isActive && (
                                            <div className="description fade-in">
                                                <p>{problem.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
