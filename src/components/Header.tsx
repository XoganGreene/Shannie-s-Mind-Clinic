import { Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isCrisisModalOpen, setIsCrisisModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-auto min-h-20 bg-white border-b border-blue-100 flex flex-wrap items-center justify-between px-6 lg:px-10 py-4 shadow-sm">
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tight text-[#1E3A8A]">
            Shannie's Mind Clinic
          </span>
          <span className="text-[10px] uppercase tracking-widest text-blue-500 font-semibold">
            Compassionate Clinical Excellence
          </span>
        </div>
        
        <nav className="hidden lg:flex gap-6 items-center text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-[#1E3A8A] transition-colors">About Dr. Shannie</a>
          <a href="#services" className="hover:text-[#1E3A8A] transition-colors">Services</a>
          <a href="#resources" className="hover:text-[#1E3A8A] transition-colors">Resources</a>
          <a href="#book" className="px-5 py-2 bg-blue-500 text-white rounded-full text-xs font-bold hover:bg-blue-600 transition-colors">
            Book Now
          </a>
          <button 
            onClick={() => setIsCrisisModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2 border-2 border-red-500 text-red-600 rounded-full text-xs font-bold hover:bg-red-50 transition-colors"
          >
            <Phone size={16} />
            <span>In Crisis? Get Help Now</span>
          </button>
        </nav>

        {/* Mobile quick actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button 
            onClick={() => setIsCrisisModalOpen(true)}
            className="flex items-center justify-center p-2 border-2 border-red-500 text-red-600 rounded-full text-xs font-bold hover:bg-red-50 transition-colors"
          >
            <Phone size={16} />
          </button>
        </div>
      </header>

      {/* Crisis Modal */}
      {isCrisisModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1E3A8A]/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsCrisisModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-3 text-red-600 mb-6">
              <div className="p-3 bg-red-50 rounded-full">
                <Phone size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1E3A8A]">Immediate Support</h2>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
              If you or someone else is in immediate danger, or experiencing a mental health crisis, please reach out to these emergency resources immediately. You are not alone.
            </p>
            
            <div className="space-y-4">
              <a href="tel:911" className="block w-full text-center border-2 border-red-500 text-red-600 font-bold py-3 rounded-xl hover:bg-red-50 transition-colors">
                Call Emergency Services (911)
              </a>
              <a href="tel:988" className="block w-full text-center bg-[#1E3A8A] text-white font-bold py-3 rounded-xl hover:bg-blue-900 transition-colors">
                Suicide & Crisis Lifeline (988)
              </a>
            </div>
            
            <p className="text-xs text-slate-500 text-center mt-6">
              Available 24/7, free, and confidential.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
