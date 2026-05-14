export default function About() {
  return (
    <section id="about" className="bg-white/60 p-8 rounded-3xl border border-blue-50 flex flex-col">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] leading-tight">
          From treating the body to healing the mind.
        </h2>
        
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            My journey began in general medicine, treating physical ailments and understanding the vast complexity of the human body. However, I quickly realized that true health must begin in the mind.
          </p>
          <div className="w-full h-32 rounded-2xl bg-slate-100 bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop')" }}></div>
          <p>
            Recognizing that so many physical symptoms were rooted in emotional and psychological distress, I pivoted my medical career entirely to mental healthcare. I wanted to treat the root causes, not just the symptoms.
          </p>
        </div>

        <div className="pt-2 flex items-center gap-6 mt-auto">
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-[#1E3A8A]">10+</span>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1">Years Medical Exp.</span>
          </div>
          <div className="w-px h-10 bg-blue-100"></div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-[#1E3A8A]">MD</span>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1">Certified Physician</span>
          </div>
        </div>
      </div>
    </section>
  );
}
