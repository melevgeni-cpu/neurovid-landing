import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoLoadingStates, setVideoLoadingStates] = useState<Record<number, boolean>>({});

  const projects = [
    {
      id: 1,
      title: 'Восстановление семейного архива',
      segment: 'Для семьи',
      before: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
      hasVideo: false,
      result: 'Мама плакала от счастья'
    },
    {
      id: 2,
      title: 'Виральный исторический Reels',
      segment: 'Для блогеров',
      before: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&cs=tinysrgb&w=800',
      hasVideo: true,
      videoPoster: 'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&cs=tinysrgb&w=800',
      result: '1.2 млн просмотров'
    }
  ];

  useEffect(() => {
    const states: Record<number, boolean> = {};
    projects.forEach(p => { states[p.id] = true; });
    setVideoLoadingStates(states);
  }, []);

  const handleVideoLoad = (id: number) => {
    setVideoLoadingStates(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Работы, которые говорят сами за себя
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Наведите курсор на фото, чтобы увидеть магию «До/После»
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="portfolio-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={project.before} 
                        alt="До обработки" 
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <img 
                        src={project.after} 
                        alt="После обработки" 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white shadow-lg transform -translate-x-1/2 group-hover:opacity-0 transition-opacity" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      Наведи → Было / Стало
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {project.segment}
                      </span>
                      <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                      <p className="text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                        <Play className="w-4 h-4" /> {project.result}
                      </p>
                    </div>

                    {project.hasVideo && (
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                        {videoLoadingStates[project.id] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                        <video
                          className="w-full h-full object-cover"
                          poster={project.videoPoster}
                          controls
                          preload="metadata"
                          crossOrigin="anonymous"
                          onLoadedData={() => handleVideoLoad(project.id)}
                          onError={() => handleVideoLoad(project.id)}
                        >
                          <source 
                            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                            type="video/mp4" 
                          />
                          Ваш браузер не поддерживает видео.
                        </video>
                      </div>
                    )}
                    
                    <Button className="mt-6 w-full md:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Хочу такой же результат
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};