import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TabPosition {
  left: number;
  width: number;
  opacity: number;
}

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Workshop Details', id: 'details' },
  { label: 'Outcomes', id: 'outcomes' },
  { label: 'FAQs', id: 'faq' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [position, setPosition] = useState<TabPosition>({ left: 0, width: 0, opacity: 0 });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-sm border-b border-brand-border' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-card bg-brand-blue flex items-center justify-center">
            <span className="text-white font-extrabold text-xs">K</span>
          </div>
          <span className="font-extrabold text-base text-brand-dark tracking-tight">
            kidrove
          </span>
        </div>

        {/* Animated pill nav — adapted from NavHeader */}
        <ul
          className="hidden md:flex relative w-fit rounded-full border border-brand-border bg-brand-surface p-1"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          {navItems.map(({ label, id }) => (
            <Tab key={id} id={id} setPosition={setPosition} onClick={() => scrollTo(id)}>
              {label}
            </Tab>
          ))}
          <Cursor position={position} />
        </ul>

        <button
          onClick={() => scrollTo('register')}
          className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-card transition-colors duration-150"
        >
          Enroll Now
        </button>
      </div>
    </nav>
  );
};

interface TabProps {
  children: React.ReactNode;
  id: string;
  onClick: () => void;
  setPosition: React.Dispatch<React.SetStateAction<TabPosition>>;
}

const Tab: React.FC<TabProps> = ({ children, onClick, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-brand-dark mix-blend-difference"
    >
      {children}
    </li>
  );
};

const Cursor: React.FC<{ position: TabPosition }> = ({ position }) => (
  <motion.li
    animate={{ left: position.left, width: position.width, opacity: position.opacity }}
    className="absolute z-0 h-9 top-1 rounded-full bg-brand-blue"
  />
);

export default Navbar;