import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { queryVastKnowledgeEngine } from './src/server/knowledgeEngine';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(express.json());

// Initialize Gemini SDK with User-Agent header
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Delegated to src/server/knowledgeEngine.ts which provides encyclopedic topics and dynamic natural language synthesis

// Fallback rule-based Panch Tatva diagnosis when offline
function generateRuleBasedDiagnosis(earth: number, water: number, fire: number, air: number, space: number, score: number) {
  let compounding = '';
  let aiIntervention = '';
  let citizenAction = '';

  if (water > 80) {
    compounding = `Excess hydrosphere load (${water}%) combined with soil saturation threatens immediate riverbank landslides and stormwater overflow. High water paired with Air (${air}%) risks severe tropical depression cycles.`;
    aiIntervention = 'Hydrological AI neural networks analyze real-time satellite radar altimetry and IoT storm drain sensors to autonomously predict inundation zones 12 hours ahead and trigger automated flood barrier deployments.';
    citizenAction = 'Clear local runoff pathways, deploy permeable ground covers, and redirect downspouts to decentralized rainwater catchment reservoirs.';
  } else if (water < 20) {
    compounding = `Severe hydrologic deficit (${water}%) paired with thermal energy (${fire}%) accelerates soil moisture evaporation, dropping microbial soil fertility and priming grasslands for spontaneous combustion.`;
    aiIntervention = 'Synthetic Aperture Radar (SAR) AI mapping pinpoints subsurface aquifer reserves and optimizes variable-rate precision drip irrigation to cut agricultural water waste by 45%.';
    citizenAction = 'Enact graywater recycling, mulch garden beds to stop surface evaporation, and advocate for native drought-tolerant xeriscaping.';
  } else if (fire > 80) {
    compounding = `Thermal energy surge (${fire}%) creates persistent urban heat islands and tropospheric ozone acceleration. When Fire exceeds 80%, vegetation dries rapidly, creating critical wildfire ignition corridors.`;
    aiIntervention = 'Thermal infrared geostationary satellite AI monitors heat signatures every 5 minutes to detect wildfire ignitions before smoke plumes become visible to spotters.';
    citizenAction = 'Reduce electricity consumption during peak hours to ease thermal load on power grids, apply reflective cool-roof coatings, and increase urban canopy shade.';
  } else if (fire < 20) {
    compounding = `Thermal deficit (${fire}%) triggers deep permafrost freeze, inhibiting plant photosynthetic efficiency and lowering biological metabolism across terrestrial habitats.`;
    aiIntervention = 'Micro-climate thermal sensor grids dynamically regulate greenhouse heat pumps and predict frost boundaries for vulnerable fruit agriculture.';
    citizenAction = 'Ensure thermal insulation of residential buildings and protect vulnerable community members and domestic animals from hypothermic exposure.';
  } else if (earth < 20) {
    compounding = `Severe terrestrial degradation (Earth: ${earth}%) causes accelerated topsoil erosion and biodiversity collapse. Stripped root networks lose ability to sequester carbon or absorb rainfall.`;
    aiIntervention = 'Computer vision models on drone surveys map soil organic carbon gradients and guide autonomous drone seed-bombing for high-speed reforestation.';
    citizenAction = 'Engage in community rewilding, practice vermicomposting of household organic scraps, and purchase products certified against deforestation.';
  } else if (earth > 80) {
    compounding = `High biomass abundance (Earth: ${earth}%) is ecologically positive, but dense unmanaged fuel loads can pose severe fire hazards if thermal conditions spike unexpectedly.`;
    aiIntervention = 'LiDAR forest structure AI models calculate canopy fuel density to plan precision ecological thinning and regenerative grazing routes.';
    citizenAction = 'Maintain defensible space around buildings while preserving old-growth native flora canopy corridors.';
  } else if (air > 80 || air < 20) {
    compounding = `Atmospheric disturbance (Air: ${air}%) drives elevated fine particulate matter (PM2.5) concentrations and disrupts hemispheric wind circulation patterns.`;
    aiIntervention = 'Deep learning atmospheric dispersion models assimilate industrial emission telemetry and wind vectors to issue hyper-localized air quality health alerts 48 hours in advance.';
    citizenAction = 'Adopt active urban transit (bicycles, public transport), install HEPA filtration indoors, and plant air-filtering tree buffers (such as Pine and Birch) along arterial roadways.';
  } else if (space > 80 || space < 20) {
    compounding = `Planetary boundary stress (Space: ${space}%) correlates with stratospheric ozone thinning, elevated UV-B penetration, and orbital debris congestion that threatens Earth-monitoring satellites.`;
    aiIntervention = 'Astrodynamic orbital AI calculates conjunction assessments to prevent space debris collisions, while spectroradiometer AI tracks ozone layer recovery and greenhouse gas column density.';
    citizenAction = 'Verify refrigerants are HFC-free, minimize nighttime light pollution to protect nocturnal biosystems, and support clean-sky initiatives.';
  } else {
    compounding = `Planetary elements are in near-optimal harmony (Score: ${score}/100). The metabolic, hydrological, terrestrial, atmospheric, and cosmic boundaries are supporting sustained biological regeneration.`;
    aiIntervention = 'Predictive planetary twin AI models run continuous balance simulation checks to detect early micro-divergences before systemic ecological tipping points are breached.';
    citizenAction = 'Sustain balanced lifestyle habits: minimize single-use plastics, support circular local economies, and share ecological literacy with others.';
  }

  return {
    diagnosis: `Panch Tatva Harmony Index is currently rated at ${score}/100. Elemental interaction analysis shows primary variance governed by Earth (${earth}%), Water (${water}%), Fire (${fire}%), Air (${air}%), and Space (${space}%).`,
    compoundingRisks: compounding,
    aiIntervention: aiIntervention,
    citizenActions: citizenAction,
    isAiGenerated: false,
  };
}

