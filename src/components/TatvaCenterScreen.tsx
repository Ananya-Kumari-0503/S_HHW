import React from 'react';
import { ScreenType, TatvaKey } from '../types';
import { ArrowLeft, Globe, Droplet, Flame, Wind, Orbit, Sparkles } from 'lucide-react';

interface TatvaCenterScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectTatva: (tatva: TatvaKey) => void;
}

export const TatvaCenterScreen: React.FC<TatvaCenterScreenProps> = ({
  onNavigate,
  onSelectTatva,
}) => {
  const tatvaList: { key: TatvaKey; label: string; icon: React.ReactNode; color: string }[] = [
    { key: 'earth', label: 'Earth Tatva (Prithvi)', icon: <Globe className="w-4 h-4" />, color: 'bg-emerald-700 hover:bg-emerald-600' },
    { key: 'water', label: 'Water Tatva (Jal)', icon: <Droplet className="w-4 h-4" />, color: 'bg-blue-700 hover:bg-blue-600' },
    { key: 'fire', label: 'Fire Tatva (Agni)', icon: <Flame className="w-4 h-4" />, color: 'bg-amber-700 hover:bg-amber-600' },
    { key: 'air', label: 'Air Tatva (Vayu)', icon: <Wind className="w-4 h-4" />, color: 'bg-cyan-700 hover:bg-cyan-600' },
    { key: 'space', label: 'Space Tatva (Akash)', icon: <Orbit className="w-4 h-4" />, color: 'bg-purple-700 hover:bg-purple-600' },
    { key: 'harmony', label: 'Overall Harmony', icon: <Sparkles className="w-4 h-4" />, color: 'bg-teal-700 hover:bg-teal-600' },
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-[#12151c] text-white flex flex-col pb-12 shadow-2xl">
      {/* Top Header */}
      <div className="pt-4 pb-3 px-4 border-b border-slate-800 bg-[#161a24]/90 backdrop-blur sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={() => onNavigate('dashboard')}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1 text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="text-base font-bold text-teal-400">Panch Tatva Intelligence</h1>
        <div className="w-12" />
      </div>

      <div className="p-4 space-y-4">
        {/* Banner Planet */}
        <div className="flex flex-col items-center justify-center p-3 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-[0_0_20px_rgba(20,184,166,0.3)] border-2 border-teal-500/30 flex items-center justify-center">
            <img
              src="/balanced_earth.png"
              alt="Balanced Earth"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-slate-100 mt-2">Panch Tatva Intelligence</h2>
          <p className="text-xs text-slate-400 text-center">
            Ancient elemental wisdom combined with modern ecological metrics
          </p>
        </div>

        {/* Feature Card: Save Earth, Save Future with earth_poster.png */}
        <div className="bg-[#1e222e] border border-slate-700/80 rounded-2xl p-4 shadow-xl text-center space-y-3">
          <h3 className="text-lg font-bold text-teal-300 tracking-wide">
            Save Earth, Save Future
          </h3>

          <div className="rounded-xl overflow-hidden border border-slate-700 shadow-inner bg-black/40 max-h-[360px] flex items-center justify-center">
            <img
              src="/earth_poster.png"
              alt="Save Earth Poster"
              className="w-full object-contain max-h-[350px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Tatva Buttons Grid */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center">
            Explore Elemental Intelligence
          </div>

          <div className="grid grid-cols-2 gap-2">
            {tatvaList.map((item) => (
              <button
                key={item.key}
                onClick={() => onSelectTatva(item.key)}
                className={`p-3 rounded-xl text-left text-white font-medium text-xs flex items-center gap-2.5 shadow transition-all active:scale-95 cursor-pointer ${item.color}`}
              >
                {item.icon}
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full mt-3 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] transition text-slate-200 font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
