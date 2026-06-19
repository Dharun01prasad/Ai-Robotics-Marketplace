import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full mt-16 h-[calc(100vh-64px)] overflow-hidden">
      {/* Full-bleed background image — covers entire hero, no gaps */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8295061/pexels-photo-8295061.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      {/* Dark gradient overlay for readability — left dark, right transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)',
        }}
      />
      {/* Bottom fade for extra contrast where text sits */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 45%)',
        }}
      />

      {/* Content — lower-left */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-end pb-14 sm:pb-20">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-card mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            Registrations Open
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-white leading-[1.05] mb-4 text-[42px] sm:text-[56px] lg:text-[68px]">
            AI & Robotics<br />Summer Workshop
          </h1>

          {/* Short description — max 2 lines */}
          <p className="text-white/80 text-base sm:text-lg mb-7 max-w-md leading-snug">
            Build robots, explore AI, and create exciting projects in a live
            4-week online workshop.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('register')}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm px-7 py-3.5 rounded-card transition-colors duration-150"
            >
              Enroll Now
            </button>
            <button
              onClick={() => scrollTo('details')}
              className="border-2 border-white text-white font-bold text-sm px-7 py-3.5 rounded-card bg-transparent hover:bg-white/10 transition-colors duration-150"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;