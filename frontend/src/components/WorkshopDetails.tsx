import React from 'react';
import { WorkshopDetail } from '../types';

const details: WorkshopDetail[] = [
  { icon: '👦', label: 'Age Group',   value: '8–14 Years' },
  { icon: '📅', label: 'Duration',    value: '4 Weeks' },
  { icon: '💻', label: 'Mode',        value: 'Online (Live Sessions)' },
  { icon: '💰', label: 'Fee',         value: '₹2,999' },
  { icon: '🗓️', label: 'Start Date',  value: '15 July 2026' },
  { icon: '🌐', label: 'Language',    value: 'English & Hindi' },
];

const WorkshopDetails: React.FC = () => (
  <section id="details" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-brand-indigo/10 text-brand-indigo text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
          Workshop Info
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark">
          Everything you need to know
        </h2>
        <p className="text-brand-muted mt-3 max-w-lg mx-auto">
          A structured, live programme designed so kids can learn, build, and present
          real-world AI & robotics projects.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {details.map(({ icon, label, value }) => (
          <div
            key={label}
            className="group bg-brand-surface hover:bg-gradient-to-br hover:from-brand-blue hover:to-brand-indigo rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 cursor-default"
          >
            <span className="text-3xl">{icon}</span>
            <div>
              <p className="text-xs font-semibold text-brand-muted group-hover:text-white/70 uppercase tracking-wider transition-colors">
                {label}
              </p>
              <p className="font-display font-bold text-lg text-brand-dark group-hover:text-white transition-colors mt-0.5">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlighted callout */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-indigo p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-4xl">🎒</div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-white text-lg">
            No prior coding experience needed
          </h3>
          <p className="text-white/80 text-sm mt-1">
            Every session is beginner-friendly. All tools and resources are provided.
            A laptop or tablet with internet access is all your child needs.
          </p>
        </div>
        <button
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          className="shrink-0 bg-white text-brand-blue font-display font-bold px-6 py-3 rounded-xl hover:bg-brand-yellow transition-all duration-200"
        >
          Register →
        </button>
      </div>
    </div>
  </section>
);

export default WorkshopDetails;
