export default function Testimonials() {
  return (
    <section className="bg-sky-50 p-6 rounded-3xl border border-blue-100 flex flex-col h-full">
      <h3 className="text-sm font-bold text-[#1E3A8A] mb-4">What patients say</h3>
      
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <div>
          <p className="text-[11px] text-slate-600 italic leading-relaxed">
            "Dr. Shannie's background as an MD makes such a difference. I felt completely understood not just emotionally, but physically as well. The holistic approach completely changed my perspective."
          </p>
          <p className="text-[9px] mt-2 font-bold text-blue-400 uppercase tracking-widest">- Anonymous Patient</p>
        </div>
        
        <div>
          <p className="text-[11px] text-slate-600 italic leading-relaxed">
            "The practical strategies paired with deep, compassionate listening helped me navigate a severe burnout phase at work. I'm incredibly grateful."
          </p>
          <p className="text-[9px] mt-2 font-bold text-blue-400 uppercase tracking-widest">- Anonymous Patient</p>
        </div>
      </div>
    </section>
  );
}
