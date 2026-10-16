import React from 'react';
import { TatvaValues, ScreenType } from '../types';
import { RotateCcw, Waves, Flame, Sun, Shuffle, BookOpen, HelpCircle, Info, Sparkles } from 'lucide-react';

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
  let ratingColor = 'text-rose-400';
  if (score >= 80) {
    rating = 'Rating: Excellent';
    ratingColor = 'text-emerald-400';
  } else if (score >= 60) {
    rating = 'Rating: Good';
    ratingColor = 'text-teal-300';
  } else if (score >= 40) {
    rating = 'Rating: Moderate';
    ratingColor = 'text-amber-400';
  } else if (score >= 20) {
    rating = 'Rating: Poor';
    ratingColor = 'text-orange-400';
  }

  // Diagnostic state, cause, and solution matching original
  let status = customStatus || 'Perfect Harmony';
  let cause = 'Cause: Stable ecosystem balance across all elements.';
  let solution = 'Sol: Maintain current balance parameters seamlessly.';
  let planetImage = '/balanced_earth.png';

  if (water > 80) {
    status = customStatus || 'Flood Warning';
    cause = 'Cause: Sudden extreme precipitation overwhelming city drainage pathways and raising river baselines rapidly.';
    solution = 'Sol: Open emergency catchment gates, clean storm drains immediately, and execute rainwater harvesting frameworks.';
    planetImage = '/water_earth.png';
  } else if (water < 20) {
    status = customStatus || 'Drought Warning';
    cause = 'Cause: Prolonged lack of rainfall leading to water scarcity.';
    solution = 'Sol: Implement water conservation measures, promote efficient irrigation techniques, and develop alternative water sources.';
    planetImage = '/drought_earth.jpg';
  } else if (earth > 80) {
    status = customStatus || 'Abundant Nature';
    cause = 'Cause: Excessive growth of vegetation and natural resources.';
    solution = 'Sol: Promote sustainable resource management and conservation practices.';
    planetImage = '/abundant_earth.png';
  } else if (earth < 20) {
    status = customStatus || 'Deforestation Alert';
    cause = 'Cause: Excessive logging and land conversion.';
    solution = 'Sol: Implement reforestation programs, enforce logging regulations, and promote sustainable land use practices.';
    planetImage = '/barren_earth.jpg';
  } else if (fire > 80) {
    status = customStatus || 'Heatwave Warning';
    cause = 'Cause: Extended periods of high temperatures causing heat stress.';
    solution = 'Sol: Implement heat stress prevention measures, provide cooling centers, and promote hydration.';
    planetImage = '/fire_earth.jpg';
  } else if (fire < 20) {
    status = customStatus || 'Cold Wave Alert';
    cause = 'Cause: Extended periods of low temperatures causing hypothermia risks.';
    solution = 'Sol: Provide heating assistance, ensure proper insulation, and promote warm clothing usage.';
    planetImage = '/frozen_earth.jpg';
  } else if (air > 80 || air < 20) {
    status = customStatus || 'Air Quality Alert';
    cause = 'Cause: High levels of air pollution or poor air circulation.';
    solution = 'Sol: Implement air quality improvement measures, promote public transportation, and encourage the use of clean energy.';
    planetImage = '/air_earth.png';
  } else if (space > 80 || space < 20) {
    status = customStatus || 'Smog and UV Alert';
    cause = 'Cause: High levels of smog and ultraviolet radiation.';
    solution = 'Sol: Implement smog reduction measures, promote UV protection, and encourage the use of protective gear.';
    planetImage = '/air_earth.png';
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
    <div className="w-full max-w-md mx-auto min-h-screen bg-[#12151c] text-white flex flex-col pb-12 shadow-2xl">
      {/* Top Header / App Brand */}
      <div className="pt-4 pb-2 px-4 text-center border-b border-slate-800/80 bg-[#161a24]/90 backdrop-blur sticky top-0 z-20">
        <h1 className="text-xl font-bold tracking-wide text-teal-400 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-teal-400" />
          EcoSlider
        </h1>
        <p className="text-xs text-slate-400 font-medium">Panch Tatva Environmental Simulator</p>
      </div>

      <div className="px-4 py-3 space-y-4">
        {/* Planet Imagery & Diagnostic Card */}
        <div className="relative flex flex-col items-center justify-center py-2 bg-gradient-to-b from-slate-900/60 to-slate-950/80 rounded-2xl border border-slate-800 p-4">
          <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-[0_0_25px_rgba(13,148,136,0.25)] border-2 border-teal-500/30 flex items-center justify-center bg-black/40">
            <img
              src={planetImage}
              alt="Planet Simulation"
              className="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"
            />
          </div>

          {/* Cause & Solution Card */}
          <div className="w-full mt-3 bg-[#1e222e] border border-slate-700/70 rounded-xl p-3 shadow-md text-xs space-y-2">
            <div className="flex items-start gap-1.5">
              <span className="font-semibold text-amber-400 shrink-0">Cause:</span>
              <span className="text-slate-300 leading-relaxed">{cause.replace(/^Cause:\s*/, '')}</span>
            </div>
            <div className="flex items-start gap-1.5 pt-1 border-t border-slate-800">
              <span className="font-semibold text-teal-400 shrink-0">Sol:</span>
              <span className="text-slate-300 leading-relaxed">{solution.replace(/^Sol:\s*/, '')}</span>
            </div>
          </div>
        </div>

        {/* Status & Harmony Score */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-cyan-400 tracking-tight drop-shadow-sm">{status}</h2>
          <div className="text-cyan-400 font-semibold text-lg tracking-wide">
            Harmony Score: {score}/100
          </div>
        </div>

        {/* Harmony Progress Bar */}
        <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-700/50">
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

        {/* Values String & Rating */}
        <div className="bg-slate-900/70 rounded-lg py-2 px-3 border border-slate-800 text-center space-y-1">
          <div className="text-xs font-mono tracking-tight text-slate-300 flex justify-around">
            <span>Earth:{Math.round(earth)}</span>
            <span>Water:{Math.round(water)}</span>
            <span>Fire:{Math.round(fire)}</span>
            <span>Air:{Math.round(air)}</span>
            <span>Space:{Math.round(space)}</span>
          </div>
          <div className={`text-sm font-semibold ${ratingColor}`}>{rating}</div>
        </div>

        {/* Tatva Sliders */}
        <div className="bg-[#181d28] rounded-2xl p-4 border border-slate-800 space-y-4">
          {/* Earth */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-emerald-400">Earth (Forests, Soil)</span>
              <span className="font-mono text-slate-400">{Math.round(earth)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={earth}
              onChange={(e) => handleSliderChange('earth', Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Water */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-blue-400">Water (Oceans, Rivers)</span>
              <span className="font-mono text-slate-400">{Math.round(water)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={water}
              onChange={(e) => handleSliderChange('water', Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Fire */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-amber-400">Fire (Heat, Energy)</span>
              <span className="font-mono text-slate-400">{Math.round(fire)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={fire}
              onChange={(e) => handleSliderChange('fire', Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Air */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-cyan-300">Air (Atmosphere, Wind)</span>
              <span className="font-mono text-slate-400">{Math.round(air)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={air}
              onChange={(e) => handleSliderChange('air', Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Space */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-purple-400">Space (Ozone, Orbit)</span>
              <span className="font-mono text-slate-400">{Math.round(space)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={space}
              onChange={(e) => handleSliderChange('space', Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Reset All Sliders */}
          <button
            onClick={resetSliders}
            className="w-full mt-2 py-2.5 px-4 bg-teal-700 hover:bg-teal-600 active:scale-[0.98] transition-all text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Reset All Sliders
          </button>
        </div>

        {/* Environmental Event Simulation Buttons */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center">
            Environmental Stress Presets
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={floodEvent}
              className="py-2.5 px-3 bg-blue-700 hover:bg-blue-600 active:scale-95 text-white font-semibold text-xs rounded-xl flex flex-col items-center justify-center gap-1 shadow transition cursor-pointer"
            >
              <Waves className="w-4 h-4" />
              Flood
            </button>
            <button
              onClick={droughtEvent}
              className="py-2.5 px-3 bg-amber-700 hover:bg-amber-600 active:scale-95 text-white font-semibold text-xs rounded-xl flex flex-col items-center justify-center gap-1 shadow transition cursor-pointer"
            >
              <Sun className="w-4 h-4" />
              Drought
            </button>
            <button
              onClick={heatwaveEvent}
              className="py-2.5 px-3 bg-rose-700 hover:bg-rose-600 active:scale-95 text-white font-semibold text-xs rounded-xl flex flex-col items-center justify-center gap-1 shadow transition cursor-pointer"
            >
              <Flame className="w-4 h-4" />
              Heatwave
            </button>
          </div>

          <button
            onClick={randomChallenge}
            className="w-full py-2.5 px-4 bg-indigo-700 hover:bg-indigo-600 active:scale-[0.98] transition text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            Random Challenge
          </button>
        </div>

        {/* Navigation Card */}
        <div className="bg-[#242630] rounded-2xl p-4 border border-slate-700/80 shadow-lg space-y-3">
          <h3 className="text-base font-semibold text-center text-slate-100">Navigation</h3>

          <button
            onClick={() => onNavigate('tatva')}
            className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 active:scale-[0.98] transition text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            Panch Tatva Intelligence
          </button>

          <button
            onClick={() => onNavigate('quiz')}
            className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 active:scale-[0.98] transition text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            Quiz Zone
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 active:scale-[0.98] transition text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow cursor-pointer"
          >
            <Info className="w-4 h-4" />
            About Project
          </button>
        </div>
      </div>
    </div>
  );
};
