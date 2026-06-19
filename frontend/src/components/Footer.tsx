import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-brand-dark text-white py-9">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-card bg-brand-blue flex items-center justify-center">
          <span className="font-extrabold text-sm">K</span>
        </div>
        <span className="font-extrabold text-base">gemma</span>
      </div>
      <p className="text-white/50 text-sm">© 2026 gemma. All rights reserved.</p>
      <a href="mailto:hello@gemma.com" className="text-brand-orange text-sm hover:underline">
        hello@gemma.com
      </a>
    </div>
  </footer>
);

export default Footer;
