import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Елена, 42 года',
      role: 'Заказала для мамы на юбилей',
      text: 'Мама плакала полчаса. Сказала, что это лучший подарок в её жизни. Дедушка на видео улыбнулся точно так же, как она помнит из детства. Спасибо вам за это чудо!',
      rating: 5,
      segment: 'Семейный архив',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Влад, 27 лет',
      role: 'Автор исторического канала',
      text: 'Заказал пачку из 5 рилсов. Первый же ролик собрал 800к просмотров за сутки! Алгоритмы реально любят такой визуал. Теперь я ваш постоянный клиент.',
      rating: 5,
      segment: 'Блогер',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Светлана, 38 лет',
      role: 'Восстановление свадебного фото родителей',
      text: 'Боялась, что нейросеть сделает «пластиковые» лица. Но вы сохранили каждую родинку и морщинку. Папа как живой. Это бесценно.',
      rating: 5,
      segment: 'Семейный архив',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Реальные эмоции и результаты
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative flex-1">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-indigo-200 dark:text-indigo-800/50 rotate-180" />
                <p className="text-gray-700 dark:text-gray-300 relative z-10 pl-4">
                  {item.text}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200 dark:border-indigo-800"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full">
                  {item.segment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};