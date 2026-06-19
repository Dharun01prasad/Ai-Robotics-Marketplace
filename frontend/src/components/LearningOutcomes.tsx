'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef, useState, useEffect } from 'react';

interface OutcomeData {
  id: number;
  emoji: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

interface CardProps {
  i: number;
  emoji: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  scrollProgress: number;
}

export const OutcomeCard = ({
  i,
  emoji,
  title,
  description,
  color,
  bgColor,
  progress,
  range,
  targetScale,
  scrollProgress,
}: CardProps) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  // Interpolate card background from dark to light
  const cardBgColor = `rgb(${Math.round(30 + scrollProgress * 225)}, ${Math.round(30 + scrollProgress * 225)}, ${Math.round(30 + scrollProgress * 225)})`;
  
  // Interpolate card text colors with minimal gray zone
  // Text stays white for cards 1-3, snaps to black for cards 4-6
  let headingValue = 255;
  let descriptionValue = 200;
  
  if (scrollProgress > 0.495) {
    // Ultra-narrow transition window (just 1% of scroll) to minimize gray
    const transitionProgress = Math.min(1, (scrollProgress - 0.495) / 0.01);
    // Go all the way to black for maximum contrast
    headingValue = Math.round(255 * (1 - transitionProgress));
    descriptionValue = Math.round(200 * (1 - transitionProgress));
  }
  
  const headingColor = `rgb(${headingValue}, ${headingValue}, ${headingValue})`;
  const descriptionColor = `rgb(${descriptionValue}, ${descriptionValue}, ${descriptionValue})`;

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: cardBgColor,
        }}
        className='flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-xl p-10 origin-top border border-brand-border shadow-lg transition-all duration-100'
      >
        <div className='flex items-center gap-6 mb-6'>
          <div className={`w-16 h-16 rounded-xl ${bgColor} flex items-center justify-center text-4xl flex-shrink-0`}>
            {emoji}
          </div>
          <h2 className='text-3xl font-bold transition-colors duration-100' style={{ color: headingColor }}>{title}</h2>
        </div>

        <div className={`flex h-full gap-10 flex-col lg:flex-row`}>
          <div className={`flex-1`}>
            <p className='text-base leading-relaxed mb-6 transition-colors duration-100' style={{ color: descriptionColor }}>{description}</p>
            <span className='flex items-center gap-2 pt-2'>
              <a
                href={'#'}
                className={`${color} font-semibold underline cursor-pointer hover:opacity-80 transition-opacity`}
              >
                Learn more
              </a>
              <svg
                width='22'
                height='12'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </div>

          <div
            className={`hidden lg:flex relative w-80 h-full rounded-lg overflow-hidden bg-gradient-to-br ${bgColor}`}
          >
            <div className='flex items-center justify-center w-full h-full text-6xl'>
              {emoji}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const learningOutcomes: OutcomeData[] = [
  {
    id: 1,
    emoji: '🤖',
    title: 'Build & Program Robots',
    description:
      'Assemble virtual robotic models and write logic to make them move, sense, and respond. Learn fundamental robotics concepts through hands-on experimentation with interactive simulations.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    emoji: '🧠',
    title: 'Understand AI Concepts',
    description:
      'Learn how machine learning and neural networks work, explained at a kid-friendly level. Discover the magic behind AI systems that power everyday technology.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    id: 3,
    emoji: '💻',
    title: 'Code with Python & Scratch',
    description:
      'Progress from block-based Scratch coding to real Python scripts with confidence. Build your programming foundation with fun, interactive challenges designed for beginners.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
  {
    id: 4,
    emoji: '🎯',
    title: 'Train a Real AI Model',
    description:
      'Use beginner-friendly tools to train image and sound classifiers from scratch. Become an AI trainer by teaching machines to recognize patterns and make predictions.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 5,
    emoji: '🚀',
    title: 'Complete a Capstone Project',
    description:
      'Finish with a personal AI project — a chatbot, game, or line-following robot. Showcase your skills and creativity by building something uniquely yours from start to finish.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    id: 6,
    emoji: '🏆',
    title: 'Earn a Certificate',
    description:
      'Receive a verified gemma certificate of completion for every participant. Celebrate your achievement with an official credential that recognizes your learning journey.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
];

const LearningOutcomes = forwardRef<HTMLElement>((_, ref) => {
  const container = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Track scroll progress for this section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;

      // Calculate progress: 0 when section enters viewport, 1 when it leaves
      let progress = 0;
      if (sectionTop <= 0) {
        progress = Math.min(1, Math.abs(sectionTop) / sectionHeight);
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolate background color from black to brand-surface (light)
  const bgColor = `rgb(${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)}, ${Math.round(scrollProgress * 255)})`;
  
  // Interpolate text colors with minimal gray zone
  // Text stays white for cards 1-3, snaps to black for cards 4-6
  // Transition happens in a tiny window (0.495-0.505) to avoid gray text
  let headingValue = 255;
  let subtextValue = 200;
  
  if (scrollProgress > 0.495) {
    // Ultra-narrow transition window (just 1% of scroll) to minimize gray
    const transitionProgress = Math.min(1, (scrollProgress - 0.495) / 0.01);
    // Go all the way to black for maximum contrast
    headingValue = Math.round(255 * (1 - transitionProgress));
    subtextValue = Math.round(200 * (1 - transitionProgress));
  }
  
  const headingColor = `rgb(${headingValue}, ${headingValue}, ${headingValue})`;
  const subtextColor = `rgb(${subtextValue}, ${subtextValue}, ${subtextValue})`;

  return (
    <ReactLenis root>
      <main className='transition-colors duration-100' ref={container} style={{ backgroundColor: bgColor }}>
        <>
          <section className='h-[60vh] w-full grid place-content-center border-b border-brand-border transition-colors duration-100' style={{ backgroundColor: bgColor }}>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
              <h1 className='text-5xl sm:text-6xl font-bold tracking-tight leading-[120%] mb-6 transition-colors duration-100' style={{ color: headingColor }}>
                What kids will learn
              </h1>
              <p className='text-lg max-w-2xl mx-auto transition-colors duration-100' style={{ color: subtextColor }}>
                Practical, hands-on skills that build confidence and lay the foundation for a future in tech.
              </p>
            </div>
          </section>
        </>

        <section id="outcomes" className='w-full transition-colors duration-100' ref={sectionRef} style={{ backgroundColor: bgColor }}>
          {learningOutcomes.map((outcome, i) => {
            const targetScale = 1 - (learningOutcomes.length - i) * 0.05;
            return (
              <OutcomeCard
                key={`outcome_${outcome.id}`}
                i={i}
                emoji={outcome.emoji}
                title={outcome.title}
                description={outcome.description}
                color={outcome.color}
                bgColor={outcome.bgColor}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                scrollProgress={scrollProgress}
              />
            );
          })}
        </section>

        <footer className='border-t border-brand-border py-16 transition-colors duration-100' style={{ backgroundColor: bgColor }}>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center'>
            <h2 className='text-4xl font-bold mb-2 transition-colors duration-100' style={{ color: headingColor }}>Ready to learn?</h2>
            <p className='transition-colors duration-100' style={{ color: subtextColor }}>Start your AI and robotics journey with gemma today.</p>
          </div>
        </footer>
      </main>
    </ReactLenis>
  );
});

LearningOutcomes.displayName = 'LearningOutcomes';

export default LearningOutcomes;