import React from 'react';
import { Sparkles, Heart, Shield, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-display font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Профессиональная реставрация и оживление фото с помощью нейросетей. Сохраняем память и создаём виральный контент.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Портфолио</a></li>
              <li><a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Цены</a></li>
              <li><a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Отзывы</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Гарантии</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                Оплата после превью
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Zap className="w-4 h-4 text-yellow-500" />
                Сходство 100%
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Heart className="w-4 h-4 text-red-500" />
                Конфиденциальность
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Связь</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={siteConfig.contacts.telegram} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  💬 Telegram: @neurovid
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contacts.email}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  📧 {siteConfig.contacts.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {siteConfig.name}. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              Договор-оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};