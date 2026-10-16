import React, { useState } from 'react';
import { ScreenType, TatvaKey, TatvaValues } from './types';
import { DashboardScreen } from './components/DashboardScreen';
import { TatvaCenterScreen } from './components/TatvaCenterScreen';
import { DetailScreen } from './components/DetailScreen';
import { QuizScreen } from './components/QuizScreen';
import { AboutScreen } from './components/AboutScreen';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const [selectedTatva, setSelectedTatva] = useState<TatvaKey>('earth');
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

  return (
    <main className="min-h-screen bg-[#0d1017] flex justify-center items-start text-slate-100 selection:bg-teal-500 selection:text-white">
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

      {currentScreen === 'quiz' && (
        <QuizScreen onNavigate={setCurrentScreen} />
      )}

      {currentScreen === 'about' && (
        <AboutScreen onNavigate={setCurrentScreen} />
      )}
    </main>
  );
};

export default App;
