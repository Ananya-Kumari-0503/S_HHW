import React from 'react';
import { ScreenType } from '../types';
import { ArrowLeft, Globe, ShieldCheck, HelpCircle, Sliders } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-[#12151c] text-white flex flex-col pb-12 shadow-2xl">
      {/* Top Header */}
      <div className="pt-4 pb-3 px-4 border-b border-slate-800 bg-[#161a24]/90 backdrop-blur sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={() => onNavigate('dashboard')}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1 text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Dashboard
        </button>
        <h1 className="text-base font-bold text-teal-400">About Project</h1>
        <div className="w-12" />
      </div>

      <div className="p-4 space-y-4">
        {/* Banner Planet Image */}
        <div className="flex flex-col items-center justify-center p-3 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-[0_0_25px_rgba(20,184,166,0.25)] border-2 border-teal-500/30 flex items-center justify-center">
            <img
              src="/balanced_earth.png"
              alt="Balanced Earth"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-slate-100 mt-3">About EcoSlider</h2>
          <p className="text-xs text-teal-400 font-medium">Ecological Harmony Simulation</p>
        </div>

        {/* Narrative Card */}
        <div className="bg-[#1e222e] rounded-2xl p-5 border border-slate-700/80 shadow-xl space-y-4 text-slate-200">
          <p className="text-xs leading-relaxed text-slate-300 font-medium">
            <strong className="text-white">EcoSlider</strong> is an educational app that allows users to explore the balance of the five elements (Tatvas) of nature — <span className="text-emerald-400 font-semibold">Earth</span>, <span className="text-blue-400 font-semibold">Water</span>, <span className="text-amber-400 font-semibold">Fire</span>, <span className="text-cyan-400 font-semibold">Air</span>, and <span className="text-purple-400 font-semibold">Space</span>.
          </p>

          <p className="text-xs leading-relaxed text-slate-300 font-medium">
            Users can adjust sliders to simulate environmental changes and see how they affect the overall harmony of the ecosystem.
          </p>

          <p className="text-xs leading-relaxed text-slate-300 font-medium">
            The app also includes a quiz section to test knowledge about the Tatvas and their importance in maintaining ecological balance.
          </p>

          {/* Core Pillars */}
          <div className="pt-2 border-t border-slate-800 space-y-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Sliders className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Interactive 5-Element Simulation Engine</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Real-Time Planetary Indicators & Diagnostic Solutions</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>15 Comprehensive Eco-Wisdom Quiz Challenges</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Actionable everyday conservation practices</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => onNavigate('dashboard')}
          className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 active:scale-[0.98] transition text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
