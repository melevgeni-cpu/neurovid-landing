import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/widgets/Hero';
import { PainSolution } from '@/widgets/PainSolution';
import { Portfolio } from '@/widgets/Portfolio';
import { Process } from '@/widgets/Process';
import { Pricing } from '@/widgets/Pricing';
import { Testimonials } from '@/widgets/Testimonials';
import { Faq } from '@/widgets/Faq';
import { ContactForm } from '@/widgets/ContactForm';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'sonner';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <PainSolution />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};