export default function Footer() {
  return (
    <footer className="h-16 bg-white border-t border-blue-100 px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-400 font-medium mt-auto w-full max-w-[1440px] mx-auto rounded-t-3xl">
      <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Shannie's Mind Clinic. All Rights Reserved.</div>
      <div className="flex gap-4 md:gap-6 uppercase tracking-widest">
        <a href="#" className="hover:text-[#1E3A8A] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#1E3A8A] transition-colors">Patient Portal</a>
        <a href="#" className="hover:text-[#1E3A8A] transition-colors">Consent Forms</a>
      </div>
    </footer>
  );
}
