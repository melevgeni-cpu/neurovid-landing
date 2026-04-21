import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';
import { siteConfig } from '@/lib/config';

const formSchema = z.object({
  name: z.string()
    .min(2, 'Имя слишком короткое')
    .max(50, 'Имя слишком длинное')
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s\-']+$/, 'Недопустимые символы в имени'),
  contact: z.string()
    .min(5, 'Введите корректный телефон или @username')
    .max(100)
    .regex(/^[a-zA-Z0-9а-яА-ЯёЁ@+\-\s()_]+$/, 'Недопустимые символы'),
  segment: z.enum(['family', 'creator'], {
    required_error: 'Выберите цель обращения'
  }),
  message: z.string()
    .min(10, 'Опишите задачу подробнее')
    .max(1000, 'Сообщение слишком длинное')
    .transform(str => str.replace(/[<>]/g, ''))
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      segment: 'family'
    }
  });

  const selectedSegment = watch('segment');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      
      setIsSuccess(true);
      toast.success('Заявка отправлена! Я свяжусь с вами в течение часа.', {
        icon: <CheckCircle className="w-4 h-4" />
      });
      reset();
      
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast.error('Произошла ошибка. Попробуйте позже или напишите в Telegram.');
      console.error('Form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Готовы сохранить память или взорвать охваты?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Оставьте заявку — я отвечу в течение часа
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Напишите мне</h3>
                <p className="text-indigo-100 mb-6">
                  Расскажите о вашей задаче. Я помогу подобрать оптимальное решение.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">100% конфиденциальность</p>
                      <p className="text-sm text-indigo-200">Ваши фото не публикуются без согласия</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Быстрый ответ</p>
                      <p className="text-sm text-indigo-200">Отвечаю в Telegram и WhatsApp</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-indigo-200 mb-2">Или пишите напрямую:</p>
                  <a 
                    href={siteConfig.contacts.telegram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    💬 @neurovid
                  </a>
                </div>
              </div>

              <div className="md:col-span-3 p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Я хочу:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`
                        relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all
                        ${selectedSegment === 'family' 
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                        }
                      `}>
                        <input
                          type="radio"
                          value="family"
                          {...register('segment')}
                          className="sr-only"
                        />
                        <span className="text-center">
                          <span className="block font-medium">👨‍👩‍👧 Для семьи</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Реставрация фото</span>
                        </span>
                      </label>
                      
                      <label className={`
                        relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all
                        ${selectedSegment === 'creator' 
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                        }
                      `}>
                        <input
                          type="radio"
                          value="creator"
                          {...register('segment')}
                          className="sr-only"
                        />
                        <span className="text-center">
                          <span className="block font-medium">📱 Для блога</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Reels и Shorts</span>
                        </span>
                      </label>
                    </div>
                    {errors.segment && (
                      <p className="mt-1 text-sm text-red-500">{errors.segment.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Елена"
                      {...register('name')}
                      className={`
                        w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow
                        ${errors.name 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                        }
                      `}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Телефон или @Telegram
                    </label>
                    <input
                      id="contact"
                      type="text"
                      placeholder="+7 999 123-45-67 или @username"
                      {...register('contact')}
                      className={`
                        w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow
                        ${errors.contact 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                        }
                      `}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-sm text-red-500">{errors.contact.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Опишите задачу
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={selectedSegment === 'family' 
                        ? 'Например: Нужно восстановить фото дедушки к 9 мая...' 
                        : 'Например: Нужна пачка рилсов в стиле исторического кино...'
                      }
                      {...register('message')}
                      className={`
                        w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow resize-none
                        ${errors.message 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                        }
                      `}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Отправлено!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Отправить заявку
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                    Ваши фото в безопасности.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};