import React, { useState } from 'react';
import { TatvaKey, TabType, ScreenType } from '../types';
import { TATVA_DATA } from '../data/tatvaData';
import { ArrowLeft, BookOpen, Activity, CheckCircle2, Leaf } from 'lucide-react';

interface DetailScreenProps {
  tatvaKey: TatvaKey;
  onNavigate: (screen: ScreenType) => void;
}

export const DetailScreen: React.FC<DetailScreenProps> = ({ tatvaKey, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const data = TATVA_DATA[tatvaKey] || TATVA_DATA.earth;

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-[#12151c] text-white flex flex-col pb-12 shadow-2xl">
      {/* Top Navigation */}
      <div className="pt-4 pb-3 px-4 border-b border-slate-800 bg-[#161a24]/90 backdrop-blur sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={() => onNavigate('tatva')}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1 text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Tatva Center
        </button>
        <h1 className="text-sm font-bold text-teal-400 truncate max-w-[200px]">{data.title}</h1>
        <div className="w-12" />
      </div>

      <div className="p-4 space-y-4">
        {/* Title Badge */}
        <div className="text-center space-y-1">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/80">
            {data.sanskritName} Tatva
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100">{data.title}</h2>
        </div>

        {/* Interactive Tab Navigation Bar */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#181d28] rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('realtime')}
            className={`py-2 px-1 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'realtime'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            Real-Time
          </button>
          <button
            onClick={() => setActiveTab('actions')}
            className={`py-2 px-1 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'actions'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Action Steps
          </button>
        </div>

        {/* Content Card with Image Illustration */}
        <div className="space-y-3">
          {/* Main Visual Image */}
          <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-700/80 shadow-md bg-black/40 flex items-center justify-center relative">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-3 text-xs font-medium text-slate-300 backdrop-blur-sm px-2 py-0.5 rounded bg-black/40">
              {data.title}
            </span>
          </div>

          {/* Tab Content Display Area */}
          <div className="bg-[#1e222e] rounded-2xl p-4 border border-slate-700/80 shadow-xl space-y-3">
            {activeTab === 'overview' && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                  {data.overview.heading}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {data.overview.description}
                </p>
                <div className="space-y-2 pt-1 border-t border-slate-800">
                  {data.overview.bullets.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'realtime' && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  {data.realtime.heading}
                </h3>
                <div className="space-y-2.5">
                  {data.realtime.bullets.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1"
                    >
                      <div className="text-xs font-semibold text-slate-400">{item.label}</div>
                      <div className="text-sm font-bold text-amber-300">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'actions' && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-base font-bold text-sky-400 flex items-center gap-2">
                  {data.actions.heading}
                </h3>
                <div className="space-y-2.5">
                  {data.actions.bullets.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5"
                    >
                      <Leaf className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-teal-300">{item.action}</div>
                        <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Tatva Center Button */}
        <button
          onClick={() => onNavigate('tatva')}
          className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 active:scale-[0.98] transition text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tatva Center
        </button>
      </div>
    </div>
  );
};
