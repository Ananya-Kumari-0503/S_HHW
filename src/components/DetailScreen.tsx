import React, { useState } from 'react';
import { TatvaKey, TabType, ScreenType } from '../types';
import { TATVA_DATA } from '../data/tatvaData';
import { ArrowLeft, BookOpen, Activity, CheckCircle2, Leaf, Sparkles } from 'lucide-react';

interface DetailScreenProps {
  tatvaKey: TatvaKey;
  onNavigate: (screen: ScreenType) => void;
}

export const DetailScreen: React.FC<DetailScreenProps> = ({ tatvaKey, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const data = TATVA_DATA[tatvaKey] || TATVA_DATA.earth;

  return (
    <div className="w-full space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141824] p-5 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('tatva')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/80 mb-1">
              {data.sanskritName} Tatva
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {data.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('tatva')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-medium text-xs sm:text-sm rounded-xl transition cursor-pointer flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Tatva Center
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-500 active:scale-95 text-white font-medium text-xs sm:text-sm rounded-xl transition cursor-pointer flex items-center gap-2 shadow"
          >
            Simulator
          </button>
        </div>
      </div>

      {/* Main 2-Column Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Artwork & Essence */}
        <div className="lg:col-span-5 bg-[#141824] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-5">
          <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-700/80 shadow-md bg-black/50 flex items-center justify-center relative group">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-200 backdrop-blur-md px-3 py-1 rounded-lg bg-black/60 border border-slate-700">
                {data.title}
              </span>
              <Sparkles className="w-4 h-4 text-teal-400" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p className="font-semibold text-teal-300 mb-1">Elemental Essence:</p>
            {data.overview.description}
          </div>
        </div>

        {/* Right Column: Tabbed Deep-Dive Content */}
        <div className="lg:col-span-7 space-y-4">
          {/* Tab Navigation Bar */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#141824] rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('realtime')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'realtime'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Activity className="w-4 h-4" />
              Real-Time Data
            </button>
            <button
              onClick={() => setActiveTab('actions')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'actions'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              Action Steps
            </button>
          </div>

          {/* Tab Content Display Area */}
          <div className="bg-[#141824] rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl min-h-[380px]">
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-emerald-400">
                    {data.overview.heading}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {data.overview.description}
                </p>

                <div className="space-y-3 pt-2">
                  {data.overview.bullets.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-slate-300"
                    >
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'realtime' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-amber-400">
                    {data.realtime.heading}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {data.realtime.bullets.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5 shadow-sm"
                    >
                      <div className="text-xs font-semibold text-slate-400">{item.label}</div>
                      <div className="text-base font-bold text-amber-300">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'actions' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-sky-400">
                    {data.actions.heading}
                  </h3>
                </div>

                <div className="space-y-3">
                  {data.actions.bullets.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5 shadow-sm"
                    >
                      <Leaf className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-teal-300">{item.action}</div>
                        <div className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                          {item.impact}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
