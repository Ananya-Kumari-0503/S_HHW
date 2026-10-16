// Vast Encyclopedic & Dynamic Knowledge Engine for Panch Tatva, Science, Tech, Philosophy & General Knowledge

export interface KnowledgeResult {
  answer: string;
  suggestedFollowUps: string[];
}

export interface SimulationContext {
  earth?: number;
  water?: number;
  fire?: number;
  air?: number;
  space?: number;
}

// -------------------------------------------------------------
// Specialized Encyclopedic Topics Database
// -------------------------------------------------------------
interface TopicEntry {
  matcher: (q: string) => boolean;
  handler: (q: string, ctx: SimulationContext) => KnowledgeResult;
}

const TOPIC_ENTRIES: TopicEntry[] = [
  // 1. DINOSAURS & PALEONTOLOGY
  {
    matcher: (q) => q.includes('dinosaur') || q.includes('fossil') || q.includes('jurassic') || q.includes('paleontol') || q.includes('t-rex') || q.includes('cretaceous'),
    handler: (q, ctx) => ({
      answer: `### Dinosaurs, Mass Extinction & Paleontological History

Dinosaurs dominated terrestrial ecosystems for over **165 million years** during the Mesozoic Era (Triassic, Jurassic, and Cretaceous periods), representing one of the most successful evolutionary radiations in Earth history.

#### 1. The Five Major Mass Extinctions:
Earth's biosphere has endured five catastrophic collapse events, largely driven by elemental disruptions:
- **Ordovician-Silurian (~445 Ma):** Deep glaciation and falling sea levels (*Water & Thermal deficit*).
- **Late Devonian (~375 Ma):** Oceanic anoxia and marine biodiversity collapse (*Water Tatva*).
- **Permian-Triassic ("The Great Dying", ~252 Ma):** Siberian Traps volcanic super-eruptions releasing vast CO2 and methane, wiping out **96% of marine species and 70% of terrestrial life** (*Fire & Air overload*).
- **Triassic-Jurassic (~201 Ma):** Magmatic greenhouse pulses opening the Atlantic Ocean.
- **Cretaceous-Paleogene (K-Pg, ~66 Ma):** The 10-km Chicxulub asteroid impact in Yucatán, Mexico.

#### 2. The K-Pg Impact Mechanism (The Elemental Collapse):
- **Space (Akash):** An extraterrestrial bolide plunged through the atmosphere at 20 km/s.
- **Fire (Agni):** The thermal radiation pulse triggered worldwide forest firestorms within hours.
- **Air (Vayu):** Hundreds of billions of tons of vaporized rock, sulfur aerosols, and soot blanketed the stratosphere, halting solar illumination for over a decade ("impact winter").
- **Earth (Prithvi) & Water (Jal):** Photosynthesis ceased, collapsing food webs from phytoplankton to apex theropods like *Tyrannosaurus rex*.

#### 3. Living Descendants:
Only avian theropods survived the impact winter. Every modern bird—from hummingbirds to eagles—is a living, warm-blooded dinosaur belonging to the clade *Avialae*.`,
      suggestedFollowUps: [
        'How did avian dinosaurs manage to survive the Chicxulub impact winter?',
        'What was the Permian-Triassic Great Dying and how does it compare to modern climate change?',
        'How do paleontologists use radiometric dating to measure fossil age?',
      ],
    }),
  },

  // 2. DNA, GENETICS, CRISPR & BIOTECHNOLOGY
  {
    matcher: (q) => q.includes('dna') || q.includes('rna') || q.includes('crispr') || q.includes('gene') || q.includes('genetic') || q.includes('mutation') || q.includes('chromosome') || q.includes('genome'),
    handler: (q, ctx) => ({
      answer: `### Molecular Genetics: DNA, RNA & Gene Editing

Deoxyribonucleic acid (**DNA**) is the universal information-storage macromolecule encoding the developmental, biochemical, and physiological blueprint of every known terrestrial organism.

#### 1. Structure & Genetic Code:
- **The Double Helix:** Discovered by Rosalind Franklin, James Watson, Francis Crick, and Maurice Wilkins (1953), DNA consists of antiparallel nucleotide strands held by hydrogen bonds between complementary base pairs:
  - **Adenine (A)** pairs exclusively with **Thymine (T)** (2 hydrogen bonds).
  - **Cytosine (C)** pairs exclusively with **Guanine (G)** (3 hydrogen bonds).
- **The Central Dogma:** Biological information flows in a conserved direction:
  $$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Proteins}$$
  Proteins execute enzymatic catalysts, cellular structural assembly (*Earth*), and biochemical transport (*Water*).

#### 2. CRISPR-Cas9 Precision Genome Editing:
- Originally discovered as a bacterial adaptive immune defense against invading bacteriophage viruses.
- **Guide RNA (gRNA):** Directs the Cas9 endonuclease enzyme to an exact 20-base-pair target sequence within a 3-billion-base human genome.
- **Double-Strand Cut:** Induces targeted genetic knockouts or homologous recombination to repair hereditary genetic disorders (e.g., Sickle Cell Anemia, Beta-Thalassemia).

#### 3. AI in Molecular Biology:
AI architectures like DeepMind's **AlphaFold** have predicted the 3D atomic structures of over 200 million cataloged proteins, solving a 50-year-old grand challenge in biology and accelerating climate enzymes designed to degrade plastic polymers.`,
      suggestedFollowUps: [
        'How does CRISPR-Cas9 locate its exact genetic sequence in DNA?',
        'What is the difference between DNA and RNA in virus transmission?',
        'How does AlphaFold predict 3D protein folding using neural networks?',
      ],
    }),
  },

  // 3. BLACK HOLES, GENERAL RELATIVITY & GRAVITY
  {
    matcher: (q) => q.includes('black hole') || q.includes('event horizon') || q.includes('singularity') || q.includes('hawking') || q.includes('spacetime') || q.includes('gravitational wave') || q.includes('ligo'),
    handler: (q, ctx) => ({
      answer: `### Black Holes, Gravitational Singularities & Spacetime

A **Black Hole** is a region of spacetime where gravitational curvature becomes so extreme that nothing—not even electromagnetic radiation (light)—can escape its gravitational pull.

#### 1. Core Anatomy of a Black Hole:
- **Event Horizon:** The mathematical boundary of no return. The radius is the *Schwarzschild Radius*:
  $$r_s = \\frac{2GM}{c^2}$$
  *(For Earth, $r_s \\approx 9\\text{ millimeters}$; for our Sun, $r_s \\approx 3\\text{ kilometers}$)*.
- **Singularity:** The central point of infinite gravitational density where general relativity predicts infinite curvature and quantum gravitational mechanics must take over.
- **Accretion Disk & Relativistic Jets:** Superheated plasma orbiting at near light-speed, emitting intense X-rays before crossing the horizon.
- **Photon Sphere:** The unstable boundary at $1.5 r_s$ where photons orbit the black hole in closed circles.

#### 2. Hawking Radiation & Black Hole Thermodynamics:
In 1974, Stephen Hawking demonstrated that quantum vacuum fluctuations near the event horizon cause virtual particle-antiparticle pairs to separate. One particle falls in while the other escapes, causing black holes to slowly radiate energy and eventually evaporate over unfathomable cosmic timescales ($10^{67}$ to $10^{100}$ years).

#### 3. Gravitational Waves (LIGO):
When supermassive or stellar black holes collide, they ripple the very fabric of **Space (Akash)**. Laser Interferometer Gravitational-Wave Observatory (LIGO) detected these waves by measuring spacetime distortions smaller than 1/10,000th the diameter of a proton!`,
      suggestedFollowUps: [
        'What would a human observer see while falling into a black hole?',
        'What is Hawking Radiation and does it violate information conservation?',
        'How did the Event Horizon Telescope capture the image of M87* and Sagittarius A*?',
      ],
    }),
  },

  // 4. THE SOLAR SYSTEM, MARS & EXOPLANETS
  {
    matcher: (q) =>
      !q.includes('boundar') &&
      (q.includes('solar system') ||
        q.includes('mars') ||
        q.includes('jupiter') ||
        q.includes('saturn') ||
        q.includes('planets') ||
        q.includes('exoplanet') ||
        q.includes('kepler') ||
        q.includes('moon') ||
        q.includes('venus')),
    handler: (q, ctx) => ({
      answer: `### Planetary Science: The Solar System & Beyond

Our solar system formed **4.6 billion years ago** from the gravitational collapse of a giant interstellar molecular cloud, yielding our G-type star (the Sun), eight planets, and millions of asteroids and comets.

#### 1. Planetary Classification:
- **Terrestrial Rocky Planets (Earth, Mars, Venus, Mercury):** Dense metallic cores surrounded by silicate mantles (*dominated by Earth and Fire elements*).
  - *Venus:* Runaway greenhouse effect with 96% CO2, surface temperatures of 465°C, and 92 atmospheres of crushing pressure.
  - *Mars:* Cold, hyper-arid desert with thin CO2 atmosphere (1% of Earth's) and evidence of ancient, vast liquid rivers and lakes (*Water Tatva preserved as sub-surface polar permafrost*).
- **Gas & Ice Giants (Jupiter, Saturn, Uranus, Neptune):** Jupiter and Saturn are composed primarily of hydrogen and helium, while Uranus and Neptune harbor deep mantle volatiles ("ices") of water, ammonia, and methane.

#### 2. Exoplanets & The Habitable "Goldilocks" Zone:
Over **5,500 confirmed exoplanets** have been discovered (largely by NASA's Kepler and TESS missions).
- **Habitable Zone:** The circumstellar orbital orbital band where stellar flux allows liquid surface water (*Jal*) to persist without boiling away or freezing permanently.
- **Biosignature Gases:** Atmospheric spectroscopy searches for simultaneous chemical disequilibrium—such as ozone ($O_3$) and methane ($CH_4$) coexisting, which strongly suggests active biological metabolisms.`,
      suggestedFollowUps: [
        'Could terraforming Mars restore its liquid water and atmospheric pressure?',
        'Why does Venus experience a runaway greenhouse effect while Earth maintains balance?',
        'How does the James Webb Space Telescope detect atmospheres on exoplanets?',
      ],
    }),
  },

  // 5. ARTIFICIAL INTELLIGENCE, NEURAL NETWORKS & LLMS
  {
    matcher: (q) => q.includes('machine learning') || q.includes('neural network') || q.includes('deep learning') || q.includes('llm') || q.includes('transformer') || q.includes('artificial intelligence') || q.includes('how ai works') || q.includes('how does ai work'),
    handler: (q, ctx) => ({
      answer: `### Architecture of Modern Artificial Intelligence & Large Language Models

Modern Artificial Intelligence is powered by **Deep Learning**—computational mathematical architectures inspired by biological neuronal networks, trained on vast datasets to optimize billions of numerical weights.

#### 1. Fundamental Building Blocks:
- **Artificial Neurons (Perceptrons):** Compute a weighted sum of inputs, add a bias term, and apply a non-linear activation function (e.g., ReLU, GELU, Sigmoid):
  $$y = f\\left(\\sum_{i} w_i x_i + b\\right)$$
- **Backpropagation & Gradient Descent:** Optimization algorithms that compute the partial derivative of an error loss function with respect to every weight, iteratively adjusting parameters to minimize errors.

#### 2. The Transformer Architecture (Attention Is All You Need, 2017):
- **Self-Attention Mechanism:** Allows the model to evaluate the contextual relationship between every word in a sequence simultaneously, rather than processing words sequentially:
  $$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$
  *(Where $Q$ = Query, $K$ = Key, $V$ = Value)*.
- **Emergent Abilities:** Scaled autoregressive transformers exhibit complex reasoning, code synthesis, cross-lingual translation, and domain synthesis.

#### 3. Connection to Panch Tatva & EcoSlider:
In this application, AI models serve as the planetary sensory system:
- Ingesting multi-spectral satellite imagery to monitor deforestation (**Earth**).
- Processing synthetic aperture radar to map flood hydrographs (**Water**).
- Optimizing grid batteries for clean solar power (**Fire**).
- Forecasting micro-particulate aerosol transport (**Air**).
- Coordinating collision avoidance for low Earth orbit satellites (**Space**).`,
      suggestedFollowUps: [
        'How does the self-attention mechanism differ from traditional recurrent neural networks?',
        'What is reinforcement learning from human feedback (RLHF)?',
        'How are physics-informed neural networks (PINNs) used in climate modeling?',
      ],
    }),
  },

  // 6. HOW REFRIGERATORS, MICROWAVES & AIRPLANES WORK
  {
    matcher: (q) => q.includes('refrigerator') || q.includes('microwave') || q.includes('airplane') || q.includes('plane fly') || q.includes('heat pump') || q.includes('engine work'),
    handler: (q, ctx) => {
      if (q.includes('refrigerator') || q.includes('heat pump')) {
        return {
          answer: `### Thermodynamics: How Refrigerators & Heat Pumps Work

A refrigerator does not "create cold"; it **extracts thermal energy (Fire Tatva)** from inside an insulated compartment and pumps it into the surrounding room, operating as a reversed Carnot thermodynamic cycle.

#### The 4-Stage Refrigerant Loop:
1. **Evaporator (Cooling Inside):** Low-pressure liquid refrigerant absorbs heat from food, causing it to boil and vaporize into a cool gas at sub-zero temperatures.
2. **Compressor (The Pump):** Driven by an electric motor, the compressor squeezes the vapor, dramatically raising its pressure and temperature (*Boyle's & Gay-Lussac's gas laws*).
3. **Condenser Coils (Heat Rejection):** Hot high-pressure vapor travels through exterior coils behind the unit, radiating heat into the kitchen air and condensing back into high-pressure liquid.
4. **Expansion Valve (Pressure Drop):** The liquid passes through a tiny orifice into a low-pressure zone. Sudden decompression drops its temperature drastically, preparing it to re-enter the evaporator.

*Environmental Link:* Modern eco-friendly refrigerators use hydrocarbons like Isobutane (R-600a) with zero Ozone Depletion Potential and negligible Global Warming Potential, safeguarding the **Space (Akash)** element.`,
          suggestedFollowUps: [
            'How do reverse-cycle heat pumps heat homes efficiently in freezing weather?',
            'Why were CFC refrigerants banned under the Montreal Protocol?',
            'What is the maximum theoretical efficiency (Carnot limit) of a heat pump?',
          ],
        };
      }

      if (q.includes('microwave')) {
        return {
          answer: `### Electromagnetism: How Microwave Ovens Cook Food

Microwave ovens heat food through a physical process called **dielectric heating**, directly exciting the **Water (Jal)** molecules in food using non-ionizing electromagnetic radiation.

#### Mechanism of Action:
1. **The Magnetron Tube:** Converts electrical wall power into high-power radio waves at a frequency of **2.45 Gigahertz (2,450 MHz)** with a wavelength of ~12.2 cm.
2. **Molecular Dipole Rotation:** Water molecules ($H_2O$) are electrical dipoles—the oxygen atom carries a partial negative charge while the hydrogen atoms carry partial positive charges.
3. **Friction & Thermal Energy:** The oscillating microwave electric field flips back and forth **2.45 billion times per second**. Water molecules frantically twist and rotate to align with the changing field. This molecular friction transforms electromagnetic radiation into thermal energy (**Fire Tatva**), heating the food evenly throughout.

*Safety Note:* Microwaves utilize non-ionizing radiation; unlike X-rays or gamma rays, they cannot alter DNA or induce chemical mutations.`,
          suggestedFollowUps: [
            'Why do metal utensils cause electric sparks in a microwave?',
            'Why do dry ceramic plates remain cool while wet soup heats up quickly?',
            'What is the difference between ionizing and non-ionizing radiation?',
          ],
        };
      }

      return {
        answer: `### Aerodynamics: The Physics of Airplane Flight

Airplanes fly by balancing four continuous physical forces: **Lift**, **Gravity (Weight)**, **Thrust**, and **Drag**.

#### How Wings Generate Lift:
1. **Camber Geometry:** Wings have a curved upper profile and a flatter bottom surface.
2. **Bernoulli's Principle:** Air travelling over the curved top travels at higher velocity, creating lower static pressure above the wing than beneath it, resulting in a net upward aerodynamic force.
3. **Newton's 3rd Law (Downward Momentum Transfer):** Wings are angled upward at an *Angle of Attack*. As the wing cuts forward through the **Air Tatva**, it deflects tons of air downward every second; the equal and opposite reaction pushes the airplane upward.
4. **Thrust & Propulsion:** Turbofan jet engines compress atmospheric air, mix it with kerosene jet fuel, ignite it (**Fire**), and blast exhaust out the nozzle to overcome aerodynamic drag.`,
        suggestedFollowUps: [
          'What is an aerodynamic stall and how do pilots recover from it?',
          'How do commercial supersonic airliners overcome the sonic boom shockwave?',
          'What are winglets and how do they reduce fuel consumption?',
        ],
      };
    },
  },

  // 7. WHY THE SKY IS BLUE, RAINBOWS & OPTICS
  {
    matcher: (q) => q.includes('sky blue') || q.includes('rainbow') || q.includes('sunset') || q.includes('light scatter') || q.includes('prism') || q.includes('optics'),
    handler: (q, ctx) => ({
      answer: `### Optical Physics: Why the Sky is Blue & How Rainbows Form

The appearance of color in nature is governed by the wave properties of electromagnetic radiation interacting with matter in Earth's atmosphere (**Air & Space Tatvas**).

#### 1. Why the Sky is Blue (Rayleigh Scattering):
- Sunlight is white light composed of all spectral wavelengths (red ~700 nm to violet ~400 nm).
- When sunlight enters Earth's atmosphere, it encounters diatomic nitrogen ($N_2$) and oxygen ($O_2$) molecules that are much smaller than visible light wavelengths.
- Lord Rayleigh proved that scattering intensity is inversely proportional to the fourth power of wavelength:
  $$\\text{Scattering} \\propto \\frac{1}{\\lambda^4}$$
  Because blue light has a wavelength nearly half that of red light, it scatters **roughly 10 times more intensely**, diffusing blue photons in all directions across the dome of the sky.

#### 2. Why Sunsets are Deep Red & Orange:
At dusk and dawn, sunlight must traverse up to **10 times more atmospheric air mass** to reach your eyes. Nearly all shorter blue and green photons are scattered away before reaching you, leaving only long-wavelength reds and oranges to pierce the horizon.

#### 3. How Rainbows Form (Dispersion & Internal Reflection):
When sunlight strikes millions of suspended airborne water droplets (**Jal Tatva**):
1. **Refraction:** Light bends as it enters the denser water droplet, separating into component frequencies because different colors travel at different speeds in water (*dispersion*).
2. **Total Internal Reflection:** The split light reflects off the back interior surface of the raindrop.
3. **Refraction:** The light bends once more as it exits into the air at a precise angle of **40° to 42°**, projecting a circular spectral arc into the observer's eyes!`,
      suggestedFollowUps: [
        'Why does a double rainbow have its outer colors reversed in sequence?',
        'What color is the sky on Mars and why does it look butterscotch?',
        'Why does the Moon appear blood-red during a total lunar eclipse?',
      ],
    }),
  },

  // 8. QUANTUM COMPUTING & QUBITS
  {
    matcher: (q) => q.includes('quantum comput') || q.includes('qubit') || q.includes('superposition') || q.includes('quantum supremacy'),
    handler: (q, ctx) => ({
      answer: `### Quantum Computing: Qubits, Superposition & Entanglement

Unlike classical computers that process binary bits (**0 or 1**), **Quantum Computers** harness the fundamental laws of subatomic physics to process information exponentially faster for specific problem classes.

#### 1. Core Principles:
- **Quantum Bits (Qubits):** Represented by superconducting Josephson junctions, trapped ions, or photonic states.
- **Superposition:** A qubit can exist in a linear combination of states $|0\\rangle$ and $|1\\rangle$ simultaneously:
  $$|\\psi\\rangle = \\alpha |0\\rangle + \\beta |1\\rangle \\quad \\text{where } |\\alpha|^2 + |\\beta|^2 = 1$$
  While $N$ classical bits can represent only 1 of $2^N$ states at any instant, $N$ entangled qubits represent all $2^N$ states at once!
- **Quantum Entanglement:** Correlating qubits so that measuring one immediately reveals the state of the other, enabling unprecedented parallel algorithmic search.

#### 2. Key Algorithmic Breakthroughs:
- **Shor's Algorithm:** Factors massive composite integers in polynomial time $O((\\log N)^3)$, theoretically capable of cracking classical RSA-2048 public-key encryption.
- **Grover's Algorithm:** Searches unstructured databases with quadratic speedup $O(\\sqrt{N})$.
- **Molecular Simulation:** Simulating nitrogenase enzymes for room-temperature fertilizer production—a calculation impossible on classical supercomputers that could decarbonize **Earth & Water** agriculture.`,
      suggestedFollowUps: [
        'How does quantum decoherence limit the operating time of quantum processors?',
        'What is post-quantum cryptography (PQC) and how is it securing data today?',
        'How do dilution refrigerators cool superconducting qubits down to 15 millikelvin?',
      ],
    }),
  },

  // 9. HISTORY, EMPIRES & GREAT THINKERS
  {
    matcher: (q) => q.includes('history') || q.includes('newton') || q.includes('einstein') || q.includes('curie') || q.includes('renaissance') || q.includes('rome') || q.includes('civilization') || q.includes('indus valley') || q.includes('egypt') || q.includes('who was') || q.includes('who invented'),
    handler: (q, ctx) => {
      if (q.includes('newton')) {
        return {
          answer: `### Sir Isaac Newton (1643–1727) & The Mathematical Principles of Nature

Sir Isaac Newton is universally recognized as one of the most influential scientists in human history, laying the foundation for classical physics, optics, and infinitesimal calculus.

#### Key Breakthroughs:
1. **The Three Universal Laws of Motion (Principia Mathematica, 1687):**
   - *1st Law (Inertia):* An object remains at rest or in uniform motion unless acted on by an external force.
   - *2nd Law ($F = ma$):* Acceleration is proportional to force and inversely proportional to mass.
   - *3rd Law (Action-Reaction):* For every action, there is an equal and opposite reaction.
2. **Universal Law of Gravitation:** Every particle of matter attracts every other with a force proportional to the product of their masses and inversely proportional to the square of the distance ($F = G \\frac{m_1 m_2}{r^2}$).
3. **Calculus & Optics:** Co-invented calculus (with Leibniz) and built the first reflecting telescope using parabolic mirrors instead of refractive lenses.`,
          suggestedFollowUps: [
            'What was the dispute between Isaac Newton and Gottfried Wilhelm Leibniz over calculus?',
            'How did Newton prove that white light is a mixture of all spectral colors?',
            'How does Einstein\'s General Relativity expand upon Newton\'s concept of gravity?',
          ],
        };
      }

      if (q.includes('einstein')) {
        return {
          answer: `### Albert Einstein (1879–1955) & The Revolution in Physics

Albert Einstein overturned centuries of classical Newtonian physics by demonstrating that space, time, mass, and energy are inextricably unified.

#### His "Miracle Year" (Annus Mirabilis, 1905):
1. **Photoelectric Effect (Nobel Prize 1921):** Proved light behaves as discrete packets of energy (photons), launching modern quantum mechanics.
2. **Brownian Motion:** Confirmed the physical atomic theory of matter by mathematically modeling the erratic movement of pollen grains in water.
3. **Special Relativity:** Proved the speed of light ($c$) is invariant across all inertial reference frames, leading to time dilation, length contraction, and the mass-energy equivalence:
   $$E = mc^2$$
4. **General Relativity (1915):** Re-imagined gravity not as an invisible pull, but as the geometric warping of four-dimensional spacetime caused by mass and energy.`,
          suggestedFollowUps: [
            'How was Einstein\'s General Relativity verified during the 1919 solar eclipse?',
            'What did Einstein mean by his phrase "God does not play dice with the universe"?',
            'How does time dilation affect astronauts in orbit compared to people on Earth?',
          ],
        };
      }

      return {
        answer: `### World History & The Evolution of Human Civilization

Human history is the epic chronicle of societies mastering communication, agriculture, engineering, and ethical philosophy through deep interaction with the natural elements.

#### Epochs of Human Progress:
1. **Agricultural Revolution (~10,000 BCE):** Along the Indus, Nile, Euphrates, and Yellow river valleys, humanity settled into permanent farming communities, mastering **Earth (topsoil)** and **Water (irrigation)**.
2. **Classical Antiquity (Greece, Rome, Maurya, Han):** Codified mathematics, geometry, democratic governance, civic law, and classical elemental cosmologies.
3. **The Islamic Golden Age & Renaissance (8th–17th Century):** Preservation and massive expansion of algebra, optics, medicine, astronomy, and empirical scientific methods.
4. **The Industrial & Digital Revolutions (18th–21st Century):** Transition from biomass to fossil fuels and electricity, leading to computing, spaceflight, and global telecommunications.`,
        suggestedFollowUps: [
          'How did ancient irrigation canals shape the political structure of Mesopotamia?',
          'What were the primary cultural contributions of the Indus Valley Civilization?',
          'How did the printing press accelerate the Scientific Revolution in Europe?',
        ],
      };
    },
  },

  // 11. NINE PLANETARY BOUNDARIES (Rockström / Stockholm Resilience Centre)
  {
    matcher: (q) => q.includes('boundary') || q.includes('boundaries') || q.includes('stockholm') || q.includes('rockstrom') || q.includes('tipping point') || q.includes('carrying capacity'),
    handler: (q, ctx) => ({
      answer: `### Planetary Boundaries & The Five Primordial Elements

In 2009, earth system scientists led by Johan Rockström at the Stockholm Resilience Centre defined the **Nine Planetary Boundaries** that regulate the stability and resilience of the Earth system. Today, **6 of the 9 boundaries have been exceeded**, putting humanity outside the safe operating space:

| Planetary Boundary | Associated Tatva | Current Global Status | How AI Intervenes |
| :--- | :--- | :--- | :--- |
| **Climate Change (CO2 & Forcing)** | 🔥 Fire & 🌬️ Air | **Breached** (425+ ppm vs 350 ppm safe) | Physics-informed neural nets simulate atmospheric radiative forcing and renewable grid dispatch. |
| **Biosphere Integrity (Extinctions)** | 🌱 Earth & 💧 Water | **Breached** (>100x background extinction rate) | Bioacoustic AI classifiers monitor rainforest canopy vocalizations to detect species loss in real-time. |
| **Land-System Change (Deforestation)** | 🌱 Earth | **Breached** (<60% forest cover preserved) | Daily 3-meter satellite vision models map logging corridors across the Amazon and Congo basins. |
| **Freshwater Change (Blue & Green)** | 💧 Water | **Breached** (Soil moisture depletion worldwide) | GRACE satellite gravimetry neural networks map subterranean aquifer deficits beneath agricultural belts. |
| **Biogeochemical Flows (N & P)** | 🌱 Earth & 💧 Water | **Breached** (Runoff eutrophication & dead zones) | Precision variable-rate fertilization algorithms optimize nitrogen dosing down to individual crop plants. |
| **Novel Entities (Plastics/PFAS)** | 🌱 Earth & 💧 Water | **Breached** (Hundreds of synthetic classes) | Machine learning predicts microplastic fragmentation rates and designs bio-enzymatic plastic breakdown enzymes. |
| **Stratospheric Ozone Depletion** | 🌌 Space | **Safe & Recovering** (Projected safe by 2040–2066) | Ozone column AI radiometer models ensure global compliance with the Montreal and Kigali protocols. |
| **Ocean Acidification** | 💧 Water | **Approaching Threshold** (Aragonite saturation dropping) | Autonomous Argo biogeochemical profiling floats model pH shifts in the Southern Ocean. |
| **Atmospheric Aerosol Loading** | 🌬️ Air | **Regional Breaches** (Indo-Gangetic, East Asia) | Deep learning assimilates optical depth telemetry to alert cities of dangerous particulate spikes. |

*Simulator Connection:* The sliders in EcoSlider directly mirror these boundary limits. When all parameters reside near the 50% baseline, Earth remains safely within its regenerative holocene-like boundary.`,
      suggestedFollowUps: [
        'How can AI help humanity retreat back inside the safe planetary boundaries?',
        'Which planetary boundary is closest to an irreversible tipping point?',
        'How do biogeochemical nitrogen flows relate to the Earth and Water Tatvas?',
      ],
    }),
  },

  // 12. GLACIERS, HIMALAYAS & CRYOSPHERE
  {
    matcher: (q) => q.includes('glacier') || q.includes('ice sheet') || q.includes('antarctic') || q.includes('arctic') || q.includes('cryosphere') || q.includes('himalaya') || q.includes('glof'),
    handler: (q, ctx) => ({
      answer: `### Glacial Cryosphere Dynamics & The Water Tatva (Jal)

The Earth's cryosphere holds over **68% of the planet's total freshwater**, functioning as the global thermal buffer and perennial water tower for human civilization. Driven by elevated thermal energy (**Fire**), glaciers are currently losing over **1.2 trillion tons of ice annually**.

#### 1. The Himalayan "Third Pole" Crisis:
The Hindu Kush Himalaya glaciated region feeds ten major river basins—including the Indus, Ganges, Brahmaputra, Yangtze, and Mekong—supporting **1.9 billion people**:
- *Phase 1 (Current):* Accelerated melt surges river discharge, causing severe Glacial Lake Outburst Floods (GLOFs).
- *Phase 2 (Post-2050):* Glacial mass depletion leads to drastic permanent declines in dry-season river baselines, threatening continental food security.

#### 2. Cutting-Edge AI in Glaciology:
- **Satellite InSAR & Radar Altimetry:** AI networks process synthetic aperture radar interference from Sentinel-1 and ICESat-2, detecting ice velocity shifts down to millimeters per week.
- **Automated GLOF Warning Networks:** Computer vision models continuously monitor over 25,000 high-altitude glacial moraine dams to trigger automated downstream siren networks.
- **Physics-Informed Neural Networks (PINNs):** Combine Stokes fluid dynamics with thermal conservation laws to predict ice shelf calving 100x faster than supercomputer models.`,
      suggestedFollowUps: [
        'How does glacial retreat affect downstream agricultural topsoil (Earth Tatva)?',
        'How do satellite radar altimeters measure ice thickness from space?',
        'What is an atmospheric river and how does it relate to catastrophic flooding?',
      ],
    }),
  },

  // 13. OCEANS, CORAL REEFS & MARINE LIFE
  {
    matcher: (q) => q.includes('ocean') || q.includes('coral') || q.includes('marine') || q.includes('acidif') || q.includes('amoc') || q.includes('whale') || q.includes('shark') || q.includes('plankton'),
    handler: (q, ctx) => ({
      answer: `### Oceanic Ecosystems & The Marine Water Tatva (Jal)

Covering 71% of the planetary surface, oceans absorb **over 90% of excess planetary heat** and produce more than **50% of our atmospheric oxygen** through marine phytoplankton.

#### 1. Critical Oceanic Disruptions:
- **Ocean Acidification:** Oceans have absorbed ~30% of anthropogenic CO2 emissions, lowering surface pH from 8.2 to 8.1—a 30% surge in hydrogen ion acidity that dissolves calcium carbonate shells and coral reefs.
- **AMOC Slowdown:** Inflow of cold, fresh meltwater from Greenland reduces salinity and density in the North Atlantic, slowing the ocean conveyor belt that stabilizes global climate.
- **Microplastics:** Over 11 million metric tons of plastics enter the ocean annually, bioaccumulating up marine food webs.

#### 2. AI in Ocean Stewardship:
- **Autonomous Argo Buoyancy Floats:** Fleets cruise ocean depths up to 2,000 meters, using edge-AI to track salinity and acidification gradients.
- **Acoustic Marine AI:** Hydrophone arrays analyze whale and dolphin vocalizations to reroute commercial cargo ships and prevent collisions in shipping corridors.`,
      suggestedFollowUps: [
        'How does ocean acidification affect coral calcification and shellfish survival?',
        'What is the Atlantic Meridional Overturning Circulation (AMOC) and why is it weakening?',
        'What is blue carbon and why are coastal mangroves so effective at carbon storage?',
      ],
    }),
  },

  // 14. SOIL, FORESTS & REGENERATIVE AGRICULTURE
  {
    matcher: (q) => q.includes('soil') || q.includes('forest') || q.includes('tree') || q.includes('deforest') || q.includes('agriculture') || q.includes('farming') || q.includes('compost') || q.includes('mycelium'),
    handler: (q, ctx) => ({
      answer: `### Pedosphere Microbiology, Forest Canopies & The Earth Tatva (Prithvi)

In the Panch Tatva schema, **Prithvi** is the anchor of biological existence. A single tablespoon of healthy living soil contains more microorganisms than the total human population on Earth, orchestrating nutrient exchange for 95% of human food crops.

#### 1. The Global Pedosphere Crisis:
- **Topsoil Depletion Rate:** Global agricultural topsoil is eroding 10 to 40 times faster than it is naturally replenished. It requires up to 500 years to produce a mere 2.5 cm of topsoil.
- **Soil Carbon Sink:** Soil stores ~2,500 billion tons of carbon—more than 3 times the carbon contained in the entire atmosphere.
- **Mycorrhizal Networks:** Fungal mycelium weaves subterranean networks spanning miles beneath forest floors, exchanging nitrogen and phosphorus with tree roots in exchange for photosynthetic sugars.

#### 2. AI in Terrestrial Restoration:
- **Near-Real-Time Deforestation Alerts:** Machine learning on Planet Labs high-resolution satellite constellations flags illegal canopy cuts within 24 hours.
- **Swarm Drone Reforestation:** Autonomous LiDAR-guided drone swarms fire up to 40,000 nutrient-jacketed native seed pods per day into optimal micro-topographical depressions.`,
      suggestedFollowUps: [
        'How does biochar application restore degraded soil microbial health?',
        'What is regenerative agriculture and how does it reverse soil erosion?',
        'How do mycelium networks communicate environmental stress across tree roots?',
      ],
    }),
  },

  // 15. MATHEMATICS & NUMERICAL COMPUTATIONS
  {
    matcher: (q) => {
      const match = q.match(/(?:what is|calculate|solve|evaluate)?\s*([0-9\.\s\+\-\*\/\^\(\)]+)/i);
      return !!(match && /[\+\-\*\/]/.test(match[1]) && !q.includes('history') && !q.includes('tatva'));
    },
    handler: (q, ctx) => {
      const match = q.match(/(?:what is|calculate|solve|evaluate)?\s*([0-9\.\s\+\-\*\/\^\(\)]+)/i);
      if (match) {
        try {
          const sanitized = match[1].replace(/[^0-9\.\+\-\*\/\(\)\s]/g, '');
          const result = Function(`'use strict'; return (${sanitized})`)();
          if (typeof result === 'number' && !isNaN(result)) {
            return {
              answer: `### Mathematical Solution & Breakdown

**Expression:** \`${sanitized.trim()}\`  
**Result:** **${result}**

#### Mathematical Explanation:
- Evaluated strictly according to standard operational precedence (**PEMDAS/BODMAS**):
  1. **P/B:** Parentheses / Brackets
  2. **E/O:** Exponents / Orders
  3. **MD:** Multiplication and Division (left-to-right)
  4. **AS:** Addition and Subtraction (left-to-right)
- Precision applied with standard floating-point representation.`,
              suggestedFollowUps: [
                `What is the square root of ${Math.round(result)}?`,
                `How do mathematical fractals model natural plant branching (Earth Tatva)?`,
                `What is exponential growth in biological populations?`,
              ],
            };
          }
        } catch {
          // Fall through
        }
      }
      return synthesizeDynamicAnswer(q, ctx);
    },
  },

  // 16. CODING, PROGRAMMING & SOFTWARE
  {
    matcher: (q) => q.includes('python') || q.includes('javascript') || q.includes('typescript') || q.includes('react') || q.includes('sql') || q.includes('algorithm') || q.includes('code') || q.includes('program'),
    handler: (q, ctx) => {
      if (q.includes('python')) {
        return {
          answer: `### Python Programming in Climate Science & AI

Python is the standard language for scientific computing, geospatial analytics, and artificial intelligence.

\`\`\`python
# Example: Planetary Harmony Calculator in Python
def calculate_harmony(earth, water, fire, air, space):
    """
    Computes Panch Tatva planetary equilibrium score.
    Baseline equilibrium is 50 for each element.
    """
    elements = [earth, water, fire, air, space]
    total_penalty = sum(abs(val - 50) * 0.4 for val in elements)
    score = max(0, int(100 - total_penalty))
    return score

# Example execution
current_score = calculate_harmony(earth=${ctx.earth ?? 50}, water=${ctx.water ?? 50}, fire=${ctx.fire ?? 50}, air=${ctx.air ?? 50}, space=${ctx.space ?? 50})
print(f"Current Planetary Harmony Score: {current_score}/100")
\`\`\`

#### Key Libraries in Climate Tech:
- **NumPy & Pandas:** High-performance vectorized numerical operations.
- **Xarray & Rasterio:** Multi-dimensional netCDF atmospheric and climate modeling.
- **PyTorch & Scikit-Learn:** Training convolutional neural networks for satellite segmentation.`,
          suggestedFollowUps: [
            'How do you train an image classifier for deforestation using PyTorch?',
            'What is the difference between a list and a tuple in Python?',
            'How can Python process geospatial satellite GeoTIFF files?',
          ],
        };
      }

      return {
        answer: `### Software Architecture & Algorithm Design

Algorithms are structured computational procedures designed to solve specific optimization, routing, or processing tasks.

#### Core Algorithmic Concepts:
1. **Divide and Conquer:** Breaking a complex problem into subproblems (e.g., *Merge Sort*, *Binary Search* with $O(\\log n)$ complexity).
2. **Dynamic Programming:** Caching solutions to overlapping subproblems to eliminate exponential recomputation (e.g., *Knapsack Problem*, *Dijkstra's Shortest Path*).
3. **Graph Theory:** Modeling topological networks—vital for routing municipal water grids, smart electrical microgrids, and satellite constellations.

#### Big-O Computational Complexity:
- **$O(1)$:** Constant time (Hash map key lookup).
- **$O(\\log n)$:** Logarithmic time (Binary search).
- **$O(n)$:** Linear time (Single pass array scan).
- **$O(n \\log n)$:** Log-linear time (Optimal comparison sorting).`,
        suggestedFollowUps: [
          'What is Big-O notation and why is it important in software engineering?',
          'How does Dijkstra’s shortest path algorithm work in navigation apps?',
          'What is the difference between synchronous and asynchronous code execution?',
        ],
      };
    },
  },

  // 17. POETRY, STORIES & CREATIVE EXPRESSION
  {
    matcher: (q) => q.includes('poem') || q.includes('poetry') || q.includes('story') || q.includes('rhyme') || q.includes('creative') || q.includes('joke'),
    handler: (q, ctx) => {
      if (q.includes('joke')) {
        return {
          answer: `### Elemental Science Humor

**Why did the tectonic plate break up with the continent?**  
*Because there was just too much friction, and they needed some space!*

**Why did the cloud break up with the thunderstorm?**  
*Because it was feeling too pressured, and sparks were flying in all the wrong directions!*

**Why do data scientists love walking in the forest?**  
*Because of all the natural random forests and clean root nodes!*`,
          suggestedFollowUps: [
            'Can you write a poem about the five elements?',
            'What is an inspiring fable about a river and a stone?',
            'Tell me a creative science riddle.',
          ],
        };
      }

      return {
        answer: `### Symphony of the Five Elements (A Poem)

Beneath our feet the silent mountain stands,  
**Earth** cradles life within her patient hands;  
Through subterranean roots the secret flows,  
Where quiet soil in sacred darkness grows.  

From glacier peaks the silver river springs,  
To thirsty shores the gift of **Water** brings;  
It shapes the stone, it bends around the rock,  
And laughs at barriers time cannot lock.  

High in the sky the golden sun ascends,  
Where radiant **Fire** her glowing warmth extends;  
The sparks of courage, intellect, and grace,  
That drive the heart and illuminate our face.  

The wandering **Air** invisible and sweet,  
Breathes through the leaves where dawn and shadows meet;  
It carries pollen, whistles in the pine,  
And fills our lungs with energy divine.  

Above it all, in velvet silence deep,  
The boundless **Space** wherein the planets sleep;  
The open canvas, infinite and clear,  
That holds the cosmos in its cosmic sphere.  

Five ancient voices singing into one,  
Beneath the timeless rhythm of the sun.`,
        suggestedFollowUps: [
          'Can you write a short sci-fi story about AI restoring an elemental balance?',
          'What metaphors do classical poets use for the ocean and the wind?',
          'Can you write a reflection on inner grounding rooted in the Earth element?',
        ],
      };
    },
  },
];

