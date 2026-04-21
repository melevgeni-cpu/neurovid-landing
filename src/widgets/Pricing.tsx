import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Pricing: React.FC = () => {
  const plans = [
    {
      segment: 'A',
      icon: Sparkles,
      title: 'Семейная реликвия',
      subtitle: 'Для тех, кто хочет сохранить тепло воспоминаний',
      price: 'от 3 500 ₽',
      features: [
        'Восстановление 1 фото',
        'Ручная коррекция черт лица',
        'Анимация «живой взгляд»',
        'Превью перед оплатой',
        'Гарантия сходства 100%'
      ],
      cta: 'Подарить чудо',
      highlight: false
    },
    {
      segment: 'B',
      icon: TrendingUp,
      title: 'Нейро-продакшн',
      subtitle: 'Для блогеров и креаторов',
      price: 'от 9 900 ₽',
      features: [
        'Пакет из 3 Reels/Shorts',
        'Cinematic пост-обработка',
        'Подбор виральных стилей',
        'Без глитчей и артефактов',
        'Доставка за 48 часов'
      ],
      cta: 'Взорвать охваты',
      highlight: true,
      badge: '🔥 Тренд 2026'
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Прозрачные цены на магию
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Выберите свой формат работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/50 dark:to-gray-900 border-2 border-indigo-500 shadow-xl' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                  <plan.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{plan.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400 ml-1">/ заказ</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.highlight ? 'primary' : 'outline'}
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          * Индивидуальный расчет для сложных проектов в Direct
        </p>
      </div>
    </section>
  );
};