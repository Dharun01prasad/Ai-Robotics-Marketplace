import React from 'react';
import { WorkshopDetail } from '../types';

const details: WorkshopDetail[] = [
  { icon: '👥', label: 'Age Group',  value: '8–14 Years' },
  { icon: '📅', label: 'Duration',   value: '4 Weeks' },
  { icon: '💻', label: 'Mode',       value: 'Online (Live)' },
  { icon: '₹',  label: 'Fee',        value: '₹2,999' },
  { icon: '🗓️', label: 'Start Date', value: '15 July 2026' },
];

const WorkshopDetails: React.FC = () => (
  <section id="details" className="py-16 sm:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-10">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-brand-dark">
          Everything your child needs to know
        </h2>
        <p className="text-brand-muted mt-2 max-w-xl">
          Key details about the program, at a glance.
        </p>
      </div>

      {/* Dashboard-style detail cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {details.map(({ icon, label, value }) => (
          <div
            key={label}
            className="bg-white border border-brand-border rounded-card p-5 shadow-card hover:shadow-card-hover transition-shadow duration-150"
          >
            <div className="w-10 h-10 rounded-card bg-brand-blue/10 flex items-center justify-center text-brand-blue text-lg font-bold mb-3">
              {icon}
            </div>
            <p className="text-xs font-semibold text-brand-muted uppercase tracking-wide">
              {label}
            </p>
            <p className="font-extrabold text-brand-dark text-lg mt-1">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Callout banner */}
      <div className="mt-8 rounded-card bg-brand-surface border border-brand-border p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-11 h-11 shrink-0 rounded-card bg-brand-orange/15 flex items-center justify-center text-xl">
          ⚡
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-brand-dark text-base">
            No prior coding or robotics experience needed
          </h3>
          <p className="text-brand-muted text-sm mt-1">
            Beginner-friendly curriculum, expert mentors, and hands-on learning. All
            tools and resources are provided — just bring curiosity.
          </p>
        </div>
        <button
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          className="shrink-0 bg-brand-pink hover:bg-brand-pink-dark text-white font-bold text-sm px-5 py-3 rounded-card transition-colors duration-150"
        >
          View Details →
        </button>
      </div>
    </div>
  </section>
);

export default WorkshopDetails;
