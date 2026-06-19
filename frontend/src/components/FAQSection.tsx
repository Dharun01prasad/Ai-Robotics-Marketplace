import React, { useState } from 'react';
import { FAQ } from '../types';

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Does my child need any prior coding or robotics experience?',
    answer:
      'Not at all. The workshop is built for complete beginners — we start with the basics in Scratch, then move to Python and AI tools, step by step.',
  },
  {
    id: 2,
    question: 'What equipment does my child need?',
    answer:
      'A laptop, desktop, or tablet with a keyboard, plus a stable internet connection. All software used is free and browser-based — no installations required.',
  },
  {
    id: 3,
    question: 'Are the sessions live, or pre-recorded?',
    answer:
      'All sessions are live on Zoom, with real-time Q&A and peer collaboration. Recordings are also shared so your child never misses a session.',
  },
  {
    id: 4,
    question: 'What is the weekly schedule?',
    answer:
      'Saturdays & Sundays, 10:00 AM – 12:30 PM IST, for 4 weeks starting July 15, 2026. Each session is 2.5 hours with a short break.',
  },
  {
    id: 5,
    question: 'Is there a refund policy?',
    answer:
      'Yes — a full refund is available if cancelled 7+ days before July 15, 2026. After that, seats can be transferred but are non-refundable.',
  },
];

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-brand-border rounded-card bg-white">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-dark text-sm">{faq.question}</span>
        <span
          className={`shrink-0 w-6 h-6 rounded-card bg-brand-blue/10 flex items-center justify-center text-brand-blue text-sm font-bold transition-transform duration-150 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-brand-muted text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => (
  <section id="faq" className="py-16 sm:py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="mb-8">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-brand-dark">
          Frequently asked questions
        </h2>
      </div>

      <div className="flex flex-col gap-2.5">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>

      <p className="text-brand-muted text-sm mt-6">
        Still have a question?{' '}
        <a href="mailto:hello@kidrove.com" className="text-brand-blue font-semibold hover:underline">
          Email hello@kidrove.com
        </a>
      </p>
    </div>
  </section>
);

export default FAQSection;
