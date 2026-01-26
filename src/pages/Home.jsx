import React, { Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BackgroundElements from '../components/BackgroundElements';

// Lazy load below-the-fold components
const ProblemSection = React.lazy(() => import('../components/ProblemSection'));
const TransitionSection = React.lazy(() => import('../components/TransitionSection'));
const Solutions = React.lazy(() => import('../components/Solutions'));
const Footer = React.lazy(() => import('../components/Footer'));

const Home = () => {
    return (
        <>
            <BackgroundElements />
            <Header />
            <Hero />
            <Suspense fallback={<div style={{ height: '50vh' }}></div>}>
                <ProblemSection />
                <TransitionSection />
                <Solutions />
                <Footer />
            </Suspense>
        </>
    );
};

export default Home;
