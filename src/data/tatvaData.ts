import { TatvaDetail, TatvaKey } from '../types';

export const TATVA_IMAGES: Record<TatvaKey, string> = {
  earth: '/earth_poster.png',
  water: '/water_earth.png',
  fire: '/fire_earth.jpg',
  air: '/air_earth.png',
  space: '/air_earth.png',
  harmony: '/balanced_earth.png',
};

export const TATVA_DATA: Record<TatvaKey, TatvaDetail> = {
  earth: {
    title: 'Earth Tatva (Prithvi)',
    sanskritName: 'Prithvi',
    color: '#4CAF50',
    image: '/earth_poster.png',
    overview: {
      heading: '🌱 Overview & Importance',
      description: 'Earth represents terrestrial ecosystems, soil health, and forests.',
      bullets: [
        'Topsoil grows over 95% of human food crops globally.',
        'Forest ecosystems house 80%+ of terrestrial animal and plant species.',
        'Healthy soil filters groundwater and stores vast amounts of carbon.',
      ],
    },
    realtime: {
      heading: '📊 Real-Time Planetary Indicators',
      bullets: [
        { label: 'Annual Forest Loss', value: '~10 Million Hectares / Year' },
        { label: 'Global Degraded Soil', value: '~40% of global land area' },
        { label: 'Carbon Stored in Soil', value: '~2,500 Billion Tons (3x atmospheric carbon)' },
        { label: 'Key Metric', value: 'Topsoil takes 500 years to naturally generate 2.5 cm.' },
      ],
    },
    actions: {
      heading: '🏃 Everyday Actions YOU Can Take',
      bullets: [
        { action: 'Compost at Home', impact: 'Turn fruit and vegetable waste into nutrient-rich topsoil.' },
        { action: 'Plant Native Species', impact: 'Support local pollinators and prevent soil erosion.' },
        { action: 'Reduce Single-Use Plastics', impact: 'Microplastics severely degrade soil microbial health.' },
      ],
    },
  },
  water: {
    title: 'Water Tatva (Jal)',
    sanskritName: 'Jal',
    color: '#2196F3',
    image: '/water_earth.png',
    overview: {
      heading: '💧 Overview & Importance',
      description: 'Water encompasses oceans, freshwater rivers, lakes, glaciers, and groundwater.',
      bullets: [
        'Oceans produce over 50% of atmospheric oxygen via phytoplankton.',
        'Freshwater makes up only 2.5% of all water on Earth.',
        'Rivers and aquifers supply drinking water to billions of people.',
      ],
    },
    realtime: {
      heading: '📊 Real-Time Planetary Indicators',
      bullets: [
        { label: 'Global Ocean Temp Anomaly', value: '+0.9°C above 20th-century average' },
        { label: 'Sea Level Rise Rate', value: '~4.4 mm / Year (accelerating)' },
        { label: 'Plastic Entering Oceans', value: '~11 Million Metric Tons / Year' },
        { label: 'Usable Fresh Water Access', value: 'Less than 1% of total global water.' },
      ],
    },
    actions: {
      heading: '🏃 Everyday Actions YOU Can Take',
      bullets: [
        { action: 'Fix Dripping Taps', impact: 'A slow leak wastes up to 3,000 liters per year.' },
        { action: 'Turn Off Taps While Brushing', impact: 'Saves up to 12 liters per minute.' },
        { action: 'Use Rain Catchment', impact: 'Collect rainwater for plants during wet seasons.' },
      ],
    },
  },
  fire: {
    title: 'Fire Tatva (Agni)',
    sanskritName: 'Agni',
    color: '#FF9800',
    image: '/fire_earth.jpg',
    overview: {
      heading: '🔥 Overview & Importance',
      description: 'Fire represents heat, thermal energy, solar radiation, and metabolic conversion.',
      bullets: [
        "Solar radiation drives Earth's climate engine and plant photosynthesis.",
        'Thermal energy powers global electricity grids and industries.',
        'Balanced thermal cycles maintain natural seasonal patterns.',
      ],
    },
    realtime: {
      heading: '📊 Real-Time Planetary Indicators',
      bullets: [
        { label: 'Global Temp Anomaly', value: '~1.2°C to 1.3°C above pre-industrial baseline' },
        { label: 'Global Solar Energy Capacity', value: '~1,500+ Gigawatts globally' },
        { label: 'Clean Energy Growth Rate', value: 'Renewable energy accounts for ~80%+ of new power generation capacity.' },
      ],
    },
    actions: {
      heading: '🏃 Everyday Actions YOU Can Take',
      bullets: [
        { action: 'Unplug Charger Bricks', impact: 'Prevents phantom load energy loss.' },
        { action: 'Use Sunlight First', impact: 'Keep curtains open during daytime instead of turning on lights.' },
        { action: 'Switch to LEDs', impact: 'Consumes up to 75% less energy than incandescent bulbs.' },
      ],
    },
  },
  air: {
    title: 'Air Tatva (Vayu)',
    sanskritName: 'Vayu',
    color: '#00BCD4',
    image: '/air_earth.png',
    overview: {
      heading: '🌬️ Overview & Importance',
      description: 'Air represents atmospheric balance, gas composition, oxygen supply, and weather.',
      bullets: [
        'Adults breathe approximately 11,000 liters of air every day.',
        'Winds transport moisture across continents to feed agricultural zones.',
        'Clean air is essential for cardiovascular and respiratory health.',
      ],
    },
    realtime: {
      heading: '📊 Real-Time Planetary Indicators',
      bullets: [
        { label: 'Atmospheric CO2 Level', value: '~425+ ppm (Parts Per Million)' },
        { label: 'Global Population Breathing Polluted Air', value: '~99% (exceeding WHO guidelines)' },
        { label: 'Primary Air Pollutant', value: 'PM2.5 fine particulate matter.' },
      ],
    },
    actions: {
      heading: '🏃 Everyday Actions YOU Can Take',
      bullets: [
        { action: 'Walk or Cycle Short Trips', impact: 'Cuts neighborhood vehicular emissions.' },
        { action: 'Keep Indoor Plants', impact: 'Snake plants and Peace Lilies help filter air indoors.' },
        { action: 'Avoid Burning Waste', impact: 'Never burn leaf litter or plastic outdoors.' },
      ],
    },
  },
  space: {
    title: 'Space Tatva (Akash)',
    sanskritName: 'Akash',
    color: '#9C27B0',
    image: '/air_earth.png',
    overview: {
      heading: '🌌 Overview & Importance',
      description: 'Space represents the atmosphere, ozone shield, orbital space, and planetary boundary.',
      bullets: [
        'The Stratospheric Ozone layer absorbs 97–99% of harmful UV radiation.',
        'Earth observation satellites continuously monitor deforestation and ice loss.',
        'Natural space boundaries protect Earth from cosmic hazards.',
      ],
    },
    realtime: {
      heading: '📊 Real-Time Planetary Indicators',
      bullets: [
        { label: 'Tracked Space Debris Objects', value: '35,000+ (>10 cm size)' },
        { label: 'Active Earth Satellites', value: '9,000+ conducting communication & eco-monitoring' },
        { label: 'Ozone Layer Recovery Status', value: 'Projected to fully recover by 2040–2066.' },
      ],
    },
    actions: {
      heading: '🏃 Everyday Actions YOU Can Take',
      bullets: [
        { action: 'Choose Star-Rated Coolers', impact: 'Prevents leakage of hydrofluorocarbons.' },
        { action: 'Reduce Light Pollution', impact: 'Turn off unneeded night lamps to protect nocturnal wildlife.' },
      ],
    },
  },
  harmony: {
    title: 'Overall Harmony',
    sanskritName: 'Samanvaya',
    color: '#8BC34A',
    image: '/balanced_earth.png',
    overview: {
      heading: '⚖️ Overview & Importance',
      description: 'Environmental harmony occurs when all five natural elements exist in equilibrium.',
      bullets: [
        'Balanced elements protect communities against extreme climatic shifts.',
        'Ensures stable seasonal rainfall, fertile soil, and clean drinking water.',
      ],
    },
    realtime: {
      heading: '📊 Real-Time Planetary Indicators',
      bullets: [
        { label: 'Planetary Boundaries', value: '6 out of 9 global ecological boundaries currently exceeded.' },
        { label: 'Global Restoration Goal', value: 'UN Decade on Ecosystem Restoration (target 2030).' },
      ],
    },
    actions: {
      heading: '🏃 Everyday Actions YOU Can Take',
      bullets: [
        { action: 'Practice the 3 Rs', impact: 'Reduce consumption, Reuse materials, and Recycle waste.' },
        { action: 'Spread Awareness', impact: 'Share environmental insights with friends and family!' },
      ],
    },
  },
};
