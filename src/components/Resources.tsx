import { ArrowRight } from "lucide-react";

export default function Resources() {
  return (
    <section id="resources" className="bg-blue-900 text-white p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden flex-1 min-h-[250px]">
      <div className="relative z-10 w-full">
        <h3 className="text-xl font-bold mb-2">Resource Hub</h3>
        <p className="text-blue-200 text-sm mb-6 max-w-sm">
          Get your free guide: "5 Steps to Lower Workplace Anxiety" - A medically-grounded guide to regaining your calm.
        </p>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            alert('This would typically connect to Mailchimp, ConvertKit, or another marketing API.');
          }}
          className="flex flex-col sm:flex-row gap-3 w-full"
        >
          <input 
            type="email" 
            placeholder="Email address" 
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm flex-1 focus:outline-none focus:bg-white/20 transition-colors placeholder:text-blue-200"
          />
          <button 
            type="submit" 
            className="bg-blue-400 hover:bg-blue-300 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-colors flex items-center justify-center gap-2 text-white"
          >
            Send Guide
            <ArrowRight size={16} />
          </button>
        </form>
        <p className="text-[10px] text-blue-300/50 mt-4">We respect your privacy. No spam, ever.</p>
      </div>
      
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
    </section>
  );
}