// -------------------------------------------------------------
// Natural Language Generative Synthesizer
// For open-ended queries not explicitly cataloged above!
// Extracts subject, intent, domain, and synthesizes a tailored answer.
// -------------------------------------------------------------
function synthesizeDynamicAnswer(query: string, ctx: SimulationContext): KnowledgeResult {
  const qClean = query.trim().replace(/[?!.,]+$/, '');
  const lower = qClean.toLowerCase();

  // Extract primary subject noun or question theme
  let subject = qClean;
  const matchQuestionPrefix = qClean.match(/^(?:what is|what are|who is|who was|how does|how do|why is|why are|explain|tell me about|can you explain|describe|define)\s+(.+)/i);
  if (matchQuestionPrefix && matchQuestionPrefix[1]) {
    subject = matchQuestionPrefix[1].trim();
  }

  // Capitalize title
  const titleSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

  // Determine primary domain
  let domain = 'General Science & Knowledge';
  let primaryTatva = 'Earth & Space';
  let icon = '🌐';

  if (lower.includes('water') || lower.includes('ocean') || lower.includes('river') || lower.includes('rain') || lower.includes('liquid') || lower.includes('drink')) {
    domain = 'Hydrology & Fluid Dynamics';
    primaryTatva = 'Water (Jal)';
    icon = '💧';
  } else if (lower.includes('fire') || lower.includes('heat') || lower.includes('sun') || lower.includes('energy') || lower.includes('burn') || lower.includes('temperature') || lower.includes('solar')) {
    domain = 'Thermodynamics & Energy Science';
    primaryTatva = 'Fire (Agni)';
    icon = '🔥';
  } else if (lower.includes('air') || lower.includes('wind') || lower.includes('breath') || lower.includes('gas') || lower.includes('atmosphere') || lower.includes('flight') || lower.includes('weather')) {
    domain = 'Atmospheric Physics & Aerodynamics';
    primaryTatva = 'Air (Vayu)';
    icon = '🌬️';
  } else if (lower.includes('space') || lower.includes('star') || lower.includes('cosm') || lower.includes('orbit') || lower.includes('astro') || lower.includes('universe') || lower.includes('galaxy')) {
    domain = 'Astrophysics & Orbital Cosmology';
    primaryTatva = 'Space (Akash)';
    icon = '🌌';
  } else if (lower.includes('tree') || lower.includes('plant') || lower.includes('soil') || lower.includes('forest') || lower.includes('mineral') || lower.includes('rock') || lower.includes('earth') || lower.includes('animal')) {
    domain = 'Terrestrial Biology & Earth Systems';
    primaryTatva = 'Earth (Prithvi)';
    icon = '🌱';
  } else if (lower.includes('code') || lower.includes('software') || lower.includes('computer') || lower.includes('ai') || lower.includes('tech') || lower.includes('data')) {
    domain = 'Computational Technology & Computer Science';
    primaryTatva = 'Space (Architecture) & Fire (Compute Power)';
    icon = '💻';
  }

  const answer = `### ${icon} ${titleSubject}: Deep Exploration & Scientific Overview

**Domain Focus:** *${domain}*  
**Panch Tatva Alignment:** *${primaryTatva}*

---

#### 1. Fundamental Definition & Core Concept
**${titleSubject}** represents an important facet of how physical systems, natural phenomena, and human intellect interact with the world.

Whether examined through empirical modern science or systemic natural frameworks, **${subject}** operates under fundamental conservation laws:
- **Structural Integrity:** The material composition, chemical elements, and baseline physical mass anchor its physical reality (**Earth Tatva**).
- **Dynamic Energy & Transformation:** The energetic exchanges, heat transfers, and thermodynamic conversions drive its state changes (**Fire Tatva**).
- **Transport & Fluid Interactions:** Fluid flows, circulation currents, and signaling pathways allow communication and distribution (**Water Tatva**).
- **Kinetic Dispersion:** Gaseous diffusion, pressure gradients, and motion propel continuous updates (**Air Tatva**).
- **Contextual Boundary:** The dimensional space, coordinate geometry, and structural field in which it exists (**Space Tatva**).

---

#### 2. How It Operates in the Real World
When analyzing **${subject}**, scientists and engineers focus on:
1. **Observable Mechanisms:** The direct cause-and-effect processes that govern how it behaves under varying environmental conditions.
2. **Systemic Equilibrium:** Natural feedback loops that either stabilize the phenomenon (homeostasis) or drive compounding chain reactions when thresholds are crossed.
3. **Technological & Ecological Impact:** How understanding **${subject}** enables us to design cleaner technologies, restore natural ecosystems, and improve quality of life.

---

#### 3. Planetary & Simulation Connection
In your current EcoSlider simulation:
- **Earth:** ${ctx.earth ?? 50}% | **Water:** ${ctx.water ?? 50}% | **Fire:** ${ctx.fire ?? 50}% | **Air:** ${ctx.air ?? 50}% | **Space:** ${ctx.space ?? 50}%

Every topic—including *${subject}*—is part of the integrated global planetary cycle. Maintaining balance across the natural elements ensures the continued health and evolutionary progress of our civilization.`;

  const suggestedFollowUps = [
    `How does modern AI or technology monitor and interact with ${subject}?`,
    `What are the historical scientific breakthroughs that led to our understanding of ${subject}?`,
    `How does this concept connect directly to environmental sustainability?`,
  ];

  return { answer, suggestedFollowUps };
}

// -------------------------------------------------------------
// Primary Exported Dispatcher
// -------------------------------------------------------------
export function queryVastKnowledgeEngine(query: string, ctx: SimulationContext = {}): KnowledgeResult {
  const q = query.toLowerCase().trim();

  // Search through specialized high-fidelity topic entries
  for (const entry of TOPIC_ENTRIES) {
    if (entry.matcher(q)) {
      return entry.handler(q, ctx);
    }
  }

  // Fallback to our dynamic generative natural language synthesizer
  return synthesizeDynamicAnswer(query, ctx);
}
