import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [trail, setTrail] = useState([]);
    const requestRef = useRef();
    const previousPosition = useRef({ x: 0, y: 0 });

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setPosition({ x: clientX, y: clientY });

            // Calculate rotation
            const deltaX = clientX - previousPosition.current.x;
            const deltaY = clientY - previousPosition.current.y;

            // Only update rotation if there's significant movement to prevent jitter
            if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
                setRotation(angle + 45); // +45 because the icon is natively rotated -45 (pointing top-right)
            }

            previousPosition.current = { x: clientX, y: clientY };

            // Add new point to trail
            const newPoint = {
                x: clientX,
                y: clientY,
                id: Date.now(),
                opacity: 1
            };

            setTrail(prevTrail => [...prevTrail, newPoint]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Hide default cursor
        document.body.classList.add('custom-cursor-active');

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    // Animation loop to fade trail
    const animateTrail = () => {
        setTrail(prevTrail => {
            // Filter out completely faded points and reduce opacity of existing ones
            return prevTrail
                .map(point => ({ ...point, opacity: point.opacity - 0.04 })) // Adjust fade speed here
                .filter(point => point.opacity > 0);
        });

        requestRef.current = requestAnimationFrame(animateTrail);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animateTrail);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    // SVG Airplane Icon
    const AirplaneIcon = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#E64568"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#E64568" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div className="custom-cursor-container">
            {/* Trail Layer */}
            <svg className="cursor-trail">
                {trail.length > 1 && (
                    <polyline
                        points={trail.map(p => `${p.x},${p.y}`).join(' ')}
                        fill="none"
                        stroke="#E64568"
                        strokeWidth="2"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                )}
                {/* Alternative: Render individual segments for gradient fade if polyline opacity looks flat */}
                {trail.map((point, index) => {
                    if (index === 0) return null;
                    const prevPoint = trail[index - 1];
                    return (
                        <line
                            key={point.id}
                            x1={prevPoint.x}
                            y1={prevPoint.y}
                            x2={point.x}
                            y2={point.y}
                            stroke="#E64568"
                            strokeWidth="3"
                            strokeOpacity={point.opacity * 0.5}
                            strokeLinecap="round"
                        />
                    );
                })}
            </svg>

            {/* Cursor Icon */}
            <div
                className="cursor-icon"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`
                }}
            >
                <AirplaneIcon />
            </div>
        </div>
    );
};

export default CustomCursor;
