import React, { useState } from 'react';
import { Grid2x2PlusIcon, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from './ui/sheet';
import { Button, buttonVariants } from './ui/button';
import { cn } from '../lib/utils';

interface NavLink {
  label: string;
  id: string;
}

const links: NavLink[] = [
  { label: 'Workshop Details', id: 'details' },
  { label: 'Outcomes', id: 'outcomes' },
  { label: 'FAQs', id: 'faq' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-3 left-1/2 -translate-x-1/2 z-50',
        'w-[calc(100%-1.5rem)] max-w-5xl rounded-card border border-brand-border shadow-card',
        'bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-lg',
      )}
    >
      <nav className="mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2 rounded-card px-2 py-1.5 hover:bg-brand-surface duration-100"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Grid2x2PlusIcon className="size-5 text-brand-blue" />
          <p className="font-extrabold text-base text-brand-dark">kidrove</p>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => scrollTo('register')} className="hidden sm:inline-flex">
            Enroll Now
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent
              className="bg-white/95 supports-[backdrop-filter]:bg-white/80 gap-0 backdrop-blur-lg"
              showClose={false}
              side="left"
            >
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                <p className="font-extrabold text-base text-brand-dark px-3 pb-2">kidrove</p>
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <SheetFooter>
                <Button onClick={() => scrollTo('register')}>Enroll Now</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;