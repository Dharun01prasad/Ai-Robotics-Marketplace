import React from 'react';
import { LearningOutcome } from '../types';

const outcomes: LearningOutcome[] = [
  {
    id: 1,
    emoji: '🤖',
    title: 'Build & Program Robots',
    description:
      'Assemble virtual robotic models and write logic to make them move, sense, and respond to the environment.',
  },
  {
    id: 2,
    emoji: '🧠',
    title: 'Understand AI Concepts',
    description:
      'Learn how machine learning, neural networks, and AI decision-making work — explained at a kid-friendly level.',
  },
  {
    id: 3,
    emoji: '💻',
    title: 'Code with Python & Scratch',
    description:
      'Progress from block-based Scratch coding to real Python scripts, building confidence in both environments.',
  },
  {
    id: 4,
    emoji: '🎯',
    title: 'Train Your Own AI Model',
    description:
      'Use Teachable Machine and beginner datasets to train image and sound classifiers from scratch.',
  },
  {
    id: 5,
    emoji: '🚀',
    title: 'Complete a Capstone Project',
    description:
      'Finish the workshop with a personal AI project — a chatbot, gesture game, or line-following robot — to show the world.',
  },
  {
    id: 6,
    emoji: '🏅',
    title: 'Earn a Certificate',
    description:
      'Receive a verified Kidrove certificate of completion, a great first achievement to add to any portfolio.',
  },
];

const LearningOutcomes: React.FC = () => (
  <section id="outcomes" className="py-20 bg-brand-surface">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-brand-green/10 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
          What Kids Learn
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark">
          Skills your child will walk away with
        </h2>
        <p className="text-brand-muted mt-3 max-w-lg mx-auto">
          Practical, hands-on skills that build confidence and lay the foundation for
          a future in tech.
        </p>
      </div>

      {/* Outcomes grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map(({ id, emoji, title, description }) => (
          <div
            key={id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-2xl mb-4">
              {emoji}
            </div>
            <h3 className="font-display font-bold text-brand-dark text-base mb-2">
              {title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningOutcomes;
