import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center shadow">
            <span className="text-white font-display font-black text-lg">K</span>
          </div>
          <span className="font-display font-black text-xl text-brand-dark">
            kid<span className="text-brand-blue">rove</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-muted">
          {[
            { label: 'Details',  id: 'details' },
            { label: 'Outcomes', id: 'outcomes' },
            { label: 'FAQs',     id: 'faq' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-brand-blue transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('register')}
          className="bg-brand-blue hover:bg-brand-indigo text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow hover:shadow-md"
        >
          Enroll Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
