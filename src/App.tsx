/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resources from './components/Resources';
import Assessment from './components/Assessment';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Intake from './components/Intake';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#1E3A8A] font-sans flex flex-col overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="flex-1 max-w-[1440px] mx-auto w-full p-4 md:p-8 flex flex-col gap-6">
        <Hero />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* LEFT COLUMN: ABOUT, RESOURCES */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <About />
            <Resources />
          </div>

          {/* RIGHT COLUMN: ASSESSMENT, SERVICES, TESTIMONIALS */}
          <div className="xl:col-span-7 flex flex-col gap-6">
            <Assessment />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Services />
              <Testimonials />
            </div>
          </div>
        </div>
        <Intake />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
