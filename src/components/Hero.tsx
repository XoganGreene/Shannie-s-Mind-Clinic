export default function Hero() {
  return (
    <section id="home" className="bg-white/60 p-8 md:p-12 lg:p-16 rounded-3xl border border-blue-50 flex flex-col md:flex-row items-center gap-10 lg:gap-16 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-start flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-[#1E3A8A]">
          A Safe Space to <br className="hidden xl:block"/><span className="text-blue-500">Heal Your Mind.</span>
        </h1>
        
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
          Experience mental healthcare grounded in profound medical expertise and compassionate listening. As a medical doctor specializing in mental well-being, I provide a holistic path towards your stability and peace.
        </p>

        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <a href="#services" className="px-6 py-3 md:px-8 md:py-4 bg-blue-500 text-white rounded-full text-sm font-bold hover:bg-blue-600 transition-colors">
            Schedule a Consultation
          </a>
          <a href="#assessment" className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#1E3A8A] border border-blue-100 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors shadow-sm">
            Take Quick-Check
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 lg:w-5/12 flex-shrink-0 relative z-10 flex flex-col items-center md:items-end mt-4 md:mt-0">
         <div className="w-full aspect-square md:aspect-[4/5] bg-slate-200 rounded-[2rem] bg-cover bg-center shadow-lg border border-white" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}dr-shannie.jpeg')` }}></div>
         <div className="bg-white px-6 py-4 rounded-xl shadow-xl -mt-8 mr-auto md:mr-0 md:-ml-8 relative z-20 border border-blue-50">
           <p className="text-base font-bold text-[#1E3A8A]">Dr. Shannie, MD</p>
           <p className="text-[11px] text-blue-500 uppercase font-bold tracking-wider mt-0.5">Clinical Lead & Founder</p>
         </div>
      </div>
    </section>
  );
}
