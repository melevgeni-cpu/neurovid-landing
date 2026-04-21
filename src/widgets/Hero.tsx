import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import { Play, Camera, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'A' | 'B'>('A');
  const { audienceA, audienceB } = siteConfig;

  const isSegmentA = activeSegment === 'A';
  const currentData = isSegmentA ? audienceA : audienceB;
  const IconComponent = isSegmentA ? Camera : TrendingUp;

  const handleWatchPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            key={activeSegment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full mb-8">
              <button
                onClick={() => setActiveSegment('A')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${isSegmentA ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-gray-500'}`}
              >
                Для семьи
              </button>
              <button
                onClick={() => setActiveSegment('B')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${!isSegmentA ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-gray-500'}`}
              >
                Для блогеров
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                <IconComponent className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-sm font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {isSegmentA ? 'Бережное восстановление' : 'Нейро-продакшн'}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {currentData.headline}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              {currentData.subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" onClick={handleCtaClick}>
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {currentData.cta}
              </Button>
              <Button size="lg" variant="outline" onClick={handleWatchPortfolio}>
                Смотреть портфолио
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Оплата только после утверждения превью
            </p>
          </motion.div>

          <motion.div
            key={`image-${activeSegment}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={isSegmentA 
                    ? 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800'
                    : 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }
                  alt="Старое фото"
                  className="w-full h-full object-cover sepia-[0.5] opacity-80"
                  loading="lazy"
                />
              </div>
              
              <motion.div 
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              >
                <img 
                  src={isSegmentA 
                    ? 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800'
                    : 'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }
                  alt="Оживленное фото"
                  className="w-full h-full object-cover brightness-110"
                  loading="lazy"
                />
                <motion.div 
                  className="absolute top-[35%] left-[45%] w-2 h-2 bg-white rounded-full blur-[2px]"
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};