import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-brand-dark text-white py-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center">
          <span className="font-display font-black text-base">K</span>
        </div>
        <span className="font-display font-black text-lg">kid<span className="text-brand-blue">rove</span></span>
      </div>
      <p className="text-white/50 text-sm">© 2026 Kidrove. All rights reserved.</p>
      <a href="mailto:hello@kidrove.com" className="text-brand-blue text-sm hover:underline">hello@kidrove.com</a>
    </div>
  </footer>
);

export default Footer;
