import imgIcon from '../assets/waynix_icon.png';
import './TransitionSection.css';

const TransitionSection = () => {
    return (
        <section className="transition-section">
            <div className="container">
                <h2 className="transition-title">
                    So we built <span className="highlight-text">Waynix</span>
                    <img src={imgIcon} alt="" className="waynix-icon" />
                </h2>
                <p className="transition-subtitle">
                    Waynix turn the mess of trip planning into a single, structured experience, from choosing places to seeing your full plan on a map.
                </p>
            </div>
        </section>
    );
};

export default TransitionSection;
