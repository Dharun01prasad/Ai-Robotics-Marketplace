import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-[#EDE9FE] to-[#DBEAFE] pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[-80px] w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-60px] w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating emoji badges */}
      <div className="hidden lg:flex flex-col gap-4 absolute right-12 top-1/2 -translate-y-1/2 animate-float">
        {['🤖', '🧠', '💡', '🚀'].map((emoji, i) => (
          <div
            key={i}
            className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          Registrations Open · Starts July 15, 2026
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-dark leading-tight max-w-3xl mb-6">
          AI & Robotics{' '}
          <span className="relative">
            <span className="relative z-10 text-brand-blue">Summer</span>
            <span
              className="absolute -bottom-1 left-0 right-0 h-3 bg-brand-yellow/50 -skew-x-3 rounded"
              aria-hidden="true"
            />
          </span>{' '}
          Workshop
        </h1>

        {/* Description */}
        <p className="text-brand-muted text-lg max-w-xl mb-8 leading-relaxed">
          Give your child a head start in the technology of tomorrow. Over 4 exciting
          weeks, kids aged 8–14 will build real AI models and program their own robots —
          entirely online, from home.
        </p>

        {/* CTA group */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button
            onClick={() => scrollTo('register')}
            className="bg-brand-blue hover:bg-brand-indigo text-white font-display font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-brand-blue/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Enroll Now — ₹2,999
          </button>
          <button
            onClick={() => scrollTo('details')}
            className="text-brand-blue font-semibold text-base flex items-center gap-1 hover:gap-2 transition-all"
          >
            See details <span>→</span>
          </button>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-6">
          {[
            { value: '4 Weeks',  label: 'Intensive Program' },
            { value: '8–14 Yrs', label: 'Age Group' },
            { value: '100%',     label: 'Online & Live' },
            { value: '₹2,999',   label: 'All-inclusive Fee' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/70 backdrop-blur rounded-2xl px-5 py-3 shadow-sm border border-white">
              <p className="font-display font-black text-xl text-brand-dark">{value}</p>
              <p className="text-xs text-brand-muted font-medium mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
