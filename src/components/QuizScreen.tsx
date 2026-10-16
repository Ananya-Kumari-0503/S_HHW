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
    const defaultStyle = 'bg-teal-700 hover:bg-teal-600 text-white border-transparent';
    if (!isAnswered) return defaultStyle;

    if (letter === currentQ.correctAnswer) {
      return 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-400 font-bold';
    }
    if (selectedOption === letter && !feedback?.isCorrect) {
      return 'bg-rose-600 text-white border-rose-400 ring-2 ring-rose-400 font-bold';
    }
    return 'bg-slate-800 text-slate-400 opacity-60';
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-[#12151c] text-white flex flex-col pb-12 shadow-2xl">
      {/* Top Header */}
      <div className="pt-4 pb-3 px-4 border-b border-slate-800 bg-[#161a24]/90 backdrop-blur sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={() => onNavigate('dashboard')}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1 text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Dashboard
        </button>
        <h1 className="text-base font-bold text-teal-400">Quiz Zone</h1>
        <div className="w-12" />
      </div>

      <div className="p-4 space-y-4">
        {/* Banner Quiz Graphic */}
        <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-700/80 shadow-md bg-black/40 flex items-center justify-center p-2">
          <img
            src="/quiz.png"
            alt="Tatva Quiz Zone"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Quiz Card */}
        <div className="bg-[#1e222e] rounded-2xl p-5 border border-slate-700/80 shadow-xl space-y-4">
          {!hasStarted && (
            <div className="text-center py-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-100">Test Your Tatva Wisdom</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                15 interactive questions examining the ecological significance, philosophy, and balance of Earth, Water, Fire, Air, and Space.
              </p>
              <button
                onClick={startQuiz}
                className="py-3 px-8 bg-teal-600 hover:bg-teal-500 active:scale-95 transition text-white font-semibold text-sm rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                Start Quiz
              </button>
            </div>
          )}

          {hasStarted && !isCompleted && (
            <>
              {/* Score and Question Counter */}
              <div className="flex items-center justify-between text-xs font-semibold pb-2 border-b border-slate-800">
                <span className="text-teal-400">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <span className="text-teal-400">Score: {score}</span>
              </div>

              {/* Question Text */}
              <div className="py-2 min-h-[70px] flex items-center justify-center">
                <p className="text-sm font-semibold text-center text-slate-100 leading-snug">
                  {currentQ.question}
                </p>
              </div>

              {/* Feedback Alert if Answered */}
              {feedback && (
                <div
                  className={`p-3 rounded-xl text-xs leading-relaxed flex items-start gap-2 border ${
                    feedback.isCorrect
                      ? 'bg-emerald-950/70 border-emerald-700/70 text-emerald-300'
                      : 'bg-rose-950/70 border-rose-700/70 text-rose-300'
                  }`}
                >
                  {feedback.isCorrect ? (
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              {/* Options */}
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {currentQ.options.map((opt, i) => {
                  const letter = optionLetters[i];
                  return (
                    <button
                      key={letter}
                      disabled={isAnswered}
                      onClick={() => handleAnswer(letter)}
                      className={`w-full py-3 px-4 rounded-xl text-left text-xs transition-all border cursor-pointer active:scale-[0.99] flex items-center gap-2 shadow ${getOptionStyle(
                        letter
                      )}`}
                    >
                      <span className="font-bold">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {isCompleted && (
            <div className="text-center py-6 space-y-4">
              <Award className="w-16 h-16 text-teal-400 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-slate-100">Quiz Complete!</h3>
                <div className="text-lg font-semibold text-teal-300">
                  Final Score: {score} / {totalQuestions} ({Math.round(scorePct)}%)
                </div>
                <div className="inline-block mt-2 px-4 py-1.5 rounded-full bg-teal-950/80 border border-teal-700 text-teal-300 text-sm font-bold">
                  Rank: {rank}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={startQuiz}
                  className="py-3 px-8 bg-teal-600 hover:bg-teal-500 active:scale-95 transition text-white font-semibold text-sm rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-2">
          {hasStarted && (
            <button
              onClick={startQuiz}
              className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] transition text-slate-200 font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restart Quiz
            </button>
          )}

          <button
            onClick={() => onNavigate('dashboard')}
            className="flex-1 py-3 px-4 bg-teal-700 hover:bg-teal-600 active:scale-[0.98] transition text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
