import { useState } from 'react';

const QUESTIONS = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you felt overwhelmed by your daily responsibilities?",
    options: [
      { text: "Rarely or never", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Almost constantly", score: 3 }
    ]
  },
  {
    id: 2,
    text: "How often are you having trouble sleeping or finding yourself waking up feeling unrefreshed?",
    options: [
      { text: "Rarely or never", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Almost constantly", score: 3 }
    ]
  },
  {
    id: 3,
    text: "Do you find it difficult to relax, even when you have free time?",
    options: [
      { text: "Rarely or never", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Almost constantly", score: 3 }
    ]
  }
];

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [scores, setScores] = useState<number[]>([]);

  const handleStart = () => {
    setCurrentStep(0);
    setScores([]);
  };

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);
    setCurrentStep(currentStep + 1);
  };

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const isComplete = currentStep === QUESTIONS.length;

  return (
    <section id="assessment" className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50 flex flex-col min-h-[350px]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#1E3A8A]">Wellness Quick-Check</h2>
          <p className="text-xs text-slate-500 mt-1">A 1-minute screen of your current mental state.</p>
        </div>
        <div className="bg-blue-50 px-3 py-1 rounded text-[10px] font-bold text-blue-600 tracking-wider">SECURE & ANONYMOUS</div>
      </div>

      <div className="flex-1 flex flex-col">
        {currentStep === -1 && (
          <div className="flex-1 flex flex-col justify-center items-start animate-in fade-in zoom-in duration-300">
            <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">Are you feeling stressed?</h3>
            <p className="text-slate-600 text-sm mb-6 max-w-sm">Stress often builds up quietly. Take this brief assessment to gauge where you are today.</p>
            <button 
              onClick={handleStart}
              className="px-6 py-2.5 bg-blue-500 text-white rounded-full text-sm font-bold hover:bg-blue-600 transition-colors"
            >
              Start Assessment
            </button>
          </div>
        )}

        {currentStep >= 0 && !isComplete && (
          <div className="flex-1 flex flex-col justify-center animate-in fade-in duration-300">
            <div className="mb-6">
              <p className="text-sm font-bold text-[#1E3A8A] mb-4">
                {QUESTIONS[currentStep].text}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="p-4 border border-blue-100 rounded-2xl hover:bg-blue-50 text-xs font-medium text-slate-700 text-center transition-all bg-white"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-auto">
              <div 
                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${(Math.max(0, currentStep) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {isComplete && (
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in fade-in duration-500 py-4">
             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            
            <h4 className="font-bold text-[#1E3A8A] mb-2 text-lg">Assessment Complete</h4>
            <p className="text-xs text-slate-600 max-w-sm mb-6">
               {totalScore <= 3 ? "Your responses indicate a manageable level of stress. Remember to continue prioritizing your self-care routines." : 
                totalScore <= 6 ? "Your scores indicate moderate stress levels. We recommend a consultation to discuss management strategies." : 
                "You are experiencing significant distress. Please consider reaching out for professional support."}
            </p>
            
            <div className="flex gap-4">
              <a href="#services" className="px-6 py-2 bg-[#1E3A8A] text-white rounded-full text-xs font-bold hover:bg-blue-900 transition-colors">
                Book Consultation
              </a>
              <button onClick={handleStart} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors">
                Retake
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
