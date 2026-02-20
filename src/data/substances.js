export const SUBSTANCES = [
  {
    id: 'cannabis',
    name: 'Cannabis',
    category: 'cannabinoid',
    halfLife: '1–3 hours (THC); metabolites detectable for weeks',
    effects: ['Euphoria', 'Relaxation', 'Altered perception', 'Increased appetite', 'Creativity', 'Anxiety (high doses)'],
    interactions: ['Alcohol (potentiates)', 'CNS depressants', 'Benzodiazepines', 'SSRIs (mild interaction)'],
    harmReduction: [
      'Start low, go slow — especially with edibles',
      'Avoid mixing with alcohol',
      'Set and setting matter',
      'CBD can blunt THC anxiety',
      'Not recommended for those under 25 (brain development)'
    ],
    routes: ['smoked', 'vaped', 'oral', 'sublingual'],
    unit: 'mg',
    notes: 'THC is the primary psychoactive compound; CBD is non-intoxicating.'
  },
  {
    id: 'psilocybin',
    name: 'Psilocybin',
    category: 'psychedelic',
    halfLife: '1–3 hours (converted to psilocin)',
    effects: ['Visual distortions', 'Emotional amplification', 'Ego dissolution (high doses)', 'Mystical states', 'Neuroplasticity'],
    interactions: ['SSRIs (reduce effects)', 'Lithium (seizure risk — avoid)', 'MAOIs (dangerous)', 'Cannabis (potentiates)'],
    harmReduction: [
      'Test your substance (reagent kits)',
      'Have a sober trip sitter',
      'Avoid if personal/family history of psychosis',
      'Set and setting are critical',
      'Integration after the experience matters'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Rapidly converted to psilocin in the body. Non-addictive. Schedule I in most jurisdictions.'
  },
  {
    id: 'sertraline',
    name: 'Sertraline',
    category: 'medication',
    halfLife: '26 hours',
    effects: ['Antidepressant', 'Anti-anxiety', 'Emotional blunting (possible)', 'Delayed effect onset (2–4 weeks)'],
    interactions: ['MAOIs (serotonin syndrome — fatal)', 'Tramadol', 'St. John\'s Wort', 'Psilocybin (blunted effects)', 'Alcohol (worsens depression)'],
    harmReduction: [
      'Never stop abruptly — taper with prescriber guidance',
      'Take at same time daily',
      'Allow 4–6 weeks before judging efficacy',
      'Monitor for increased suicidal ideation in early weeks'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'SSRI (selective serotonin reuptake inhibitor). Prescription only. Zoloft brand name.'
  },
  {
    id: 'caffeine',
    name: 'Caffeine',
    category: 'stimulant',
    halfLife: '5–6 hours',
    effects: ['Alertness', 'Focus', 'Increased heart rate', 'Reduced fatigue', 'Anxiety (high doses)', 'Diuresis'],
    interactions: ['L-theanine (smooths effects)', 'Adenosine antagonism', 'MAOIs (mild interaction)', 'Lithium (reduces levels)'],
    harmReduction: [
      'Cut off by 2 PM for sleep quality',
      'Stay hydrated — caffeine is mildly diuretic',
      'Tolerance builds quickly; cycle off periodically',
      'Pair with L-theanine (200mg) to reduce jitteriness'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Most widely consumed psychoactive. 400mg/day generally considered safe for adults.'
  },
  {
    id: 'l-theanine',
    name: 'L-Theanine',
    category: 'supplement',
    halfLife: '1–2 hours',
    effects: ['Calm focus', 'Reduced anxiety', 'Alpha wave promotion', 'Synergy with caffeine'],
    interactions: ['Caffeine (enhances; reduces jitters)', 'Stimulants (dampens edge)', 'Blood pressure medications'],
    harmReduction: [
      'Generally very safe; no known toxicity',
      'Standard dose: 100–200mg',
      'Found naturally in green tea'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Amino acid found in tea leaves. Promotes relaxed alertness without drowsiness.'
  },
  {
    id: 'melatonin',
    name: 'Melatonin',
    category: 'supplement',
    halfLife: '30–50 minutes',
    effects: ['Sleep onset', 'Circadian rhythm regulation', 'Antioxidant (secondary)'],
    interactions: ['CNS depressants (additive)', 'Blood thinners', 'Immunosuppressants', 'Contraceptives'],
    harmReduction: [
      'Less is more — 0.5–1mg is often sufficient',
      'Take 30–60 min before target sleep time',
      'Dim screens and lights for best effect',
      'Not for long-term nightly use without breaks'
    ],
    routes: ['oral', 'sublingual'],
    unit: 'mg',
    notes: 'Endogenous hormone. Most OTC doses (5–10mg) far exceed physiological levels.'
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D3',
    category: 'vitamin',
    halfLife: '15–30 days (in blood)',
    effects: ['Bone health', 'Immune function', 'Mood regulation', 'Testosterone support'],
    interactions: ['Vitamin K2 (take together for calcium regulation)', 'Thiazide diuretics (hypercalcemia risk)', 'Calcium'],
    harmReduction: [
      'Test serum 25(OH)D before megadosing',
      'Take with K2 (MK-7) to direct calcium properly',
      'Take with fat-containing meal for absorption',
      'Target serum level: 40–60 ng/mL'
    ],
    routes: ['oral'],
    unit: 'IU',
    notes: 'Most people in northern latitudes are deficient. Fat-soluble — stores in tissue.'
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    category: 'vitamin',
    halfLife: '8–40 days (tissue-dependent)',
    effects: ['Antioxidant', 'Immune support', 'Collagen synthesis', 'Iron absorption'],
    interactions: ['Warfarin (high doses)', 'Chemotherapy (controversial)', 'Aluminum antacids'],
    harmReduction: [
      'Excess excreted in urine — excess generally harmless',
      'High doses may cause GI distress',
      'Liposomal form for better absorption',
      'Bowel tolerance dosing for acute illness'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Water-soluble. Humans cannot synthesize endogenously. Ascorbic acid.'
  },
  {
    id: 'magnesium',
    name: 'Magnesium',
    category: 'mineral',
    halfLife: 'N/A (mineral)',
    effects: ['Muscle relaxation', 'Sleep quality', 'Anxiety reduction', '300+ enzymatic reactions'],
    interactions: ['Antibiotics (reduces absorption)', 'Bisphosphonates', 'Diuretics', 'Proton pump inhibitors'],
    harmReduction: [
      'Glycinate or threonate form for best bioavailability',
      'Oxide form has poor absorption',
      'Take at night for sleep benefit',
      'Excess causes loose stools (natural laxative)'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Majority of adults are deficient. Depleted by stress, alcohol, and refined carbs.'
  },
  {
    id: 'zinc',
    name: 'Zinc',
    category: 'mineral',
    halfLife: 'N/A (mineral)',
    effects: ['Immune support', 'Testosterone regulation', 'Wound healing', 'Taste/smell function'],
    interactions: ['Copper (antagonistic — supplement copper with zinc)', 'Iron (competes)', 'Antibiotics'],
    harmReduction: [
      'Take with copper (2mg) if supplementing long-term',
      'Don\'t exceed 40mg/day without testing',
      'Picolinate or bisglycinate forms best absorbed',
      'Can cause nausea on empty stomach'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Essential trace element. Deficiency common in vegans. Supplement with copper.'
  },
  {
    id: 'omega-3',
    name: 'Omega-3 (EPA/DHA)',
    category: 'supplement',
    halfLife: 'Variable (incorporated into cell membranes)',
    effects: ['Anti-inflammatory', 'Cardiovascular health', 'Brain function', 'Mood regulation'],
    interactions: ['Blood thinners (additive at high doses)', 'Vitamin E (synergistic)'],
    harmReduction: [
      'Refrigerate fish oil to prevent oxidation',
      'Look for IFOS-certified products',
      'Algae-based for vegan option',
      'Take with meals for absorption and to reduce fishy burps'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'EPA + DHA are the active forms. ALA (flax) must be converted — poor conversion rate.'
  },
  {
    id: 'b12',
    name: 'Vitamin B12',
    category: 'vitamin',
    halfLife: 'Years (stored in liver)',
    effects: ['Energy metabolism', 'Nerve function', 'Red blood cell formation', 'DNA synthesis'],
    interactions: ['Metformin (depletes)', 'PPIs (reduce absorption)', 'Alcohol (depletes)'],
    harmReduction: [
      'Methylcobalamin or adenosylcobalamin preferred over cyanocobalamin',
      'Sublingual or injected for those with absorption issues',
      'Vegans/vegetarians often deficient',
      'MTHFR gene variant affects methylation'
    ],
    routes: ['oral', 'sublingual', 'IM'],
    unit: 'mcg',
    notes: 'Only B vitamin not reliably available from plants. Critical for neurological function.'
  },
  {
    id: 'alcohol',
    name: 'Alcohol',
    category: 'depressant',
    halfLife: '4–5 hours (one standard drink ~1hr)',
    effects: ['Disinhibition', 'Euphoria (low doses)', 'CNS depression', 'Motor impairment', 'Blackouts (high doses)'],
    interactions: ['Benzodiazepines (fatal)', 'Opioids (fatal)', 'Acetaminophen (liver toxicity)', 'Most medications'],
    harmReduction: [
      'Never mix with opioids or benzos',
      'One standard drink = 14g ethanol',
      'Eat before drinking; pace with water',
      'Withdrawal can be fatal — taper or seek medical help'
    ],
    routes: ['oral'],
    unit: 'mL',
    notes: 'Ethanol. Legal in most jurisdictions. Second-most harmful drug when including social harm.'
  },
  {
    id: 'mdma',
    name: 'MDMA',
    category: 'entactogen',
    halfLife: '8–9 hours',
    effects: ['Euphoria', 'Empathy', 'Increased sociability', 'Sensory enhancement', 'Energy'],
    interactions: ['SSRIs (serotonin syndrome risk, reduces effects)', 'MAOIs (potentially fatal)', 'Lithium (seizure risk)', 'Stimulants'],
    harmReduction: [
      'Test your substance — fentanyl and other adulterants common',
      '3-month rule: no more than once every 3 months',
      'Dose: 75–125mg; redose once at most (half dose)',
      'Stay hydrated but don\'t overdrink (hyponatremia risk)',
      'Supplement: ALA, vitamin C, EGCG before and after'
    ],
    routes: ['oral', 'insufflated'],
    unit: 'mg',
    notes: '3,4-methylenedioxymethamphetamine. Schedule I. Used in PTSD therapy trials.'
  },
  {
    id: 'lsd',
    name: 'LSD',
    category: 'psychedelic',
    halfLife: '3–5 hours (effects last 8–12 hours)',
    effects: ['Visual hallucinations', 'Time distortion', 'Ego dissolution', 'Emotional amplification', 'Synesthesia'],
    interactions: ['Lithium (seizure/cardiac risk — avoid)', 'SSRIs (reduce effects)', 'MAOIs', 'Cannabis (potentiates)'],
    harmReduction: [
      'Test with Ehrlich reagent (turns purple for LSD)',
      'Never take alone for first time',
      'Have a sober sitter',
      'Avoid if predisposition to psychosis',
      'HPPD is rare but possible'
    ],
    routes: ['sublingual', 'oral'],
    unit: 'ug',
    notes: 'Lysergic acid diethylamide. Schedule I. Active at microgram doses. Non-addictive.'
  },
  {
    id: 'adderall',
    name: 'Adderall',
    category: 'stimulant',
    halfLife: '9–14 hours',
    effects: ['Focus', 'Alertness', 'Reduced appetite', 'Motivation', 'Cardiovascular stimulation'],
    interactions: ['MAOIs (fatal)', 'SSRIs (serotonin syndrome risk)', 'Alcohol (masks intoxication)', 'Acid (reduces effects)', 'Antacids (increases effects)'],
    harmReduction: [
      'Prescription only — do not share',
      'Monitor blood pressure and heart rate',
      'Avoid late-day dosing for sleep',
      'Drug holidays to reset tolerance',
      'Dependence possible with chronic use'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Amphetamine salts. Schedule II. Used for ADHD and narcolepsy. Significant abuse potential.'
  },
  {
    id: 'kratom',
    name: 'Kratom',
    category: 'opioid-adjacent',
    halfLife: '9 hours',
    effects: ['Stimulant (low dose)', 'Sedation (high dose)', 'Pain relief', 'Euphoria', 'Anti-withdrawal aid'],
    interactions: ['Opioids (dangerous — CNS depression)', 'Benzodiazepines', 'Alcohol', 'CYP2D6 substrates'],
    harmReduction: [
      'Low dose (1–5g) for stimulant effects; high dose (5–15g) sedating',
      'Not for daily use — physical dependence develops',
      'Liver toxicity reported with heavy use',
      'Taper to discontinue; withdrawal similar to opioids',
      'Avoid mixing with other CNS depressants'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'Mitragyna speciosa. Not an opioid but acts on opioid receptors. Legal gray area.'
  },
  {
    id: 'cbd',
    name: 'CBD',
    category: 'cannabinoid',
    halfLife: '1–2 days (with regular use)',
    effects: ['Anxiolytic', 'Anti-inflammatory', 'Antiseizure', 'Neuroprotective', 'Reduced THC anxiety'],
    interactions: ['Blood thinners (Coomadin)', 'CYP450 substrates', 'SSRIs (mild)', 'THC (modulates psychoactivity)'],
    harmReduction: [
      'Third-party lab tested products only',
      'FDA approved only for Epidiolex (epilepsy)',
      'Can elevate liver enzymes at high doses',
      'Broad spectrum or isolate to avoid THC'
    ],
    routes: ['oral', 'sublingual', 'vaped', 'topical'],
    unit: 'mg',
    notes: 'Cannabidiol. Non-intoxicating cannabinoid. Legal in most jurisdictions with restrictions.'
  },
  {
    id: 'dmt',
    name: 'DMT',
    category: 'psychedelic',
    halfLife: '15 minutes (smoked/vaped)',
    effects: ['Intense visual hallucinations', 'Entity encounters', 'Ego death', 'Spiritual experiences', 'Rapid onset/offset'],
    interactions: ['MAOIs (prolonged experience — ayahuasca; requires medical supervision)', 'SSRIs (may reduce effects)', 'Lithium'],
    harmReduction: [
      'Short duration means setting is critical — be seated',
      'Have a sober sitter',
      'Do not use with MAOIs without medical supervision',
      'Breakthrough doses can be overwhelming',
      'Integration of experience strongly recommended'
    ],
    routes: ['smoked', 'vaped', 'oral (with MAOI)'],
    unit: 'mg',
    notes: 'N,N-Dimethyltryptamine. Endogenous in trace amounts. Schedule I. Smoked experience: 5–20 min.'
  },
  {
    id: 'ketamine',
    name: 'Ketamine',
    category: 'dissociative',
    halfLife: '2–3 hours',
    effects: ['Dissociation', 'Analgesia', 'K-hole (high doses)', 'Antidepressant (emerging)', 'Short-term amnesia'],
    interactions: ['CNS depressants (respiratory depression)', 'Stimulants (cardiovascular strain)', 'Alcohol'],
    harmReduction: [
      'Never use alone at dissociative doses',
      'Bladder damage with chronic use — cystitis is permanent',
      'Infusion therapy is clinical gold standard for depression',
      'K-hole is a dissociative state — be seated/lying',
      'Addictive potential is real'
    ],
    routes: ['IM', 'IV', 'insufflated', 'oral'],
    unit: 'mg',
    notes: 'Dissociative anesthetic. Schedule III. FDA-approved (Spravato) for depression. Veterinary origins.'
  }
];

export default SUBSTANCES;