// Fast adaptive AI invocation with responsive fallback across supported models
async function tryGenerateWithFallback(prompt: string, jsonMode = false) {
  if (!ai) return null;
  const modelsToTry = [
    { name: 'gemini-3.1-flash-lite', timeout: 3000 },
    { name: 'gemini-3.8-flash', timeout: 2000 },
  ];
  for (const { name: modelName, timeout } of modelsToTry) {
    try {
      const callPromise = ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: jsonMode ? { responseMimeType: 'application/json' } : undefined,
      });
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), timeout)
      );
      const response = await Promise.race([callPromise, timeoutPromise]);
      if (response && response.text) {
        return response.text;
      }
    } catch (err: unknown) {
      const msg = (err as Error)?.message || '';
      console.warn(`Attempt with ${modelName} encountered:`, msg.slice(0, 80));
    }
  }
  return null;
}

// POST /api/ai/diagnose: Run real-time Panch Tatva AI diagnosis
app.post('/api/ai/diagnose', async (req, res) => {
  try {
    const { earth, water, fire, air, space, harmonyScore, status } = req.body;

    const prompt = `You are the Panch Tatva Ecological Intelligence Engine for EcoSlider.
Analyze the following environmental simulation state:
- Earth (Soil/Terrestrial/Forests): ${earth}% (baseline: 50%)
- Water (Oceans/Hydrology/Freshwater): ${water}% (baseline: 50%)
- Fire (Thermal Energy/Heat/Solar): ${fire}% (baseline: 50%)
- Air (Atmosphere/Wind/Air Quality): ${air}% (baseline: 50%)
- Space (Ozone Shield/Cosmic/Orbit): ${space}% (baseline: 50%)
- Harmony Score: ${harmonyScore}/100
- Simulator Status: ${status}

Respond in concise, valid JSON with exactly these 4 string fields:
1. "diagnosis": A 2-sentence summary of the planetary state and primary elemental imbalance.
2. "compoundingRisks": Explain 1-2 cascading ecological feedback loops caused by this combination.
3. "aiIntervention": How modern Artificial Intelligence (satellite computer vision, climate neural networks, autonomous sensors, smart grids) is specifically used to monitor and solve this crisis.
4. "citizenActions": 2 specific, practical actions everyday citizens can take right now to restore balance.`;

    const generatedJson = await tryGenerateWithFallback(prompt, true);
    if (generatedJson) {
      try {
        const parsed = JSON.parse(generatedJson);
        return res.json({
          diagnosis: parsed.diagnosis,
          compoundingRisks: parsed.compoundingRisks,
          aiIntervention: parsed.aiIntervention,
          citizenActions: parsed.citizenActions,
          isAiGenerated: true,
        });
      } catch {
        // Fall through to rule engine if JSON parsing fails
      }
    }

    // High-fidelity fallback
    const result = generateRuleBasedDiagnosis(earth, water, fire, air, space, harmonyScore);
    return res.json(result);
  } catch (error) {
    console.error('Diagnosis handler error:', error);
    res.status(500).json({ error: 'Failed to process ecological diagnosis' });
  }
});

// POST /api/ai/ask: Ask AI how AI is linked to Panch Tatvas or query vast ecological science
app.post('/api/ai/ask', async (req, res) => {
  try {
    const { question, currentValues, chatHistory } = req.body;

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' });
    }

    // Format chat history context if provided
    let conversationContext = '';
    if (Array.isArray(chatHistory) && chatHistory.length > 0) {
      conversationContext = 'Previous Conversation:\n' +
        chatHistory
          .slice(-6)
          .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
          .join('\n') +
        '\n\n';
    }

    const systemPrompt = `You are the Panch Tatva & Planetary Intelligence Polymath in EcoSlider.
Your knowledge spans the complete convergence of:
1. Classical Panch Mahabhuta cosmology (Earth/Prithvi, Water/Jal, Fire/Agni, Air/Vayu, Space/Akash), Samkhya philosophy, and Ayurvedic homeostasis.
2. Modern Earth System Science (biogeochemistry, oceanography, glaciology, atmospheric chemistry, pedology, and the 9 Planetary Boundaries).
3. Climate & Environmental Artificial Intelligence (satellite remote sensing, physics-informed neural networks, autonomous ecological robotics, and Green AI computing).

The user is asking: "${question}"
${conversationContext}
Current Simulation Context:
- Earth: ${currentValues?.earth ?? 50}%
- Water: ${currentValues?.water ?? 50}%
- Fire: ${currentValues?.fire ?? 50}%
- Air: ${currentValues?.air ?? 50}%
- Space: ${currentValues?.space ?? 50}%

Provide an authoritative, deeply educational, clearly formatted Markdown response with headings, bullet points, and real-world scientific examples.
Conclude with 2-3 relevant follow-up questions the user might explore next.`;

    const generatedText = await tryGenerateWithFallback(systemPrompt, false);
    if (generatedText) {
      return res.json({
        answer: generatedText,
        isAiGenerated: true,
        suggestedFollowUps: [
          'How do the 9 Planetary Boundaries map to the Panch Tatvas?',
          'What are the most effective everyday community actions for this element?',
          'How is Green AI hardware being engineered to consume less water and energy?',
        ],
      });
    }

    // Universal vast knowledge engine response tailored to the question asked
    const { answer, suggestedFollowUps } = queryVastKnowledgeEngine(question, currentValues);
    return res.json({
      answer,
      suggestedFollowUps,
      isAiGenerated: false,
    });
  } catch (error) {
    console.error('Ask handler error:', error);
    res.status(500).json({ error: 'Failed to process AI question' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true, host, port },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
