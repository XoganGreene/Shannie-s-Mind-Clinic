import { FileDown, ClipboardCheck, MessageCircle } from "lucide-react";

export default function Intake() {
  return (
    <section className="bg-white p-8 rounded-3xl border border-blue-50 flex flex-col md:flex-row gap-8 items-center flex-1">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold text-[#1E3A8A] mb-3">Seamless, Secure Onboarding</h2>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Your energy should be spent on healing, not hovering in a waiting room with a clipboard. Our automated intake process allows you to securely complete everything digitally before we ever meet.
        </p>
        
        <ul className="space-y-4">
          <li className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <FileDown size={14} className="text-blue-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1E3A8A] mb-0.5">Instant Digital Delivery</h4>
              <p className="text-[11px] text-slate-500">Upon booking, intake forms are securely emailed to you.</p>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <ClipboardCheck size={14} className="text-blue-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1E3A8A] mb-0.5">HIPAA-Compliant Vault</h4>
              <p className="text-[11px] text-slate-500">Submitted directly to an encrypted, medical-grade server.</p>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <MessageCircle size={14} className="text-blue-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1E3A8A] mb-0.5">More Time for You</h4>
              <p className="text-[11px] text-slate-500">Our entire first session is devoted to your story.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/2 p-6 min-h-[250px] bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/consultation.jpeg')" }}></div>
         <div className="relative z-10 flex flex-col items-center">
           <div className="w-16 h-16 bg-white rounded-xl shadow-sm rotate-3 flex items-center justify-center mb-4 border border-blue-50">
             <ClipboardCheck size={24} className="text-blue-400" />
           </div>
           <p className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2">Admin Hub</p>
           <p className="text-[11px] text-slate-600 px-2 leading-relaxed font-medium">
             A dedicated portal is provided to active patients for managing appointments, superbills, and documentation safely.
           </p>
         </div>
      </div>
    </section>
  );
}
