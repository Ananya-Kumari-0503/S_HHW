export type ScreenType = 'dashboard' | 'tatva' | 'detail' | 'quiz' | 'about';

export type TatvaKey = 'earth' | 'water' | 'fire' | 'air' | 'space' | 'harmony';

export type TabType = 'overview' | 'realtime' | 'actions';

export interface TatvaDetail {
  title: string;
  sanskritName: string;
  color: string;
  overview: {
    heading: string;
    description: string;
    bullets: string[];
  };
  realtime: {
    heading: string;
    bullets: { label: string; value: string; note?: string }[];
  };
  actions: {
    heading: string;
    bullets: { action: string; impact: string }[];
  };
  image: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  options: string[];
  explanation: string;
}

export interface TatvaValues {
  earth: number;
  water: number;
  fire: number;
  air: number;
  space: number;
}
