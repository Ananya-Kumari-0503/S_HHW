import React from 'react';
import { ScreenType, TatvaKey } from '../types';
import { ArrowLeft, Globe, Droplet, Flame, Wind, Orbit, Sparkles, ChevronRight } from 'lucide-react';

interface TatvaCenterScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectTatva: (tatva: TatvaKey) => void;
}

export const TatvaCenterScreen: React.FC<TatvaCenterScreenProps> = ({
  onNavigate,
  onSelectTatva,
}) => {
  const tatvaList: {
    key: TatvaKey;
    label: string;
    sanskrit: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    border: string;
  }[] = [
    {
      key: 'earth',
      label: 'Earth Tatva',
      sanskrit: 'Prithvi',
      description: 'Terrestrial ecosystems, fertile topsoil, carbon storage, and planetary biodiversity.',
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      color: 'bg-emerald-950/40 hover:bg-emerald-900/50',
      border: 'border-emerald-700/50 hover:border-emerald-500',
    },
    {
      key: 'water',
      label: 'Water Tatva',
      sanskrit: 'Jal',
      description: 'Oceans, freshwater reservoirs, polar ice caps, hydrological cycle, and marine life.',
      icon: <Droplet className="w-5 h-5 text-blue-400" />,
      color: 'bg-blue-950/40 hover:bg-blue-900/50',
      border: 'border-blue-700/50 hover:border-blue-500',
    },
    {
      key: 'fire',
      label: 'Fire Tatva',
      sanskrit: 'Agni',
      description: 'Solar radiation, thermal balance, renewable energy generation, and climate dynamics.',
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      color: 'bg-amber-950/40 hover:bg-amber-900/50',
      border: 'border-amber-700/50 hover:border-amber-500',
    },
    {
      key: 'air',
      label: 'Air Tatva',
      sanskrit: 'Vayu',
      description: 'Atmospheric gas mix, oxygen levels, winds, weather regulation, and air quality.',
      icon: <Wind className="w-5 h-5 text-cyan-400" />,
      color: 'bg-cyan-950/40 hover:bg-cyan-900/50',
      border: 'border-cyan-700/50 hover:border-cyan-500',
    },
    {
      key: 'space',
      label: 'Space Tatva',
      sanskrit: 'Akash',
      description: 'Stratospheric ozone shield, orbital space, UV radiation defense, and cosmic boundary.',
      icon: <Orbit className="w-5 h-5 text-purple-400" />,
      color: 'bg-purple-950/40 hover:bg-purple-900/50',
      border: 'border-purple-700/50 hover:border-purple-500',
    },
    {
      key: 'harmony',
      label: 'Overall Harmony',
      sanskrit: 'Samanvaya',
      description: 'Equilibrium across all five primordial forces preserving planetary life balance.',
      icon: <Sparkles className="w-5 h-5 text-teal-400" />,
      color: 'bg-teal-950/40 hover:bg-teal-900/50',
      border: 'border-teal-700/50 hover:border-teal-500',
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141824] p-5 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Panch Tatva Intelligence Center</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Ancient ecological philosophy harmonized with modern planetary data
            </p>
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

      {/* Main 2-Column Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Save Earth, Save Future Poster Card */}
        <div className="lg:col-span-5 bg-[#141824] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-teal-300">Save Earth, Save Future</h2>
            <p className="text-xs text-slate-400">Preserving the elemental foundation for future generations</p>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-700 shadow-inner bg-black/50 flex items-center justify-center p-2">
            <img
              src="/earth_poster.png"
              alt="Save Earth Poster"
              className="w-full h-auto max-h-[480px] object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed text-center">
            The Panch Tatva philosophy reminds us that humanity and the cosmos are inextricably linked.
            By protecting each element individually, we sustain the harmony of the entire living planet.
          </div>
        </div>

        {/* Right Column: 6 Elemental Cards */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tatvaList.map((item) => (
              <div
                key={item.key}
                onClick={() => onSelectTatva(item.key)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer shadow-md flex flex-col justify-between ${item.color} ${item.border} group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-slate-800 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 text-slate-300 border border-slate-800">
                      {item.sanskrit}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Intelligence</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
