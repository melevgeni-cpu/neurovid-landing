import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Wand2, Eye, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: Camera,
      title: 'Вы присылаете фото',
      description: 'Просто сфотографируйте старое фото на телефон по моей инструкции. Оригинал остается у вас!',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
    },
    {
      icon: Wand2,
      title: 'Нейросети + Ручная работа',
      description: 'ИИ восстанавливает текстуру. Я вручную корректирую глаза, мимику и убираю артефакты.',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
    },
    {
      icon: Eye,
      title: 'Вы утверждаете превью',
      description: 'Показываю результат с водяным знаком. Оплата только после того, как вы скажете «Да, это он(а)!»',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600'
    },
    {
      icon: Rocket,
      title: 'Получаете готовый файл',
      description: 'Отправляю видео или фото в высоком разрешении. Вы дарите эмоции или публикуете контент.',
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Как это работает?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Никакой магии — только профессионализм и прозрачность
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm">→</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};