import React, { useState } from 'react';
import { ScreenType, TatvaKey, TatvaValues } from './types';
import { DashboardScreen } from './components/DashboardScreen';
import { TatvaCenterScreen } from './components/TatvaCenterScreen';
import { DetailScreen } from './components/DetailScreen';
import { QuizScreen } from './components/QuizScreen';
import { AboutScreen } from './components/AboutScreen';
import { AiTatvaLinkScreen } from './components/AiTatvaLinkScreen';
import { Sparkles, Sliders, BookOpen, HelpCircle, Info, Menu, X, Bot } from 'lucide-react';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const [selectedTatva, setSelectedTatva] = useState<TatvaKey>('earth');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tatvaValues, setTatvaValues] = useState<TatvaValues>({
    earth: 50,
    water: 50,
    fire: 50,
    air: 50,
    space: 50,
  });

  const handleOpenTatva = (tatva: TatvaKey) => {
    setSelectedTatva(tatva);
    setCurrentScreen('detail');
  };

  // Compute live harmony score for header display
  let rawScore = 100;
  rawScore -= Math.abs(tatvaValues.earth - 50) * 0.4;
  rawScore -= Math.abs(tatvaValues.water - 50) * 0.4;
  rawScore -= Math.abs(tatvaValues.fire - 50) * 0.4;
  rawScore -= Math.abs(tatvaValues.air - 50) * 0.4;
  rawScore -= Math.abs(tatvaValues.space - 50) * 0.4;
  const score = Math.max(0, Math.round(rawScore));

  const navItems = [
    { id: 'dashboard' as ScreenType, label: 'Simulator', icon: <Sliders className="w-4 h-4" /> },
    { id: 'tatva' as ScreenType, label: 'Panch Tatva Intelligence', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ai-link' as ScreenType, label: 'How AI is Linked to Panch Tatvas', icon: <Bot className="w-4 h-4" /> },
    { id: 'quiz' as ScreenType, label: 'Quiz Zone', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'about' as ScreenType, label: 'About Project', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Desktop & Mobile Header Bar */}
      <header className="sticky top-0 z-50 bg-[#121620]/95 backdrop-blur-md border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <div
            onClick={() => setCurrentScreen('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-teal-500/40 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center bg-teal-950/40">
              <img src="/balanced_earth.png" alt="EcoSlider Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-lg font-bold text-teal-400 tracking-tight flex items-center gap-1.5">
                <span>EcoSlider</span>
                <Sparkles className="w-4 h-4 text-teal-400" />
              </div>
              <p className="text-[11px] text-slate-400 -mt-0.5 hidden sm:block">Panch Tatva Ecological Simulator</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#181d28] p-1.5 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id || (item.id === 'tatva' && currentScreen === 'detail');
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentScreen(item.id);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Status Widget */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Harmony</div>
              <div className="text-xs font-mono font-bold text-teal-400">{score}/100</div>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-teal-500/30 flex items-center justify-center p-1 bg-slate-900">
              <div
                className={`w-full h-full rounded-full transition-colors ${
                  score >= 80 ? 'bg-emerald-400' : score >= 50 ? 'bg-teal-400' : score >= 30 ? 'bg-amber-400' : 'bg-rose-500'
                }`}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 border border-slate-700/60 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#121620] px-4 py-3 space-y-1 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id || (item.id === 'tatva' && currentScreen === 'detail');
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentScreen(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all text-left ${
                    isActive ? 'bg-teal-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Area: expands on desktop */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentScreen === 'dashboard' && (
          <DashboardScreen
            values={tatvaValues}
            onChangeValues={setTatvaValues}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'tatva' && (
          <TatvaCenterScreen
            onNavigate={setCurrentScreen}
            onSelectTatva={handleOpenTatva}
          />
        )}

        {currentScreen === 'detail' && (
          <DetailScreen
            tatvaKey={selectedTatva}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'ai-link' && (
          <AiTatvaLinkScreen
            onNavigate={setCurrentScreen}
            currentValues={tatvaValues}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizScreen onNavigate={setCurrentScreen} />
        )}

        {currentScreen === 'about' && (
          <AboutScreen onNavigate={setCurrentScreen} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#0d1017] py-4 text-center text-xs text-slate-500">
        EcoSlider &bull; Panch Tatva Ecological Harmony &amp; AI Intelligence Simulator
      </footer>
    </div>
  );
};

export default App;
