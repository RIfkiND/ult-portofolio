'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isLoading && (
        <motion.div
          className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-background'
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Logo/Icon */}
          <motion.div
            className='relative mb-8'
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
          >
            <motion.div
              className='w-24 h-24 rounded-2xl bg-primary/20 border-2 border-primary flex items-center justify-center'
              animate={{
                boxShadow: [
                  '0 0 20px rgba(var(--primary), 0.2)',
                  '0 0 40px rgba(var(--primary), 0.4)',
                  '0 0 20px rgba(var(--primary), 0.2)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.span
                className='text-4xl'
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                💼
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className='mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold text-foreground mb-2'>
              Loading Portfolio
            </h2>
            <p className='text-muted-foreground text-center'>
              Preparing an amazing experience...
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className='w-64 h-2 bg-secondary rounded-full overflow-hidden'>
            <motion.div
              className='h-full bg-primary rounded-full'
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.p
            className='mt-4 text-sm text-muted-foreground font-mono'
            key={progress}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {progress}%
          </motion.p>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-primary/30 rounded-full'
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
