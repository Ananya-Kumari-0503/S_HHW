import React, { useState, useEffect, useRef } from 'react';
import { ScreenType } from '../types';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { ArrowLeft, RotateCcw, Play, Award, CheckCircle, XCircle } from 'lucide-react';

interface QuizScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onNavigate }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [feedback, setFeedback] = useState<{ text: string; isCorrect: boolean } | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const startQuiz = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setHasStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
    setFeedback(null);
    setIsCompleted(false);
  };

  const handleAnswer = (choice: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered || isCompleted || !hasStarted) return;

    setIsAnswered(true);
    setSelectedOption(choice);

    const q = QUIZ_QUESTIONS[currentIndex];
    const isCorrect = choice === q.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setFeedback({
        text: `✔ Correct! ${q.explanation}`,
        isCorrect: true,
      });
    } else {
      setFeedback({
        text: `❌ Incorrect! Correct was (${q.correctAnswer}). ${q.explanation}`,
        isCorrect: false,
      });
    }

    timerRef.current = setTimeout(() => {
      setIsAnswered(false);
      setSelectedOption(null);
      setFeedback(null);

      if (currentIndex + 1 >= QUIZ_QUESTIONS.length) {
        setIsCompleted(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 1800);
  };

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const scorePct = isCompleted ? (score / totalQuestions) * 100 : 0;

  let rank = 'Keep Learning 🌿';
  if (scorePct >= 80) {
    rank = 'Environmental Guardian 🌍';
  } else if (scorePct >= 50) {
    rank = 'Environmental Explorer 🌱';
  }

  const optionLetters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  const getOptionStyle = (letter: 'A' | 'B' | 'C' | 'D') => {
    const defaultStyle = 'bg-[#1b202d] hover:bg-[#252b3d] text-slate-200 border-slate-700/80 hover:border-teal-500/80';
    if (!isAnswered) return defaultStyle;

    if (letter === currentQ.correctAnswer) {
      return 'bg-emerald-700 text-white border-emerald-400 ring-2 ring-emerald-400 font-bold';
    }
    if (selectedOption === letter && !feedback?.isCorrect) {
      return 'bg-rose-700 text-white border-rose-400 ring-2 ring-rose-400 font-bold';
    }
    return 'bg-slate-900/60 text-slate-500 border-slate-800 opacity-50';
  };

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
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Quiz Zone</h1>
            <p className="text-xs sm:text-sm text-slate-400">Panch Tatva Environmental Challenge</p>
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

      {/* Main Quiz Card */}
      <div className="bg-[#141824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        {!hasStarted && (
          <div className="text-center py-8 space-y-6">
            <div className="w-full max-w-xs mx-auto h-44 rounded-2xl overflow-hidden border border-slate-700/80 shadow-md bg-black/40 flex items-center justify-center p-2">
              <img src="/quiz.png" alt="Quiz Banner" className="w-full h-full object-contain" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Test Your Tatva Wisdom</h2>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                15 interactive questions examining the ecological significance, philosophy, and balance of Earth, Water, Fire, Air, and Space.
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="py-3.5 px-8 bg-teal-600 hover:bg-teal-500 active:scale-95 transition text-white font-bold text-sm sm:text-base rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              Start Quiz
            </button>
          </div>
        )}

        {hasStarted && !isCompleted && (
          <div className="space-y-6">
            {/* Progress Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-teal-400">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <span className="text-teal-400 font-mono">Current Score: {score}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-teal-500 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="py-4 px-6 bg-slate-900/60 rounded-2xl border border-slate-800 min-h-[90px] flex items-center justify-center">
              <p className="text-base sm:text-lg font-bold text-center text-slate-100 leading-snug">
                {currentQ.question}
              </p>
            </div>

            {/* Feedback Alert if Answered */}
            {feedback && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed flex items-start gap-3 border transition-all ${
                  feedback.isCorrect
                    ? 'bg-emerald-950/80 border-emerald-700/80 text-emerald-300'
                    : 'bg-rose-950/80 border-rose-700/80 text-rose-300'
                }`}
              >
                {feedback.isCorrect ? (
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <span>{feedback.text}</span>
              </div>
            )}

            {/* 2x2 Grid for Options on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {currentQ.options.map((opt, i) => {
                const letter = optionLetters[i];
                return (
                  <button
                    key={letter}
                    disabled={isAnswered}
                    onClick={() => handleAnswer(letter)}
                    className={`w-full py-4 px-5 rounded-xl text-left text-xs sm:text-sm transition-all border cursor-pointer active:scale-[0.99] flex items-center gap-3 shadow-md ${getOptionStyle(
                      letter
                    )}`}
                  >
                    <span className="font-bold">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer Control */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <button
                onClick={startQuiz}
                className="py-2 px-3 text-xs text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Restart
              </button>
              <span className="text-xs text-slate-500">Auto-advances after selection</span>
            </div>
          </div>
        )}

        {isCompleted && (
          <div className="text-center py-8 space-y-6">
            <Award className="w-20 h-20 text-teal-400 mx-auto" />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Quiz Complete!</h2>
              <div className="text-xl font-semibold text-teal-300">
                Final Score: {score} / {totalQuestions} ({Math.round(scorePct)}%)
              </div>
              <div className="inline-block mt-3 px-5 py-2 rounded-full bg-teal-950/80 border border-teal-700 text-teal-300 text-base font-bold shadow-lg">
                Rank: {rank}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={startQuiz}
                className="py-3 px-6 bg-teal-600 hover:bg-teal-500 active:scale-95 transition text-white font-bold text-sm rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Play Again
              </button>
              <button
                onClick={() => onNavigate('dashboard')}
                className="py-3 px-6 bg-slate-800 hover:bg-slate-700 active:scale-95 transition text-slate-200 font-semibold text-sm rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Simulator
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
