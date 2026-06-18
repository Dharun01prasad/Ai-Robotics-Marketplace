import React, { useState } from 'react';
import { FAQ } from '../types';

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Does my child need any prior coding or robotics experience?',
    answer:
      'Not at all! The workshop is designed for complete beginners. We start with the very basics of programming using Scratch, then gradually move to Python and AI tools. Every concept is introduced step-by-step with friendly instructors.',
  },
  {
    id: 2,
    question: 'What equipment does my child need?',
    answer:
      'A laptop or desktop computer (Windows/Mac/Linux) or a tablet with a keyboard, a stable internet connection, and a web browser. All software tools used in the workshop are free and browser-based — no installations required.',
  },
  {
    id: 3,
    question: 'Are the sessions live, or are they pre-recorded?',
    answer:
      'All sessions are live and interactive, conducted via Zoom. Kids can ask questions, participate in challenges, and collaborate with peers in real time. Sessions are also recorded and shared, so your child never misses out.',
  },
  {
    id: 4,
    question: 'What is the schedule for the sessions?',
    answer:
      'Sessions run on weekends (Saturday & Sunday), 10 AM – 12:30 PM IST, for 4 weeks starting July 15, 2026. Each session is 2.5 hours with a short break in between.',
  },
  {
    id: 5,
    question: 'Is there a refund if we cancel after registering?',
    answer:
      'Yes. A full refund is available if you cancel at least 7 days before the workshop start date (July 15, 2026). Cancellations after that date are not eligible for a refund, but you can transfer your spot to another child.',
  },
];

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-brand-surface transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display font-bold text-brand-dark text-base">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-brand-muted text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => (
  <section id="faq" className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
          FAQs
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark">
          Got questions? We've got answers.
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>

      {/* Still have questions */}
      <div className="mt-10 text-center bg-brand-surface rounded-2xl p-6">
        <p className="text-brand-muted text-sm">
          Still have a question?{' '}
          <a
            href="mailto:hello@kidrove.com"
            className="text-brand-blue font-semibold hover:underline"
          >
            Email us at hello@kidrove.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default FAQSection;
