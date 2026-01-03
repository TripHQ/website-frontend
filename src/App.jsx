import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import TransitionSection from './components/TransitionSection';
import BackgroundElements from './components/BackgroundElements';

import Solutions from './components/Solutions';
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <BackgroundElements />
      <Header />
      <Hero />
      <ProblemSection />
      <TransitionSection />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;
