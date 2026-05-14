import { Video, Clock, Wallet } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="bg-white p-6 rounded-3xl border border-blue-50 flex flex-col h-full">
      <h3 className="text-sm font-bold text-[#1E3A8A] mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        Online Consultations
      </h3>
      
      <div className="w-full h-32 rounded-2xl bg-slate-100 mb-5 bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('/consultation.jpeg')" }}></div>

      <p className="text-xs text-slate-500 mb-6 font-medium">
        Private video sessions tailored to your history. Automated clinical intake for a seamless start.
      </p>

      <div className="space-y-4 mb-6 flex-1">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
             <Video size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1E3A8A] mb-1">Secure Video</h4>
            <p className="text-[11px] text-slate-500 leading-tight">End-to-end encrypted platform for privacy.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
             <Clock size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1E3A8A] mb-1">Flexible Scheduling</h4>
            <p className="text-[11px] text-slate-500 leading-tight">50-minute sessions working around your life.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
             <Wallet size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1E3A8A] mb-1">Transparent Pricing</h4>
            <p className="text-[11px] text-slate-500 leading-tight">Clear fees with superbills for insurance.</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => alert('This button will trigger a Calendly popup or redirect to a scheduling API.')}
        className="w-full py-2.5 bg-[#1E3A8A] text-white rounded-xl text-xs font-bold hover:bg-blue-900 transition-colors mt-auto"
      >
        Book Your Session
      </button>
    </section>
  );
}
