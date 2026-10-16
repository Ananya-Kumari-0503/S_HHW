import React from 'react';
import { TatvaValues, ScreenType } from '../types';
import {
  RotateCcw,
  Waves,
  Flame,
  Sun,
  Shuffle,
  BookOpen,
  HelpCircle,
  Info,
  Globe,
  Droplet,
  Wind,
  Orbit,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

interface DashboardScreenProps {
  values: TatvaValues;
  onChangeValues: (newValues: TatvaValues) => void;
  onNavigate: (screen: ScreenType) => void;
  customStatus?: string | null;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  values,
  onChangeValues,
  onNavigate,
  customStatus,
}) => {
  const { earth, water, fire, air, space } = values;

  // Harmony calculation exactly matching original Python logic
  let rawScore = 100;
  rawScore -= Math.abs(earth - 50) * 0.4;
  rawScore -= Math.abs(water - 50) * 0.4;
  rawScore -= Math.abs(fire - 50) * 0.4;
  rawScore -= Math.abs(air - 50) * 0.4;
  rawScore -= Math.abs(space - 50) * 0.4;
  const score = Math.max(0, Math.round(rawScore));

  let rating = 'Rating: Critical';
  let ratingColor = 'text-rose-400 bg-rose-950/60 border-rose-800';
  if (score >= 80) {
    rating = 'Rating: Excellent';
    ratingColor = 'text-emerald-400 bg-emerald-950/60 border-emerald-800';
  } else if (score >= 60) {
    rating = 'Rating: Good';
    ratingColor = 'text-teal-300 bg-teal-950/60 border-teal-800';
  } else if (score >= 40) {
    rating = 'Rating: Moderate';
    ratingColor = 'text-amber-400 bg-amber-950/60 border-amber-800';
  } else if (score >= 20) {
    rating = 'Rating: Poor';
    ratingColor = 'text-orange-400 bg-orange-950/60 border-orange-800';
  }

  // Diagnostic state, cause, and solution matching original
  let status = customStatus || 'Perfect Harmony';
  let cause = 'Cause: Stable ecosystem balance across all elements.';
  let solution = 'Sol: Maintain current balance parameters seamlessly.';
  let planetImage = '/balanced_earth.png';
  let isHarmonious = true;

  if (water > 80) {
    status = customStatus || 'Flood Warning';
    cause = 'Cause: Sudden extreme precipitation overwhelming city drainage pathways and raising river baselines rapidly.';
    solution = 'Sol: Open emergency catchment gates, clean storm drains immediately, and execute rainwater harvesting frameworks.';
    planetImage = '/water_earth.png';
    isHarmonious = false;
  } else if (water < 20) {
    status = customStatus || 'Drought Warning';
    cause = 'Cause: Prolonged lack of rainfall leading to water scarcity.';
    solution = 'Sol: Implement water conservation measures, promote efficient irrigation techniques, and develop alternative water sources.';
    planetImage = '/drought_earth.jpg';
    isHarmonious = false;
  } else if (earth > 80) {
    status = customStatus || 'Abundant Nature';
    cause = 'Cause: Excessive growth of vegetation and natural resources.';
    solution = 'Sol: Promote sustainable resource management and conservation practices.';
    planetImage = '/abundant_earth.png';
    isHarmonious = false;
  } else if (earth < 20) {
    status = customStatus || 'Deforestation Alert';
    cause = 'Cause: Excessive logging and land conversion.';
    solution = 'Sol: Implement reforestation programs, enforce logging regulations, and promote sustainable land use practices.';
    planetImage = '/barren_earth.jpg';
    isHarmonious = false;
  } else if (fire > 80) {
    status = customStatus || 'Heatwave Warning';
    cause = 'Cause: Extended periods of high temperatures causing heat stress.';
    solution = 'Sol: Implement heat stress prevention measures, provide cooling centers, and promote hydration.';
    planetImage = '/fire_earth.jpg';
    isHarmonious = false;
  } else if (fire < 20) {
    status = customStatus || 'Cold Wave Alert';
    cause = 'Cause: Extended periods of low temperatures causing hypothermia risks.';
    solution = 'Sol: Provide heating assistance, ensure proper insulation, and promote warm clothing usage.';
    planetImage = '/frozen_earth.jpg';
    isHarmonious = false;
  } else if (air > 80 || air < 20) {
    status = customStatus || 'Air Quality Alert';
    cause = 'Cause: High levels of air pollution or poor air circulation.';
    solution = 'Sol: Implement air quality improvement measures, promote public transportation, and encourage the use of clean energy.';
    planetImage = '/air_earth.png';
    isHarmonious = false;
  } else if (space > 80 || space < 20) {
    status = customStatus || 'Smog and UV Alert';
    cause = 'Cause: High levels of smog and ultraviolet radiation.';
    solution = 'Sol: Implement smog reduction measures, promote UV protection, and encourage the use of protective gear.';
    planetImage = '/air_earth.png';
    isHarmonious = false;
  }

  // Handlers for sliders
  const handleSliderChange = (key: keyof TatvaValues, val: number) => {
    onChangeValues({ ...values, [key]: val });
  };

  const resetSliders = () => {
    onChangeValues({
      earth: 50,
      water: 50,
      fire: 50,
      air: 50,
      space: 50,
    });
  };

  const floodEvent = () => {
    onChangeValues({ ...values, water: 100 });
  };

  const droughtEvent = () => {
    onChangeValues({ ...values, water: 0 });
  };

  const heatwaveEvent = () => {
    onChangeValues({ ...values, fire: 100 });
  };

  const randomChallenge = () => {
    const challenges = [
      { name: 'Flood Alert', values: { water: 90, earth: 50, fire: 50, air: 50, space: 50 } },
      { name: 'Drought Alert', values: { water: 10, earth: 50, fire: 50, air: 50, space: 50 } },
      { name: 'Heatwave', values: { water: 50, earth: 50, fire: 90, air: 50, space: 50 } },
      { name: 'Air Pollution', values: { water: 50, earth: 50, fire: 50, air: 90, space: 50 } },
      { name: 'Deforestation', values: { water: 50, earth: 10, fire: 50, air: 50, space: 50 } },
    ];
    const pick = challenges[Math.floor(Math.random() * challenges.length)];
    onChangeValues(pick.values);
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Banner / Summary */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141824] p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-md">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>Panch Tatva Planetary Simulator</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Simulate elemental balance across Earth, Water, Fire, Air, and Space.
          </p>
        </div>

        {/* Live Values Readout Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
            Earth: {Math.round(earth)}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-blue-950/80 text-blue-300 border border-blue-800/80">
            Water: {Math.round(water)}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-amber-950/80 text-amber-300 border border-amber-800/80">
            Fire: {Math.round(fire)}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/80">
            Air: {Math.round(air)}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-purple-950/80 text-purple-300 border border-purple-800/80">
            Space: {Math.round(space)}
          </span>
          <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${ratingColor}`}>
            {rating}
          </span>
        </div>
      </div>

      {/* Main 2-Column Responsive Desktop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Planetary Simulation & Diagnostics */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#141824] rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col items-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Status Header */}
            <div className="flex items-center gap-2 mb-4">
              {isHarmonious ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              )}
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 tracking-tight text-center">
                {status}
              </h2>
            </div>

            {/* Planet Globe Visualizer */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-[0_0_35px_rgba(13,148,136,0.35)] border-4 border-slate-700/60 bg-black/50 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img
                src={planetImage}
                alt="Planetary State"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Harmony Score Bar & Percentage */}
            <div className="w-full mt-6 space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-300">Ecological Harmony</span>
                <span className="text-teal-400 font-mono text-base font-bold">{score} / 100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700/60">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    score >= 80
                      ? 'bg-gradient-to-r from-teal-400 to-emerald-400'
                      : score >= 50
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-400'
                      : score >= 30
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400'
                      : 'bg-gradient-to-r from-rose-500 to-red-600'
                  }`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>

            {/* Cause & Solution Diagnostic Card */}
            <div className="w-full mt-5 bg-[#1b202d] border border-slate-700/80 rounded-xl p-4 shadow-md text-xs sm:text-sm space-y-2.5">
              <div className="flex items-start gap-2">
                <span className="font-bold text-amber-400 shrink-0">Cause:</span>
                <span className="text-slate-300 leading-relaxed">{cause.replace(/^Cause:\s*/, '')}</span>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-slate-700/60">
                <span className="font-bold text-teal-400 shrink-0">Sol:</span>
                <span className="text-slate-300 leading-relaxed">{solution.replace(/^Sol:\s*/, '')}</span>
              </div>
            </div>
          </div>

          {/* Quick Hub Navigation Cards */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('tatva')}
              className="p-3.5 bg-[#161a24] hover:bg-[#1d2230] border border-slate-800 hover:border-teal-500/50 rounded-xl text-left transition-all group cursor-pointer shadow"
            >
              <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs mb-1">
                <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Tatva Intelligence</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">Explore elemental lore & metrics</p>
            </button>

            <button
              onClick={() => onNavigate('quiz')}
              className="p-3.5 bg-[#161a24] hover:bg-[#1d2230] border border-slate-800 hover:border-teal-500/50 rounded-xl text-left transition-all group cursor-pointer shadow"
            >
              <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs mb-1">
                <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Quiz Zone</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">Test your environmental knowledge</p>
            </button>
          </div>
        </div>

        {/* Right Column: Controls, Sliders & Presets */}
        <div className="lg:col-span-7 space-y-5">
          {/* Sliders Card */}
          <div className="bg-[#141824] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Elemental Controls (Panch Tatva)</span>
              </h3>
              <span className="text-xs text-slate-400">Baseline Target: 50</span>
            </div>

            {/* Earth */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-emerald-400 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Earth (Forests, Soil)
                </span>
                <span className="font-mono font-bold text-slate-300">{Math.round(earth)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={earth}
                onChange={(e) => handleSliderChange('earth', Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 (Barren / Deforested)</span>
                <span>50 (Balanced)</span>
                <span>100 (Overgrown)</span>
              </div>
            </div>

            {/* Water */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-blue-400 flex items-center gap-2">
                  <Droplet className="w-4 h-4" />
                  Water (Oceans, Rivers)
                </span>
                <span className="font-mono font-bold text-slate-300">{Math.round(water)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={water}
                onChange={(e) => handleSliderChange('water', Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 (Extreme Drought)</span>
                <span>50 (Balanced)</span>
                <span>100 (Severe Flood)</span>
              </div>
            </div>

            {/* Fire */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-amber-400 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Fire (Heat, Energy)
                </span>
                <span className="font-mono font-bold text-slate-300">{Math.round(fire)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={fire}
                onChange={(e) => handleSliderChange('fire', Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 (Deep Freeze)</span>
                <span>50 (Balanced)</span>
                <span>100 (Deadly Heatwave)</span>
              </div>
            </div>

            {/* Air */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-cyan-300 flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  Air (Atmosphere, Wind)
                </span>
                <span className="font-mono font-bold text-slate-300">{Math.round(air)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={air}
                onChange={(e) => handleSliderChange('air', Number(e.target.value))}
                className="w-full accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 (Stagnant / Low O2)</span>
                <span>50 (Balanced)</span>
                <span>100 (Severe Storms / PM)</span>
              </div>
            </div>

            {/* Space */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-semibold text-purple-400 flex items-center gap-2">
                  <Orbit className="w-4 h-4" />
                  Space (Ozone, Orbit)
                </span>
                <span className="font-mono font-bold text-slate-300">{Math.round(space)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={space}
                onChange={(e) => handleSliderChange('space', Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 (Ozone Depletion)</span>
                <span>50 (Balanced)</span>
                <span>100 (Debris / Smog)</span>
              </div>
            </div>

            {/* Reset All Sliders Button */}
            <button
              onClick={resetSliders}
              className="w-full py-3 px-4 bg-teal-700 hover:bg-teal-600 active:scale-[0.99] transition-all text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Reset All Sliders to 50
            </button>
          </div>

          {/* Environmental Stress Presets & Challenges */}
          <div className="bg-[#141824] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-sm sm:text-base font-bold text-white">
                Simulated Climatic Events
              </h3>
              <span className="text-xs text-slate-400">One-click testing</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={floodEvent}
                className="py-3 px-4 bg-blue-700 hover:bg-blue-600 active:scale-95 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow transition cursor-pointer"
              >
                <Waves className="w-4 h-4" />
                <span>Flood (Water: 100)</span>
              </button>
              <button
                onClick={droughtEvent}
                className="py-3 px-4 bg-amber-700 hover:bg-amber-600 active:scale-95 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow transition cursor-pointer"
              >
                <Sun className="w-4 h-4" />
                <span>Drought (Water: 0)</span>
              </button>
              <button
                onClick={heatwaveEvent}
                className="py-3 px-4 bg-rose-700 hover:bg-rose-600 active:scale-95 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow transition cursor-pointer"
              >
                <Flame className="w-4 h-4" />
                <span>Heatwave (Fire: 100)</span>
              </button>
            </div>

            <button
              onClick={randomChallenge}
              className="w-full py-3.5 px-4 bg-indigo-700 hover:bg-indigo-600 active:scale-[0.99] transition text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Shuffle className="w-4 h-4" />
              Generate Random Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
