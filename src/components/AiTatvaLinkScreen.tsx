import React, { useState, useRef, useEffect } from 'react';
import { ScreenType, TatvaValues } from '../types';
import {
  ArrowLeft,
  Sparkles,
  Bot,
  Cpu,
  Globe,
  Droplet,
  Flame,
  Wind,
  Orbit,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sliders,
  Database,
  Layers,
  Copy,
  Check,
  Trash2,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

interface AiTatvaLinkScreenProps {
  onNavigate: (screen: ScreenType) => void;
  currentValues: TatvaValues;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestedFollowUps?: string[];
}

export const AiTatvaLinkScreen: React.FC<AiTatvaLinkScreenProps> = ({
  onNavigate,
  currentValues,
}) => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  // Initialize with an introductory assistant message
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Welcome to the **Panch Tatva & Planetary AI Oracle**.\n\nMy knowledge base spans across:\n• **Ancient Cosmology:** Samkhya philosophy, Upanishads, Ayurveda, and the five primordial *Mahabhutas* (*Prithvi, Jal, Agni, Vayu, Akash*).\n• **Modern Earth System Science:** The 9 Planetary Boundaries, oceanographic circulation (AMOC), cryosphere glacial dynamics, soil carbon sinks, and atmospheric dispersion.\n• **Environmental AI & Remote Sensing:** Satellite synthetic aperture radar (SAR), LiDAR canopy surveys, physics-informed neural networks, and orbital debris collision tracking.\n• **Green Computing:** Data center water/electricity footprints and energy-efficient AI hardware.\n\nAsk me anything, or pick one of the deep-dive topics below to begin!`,
      suggestedFollowUps: [
        'What are the Nine Planetary Boundaries and which ones are currently breached?',
        'How does AI neural network forecasting prevent Water (Jal) flood catastrophes?',
        'How does modern computing physically consume the five elements?',
      ],
    },
  ]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleAsk = async (queryText?: string) => {
    const textToSend = (queryText || question).trim();
    if (!textToSend || isLoading) return;

    const userMsgId = 'user-' + Date.now();
    const newHistory = [...messages, { id: userMsgId, role: 'user' as const, content: textToSend }];
    setMessages(newHistory);
    setQuestion('');
    setIsLoading(true);
    setError(null);

    try {
      const historyPayload = newHistory.map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          currentValues,
          chatHistory: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to retrieve response');
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: 'assistant-' + Date.now(),
          role: 'assistant',
          content: data.answer,
          suggestedFollowUps: data.suggestedFollowUps || [],
        },
      ]);
    } catch (err: unknown) {
      console.error(err);
      setError('Connection momentarily delayed. A synthesized response has been generated below.');
      setMessages((prev) => [
        ...prev,
        {
          id: 'assistant-resilient-' + Date.now(),
          role: 'assistant',
          content: `### 🌐 Planetary & Elemental Insight: ${textToSend}\n\nAll physical systems, scientific laws, and technological innovations reflect the dynamic interplay of the five primordial elements (**Earth**, **Water**, **Fire**, **Air**, and **Space**).\n\n- **Cosmic Principle:** Every process requires structural mass (**Earth**), transport currents (**Water**), energetic transformation (**Fire**), kinetic dispersion (**Air**), and an accommodating field (**Space**).\n- **Current Simulation Status:** Earth: ${currentValues.earth}% | Water: ${currentValues.water}% | Fire: ${currentValues.fire}% | Air: ${currentValues.air}% | Space: ${currentValues.space}%\n\nYou can click any of the exploration domain buttons above or ask another question to continue learning!`,
          suggestedFollowUps: [
            'What are the Nine Planetary Boundaries and which ones are currently breached?',
            'How does AI neural network forecasting prevent Water (Jal) flood catastrophes?',
            'What are the most impactful everyday household habits for balancing the five elements?',
          ],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Chat history cleared. What topic across the Panch Tatvas, climate systems, or planetary AI would you like to explore next?`,
        suggestedFollowUps: [
          'How does AI track melting glaciers in the Himalayas?',
          'What is the Samkhya philosophy of the five Tanmatras?',
          'How does topsoil store more carbon than the entire atmosphere?',
        ],
      },
    ]);
  };

  const knowledgeTopics = [
    { label: 'Nine Planetary Boundaries', query: 'What are the Nine Planetary Boundaries and which ones are currently breached?' },
    { label: 'Samkhya Cosmology & Doshas', query: 'Explain the Samkhya cosmology of the Panch Mahabhutas and their link to Ayurvedic Doshas.' },
    { label: 'Glacial Melt & Flood AI', query: 'How does AI track melting glaciers and prevent Glacial Lake Outburst Floods (GLOFs)?' },
    { label: 'Soil Microbiology & Deforestation', query: 'How does AI satellite imagery monitor topsoil degradation and deforestation in real-time?' },
    { label: 'Wildfire Rate-of-Spread AI', query: 'How do satellite infrared sensors and machine learning predict wildfire rate-of-spread?' },
    { label: 'Atmospheric PM2.5 Air Dispersion', query: 'How do deep learning networks predict micro-particulate PM2.5 air pollution block-by-block?' },
    { label: 'Space Debris & Ozone Shield', query: 'How do AI astrodynamics track space debris to avoid Kessler syndrome and protect Earth observation satellites?' },
    { label: 'Green AI & Computing Footprint', query: 'What is the physical footprint of AI hardware across minerals, water cooling, and energy?' },
    { label: 'Everyday Conservation Playbook', query: 'What are the most impactful everyday household habits for balancing the five elements?' },
  ];

  const tatvaAiLinks = [
    {
      element: 'Earth (Prithvi)',
      sanskrit: 'Prithvi',
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      tagline: 'Terrestrial & Soil Intelligence',
      border: 'border-emerald-700/50 hover:border-emerald-500',
      bg: 'bg-emerald-950/30',
      aiRole:
        'Satellite Computer Vision & Hyperspectral LiDAR models classify soil organic carbon, track illegal deforestation in the Amazon and Congo basins in real-time, and program autonomous agricultural drones for precision reforestation.',
    },
    {
      element: 'Water (Jal)',
      sanskrit: 'Jal',
      icon: <Droplet className="w-5 h-5 text-blue-400" />,
      tagline: 'Hydrological & Oceanic Neural Networks',
      border: 'border-blue-700/50 hover:border-blue-500',
      bg: 'bg-blue-950/30',
      aiRole:
        'Physics-informed deep learning models predict flash flood inundations up to 7 days ahead, map receding glacial ice mass with synthetic aperture radar (SAR), and guide robotic ocean gliders to collect plastic gyres.',
    },
    {
      element: 'Fire (Agni)',
      sanskrit: 'Agni',
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      tagline: 'Thermal & Clean Energy Optimization',
      border: 'border-amber-700/50 hover:border-amber-500',
      bg: 'bg-amber-950/30',
      aiRole:
        'Geostationary infrared satellite AI detects early thermal wildfire signatures before smoke reaches watchtowers. Simultaneously, reinforcement learning AI balances renewable solar/wind grids, storing surplus heat and eliminating thermal waste.',
    },
    {
      element: 'Air (Vayu)',
      sanskrit: 'Vayu',
      icon: <Wind className="w-5 h-5 text-cyan-400" />,
      tagline: 'Atmospheric Dispersion & Emission Auditing',
      border: 'border-cyan-700/50 hover:border-cyan-500',
      bg: 'bg-cyan-950/30',
      aiRole:
        'Atmospheric neural networks ingest ground sensor feeds and meteorological telemetry to forecast deadly micro-particulate (PM2.5) concentrations 48 hours in advance, while machine vision satellites track industrial methane plumes from orbit.',
    },
    {
      element: 'Space (Akash)',
      sanskrit: 'Akash',
      icon: <Orbit className="w-5 h-5 text-purple-400" />,
      tagline: 'Orbital Coordination & Ozone Shield Tracking',
      border: 'border-purple-700/50 hover:border-purple-500',
      bg: 'bg-purple-950/30',
      aiRole:
        'Astrodynamic AI calculates automated orbital collision avoidance for 35,000+ pieces of space debris protecting Earth-monitoring satellites, while UV radiometers continuously monitor the stratospheric ozone layer recovery.',
    },
  ];

  return (
    <div className="w-full space-y-8 max-w-5xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141824] p-5 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/80 mb-1">
              <Bot className="w-3.5 h-3.5" />
              <span>AI &amp; Panch Tatva Architecture</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              How AI is Linked to Panch Tatvas
            </h1>
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

      {/* Hero Explainer Card */}
      <div className="bg-[#141824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-2xl bg-teal-950/80 border border-teal-800/80 text-teal-400 shrink-0">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              The Planetary Nervous System
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In ancient Indian philosophy, the <strong>Panch Tatvas</strong> are the five fundamental building blocks forming the living cosmos. In modern climate technology, <strong>Artificial Intelligence acts as Earth&apos;s digital sensory and autonomic nervous system</strong>—interpreting billions of planetary sensor streams to maintain balance across these five spheres.
            </p>
          </div>
        </div>

        {/* 3 Pillars of AI in EcoSlider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
              <Sliders className="w-4 h-4" />
              <span>1. Dynamic Harmony Engine</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              EcoSlider models non-linear cross-element coupling: when Water drops and Fire surges, the app models compound desertification and heat exhaustion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Bot className="w-4 h-4" />
              <span>2. Intelligent Planetary Diagnostics</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              When you click &quot;Run AI Diagnosis&quot; on the dashboard, the AI engine evaluates your exact slider metrics and generates tailored remedies.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Layers className="w-4 h-4" />
              <span>3. Sustainable Green AI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Highlights the dual loop: AI requires Earth minerals, Water cooling, and Energy (Fire) to run—teaching users the necessity of eco-efficient computation.
            </p>
          </div>
        </div>
      </div>

      {/* Part 1: How AI is Linked to Each of the 5 Tatvas */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-400" />
            <span>How AI Connects to Each Specific Tatva</span>
          </h2>
          <span className="text-xs text-slate-400">Earth Observation &amp; Sensor Networks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tatvaAiLinks.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all shadow-md flex flex-col justify-between ${item.bg} ${item.border}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/40 text-slate-300 border border-slate-800">
                    {item.sanskrit}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{item.element}</h3>
                  <div className="text-xs font-semibold text-teal-300 mt-0.5">{item.tagline}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{item.aiRole}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Active Global AI Deployment</span>
              </div>
            </div>
          ))}

          {/* 6th Card: The Dual Nature (AI&apos;s Own Consumption) */}
          <div className="p-5 rounded-2xl border border-rose-800/50 bg-rose-950/20 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-black/40 border border-slate-800">
                  <Database className="w-5 h-5 text-rose-400" />
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/40 text-rose-300 border border-rose-800/60">
                  Dual Reality
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">The AI Footprint</h3>
                <div className="text-xs font-semibold text-rose-400 mt-0.5">How AI Consumes the Tatvas</div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Silicon chips rely on rare-earth minerals (<strong>Earth</strong>), data center chillers consume billions of liters (<strong>Water</strong>), compute clusters demand massive wattage (<strong>Fire</strong>), electricity generation emits greenhouse gases (<strong>Air</strong>), and communication passes through orbital satellites (<strong>Space</strong>).
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-rose-300">
              <span>Goal: Zero-Carbon Green AI by 2030</span>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive Encyclopedic AI Elemental Chatbot */}
      <div className="bg-[#141824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-teal-400" />
              <span>Ask the Panch Tatva AI Oracle</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Vast knowledge repository spanning ancient elemental philosophy, modern earth systems, satellite AI, and sustainable computing.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-teal-300 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-800">
              Vast Knowledge Base
            </span>
            {messages.length > 1 && (
              <button
                onClick={clearChat}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition flex items-center gap-1 text-xs cursor-pointer"
                title="Clear conversation"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Categorized Knowledge Explorer Chips */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>Explore Curated Deep-Dive Knowledge Domains:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {knowledgeTopics.map((topic, i) => (
              <button
                key={i}
                onClick={() => handleAsk(topic.query)}
                disabled={isLoading}
                className="text-xs px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-teal-900/40 text-slate-300 hover:text-teal-200 border border-slate-700/70 hover:border-teal-500/60 transition cursor-pointer text-left shadow-sm active:scale-95 disabled:opacity-50"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conversational Message Thread */}
        <div className="space-y-4 max-h-[600px] overflow-y-auto p-2 pr-3 rounded-2xl bg-slate-950/60 border border-slate-800">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              } space-y-1`}
            >
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 px-1">
                {msg.role === 'user' ? (
                  <span className="font-semibold text-teal-400">You</span>
                ) : (
                  <div className="flex items-center gap-1 font-semibold text-teal-300">
                    <Sparkles className="w-3 h-3 text-teal-400" />
                    <span>Panch Tatva Oracle</span>
                  </div>
                )}
              </div>

              <div
                className={`p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[95%] sm:max-w-[88%] shadow-md whitespace-pre-line relative group ${
                  msg.role === 'user'
                    ? 'bg-teal-700 text-white rounded-tr-none'
                    : 'bg-[#1b202e] text-slate-200 border border-slate-700/80 rounded-tl-none'
                }`}
              >
                {msg.content}

                {/* Copy Button for Assistant responses */}
                {msg.role === 'assistant' && (
                  <button
                    onClick={() => copyToClipboard(msg.content, msg.id)}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition opacity-0 group-hover:opacity-100 cursor-pointer"
                    title="Copy response"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>

              {/* Suggested Follow-up Questions for this message */}
              {msg.role === 'assistant' && msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                <div className="pt-2 pl-2 space-y-1.5 max-w-[95%] sm:max-w-[88%]">
                  <div className="text-[11px] font-semibold text-teal-400 flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    <span>Suggested Next Explorations:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.suggestedFollowUps.map((followUp, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAsk(followUp)}
                        disabled={isLoading}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-teal-300 border border-slate-700/80 transition cursor-pointer text-left"
                      >
                        {followUp}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-2 p-4 rounded-2xl bg-[#1b202e] border border-slate-700/80 max-w-[70%] animate-pulse">
              <Loader2 className="w-4 h-4 animate-spin text-teal-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-300">
                Consulting elemental encyclopedias and planetary AI models...
              </span>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-700/80 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Input & Question Submit Box */}
        <div className="space-y-3">
          <div className="relative">
            <textarea
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleAsk();
                }
              }}
              placeholder="Ask anything about the Panch Tatvas, climate physics, satellite AI, soil microbes, or green computing (Press Enter to send)..."
              className="w-full bg-slate-900/90 border border-slate-700 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition resize-none pr-28"
            />
            <button
              onClick={() => handleAsk()}
              disabled={isLoading || !question.trim()}
              className="absolute bottom-3 right-3 px-4 py-2 bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </>
              )}
            </button>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 px-1">
            <span>Simulation Context Active (Earth: {currentValues.earth}%, Water: {currentValues.water}%, Fire: {currentValues.fire}%, Air: {currentValues.air}%, Space: {currentValues.space}%)</span>
            <span>Shift + Enter for new line</span>
          </div>
        </div>
      </div>
    </div>
  );
};
