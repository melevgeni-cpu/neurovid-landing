import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Eye, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const PainSolution: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Эффект «зловещей долины»',
      description: 'Нейросети часто делают лица пластиковыми и жуткими. Мы вручную корректируем каждую черту.',
      color: 'text-red-500'
    },
    {
      icon: Zap,
      title: 'Глитчи и артефакты',
      description: 'У новичков руки превращаются в облака. Мы чистим видео до студийного качества.',
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="pain-solution" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Почему вам стоит обратиться к профессионалу?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {siteConfig.audienceA.pain}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-red-100 dark:border-red-900/30"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertTriangle className="w-5 h-5" />
              Так делают дилетанты
            </h3>
            <ul className="space-y-4">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <point.icon className={`w-5 h-5 ${point.color} shrink-0 mt-0.5`} />
                  <div>
                    <p className="font-medium">{point.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 relative aspect-video rounded-lg overflow-hidden opacity-60 grayscale">
              <img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Плохой пример" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-red-500/20 backdrop-blur-[2px] flex items-center justify-center">
                <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Пластиковое лицо</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-green-100 dark:border-green-900/30"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" />
              Мой подход
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Eye className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Сохранение «души» фотографии</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Использую ИИ как инструмент, а не как волшебную палочку. Контролирую сходство.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Cinematic качество</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Пост-обработка каждого кадра. Никаких лишних пальцев и плывущих фонов.</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Хороший пример" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-3">
                <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Живой взгляд</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};