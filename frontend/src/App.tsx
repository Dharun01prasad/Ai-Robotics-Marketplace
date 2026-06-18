import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQSection from './components/FAQSection';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <WorkshopDetails />
    <LearningOutcomes />
    <FAQSection />
    <RegistrationForm />
    <Footer />
  </>
);

export default App;
