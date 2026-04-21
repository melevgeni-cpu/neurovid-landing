import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Faq: React.FC = () => {
  const faqItems = [
    {
      question: 'А лицо будет похоже? Не получится ли эффект «пластиковой куклы»?',
      answer: 'Это главный страх наших клиентов. Я использую нейросети только как инструмент для восстановления текстуры. Все ключевые черты лица (глаза, родинки, мимику) я корректирую вручную по вашим референсам. Вы получите превью и оплачиваете только когда скажете: «Да, это он!».',
      segment: 'both'
    },
    {
      question: 'Нужно ли отправлять оригинал фото? Вдруг потеряется?',
      answer: 'Нет! Оригинал всегда остаётся у вас. Я даю простую инструкцию, как сфотографировать фото на телефон без бликов. Этого качества достаточно для профессиональной реставрации.',
      segment: 'A'
    },
    {
      question: 'Сколько времени занимает работа?',
      answer: 'Стандартный заказ (восстановление + оживление) — 24-48 часов. Пакет для блогеров из 3-5 роликов — до 3 рабочих дней. Если нужен срочный заказ к празднику — пишите, всегда иду навстречу.',
      segment: 'both'
    },
    {
      question: 'Что если ролик не наберёт просмотры?',
      answer: 'Я даю гарантию на техническое качество (чистота картинки, отсутствие глитчей). Алгоритмы соцсетей зависят от множества факторов. Но по статистике моих клиентов, ролики с «ожившими» фото получают охват в 3-5 раз выше обычных статичных постов. Для теста можете заказать 1 пробный ролик со скидкой 30%.',
      segment: 'B'
    },
    {
      question: 'Вы работаете с видео или только с фото?',
      answer: 'Я оживляю статичные фото и создаю из них короткие видео-ролики (Reels/Shorts/TikTok). Также могу взять ваше старое видео и улучшить его качество (апскейл, цветокоррекция, чистка шумов).',
      segment: 'B'
    },
    {
      question: 'Какие гарантии, что вы не исчезнете с предоплатой?',
      answer: 'Я работаю по схеме «Оплата после утверждения превью». Вы видите результат с водяным знаком, и только после вашего одобрения мы проводим оплату и я отправляю чистый файл.',
      segment: 'A'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/50 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Часто спрашивают</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Вопросы и ответы
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Всё ещё сомневаетесь? Я развею ваши страхи
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 dark:text-gray-100 pr-4">
                  {item.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 shrink-0",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4">
                      {item.answer}
                      {item.segment !== 'both' && (
                        <span className="inline-block mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-1 rounded">
                          {item.segment === 'A' ? 'Для семейного архива' : 'Для блогеров'}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};