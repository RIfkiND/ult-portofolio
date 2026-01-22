'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SliderProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export function ProjectSlider({
  children,
  autoPlay = true,
  interval = 5000,
}: SliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) {
        return prev === children.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? children.length - 1 : prev - 1;
      }
    });
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      paginate(1);
    }, interval);
    return () => clearInterval(timer);
  }, [current, autoPlay, interval]);

  return (
    <div className='relative w-full overflow-hidden'>
      <div className='relative h-[600px] flex items-center justify-center'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className='absolute w-full max-w-4xl px-4'
          >
            {children[current]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Button
          variant='outline'
          size='icon'
          className='absolute left-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background'
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className='w-6 h-6' />
        </Button>
        <Button
          variant='outline'
          size='icon'
          className='absolute right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background'
          onClick={() => paginate(1)}
        >
          <ChevronRight className='w-6 h-6' />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className='flex justify-center gap-2 mt-8'>
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
