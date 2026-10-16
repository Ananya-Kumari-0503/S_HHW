import React from 'react';
import { ScreenType } from '../types';
import { ArrowLeft, Globe, ShieldCheck, HelpCircle, Sliders, Sparkles } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-[#141824] p-5 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">About EcoSlider</h1>
            <p className="text-xs sm:text-sm text-slate-400">Panch Tatva Environmental Simulator & Education Project</p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('dashboard')}
          className="px-4 py-2 bg-teal-600 hover:bg-teal-500 active:scale-95 text-white font-medium text-xs sm:text-sm rounded-xl transition cursor-pointer flex items-center gap-2 shadow"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Simulator
        </button>
      </div>

      {/* Main Content Card */}
      <div className="bg-[#141824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-8">
        {/* Banner Planet Hero */}
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 rounded-2xl border border-slate-800">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-[0_0_30px_rgba(20,184,166,0.3)] border-2 border-teal-500/40 shrink-0">
            <img
              src="/balanced_earth.png"
              alt="Balanced Earth"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950/80 text-teal-300 border border-teal-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ancient Wisdom &bull; Modern Climate Science</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Harmonizing the Five Elements</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              EcoSlider allows users to simulate the delicate equilibrium of nature’s primary building blocks: Earth, Water, Fire, Air, and Space.
            </p>
          </div>
        </div>

        {/* Narrative Description */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-white">EcoSlider</strong> is an interactive educational simulation that models the harmony of the five primordial elements (Tatvas) of nature:
            <span className="text-emerald-400 font-semibold"> Earth (Prithvi)</span>,
            <span className="text-blue-400 font-semibold"> Water (Jal)</span>,
            <span className="text-amber-400 font-semibold"> Fire (Agni)</span>,
            <span className="text-cyan-400 font-semibold"> Air (Vayu)</span>, and
            <span className="text-purple-400 font-semibold"> Space (Akash)</span>.
          </p>

          <p>
            Users can dynamically adjust sliders to simulate localized and global environmental shifts—such as floods, prolonged droughts, extreme heatwaves, or deforestation—and observe how planetary health and harmony respond in real time.
          </p>

          <p>
            The platform also integrates a comprehensive 15-question quiz to test knowledge of ecological systems, planetary boundaries, and character philosophy rooted in elemental harmony.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-teal-950/80 border border-teal-800/80 text-teal-400 shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Dynamic 5-Element Engine</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Fine-tune each Tatva to witness immediate cause-and-solution planetary diagnostics.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Real-Time Planetary Indicators</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Atmospheric CO2, topsoil depletion, oceanic temperature anomalies, and ozone healing rates.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">15-Question Quiz Zone</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Comprehensive multiple-choice challenges with instant feedback and rank certificates.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-purple-950/80 border border-purple-800/80 text-purple-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Everyday Action Playbook</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Practical, high-impact conservation practices every individual can adopt right now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
