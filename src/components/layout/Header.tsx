import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'Контакты', href: '#contact' },
  ];

  const headerStyle = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
    isScrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
  );

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  if (isMobileMenuOpen) {
    return (
      <>
        <header className={headerStyle}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-display font-bold text-xl">{siteConfig.name}</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Закрыть меню">
              <X className="w-6 h-6" />
            </button>
          </div>
        </header>
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-950 pt-20 px-4 flex flex-col gap-6 text-center">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-2xl font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button className="mt-4 w-full" size="lg" onClick={handleStartProject}>Связаться</Button>
        </div>
      </>
    );
  }

  return (
    <header className={headerStyle}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <span className="font-display font-bold text-xl">{siteConfig.name}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {item.label}
            </a>
          ))}
          <Button size="sm" onClick={handleStartProject}>Начать проект</Button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Переключить тему"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)} aria-label="Открыть меню">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};