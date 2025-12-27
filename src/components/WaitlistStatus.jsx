import { useEffect, useState } from 'react';
import './WaitlistStatus.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const WaitlistStatus = ({ joiners }) => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE}/api/stats`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCount(data.count);
                }
            })
            .catch(err => {
                console.error('Failed to fetch waitlist stats', err);
            });
    }, []);

    if (count === null) return null;

    return (
        <div className="waitlist-status">
            <div className="avatar-stack">
                {joiners.map((person, i) => (
                    <div
                        key={i}
                        className="avatar"
                        style={{ backgroundColor: person.color }}
                    >
                        {person.initials}
                    </div>
                ))}
            </div>

            <div className="waitlist-count">
                <span className="count-number">{count}/1000</span> joined as Founding Travelers
            </div>
        </div>
    );
};

export default WaitlistStatus;