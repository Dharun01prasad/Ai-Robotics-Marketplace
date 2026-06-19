import React from 'react';
import { LearningOutcome } from '../types';

const outcomes: (LearningOutcome & { color: string; bg: string })[] = [
  {
    id: 1, emoji: '🤖', title: 'Build & Program Robots',
    description: 'Assemble virtual robotic models and write logic to make them move, sense, and respond.',
    color: 'text-brand-blue', bg: 'bg-brand-blue/10',
  },
  {
    id: 2, emoji: '🧠', title: 'Understand AI Concepts',
    description: 'Learn how machine learning and neural networks work, explained at a kid-friendly level.',
    color: 'text-brand-orange-dark', bg: 'bg-brand-orange/15',
  },
  {
    id: 3, emoji: '💻', title: 'Code with Python & Scratch',
    description: 'Progress from block-based Scratch coding to real Python scripts with confidence.',
    color: 'text-brand-pink-dark', bg: 'bg-brand-pink/15',
  },
  {
    id: 4, emoji: '🎯', title: 'Train a Real AI Model',
    description: 'Use beginner-friendly tools to train image and sound classifiers from scratch.',
    color: 'text-brand-blue', bg: 'bg-brand-blue/10',
  },
  {
    id: 5, emoji: '🚀', title: 'Complete a Capstone Project',
    description: 'Finish with a personal AI project — a chatbot, game, or line-following robot.',
    color: 'text-brand-orange-dark', bg: 'bg-brand-orange/15',
  },
  {
    id: 6, emoji: '🏆', title: 'Earn a Certificate',
    description: 'Receive a verified Kidrove certificate of completion for every participant.',
    color: 'text-brand-pink-dark', bg: 'bg-brand-pink/15',
  },
];

const LearningOutcomes: React.FC = () => (
  <section id="outcomes" className="py-16 sm:py-20 bg-brand-surface border-y border-brand-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-10">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-brand-dark">
          What kids will learn
        </h2>
        <p className="text-brand-muted mt-2 max-w-xl">
          Practical, hands-on skills that build confidence and lay the foundation
          for a future in tech.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {outcomes.map(({ id, emoji, title, description, color, bg }) => (
          <div
            key={id}
            className="bg-white border border-brand-border rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow duration-150"
          >
            <div className={`w-11 h-11 rounded-card ${bg} flex items-center justify-center text-xl mb-4`}>
              <span className={color}>{emoji}</span>
            </div>
            <h3 className="font-bold text-brand-dark text-base mb-1.5">{title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningOutcomes;
