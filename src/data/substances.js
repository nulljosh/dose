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
  },

  // --- 80 NEW SUBSTANCES BELOW ---

  // PSYCHEDELICS (8)
  {
    id: 'mescaline',
    name: 'Mescaline',
    category: 'psychedelic',
    halfLife: '6 hours',
    effects: ['Visual enhancement', 'Color saturation', 'Euphoria', 'Body load', 'Spiritual experiences', 'Nausea (onset)'],
    interactions: ['SSRIs (reduced effects)', 'MAOIs (potentiates — dangerous)', 'Lithium (seizure risk)', 'Cannabis (intensifies)'],
    harmReduction: [
      'Nausea is common in the first 1–2 hours; ginger helps',
      'Duration is 8–12 hours — clear your schedule',
      'Peyote is sacred to Native American tribes; consider ethics of sourcing',
      'San Pedro is more accessible and legal in some jurisdictions',
      'Test with Marquis and Mecke reagents'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Phenethylamine psychedelic from peyote and San Pedro cacti. Schedule I. Active dose: 200–400mg. One of the oldest known psychedelics.'
  },
  {
    id: '2c-b',
    name: '2C-B',
    category: 'psychedelic',
    halfLife: '2–4 hours (effects last 4–6 hours)',
    effects: ['Visual enhancement', 'Body euphoria', 'Sensory amplification', 'Empathy (low doses)', 'Psychedelia (high doses)'],
    interactions: ['SSRIs (reduced effects)', 'MAOIs (dangerous potentiation)', 'Lithium (seizure risk)', 'Stimulants (cardiovascular strain)'],
    harmReduction: [
      'Dose-dependent: 10–15mg is empathogenic, 25mg+ is strongly psychedelic',
      'Insufflation is extremely painful and hits much harder — oral preferred',
      'Test with Marquis reagent (yellow-green reaction)',
      'Nausea common on come-up; eat lightly beforehand'
    ],
    routes: ['oral', 'insufflated'],
    unit: 'mg',
    notes: '4-Bromo-2,5-dimethoxyphenethylamine. Schedule I. Developed by Alexander Shulgin. Often described as between LSD and MDMA.'
  },
  {
    id: '5-meo-dmt',
    name: '5-MeO-DMT',
    category: 'psychedelic',
    halfLife: '12–20 minutes (smoked)',
    effects: ['Ego dissolution', 'Non-dual awareness', 'Intense body sensations', 'Emotional release', 'White-out (high doses)'],
    interactions: ['SSRIs (serotonin syndrome — potentially fatal)', 'MAOIs (extremely dangerous)', 'Stimulants', 'Lithium (seizure risk)'],
    harmReduction: [
      'Completely different from N,N-DMT — do not conflate doses',
      'Sitter is mandatory — seizure-like activity and loss of motor control common',
      'Bufo toad secretion carries additional risks from other alkaloids',
      'Synthetic 5-MeO-DMT is purer and more predictable than toad venom',
      'Contraindicated with any serotonergic medication'
    ],
    routes: ['smoked', 'vaped', 'insufflated'],
    unit: 'mg',
    notes: 'Found in Bufo alvarius toad secretion and various plants. Schedule I. 15–30 min duration. Far more physically intense than N,N-DMT.'
  },
  {
    id: 'salvia',
    name: 'Salvia Divinorum',
    category: 'psychedelic',
    halfLife: '8 minutes (salvinorin A)',
    effects: ['Intense dissociation', 'Reality distortion', 'Uncontrollable laughter', 'Dysphoria (common)', 'Loss of identity', 'Gravity distortion'],
    interactions: ['CNS depressants (compounding)', 'Cannabis (unpredictable)', 'Alcohol (dangerous disorientation)'],
    harmReduction: [
      'Have a sitter — complete loss of motor control is common',
      'Sit or lie down before onset; falling injuries are the main risk',
      'Plain leaf (1x) is far milder than extracts (20x, 60x, etc.)',
      'Most people do not find the experience pleasant',
      'Duration is only 5–15 minutes when smoked'
    ],
    routes: ['smoked', 'sublingual'],
    unit: 'mg',
    notes: 'Kappa opioid receptor agonist — unique mechanism unlike classical psychedelics. Legal in many jurisdictions. Salvinorin A is the active compound.'
  },
  {
    id: 'ibogaine',
    name: 'Ibogaine',
    category: 'psychedelic',
    halfLife: '24–48 hours (noribogaine metabolite persists longer)',
    effects: ['Introspective visions', 'Addiction interruption', 'Opioid withdrawal reduction', 'Intense nausea', 'Ataxia', 'Dream-like states'],
    interactions: ['Opioids (must be cleared first — fatal interaction)', 'SSRIs (serotonin syndrome risk)', 'QT-prolonging drugs (cardiac arrest)', 'Stimulants'],
    harmReduction: [
      'Cardiotoxicity is the primary lethal risk — EKG screening mandatory',
      'Only under medical supervision at licensed clinics',
      'Must be opioid-free for 12–72 hours before dosing depending on half-life',
      'Liver function tests required beforehand',
      'Experience lasts 24–36 hours — requires clinical setting'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'From Tabernanthe iboga root bark. Used ceremonially in Bwiti tradition. Schedule I in US. Studied for opioid addiction treatment. Multiple deaths from cardiac events.'
  },
  {
    id: 'ayahuasca',
    name: 'Ayahuasca',
    category: 'psychedelic',
    halfLife: '2–3 hours (DMT component)',
    effects: ['Intense visual hallucinations', 'Purging (vomiting/diarrhea)', 'Emotional processing', 'Spiritual experiences', 'Entity contact'],
    interactions: ['SSRIs (serotonin syndrome — potentially fatal)', 'MAOIs (already contains MAOI — no additional)', 'Tyramine-rich foods (hypertensive crisis)', 'Stimulants', 'Tramadol (fatal risk)'],
    harmReduction: [
      'MAOI dietary restrictions for 24 hours before: no aged cheese, cured meats, fermented foods, tap beer',
      'Discontinue SSRIs 2–6 weeks before (5 weeks for fluoxetine) under medical guidance',
      'Purging is expected — not a side effect but part of the experience',
      'Vet your facilitator/shaman carefully; sexual abuse reports exist',
      'Stay hydrated; bring electrolytes for after ceremony'
    ],
    routes: ['oral'],
    unit: 'mL',
    notes: 'DMT + MAOI brew (Banisteriopsis caapi + Psychotria viridis). 4–6 hour duration. Indigenous Amazonian tradition. The MAOI component makes DMT orally active.'
  },
  {
    id: '4-aco-dmt',
    name: '4-AcO-DMT',
    category: 'psychedelic',
    halfLife: '1–2 hours (prodrug to psilocin)',
    effects: ['Visual distortions', 'Emotional depth', 'Body high', 'Mystical experiences', 'Giggles'],
    interactions: ['SSRIs (reduced effects)', 'Lithium (seizure risk)', 'MAOIs (potentiation)', 'Cannabis (intensifies)'],
    harmReduction: [
      'Metabolized to psilocin — treat as equivalent to psilocybin mushrooms',
      'Weigh doses precisely with a milligram scale; powder form requires accuracy',
      'Common dose: 15–25mg oral, equivalent to ~2.5–3.5g dried mushrooms',
      'Onset faster than mushrooms (20–30 min vs 45–60 min)'
    ],
    routes: ['oral', 'insufflated'],
    unit: 'mg',
    notes: 'O-Acetylpsilocin. Synthetic psilocin prodrug. Research chemical status in most jurisdictions. Pharmacologically near-identical to psilocybin mushrooms.'
  },
  {
    id: 'lsa',
    name: 'LSA',
    category: 'psychedelic',
    halfLife: '2–4 hours (effects last 6–8 hours)',
    effects: ['Dreamy psychedelia', 'Sedation', 'Visual distortions (mild)', 'Body load', 'Vasoconstriction', 'Nausea'],
    interactions: ['SSRIs (reduced effects)', 'Vasoconstrictors (dangerous)', 'Lithium (seizure risk)'],
    harmReduction: [
      'Nausea is the main obstacle — cold water extraction reduces it',
      'Hawaiian Baby Woodrose seeds: 4–8 seeds; Morning Glory: 150–300 seeds',
      'Vasoconstriction can cause leg cramps; ginger and magnesium may help',
      'Commercially sold seeds may be coated with pesticides/emetics — source carefully',
      'Much more sedating and less visual than LSD'
    ],
    routes: ['oral', 'sublingual'],
    unit: 'mg',
    notes: 'D-lysergic acid amide (ergine). Found in morning glory and Hawaiian Baby Woodrose seeds. Legal in seed form in most jurisdictions. Milder and more sedating than LSD.'
  },

  // STIMULANTS (6)
  {
    id: 'cocaine',
    name: 'Cocaine',
    category: 'stimulant',
    halfLife: '1 hour',
    effects: ['Intense euphoria', 'Confidence', 'Energy', 'Numbness (local anesthetic)', 'Appetite suppression', 'Vasoconstriction'],
    interactions: ['Alcohol (forms cocaethylene — cardiotoxic)', 'MAOIs (hypertensive crisis)', 'SSRIs (serotonin effects)', 'Opioids (speedball — respiratory depression masked)', 'Stimulants (cardiovascular overload)'],
    harmReduction: [
      'Test for fentanyl contamination — fentanyl strips are cheap and save lives',
      'Avoid mixing with alcohol — cocaethylene has 18–25x higher sudden death risk',
      'Alternate nostrils; rinse with saline after use to prevent septal damage',
      'Crack cocaine carries higher addiction risk than powder',
      'Cardiovascular events are the leading cause of cocaine-related death'
    ],
    routes: ['insufflated', 'smoked', 'IV', 'oral'],
    unit: 'mg',
    notes: 'Tropane alkaloid from coca leaf. Schedule II (medical local anesthetic use). Short duration drives compulsive redosing. Highly addictive.'
  },
  {
    id: 'methamphetamine',
    name: 'Methamphetamine',
    category: 'stimulant',
    halfLife: '10–12 hours',
    effects: ['Intense euphoria', 'Extreme wakefulness', 'Appetite suppression', 'Hyperfocus', 'Hyperthermia', 'Neurotoxicity'],
    interactions: ['MAOIs (hypertensive crisis — fatal)', 'SSRIs (serotonin syndrome)', 'Other stimulants', 'Alcohol (masks intoxication)'],
    harmReduction: [
      'Neurotoxic — causes dopamine receptor downregulation with repeated use',
      'Forced eating and hydration on a schedule since appetite is suppressed',
      'Sleep deprivation is a major risk — stimulant psychosis begins around 48–72 hours',
      'Dental hygiene critically important (dry mouth + bruxism = meth mouth)',
      'If injecting: use clean needles, rotate sites, never share equipment'
    ],
    routes: ['oral', 'smoked', 'insufflated', 'IV'],
    unit: 'mg',
    notes: 'Schedule II (Desoxyn for ADHD, rarely prescribed). Extremely high abuse potential. Significantly more neurotoxic than amphetamine. Duration: 8–24 hours depending on route.'
  },
  {
    id: 'nicotine',
    name: 'Nicotine',
    category: 'stimulant',
    halfLife: '1–2 hours',
    effects: ['Alertness', 'Relaxation (paradoxical)', 'Appetite suppression', 'Cognitive enhancement (acute)', 'Dependence (rapid)'],
    interactions: ['Caffeine (metabolism increased in smokers)', 'SSRIs (some interactions via CYP1A2)', 'MAOIs (tobacco smoke contains MAOIs)', 'Theophylline'],
    harmReduction: [
      'Combustion is the harm — nicotine alone is relatively benign',
      'Nicotine replacement (patches, gum, lozenges) far safer than smoking',
      'Vaping is harm reduction over cigarettes, but not risk-free',
      'Dependence develops within days of regular use',
      'Oral nicotine pouches avoid lung exposure entirely'
    ],
    routes: ['smoked', 'vaped', 'oral', 'sublingual', 'topical'],
    unit: 'mg',
    notes: 'One of the most addictive substances known. Tobacco kills through combustion products, not nicotine itself. Half-life drives frequent dosing.'
  },
  {
    id: 'amphetamine',
    name: 'Amphetamine',
    category: 'stimulant',
    halfLife: '10–13 hours',
    effects: ['Focus', 'Euphoria', 'Increased energy', 'Appetite suppression', 'Wakefulness', 'Cardiovascular stimulation'],
    interactions: ['MAOIs (hypertensive crisis — fatal)', 'SSRIs (serotonin syndrome risk)', 'Alcohol (masked intoxication)', 'Acidic foods/drinks (reduce absorption)', 'Antacids (increase absorption)'],
    harmReduction: [
      'Prescription forms (Dexedrine, Vyvanse) are dose-controlled and safer than street speed',
      'Eat meals on schedule — appetite suppression leads to malnutrition',
      'Magnesium supplementation reduces jaw clenching and tolerance buildup',
      'Sleep is non-negotiable; do not skip nights',
      'Drug holidays help prevent tolerance'
    ],
    routes: ['oral', 'insufflated'],
    unit: 'mg',
    notes: 'Racemic amphetamine (levo + dextro). Schedule II. Pharmaceutical forms are well-studied. Street speed quality is unpredictable.'
  },
  {
    id: 'poppers',
    name: 'Poppers',
    category: 'stimulant',
    halfLife: 'Seconds to minutes',
    effects: ['Head rush', 'Vasodilation', 'Muscle relaxation', 'Dizziness', 'Brief euphoria'],
    interactions: ['PDE5 inhibitors like Viagra/Cialis (fatal blood pressure drop)', 'Blood pressure medications', 'Stimulants (cardiovascular strain)'],
    harmReduction: [
      'Never swallow the liquid — chemical burns and methemoglobinemia can be fatal',
      'Absolutely never combine with erectile dysfunction medications',
      'Use in well-ventilated area',
      'Skin contact with liquid causes chemical burns',
      'Amyl nitrite is somewhat safer than butyl or isopropyl nitrite'
    ],
    routes: ['inhaled'],
    unit: 'mL',
    notes: 'Alkyl nitrites (amyl, butyl, isobutyl). Sold as room deodorizers or leather cleaner. Legal gray area. Effects last 1–5 minutes.'
  },
  {
    id: 'khat',
    name: 'Khat',
    category: 'stimulant',
    halfLife: '1.5–3 hours (cathinone)',
    effects: ['Mild euphoria', 'Increased alertness', 'Talkativeness', 'Appetite suppression', 'Insomnia'],
    interactions: ['MAOIs (avoid)', 'Stimulants (additive)', 'Alcohol (mixed effects)', 'SSRIs (theoretical serotonin interaction)'],
    harmReduction: [
      'Leaves must be fresh — cathinone degrades to cathine within 48 hours',
      'Dental damage from prolonged chewing is common',
      'Psychological dependence develops with daily use',
      'Insomnia is the most common adverse effect'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'Catha edulis plant, chewed for stimulant effects. Contains cathinone (Schedule I) and cathine. Traditional use in East Africa and Arabian Peninsula. Legal status varies.'
  },

  // DEPRESSANTS (3)
  {
    id: 'ghb',
    name: 'GHB',
    category: 'depressant',
    halfLife: '30–50 minutes',
    effects: ['Euphoria', 'Disinhibition', 'Relaxation', 'Increased sociability', 'Sedation (dose-dependent)', 'Unconsciousness (overdose)'],
    interactions: ['Alcohol (potentially fatal — respiratory depression)', 'Opioids (fatal)', 'Benzodiazepines (fatal)', 'Ketamine (dangerous CNS depression)'],
    harmReduction: [
      'Dose-response curve is extremely steep — 0.5g can be the difference between euphoria and unconsciousness',
      'Always measure with a syringe or graduated pipette; never eyeball doses',
      'Never combine with any other depressant including alcohol',
      'Set timers for redosing — compulsive redosing while impaired causes most overdoses',
      'Physical dependence develops quickly with daily use; withdrawal can be fatal like alcohol'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'Gamma-hydroxybutyrate. Schedule I (Xyrem brand is Schedule III for narcolepsy). Endogenous in trace amounts. Narrow therapeutic window makes it high-risk.'
  },
  {
    id: 'phenibut',
    name: 'Phenibut',
    category: 'depressant',
    halfLife: '5–6 hours',
    effects: ['Anxiety reduction', 'Mild euphoria', 'Sociability', 'Relaxation', 'Improved sleep'],
    interactions: ['Alcohol (dangerous potentiation)', 'Benzodiazepines (respiratory depression)', 'Opioids (respiratory depression)', 'Gabapentin/pregabalin (compounding GABAergic effects)'],
    harmReduction: [
      'Tolerance develops within 3–5 days of daily use',
      'Do not use more than twice per week',
      'Withdrawal can cause severe anxiety, insomnia, and psychosis',
      'Taper slowly if physically dependent — abrupt cessation is dangerous',
      'Sold as a supplement but acts like a benzodiazepine'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Beta-phenyl-GABA. Developed in Russia as anxiolytic. Sold as a supplement in the West. GABA-B agonist. Prescription medication in Russia and some Eastern European countries.'
  },
  {
    id: 'betel-nut',
    name: 'Betel Nut',
    category: 'depressant',
    halfLife: '4–6 hours (arecoline)',
    effects: ['Mild stimulation', 'Warm body sensation', 'Euphoria', 'Increased salivation', 'Reduced fatigue'],
    interactions: ['Anticholinergic medications', 'Alcohol (increased oral cancer risk)', 'Asthma medications (bronchoconstriction)'],
    harmReduction: [
      'Classified as Group 1 carcinogen by WHO — causes oral and esophageal cancer',
      'Stains teeth red/black permanently with chronic use',
      'Oral submucous fibrosis is irreversible',
      'Dependence develops with regular use'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'Areca catechu nut, often wrapped in betel leaf with lime paste. Contains arecoline (cholinergic). Fourth most used psychoactive substance globally after nicotine, alcohol, and caffeine.'
  },

  // OPIOIDS (6)
  {
    id: 'heroin',
    name: 'Heroin',
    category: 'opioid',
    halfLife: '2–6 minutes (rapidly metabolized to morphine; morphine t1/2: 2–3 hours)',
    effects: ['Intense euphoria', 'Warmth', 'Pain relief', 'Nodding', 'Respiratory depression', 'Nausea'],
    interactions: ['Benzodiazepines (fatal respiratory depression)', 'Alcohol (fatal)', 'Other opioids', 'Gabapentin/pregabalin (respiratory depression)', 'Stimulants (speedball — masks overdose warning signs)'],
    harmReduction: [
      'Fentanyl contamination is ubiquitous — test every batch with fentanyl strips',
      'Never use alone; carry naloxone (Narcan) and teach others to use it',
      'Start with a fraction of a dose from a new batch — potency varies wildly',
      'Tolerance drops fast after breaks — most fatal ODs happen after a period of abstinence',
      'Needle exchange programs reduce disease transmission if injecting'
    ],
    routes: ['IV', 'smoked', 'insufflated'],
    unit: 'mg',
    notes: 'Diacetylmorphine. Schedule I. Rapidly crosses blood-brain barrier. Most overdose deaths involve polysubstance use. Naloxone reverses overdose.'
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    category: 'opioid',
    halfLife: '3–7 hours (IV); 17 hours (transdermal patch)',
    effects: ['Powerful analgesia', 'Euphoria', 'Respiratory depression', 'Sedation', 'Nausea', 'Muscle rigidity (chest wall, high doses)'],
    interactions: ['All CNS depressants (fatal)', 'Benzodiazepines (most common co-cause of opioid death)', 'Alcohol (fatal)', 'MAOIs (serotonin syndrome)', 'CYP3A4 inhibitors (increase levels)'],
    harmReduction: [
      '50–100x more potent than morphine — active doses measured in micrograms',
      'Illicit fentanyl is mixed unevenly (hot spots) — even testing one part of a batch does not guarantee safety',
      'Naloxone may require multiple doses to reverse fentanyl overdose',
      'Fentanyl test strips are necessary but cannot detect all analogs (carfentanil, etc.)',
      'Transdermal patches must never be cut, heated, or chewed — fatal dose release'
    ],
    routes: ['IV', 'IM', 'transdermal', 'oral', 'insufflated'],
    unit: 'ug',
    notes: 'Synthetic opioid. Schedule II (medical use). Leading cause of overdose death in North America. Illicit supply contains analogs of variable potency.'
  },
  {
    id: 'opium',
    name: 'Opium',
    category: 'opioid',
    halfLife: '2–3 hours (morphine component)',
    effects: ['Euphoria', 'Pain relief', 'Relaxation', 'Dreamlike states', 'Constipation', 'Respiratory depression'],
    interactions: ['Alcohol (respiratory depression)', 'Benzodiazepines (fatal)', 'Other opioids (additive)', 'MAOIs (hypertensive crisis)'],
    harmReduction: [
      'Contains morphine (10–15%), codeine, thebaine, and papaverine — variable alkaloid ratios',
      'Smoked opium delivers dose more predictably than oral use',
      'Physical dependence develops with regular use over 1–2 weeks',
      'Withdrawal is severely uncomfortable but rarely fatal (unlike alcohol/benzo withdrawal)'
    ],
    routes: ['smoked', 'oral'],
    unit: 'mg',
    notes: 'Dried latex from Papaver somniferum. Contains 20+ alkaloids. One of the oldest known drugs. Schedule II (raw opium). Source of morphine and codeine.'
  },
  {
    id: 'tramadol',
    name: 'Tramadol',
    category: 'opioid',
    halfLife: '5–7 hours',
    effects: ['Mild pain relief', 'Mood elevation', 'Nausea', 'Dizziness', 'Seizure risk (dose-dependent)'],
    interactions: ['SSRIs/SNRIs (serotonin syndrome — potentially fatal)', 'MAOIs (fatal)', 'Benzodiazepines (respiratory depression)', 'Alcohol', 'Sertraline (specific serotonin syndrome risk)'],
    harmReduction: [
      'Seizure threshold lowers above 400mg/day — never exceed',
      'Serotonin syndrome risk is real, especially combined with SSRIs like sertraline',
      'CYP2D6 poor metabolizers get less pain relief; ultrarapid metabolizers get too much',
      'Taper to discontinue — has both opioid and SSRI-like withdrawal components'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Weak mu-opioid agonist + SNRI. Schedule IV. Dual mechanism makes it uniquely dangerous with serotonergic drugs. Less euphoria than classic opioids.'
  },
  {
    id: 'codeine',
    name: 'Codeine',
    category: 'opioid',
    halfLife: '2.5–3 hours',
    effects: ['Mild pain relief', 'Cough suppression', 'Drowsiness', 'Euphoria (mild)', 'Constipation', 'Nausea'],
    interactions: ['Alcohol (respiratory depression)', 'Benzodiazepines (fatal)', 'Other opioids', 'CYP2D6 inhibitors (block conversion to morphine)'],
    harmReduction: [
      'Prodrug — must be converted to morphine by CYP2D6; ~10% of people are poor metabolizers and get no effect',
      'CYP2D6 ultrarapid metabolizers produce too much morphine — fatal cases reported, especially in children',
      'Purple drank (codeine + promethazine) is particularly dangerous due to dual CNS depression',
      'Physical dependence develops with daily use over 1–2 weeks'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Natural opiate from poppy. Schedule II-V depending on formulation. Prescription in most countries. Ceiling effect on analgesia around 60mg per dose.'
  },
  {
    id: 'oxycodone',
    name: 'Oxycodone',
    category: 'opioid',
    halfLife: '3–5 hours (immediate release)',
    effects: ['Strong pain relief', 'Euphoria', 'Sedation', 'Respiratory depression', 'Constipation', 'Nausea'],
    interactions: ['Benzodiazepines (fatal respiratory depression)', 'Alcohol (fatal — especially with extended-release forms)', 'Other opioids', 'CYP3A4 inhibitors (increase blood levels)', 'MAOIs'],
    harmReduction: [
      'Never crush or chew extended-release formulations (OxyContin) — dumps entire dose at once',
      'Tolerance develops rapidly with daily use; dose escalation is expected',
      'Cross-tolerance with other opioids is incomplete — dose conversion requires caution',
      'Constipation does not develop tolerance — use stool softeners proactively',
      'Naloxone should be on hand for anyone using opioids regularly'
    ],
    routes: ['oral', 'insufflated'],
    unit: 'mg',
    notes: 'Semi-synthetic opioid. Schedule II. OxyContin brand fueled the US opioid epidemic. 1.5x more potent than morphine. High abuse potential.'
  },

  // DISSOCIATIVES (4)
  {
    id: 'dxm',
    name: 'DXM',
    category: 'dissociative',
    halfLife: '2–4 hours (active metabolite dextrorphan: 3–6 hours)',
    effects: ['Dissociation', 'Euphoria', 'Music enhancement', 'Robo-walking', 'Nausea', 'Plateau-dependent intensity'],
    interactions: ['SSRIs (serotonin syndrome — potentially fatal)', 'MAOIs (fatal)', 'Sertraline (serotonin syndrome)', 'Opioids', 'Alcohol'],
    harmReduction: [
      'Only use products containing DXM as the sole active ingredient — acetaminophen, guaifenesin, and chlorpheniramine in combo products are toxic at recreational DXM doses',
      'Plateau system: P1 (100–200mg), P2 (200–400mg), P3 (400–600mg), P4 (600mg+) — severity increases dramatically',
      'CYP2D6 poor metabolizers experience much stronger effects at the same dose',
      'Do not use with any serotonergic medication including SSRIs',
      'Sigma (DXM + DPH) combinations are particularly dangerous'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Dextromethorphan. OTC cough suppressant. NMDA antagonist + sigma-1 agonist + SNRI. CYP2D6 metabolism means enzyme status drastically affects experience.'
  },
  {
    id: 'pcp',
    name: 'PCP',
    category: 'dissociative',
    halfLife: '7–46 hours (highly variable)',
    effects: ['Dissociation', 'Numbness', 'Agitation', 'Delusions of strength', 'Psychosis', 'Hallucinations'],
    interactions: ['CNS depressants (respiratory depression)', 'Stimulants (extreme cardiovascular stress)', 'Alcohol', 'Anticholinergics (additive delirium)'],
    harmReduction: [
      'Long duration (6–24 hours) with unpredictable intensity; no safe setting for high doses',
      'Psychosis and violent behavior at high doses are well-documented',
      'Rhabdomyolysis risk from extreme physical exertion while intoxicated',
      'Acidifying urine speeds elimination but is impractical outside hospitals',
      'Analogs (3-MeO-PCP, etc.) vary drastically in potency and duration'
    ],
    routes: ['smoked', 'insufflated', 'oral'],
    unit: 'mg',
    notes: 'Phencyclidine. Schedule II. NMDA antagonist. Originally an anesthetic, withdrawn due to emergence delirium. Extremely unpredictable dose-response. Often sold on marijuana or in liquid form.'
  },
  {
    id: 'nitrous-oxide',
    name: 'Nitrous Oxide',
    category: 'dissociative',
    halfLife: '<5 minutes',
    effects: ['Brief euphoria', 'Dissociation', 'Sound distortion (wah-wah)', 'Tingling', 'Laughter', 'Loss of motor control'],
    interactions: ['Psychedelics (dramatically intensifies effects)', 'Vitamin B12 (depletes and inactivates)', 'Alcohol (additive impairment)'],
    harmReduction: [
      'B12 depletion is the primary chronic risk — supplement B12 with regular use',
      'Never inhale directly from a pressurized tank — frostbite and barotrauma risk',
      'Always use with adequate oxygen; never use with a bag over the head',
      'Sit down — brief loss of consciousness means falling injuries are common',
      'Peripheral neuropathy from chronic use (subacute combined degeneration) can be permanent'
    ],
    routes: ['inhaled'],
    unit: 'g',
    notes: 'N2O. Legal for culinary/dental use. 1–3 minute duration per inhalation. Inactivates vitamin B12 by oxidizing cobalt center. Neuropathy is the serious chronic risk.'
  },
  {
    id: 'mxe',
    name: 'MXE',
    category: 'dissociative',
    halfLife: '3–6 hours',
    effects: ['Dissociation', 'Euphoria', 'Warm body high', 'Mania (some users)', 'Hole (high doses)', 'Anti-depressant afterglow'],
    interactions: ['SSRIs (serotonin syndrome risk — SNRI properties)', 'MAOIs (dangerous)', 'Alcohol (respiratory depression)', 'Other dissociatives (compounding)'],
    harmReduction: [
      'Longer duration than ketamine (3–5 hours vs 1–2 hours) — dose accordingly',
      'Insufflated onset: 15–30 min; oral: 30–60 min — do not redose too early',
      'Mania-like states reported at higher doses; set limits before dosing',
      'Bladder toxicity likely similar to ketamine with chronic use',
      'Quality and purity vary wildly in current market — test before use'
    ],
    routes: ['insufflated', 'oral', 'IM'],
    unit: 'mg',
    notes: 'Methoxetamine. NMDA antagonist + SNRI. Designed as a ketamine analog with longer duration and potentially less bladder toxicity. Banned in many jurisdictions. Limited supply since ~2015.'
  },

  // CANNABINOIDS (3)
  {
    id: 'delta-8-thc',
    name: 'Delta-8 THC',
    category: 'cannabinoid',
    halfLife: '3–5 hours (estimated, limited pharmacokinetic data)',
    effects: ['Mild euphoria', 'Relaxation', 'Reduced anxiety (vs delta-9)', 'Appetite stimulation', 'Clear-headed high'],
    interactions: ['Alcohol (potentiates)', 'CNS depressants', 'Benzodiazepines', 'SSRIs (mild)'],
    harmReduction: [
      'Typically synthesized from CBD via acid isomerization — byproducts may be present',
      'Third-party lab testing essential; look for residual solvents and heavy metals',
      'Roughly 50–75% the potency of delta-9 THC',
      'Legal status varies by state/country — hemp farm bill loophole in the US',
      'Will trigger positive THC drug tests'
    ],
    routes: ['vaped', 'oral', 'smoked'],
    unit: 'mg',
    notes: 'Delta-8-tetrahydrocannabinol. Isomer of delta-9 THC. Occurs naturally in trace amounts; commercial products are synthetically converted from CBD. Milder psychoactive profile.'
  },
  {
    id: 'cbn',
    name: 'CBN',
    category: 'cannabinoid',
    halfLife: '2–4 hours (estimated)',
    effects: ['Mild sedation', 'Sleep promotion', 'Anti-inflammatory', 'Appetite stimulation'],
    interactions: ['THC (potentiates sedation)', 'CNS depressants (additive)', 'Melatonin (additive sedation)'],
    harmReduction: [
      'Very mildly psychoactive — about 10% the potency of THC',
      'Sleep claims are largely anecdotal; limited clinical evidence',
      'Often sold in combination with THC or CBD for sleep formulations',
      'Lab testing important — verify actual CBN content'
    ],
    routes: ['oral', 'sublingual'],
    unit: 'mg',
    notes: 'Cannabinol. Oxidation product of THC — found in aged cannabis. Marketed as a sleep aid. Minimal intoxicating effects. Research is still early.'
  },
  {
    id: 'thc-edibles',
    name: 'THC Edibles',
    category: 'cannabinoid',
    halfLife: '6–8 hours (11-hydroxy-THC metabolite)',
    effects: ['Strong body high', 'Intense psychoactivity', 'Long duration', 'Couch lock', 'Anxiety/paranoia (overdose)', 'Appetite stimulation'],
    interactions: ['Alcohol (potentiates significantly)', 'CNS depressants', 'Benzodiazepines', 'SSRIs (mild interaction)'],
    harmReduction: [
      'Start with 2.5–5mg THC for first-timers; 10mg is a standard dose for experienced users',
      'Onset takes 1–3 hours — do not redose within 2 hours',
      '11-hydroxy-THC (liver metabolite) is 2–3x more psychoactive than inhaled THC',
      'Fat-containing food increases absorption',
      'CBD can modulate excessive THC effects if overconsumption occurs'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Oral cannabis. Metabolized by liver into 11-hydroxy-THC, which is more potent and longer-lasting than inhaled THC. Duration: 4–8 hours. Most common cause of cannabis-related ER visits.'
  },

  // ENTACTOGENS (2)
  {
    id: 'mda',
    name: 'MDA',
    category: 'entactogen',
    halfLife: '8–12 hours',
    effects: ['Empathy', 'Psychedelic visuals', 'Euphoria', 'Stimulation', 'Body high', 'Jaw clenching'],
    interactions: ['SSRIs (serotonin syndrome risk)', 'MAOIs (potentially fatal)', 'Stimulants (cardiovascular overload)', 'Lithium (seizure risk)'],
    harmReduction: [
      'More neurotoxic than MDMA — produces more toxic metabolites',
      'More psychedelic and less empathogenic than MDMA at equivalent doses',
      'Active dose: 80–120mg; lower than MDMA',
      'Same 3-month rule as MDMA; arguably should be even less frequent',
      'Supplement with antioxidants (ALA, vitamin C) before and after'
    ],
    routes: ['oral', 'insufflated'],
    unit: 'mg',
    notes: '3,4-methylenedioxyamphetamine. Schedule I. Parent compound of MDMA. More psychedelic, more neurotoxic. Sometimes sold as "sass." Often found in MDMA pills as adulterant or metabolite.'
  },
  {
    id: '6-apb',
    name: '6-APB',
    category: 'entactogen',
    halfLife: '6–8 hours (effects last 6–10 hours)',
    effects: ['Empathy', 'Euphoria', 'Visual enhancement', 'Stimulation', 'Music appreciation', 'Nausea (come-up)'],
    interactions: ['SSRIs (serotonin syndrome)', 'MAOIs (fatal)', 'Stimulants (cardiovascular strain)', 'Alcohol (unpredictable)'],
    harmReduction: [
      'Long come-up (1–2 hours) — do not redose prematurely',
      'Succinate salt requires higher dose than HCl salt; know which form you have',
      'Typical dose: 80–120mg (HCl) or 100–150mg (succinate)',
      'Cardiovascular effects may be more pronounced than MDMA',
      'Apply same spacing rules as MDMA — minimum 6 weeks, ideally 3 months'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: '6-(2-aminopropyl)benzofuran. Benzofuran analog of MDA. Research chemical. Longer duration than MDMA. Often described as more psychedelic and less pushy than MDMA.'
  },

  // MEDICATIONS (14)
  {
    id: 'ibuprofen',
    name: 'Ibuprofen',
    category: 'medication',
    halfLife: '2–4 hours',
    effects: ['Pain relief', 'Anti-inflammatory', 'Fever reduction', 'Reduced swelling'],
    interactions: ['Aspirin (reduces antiplatelet effect)', 'Blood thinners (increased bleeding)', 'Lithium (increases levels)', 'ACE inhibitors (reduces efficacy)', 'Alcohol (GI bleeding risk)'],
    harmReduction: [
      'Take with food to reduce GI irritation',
      'Max 1200mg/day OTC; 3200mg/day prescription',
      'Chronic use increases cardiovascular and renal risk',
      'Avoid in third trimester of pregnancy',
      'Not for use with existing kidney disease'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'NSAID. OTC. Advil/Motrin brand. One of the safest OTC analgesics for short-term use. GI and cardiovascular risks with chronic use.'
  },
  {
    id: 'acetaminophen',
    name: 'Acetaminophen',
    category: 'medication',
    halfLife: '2–3 hours',
    effects: ['Pain relief', 'Fever reduction', 'No anti-inflammatory effect'],
    interactions: ['Alcohol (liver toxicity — even moderate drinking)', 'Warfarin (increased anticoagulation)', 'Isoniazid (increased hepatotoxicity)', 'CYP2E1 inducers'],
    harmReduction: [
      'Max 4g/day (2g/day if drinking alcohol regularly)',
      'Leading cause of acute liver failure in the US — often accidental from combination products',
      'Check all cold/flu medications for hidden acetaminophen',
      'NAC (N-acetyl cysteine) is the antidote for overdose — effective within 8 hours',
      'Liver damage is silent for 24–72 hours after overdose'
    ],
    routes: ['oral', 'IV', 'rectal'],
    unit: 'mg',
    notes: 'Paracetamol/Tylenol. OTC. Analgesic and antipyretic but NOT anti-inflammatory. Narrow therapeutic window for liver. Found in hundreds of combination products.'
  },
  {
    id: 'aspirin',
    name: 'Aspirin',
    category: 'medication',
    halfLife: '15–20 minutes (acetylsalicylic acid); 2–3 hours (salicylate metabolite)',
    effects: ['Pain relief', 'Anti-inflammatory', 'Fever reduction', 'Antiplatelet (irreversible)', 'GI irritation'],
    interactions: ['Blood thinners (major bleeding risk)', 'Ibuprofen (blocks antiplatelet effect)', 'Methotrexate (increased toxicity)', 'SSRIs (increased bleeding risk)'],
    harmReduction: [
      'Irreversibly inhibits platelets for their 7–10 day lifespan — stop 7 days before surgery',
      'Enteric-coated reduces GI irritation but may reduce absorption',
      'Reye syndrome risk in children under 18 with viral illness',
      'Low-dose aspirin (81mg) for cardiovascular prevention is now more selective in guidelines'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Acetylsalicylic acid. OTC. Oldest NSAID (1899). Unique irreversible antiplatelet mechanism. Dual use as analgesic and cardiovascular preventive.'
  },
  {
    id: 'diphenhydramine',
    name: 'Diphenhydramine',
    category: 'medication',
    halfLife: '4–8 hours',
    effects: ['Sedation', 'Antihistamine', 'Anticholinergic', 'Dry mouth', 'Delirium (high doses)', 'Restless legs (paradoxical)'],
    interactions: ['Alcohol (dangerous sedation)', 'Other anticholinergics (additive toxicity)', 'MAOIs (hypertensive crisis)', 'CNS depressants'],
    harmReduction: [
      'Not recommended as a sleep aid — tolerance develops within days and long-term use linked to dementia',
      'Recreational use at high doses produces dysphoric delirium, not euphoria',
      'Anticholinergic toxicity: hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter',
      'Elderly should avoid entirely — high falls and cognitive impairment risk'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'First-generation antihistamine. Benadryl. OTC. Also in OTC sleep aids (ZzzQuil, Tylenol PM). Strong anticholinergic. Associated with increased dementia risk with chronic use.'
  },
  {
    id: 'omeprazole',
    name: 'Omeprazole',
    category: 'medication',
    halfLife: '1–1.5 hours (but irreversible proton pump inhibition lasts 24+ hours)',
    effects: ['Acid reduction', 'Heartburn relief', 'Ulcer healing', 'GERD treatment'],
    interactions: ['Clopidogrel (reduces antiplatelet effect via CYP2C19)', 'Methotrexate (increased levels)', 'Magnesium (depletes with long-term use)', 'B12 (reduces absorption)'],
    harmReduction: [
      'Designed for 2–8 week courses; long-term use requires periodic review',
      'Chronic use depletes magnesium, B12, calcium, and iron',
      'Increased C. difficile infection risk with prolonged use',
      'Rebound acid hypersecretion on discontinuation — taper off gradually'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Proton pump inhibitor (PPI). Prilosec. OTC. Irreversibly blocks H+/K+ ATPase. Takes 1–4 days for full effect. One of the most prescribed medications globally.'
  },
  {
    id: 'metformin',
    name: 'Metformin',
    category: 'medication',
    halfLife: '4–9 hours',
    effects: ['Blood sugar reduction', 'Insulin sensitization', 'Mild weight loss', 'GI side effects (common)'],
    interactions: ['Alcohol (lactic acidosis risk)', 'Iodinated contrast dye (temporary discontinuation required)', 'Cimetidine (increases metformin levels)', 'Carbonic anhydrase inhibitors'],
    harmReduction: [
      'GI side effects (diarrhea, nausea) improve over weeks; extended-release formulation helps',
      'Take with meals to reduce GI effects',
      'Lactic acidosis is rare but serious — hold before surgery and contrast procedures',
      'Depletes B12 with long-term use — supplement and monitor levels',
      'Longevity community uses off-label; evidence is from the TAME trial (ongoing)'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Biguanide. First-line type 2 diabetes treatment. Activates AMPK. Under investigation for anti-aging properties (TAME trial). Extremely well-studied safety profile.'
  },
  {
    id: 'lisinopril',
    name: 'Lisinopril',
    category: 'medication',
    halfLife: '12 hours',
    effects: ['Blood pressure reduction', 'Cardiac protection', 'Renal protection (diabetic nephropathy)', 'Dry cough (common side effect)'],
    interactions: ['Potassium supplements (hyperkalemia)', 'NSAIDs (reduced efficacy + renal risk)', 'Lithium (increased levels)', 'Aliskiren (avoid combination)'],
    harmReduction: [
      'Dry cough occurs in ~10% of patients — switch to ARB if intolerable',
      'Monitor potassium levels, especially if also taking potassium-sparing diuretics',
      'Angioedema is rare but potentially fatal — seek emergency care for facial/tongue swelling',
      'Contraindicated in pregnancy — causes fetal renal damage'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'ACE inhibitor. Prescription. One of the most prescribed blood pressure medications. Also used post-MI and for heart failure. Generic and inexpensive.'
  },
  {
    id: 'atorvastatin',
    name: 'Atorvastatin',
    category: 'medication',
    halfLife: '14 hours (active metabolites: 20–30 hours)',
    effects: ['LDL cholesterol reduction', 'Cardiovascular risk reduction', 'Mild HDL increase', 'Triglyceride reduction'],
    interactions: ['Grapefruit juice (CYP3A4 inhibition, increases levels)', 'Gemfibrozil (rhabdomyolysis risk)', 'Cyclosporine', 'Warfarin (monitor INR)', 'Niacin (additive myopathy risk)'],
    harmReduction: [
      'Muscle pain/weakness (myalgia) occurs in 5–10% — report to prescriber',
      'Rhabdomyolysis is rare but serious; watch for dark urine + severe muscle pain',
      'CoQ10 depletion is theoretical — many prescribers recommend supplementing',
      'Liver function tests recommended at baseline and if symptoms arise',
      'Take at night for optimal LDL reduction (cholesterol synthesis peaks overnight)'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Statin. Lipitor brand. HMG-CoA reductase inhibitor. Most prescribed statin globally. Strong evidence for cardiovascular event reduction. Available as generic.'
  },
  {
    id: 'fluoxetine',
    name: 'Fluoxetine',
    category: 'medication',
    halfLife: '1–4 days (norfluoxetine metabolite: 4–16 days)',
    effects: ['Antidepressant', 'Anti-anxiety', 'OCD treatment', 'Emotional blunting (possible)', 'Sexual dysfunction'],
    interactions: ['MAOIs (serotonin syndrome — fatal; 5-week washout required)', 'Tramadol (serotonin syndrome)', 'Psilocybin (blunted effects)', 'Thioridazine (fatal arrhythmia)', 'MDMA (serotonin syndrome + blocks effects)'],
    harmReduction: [
      'Extremely long half-life means 5-week washout before MAOIs or switching to other SSRIs',
      'Takes 4–6 weeks for full antidepressant effect',
      'Most activating SSRI — take in the morning to avoid insomnia',
      'Discontinuation syndrome is milder than other SSRIs due to long half-life',
      'Monitor for suicidal ideation in the first weeks, especially in under-25s'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'SSRI. Prozac brand. First SSRI approved (1987). Very long half-life (longest of any SSRI). Also used for bulimia and panic disorder.'
  },
  {
    id: 'bupropion',
    name: 'Bupropion',
    category: 'medication',
    halfLife: '21 hours (hydroxybupropion metabolite: 20–37 hours)',
    effects: ['Antidepressant', 'Smoking cessation aid', 'Mild stimulation', 'Appetite suppression', 'Seizure risk (dose-dependent)'],
    interactions: ['MAOIs (hypertensive crisis)', 'Alcohol (seizure threshold lowered)', 'Medications that lower seizure threshold', 'CYP2D6 substrates (bupropion is a strong inhibitor)'],
    harmReduction: [
      'Seizure risk increases above 450mg/day — never exceed',
      'Contraindicated in eating disorders (bulimia, anorexia) due to seizure risk',
      'One of few antidepressants that does not cause sexual dysfunction or weight gain',
      'Do not crush or chew extended-release formulations',
      'Alcohol should be minimized or avoided — lowers seizure threshold'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'NDRI (norepinephrine-dopamine reuptake inhibitor). Wellbutrin/Zyban. Unique mechanism among antidepressants. Also used as Zyban for smoking cessation. Weight-neutral.'
  },
  {
    id: 'gabapentin',
    name: 'Gabapentin',
    category: 'medication',
    halfLife: '5–7 hours',
    effects: ['Pain relief (neuropathic)', 'Anxiety reduction', 'Sedation', 'Dizziness', 'Mild euphoria (some users)'],
    interactions: ['Opioids (respiratory depression — FDA black box warning)', 'Alcohol (increased CNS depression)', 'Antacids (reduced absorption)', 'Pregabalin (redundant, do not combine)'],
    harmReduction: [
      'Absorption is saturable — bioavailability decreases at higher single doses; stagger doses',
      'Physical dependence develops with chronic use; taper over 1–2 weeks minimum',
      'FDA boxed warning for respiratory depression when combined with opioids',
      'Abuse potential is increasingly recognized — now Schedule V in several US states',
      'Take at least 2 hours apart from antacids'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Anticonvulsant. Neurontin brand. Binds alpha-2-delta calcium channel subunit (not GABA despite the name). Widely used off-label for neuropathic pain, anxiety, insomnia.'
  },
  {
    id: 'pregabalin',
    name: 'Pregabalin',
    category: 'medication',
    halfLife: '6 hours',
    effects: ['Anxiety reduction', 'Pain relief (neuropathic)', 'Sedation', 'Euphoria', 'Dizziness', 'Weight gain'],
    interactions: ['Opioids (respiratory depression)', 'Alcohol (dangerous CNS depression)', 'Benzodiazepines (additive sedation)', 'Gabapentin (do not combine — same mechanism)'],
    harmReduction: [
      'Schedule V controlled substance — higher abuse potential than gabapentin',
      'Linear absorption (unlike gabapentin) makes dose-response more predictable',
      'Taper over at least 1 week to avoid withdrawal seizures',
      'Weight gain is common with chronic use',
      'Do not drive until you know how it affects you'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Lyrica brand. Same mechanism as gabapentin but better absorbed and stronger. FDA-approved for fibromyalgia, diabetic neuropathy, post-herpetic neuralgia, and generalized anxiety (EU).'
  },
  {
    id: 'hydroxyzine',
    name: 'Hydroxyzine',
    category: 'medication',
    halfLife: '14–25 hours',
    effects: ['Anxiety reduction', 'Sedation', 'Antihistamine', 'Anti-nausea', 'Dry mouth'],
    interactions: ['Alcohol (potentiates sedation)', 'CNS depressants (additive)', 'Anticholinergic drugs (additive dry mouth, constipation)', 'QT-prolonging medications'],
    harmReduction: [
      'Non-addictive alternative to benzodiazepines for anxiety',
      'Sedation is the main side effect — avoid operating machinery',
      'QT prolongation possible at high doses; use caution in cardiac patients',
      'Tolerance to sedation develops but anxiolytic effect persists'
    ],
    routes: ['oral', 'IM'],
    unit: 'mg',
    notes: 'Antihistamine anxiolytic. Vistaril/Atarax. First-generation antihistamine used for anxiety, itching, and nausea. Non-controlled. Often prescribed as a PRN anxiolytic.'
  },
  {
    id: 'methylphenidate',
    name: 'Methylphenidate',
    category: 'stimulant',
    halfLife: '2–3 hours (IR); 3–4 hours (ER formulations vary)',
    effects: ['Focus', 'Alertness', 'Reduced appetite', 'Increased heart rate', 'Anxiety (possible)', 'Insomnia'],
    interactions: ['MAOIs (hypertensive crisis — contraindicated)', 'SSRIs (mild serotonin interaction)', 'Alcohol (increased side effects)', 'Clonidine (additive cardiovascular effects)', 'Anticonvulsants (altered levels)'],
    harmReduction: [
      'Shorter duration than amphetamine — may need multiple daily doses (IR) or extended-release',
      'Monitor growth in children — appetite suppression affects weight and height',
      'Drug holidays on weekends/vacations help manage tolerance and growth effects',
      'Concerta/Ritalin/Focalin are different formulations with different release profiles',
      'Cardiovascular screening recommended before starting'
    ],
    routes: ['oral', 'insufflated'],
    unit: 'mg',
    notes: 'Dopamine-norepinephrine reuptake inhibitor. Schedule II. Ritalin/Concerta brand. Different mechanism than amphetamine (reuptake inhibitor vs releaser). First-line ADHD treatment alongside amphetamine.'
  },

  // BENZODIAZEPINES (4)
  {
    id: 'alprazolam',
    name: 'Alprazolam',
    category: 'benzodiazepine',
    halfLife: '6–12 hours',
    effects: ['Anxiety relief', 'Sedation', 'Muscle relaxation', 'Euphoria', 'Disinhibition', 'Amnesia'],
    interactions: ['Opioids (fatal respiratory depression)', 'Alcohol (fatal)', 'Other benzodiazepines', 'CYP3A4 inhibitors (ketoconazole, grapefruit — increase levels)', 'CNS depressants'],
    harmReduction: [
      'Most prescribed and most abused benzodiazepine — high addiction potential',
      'Short half-life means interdose withdrawal and rebound anxiety',
      'Never stop abruptly after regular use — withdrawal seizures can be fatal',
      'Taper must be slow (10% reduction every 1–2 weeks) under medical supervision',
      'Pressed counterfeit Xanax bars frequently contain fentanyl or flualprazolam'
    ],
    routes: ['oral', 'sublingual'],
    unit: 'mg',
    notes: 'Xanax brand. Schedule IV. High-potency, short-acting benzodiazepine. Extremely common in recreational drug culture. Withdrawal is medically dangerous and potentially fatal.'
  },
  {
    id: 'diazepam',
    name: 'Diazepam',
    category: 'benzodiazepine',
    halfLife: '20–100 hours (active metabolite nordiazepam: 36–200 hours)',
    effects: ['Anxiety relief', 'Muscle relaxation', 'Anticonvulsant', 'Sedation', 'Alcohol withdrawal management'],
    interactions: ['Opioids (fatal)', 'Alcohol (fatal)', 'CYP3A4 and CYP2C19 inhibitors', 'Cimetidine (increased levels)', 'CNS depressants'],
    harmReduction: [
      'Extremely long half-life (with metabolites) means accumulation over days',
      'Often used as tapering agent for other benzo withdrawal due to long half-life',
      'Elderly are more sensitive — lower doses required',
      'First-line for alcohol withdrawal and seizures in emergency settings',
      'Do not combine with any other CNS depressant'
    ],
    routes: ['oral', 'IV', 'IM', 'rectal'],
    unit: 'mg',
    notes: 'Valium brand. Schedule IV. Long-acting benzodiazepine. One of the oldest (1963). Used for anxiety, muscle spasms, seizures, and alcohol withdrawal. Active metabolites persist for days.'
  },
  {
    id: 'clonazepam',
    name: 'Clonazepam',
    category: 'benzodiazepine',
    halfLife: '18–50 hours',
    effects: ['Anxiety relief', 'Anticonvulsant', 'Sedation', 'Muscle relaxation', 'Panic disorder treatment'],
    interactions: ['Opioids (fatal respiratory depression)', 'Alcohol (fatal)', 'Other benzodiazepines', 'CYP3A4 inhibitors', 'CNS depressants'],
    harmReduction: [
      'Intermediate half-life provides more stable blood levels than alprazolam',
      'Commonly prescribed for panic disorder and seizure disorders',
      'Taper slowly — 10% reduction every 2 weeks minimum',
      'Cognitive impairment and emotional blunting with chronic use',
      'Dependence develops within 2–4 weeks of daily use'
    ],
    routes: ['oral', 'sublingual'],
    unit: 'mg',
    notes: 'Klonopin/Rivotril brand. Schedule IV. Intermediate-acting. Strong anticonvulsant properties. Often preferred over alprazolam for daily anxiety management due to longer half-life.'
  },
  {
    id: 'lorazepam',
    name: 'Lorazepam',
    category: 'benzodiazepine',
    halfLife: '10–20 hours',
    effects: ['Anxiety relief', 'Sedation', 'Amnesia (procedural)', 'Anticonvulsant', 'Anti-nausea (chemotherapy)'],
    interactions: ['Opioids (fatal)', 'Alcohol (fatal)', 'CNS depressants', 'Probenecid (increased levels)'],
    harmReduction: [
      'No active metabolites — preferred in liver impairment over diazepam',
      'IV formulation widely used in hospitals for status epilepticus and acute agitation',
      'Pre-procedural amnesia is intentional in medical settings',
      'Same addiction/withdrawal risks as all benzodiazepines — taper required',
      'Avoid in elderly when possible — falls and confusion risk'
    ],
    routes: ['oral', 'IV', 'IM', 'sublingual'],
    unit: 'mg',
    notes: 'Ativan brand. Schedule IV. Intermediate-acting. No active metabolites (glucuronidation only). Preferred benzo for hepatic impairment. Hospital workhorse for seizures and agitation.'
  },

  // NOOTROPICS (2)
  {
    id: 'modafinil',
    name: 'Modafinil',
    category: 'nootropic',
    halfLife: '12–15 hours',
    effects: ['Wakefulness', 'Improved focus', 'Reduced fatigue', 'Mild mood elevation', 'Appetite reduction'],
    interactions: ['Hormonal contraceptives (reduces efficacy via CYP3A4 induction)', 'CYP2C19 substrates', 'Caffeine (additive but usually well tolerated)', 'Warfarin (monitor INR)'],
    harmReduction: [
      'Use backup contraception — modafinil induces CYP3A4 and reduces hormonal contraceptive efficacy',
      'Stevens-Johnson syndrome is rare but serious — stop immediately if rash develops',
      'Not a substitute for sleep — sleep debt still accumulates',
      'Tolerance is minimal compared to traditional stimulants',
      'Take early in the day; half-life means afternoon dosing disrupts sleep'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Schedule IV. Provigil brand. Wakefulness-promoting agent for narcolepsy, shift work disorder, obstructive sleep apnea. Off-label for cognitive enhancement. Lower abuse potential than amphetamines.'
  },
  {
    id: 'piracetam',
    name: 'Piracetam',
    category: 'nootropic',
    halfLife: '4–5 hours',
    effects: ['Mild cognitive enhancement', 'Verbal fluency (reported)', 'Neuroprotection (theoretical)', 'Improved memory (some evidence)'],
    interactions: ['Blood thinners (antiplatelet effect)', 'Thyroid hormones (tremor reported)', 'Stimulants (mild additive effects)'],
    harmReduction: [
      'Effects are subtle — do not expect dramatic cognitive gains',
      'Typical dose: 1200–4800mg/day in divided doses',
      'May cause headaches — choline supplementation (alpha-GPC or citicoline) often helps',
      'Very low toxicity profile; no known lethal dose in humans',
      'Not approved by FDA; sold as supplement or research chemical'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Original racetam nootropic (1964). Modulates AMPA and NMDA receptors. Prescription medication in Europe, unregulated in the US. Extensive safety data but modest efficacy evidence.'
  },

  // SUPPLEMENTS (13)
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    category: 'supplement',
    halfLife: '6–12 hours (withanolides)',
    effects: ['Cortisol reduction', 'Anxiety relief', 'Sleep improvement', 'Adaptogenic stress buffering', 'Mild testosterone increase'],
    interactions: ['Thyroid medications (may increase thyroid hormone levels)', 'Immunosuppressants (stimulates immune system)', 'Sedatives (additive sedation)', 'Diabetes medications (may lower blood sugar)'],
    harmReduction: [
      'KSM-66 and Sensoril are the most studied extracts',
      'Cycle on/off (8 weeks on, 2 weeks off) — long-term continuous safety data is limited',
      'Rare liver injury cases reported — discontinue if upper abdominal pain or jaundice develops',
      'Can increase thyroid hormones — caution if hyperthyroid or on thyroid medication',
      'Take with meals to reduce GI upset'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Withania somnifera. Ayurvedic adaptogen. Root extract standardized to withanolides. Most studied adaptogenic herb. Effects typically noticed after 2–4 weeks.'
  },
  {
    id: 'rhodiola',
    name: 'Rhodiola Rosea',
    category: 'supplement',
    halfLife: '4–6 hours (salidroside)',
    effects: ['Fatigue resistance', 'Stress adaptation', 'Mild mood elevation', 'Physical endurance', 'Cognitive function under stress'],
    interactions: ['SSRIs (theoretical serotonin interaction)', 'Stimulants (additive)', 'Immunosuppressants', 'Diabetes medications (may affect blood sugar)'],
    harmReduction: [
      'Standardized to 3% rosavins and 1% salidroside is the research standard',
      'Take early in the day — can cause insomnia if taken too late',
      'More stimulating than ashwagandha — not ideal for those with anxiety',
      'Typical dose: 200–600mg/day',
      'Effects noticeable within days, unlike ashwagandha'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Arctic root adaptogen. Grows in cold, high-altitude regions. Used in Russian and Scandinavian traditional medicine. Best evidence for fatigue reduction and stress resilience.'
  },
  {
    id: 'lions-mane',
    name: 'Lion\'s Mane',
    category: 'supplement',
    halfLife: 'Unknown (hericenones and erinacines)',
    effects: ['Nerve growth factor stimulation', 'Cognitive support', 'Neuroprotection', 'Mild anxiolytic', 'Gut health'],
    interactions: ['Blood thinners (antiplatelet effect reported)', 'Diabetes medications (may lower blood sugar)', 'Immunomodulators'],
    harmReduction: [
      'Fruiting body extract is better studied than mycelium-on-grain products',
      'Look for dual extraction (water + alcohol) for full spectrum of compounds',
      'Effects on NGF take weeks to months to manifest',
      'Generally very well tolerated; GI upset is rare',
      'Allergic reactions possible in those allergic to mushrooms'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Hericium erinaceus mushroom. Contains hericenones and erinacines that stimulate NGF (nerve growth factor). Culinary mushroom with medicinal use. Growing research for neurodegeneration.'
  },
  {
    id: 'nac',
    name: 'NAC',
    category: 'supplement',
    halfLife: '5.6 hours',
    effects: ['Glutathione precursor', 'Mucolytic', 'Antioxidant', 'Liver protection', 'Psychiatric applications (emerging)'],
    interactions: ['Nitroglycerin (potentiates — headache and hypotension)', 'Activated charcoal (reduces NAC absorption)', 'Acetaminophen (NAC is the antidote for overdose)'],
    harmReduction: [
      'Standard dose: 600–1200mg/day',
      'Can cause nausea and GI upset — take with food',
      'FDA attempted to ban as supplement in 2022 (drug precursor argument) — status varies',
      'Acetaminophen overdose antidote — hospital protocol uses IV NAC',
      'May reduce efficacy of some chemotherapy drugs — consult oncologist'
    ],
    routes: ['oral', 'IV'],
    unit: 'mg',
    notes: 'N-acetyl cysteine. Amino acid derivative. Replenishes intracellular glutathione. FDA-approved as mucolytic (Mucomyst) and acetaminophen antidote. Studied for OCD, addiction, and COPD.'
  },
  {
    id: 'creatine',
    name: 'Creatine',
    category: 'supplement',
    halfLife: '3 hours (plasma); stored in muscle',
    effects: ['ATP regeneration', 'Muscle strength', 'Muscle hydration', 'Cognitive enhancement', 'Recovery improvement'],
    interactions: ['Caffeine (theoretical interference, but practically fine)', 'Nephrotoxic drugs (monitor kidney function)', 'NSAIDs (theoretical kidney concern at high doses)'],
    harmReduction: [
      'Creatine monohydrate is the most studied form — no need for fancy versions',
      '3–5g/day is sufficient; loading phases (20g/day) are unnecessary',
      'Increases water retention in muscle — drink adequate water',
      'Does NOT cause kidney damage in healthy individuals; decades of evidence',
      'May increase DHT/dihydrotestosterone — relevance to hair loss debated'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'Most researched sports supplement. Naturally produced in the body and found in meat. Benefits for both muscle performance and brain function. Safe for long-term daily use.'
  },
  {
    id: 'coq10',
    name: 'CoQ10',
    category: 'supplement',
    halfLife: '33 hours (ubiquinol form)',
    effects: ['Mitochondrial support', 'Antioxidant', 'Statin side effect reduction', 'Energy production', 'Cardiovascular support'],
    interactions: ['Statins (statins deplete CoQ10; supplementation recommended)', 'Blood thinners (may reduce warfarin efficacy)', 'Blood pressure medications (additive reduction)', 'Chemotherapy (may reduce efficacy — consult oncologist)'],
    harmReduction: [
      'Ubiquinol form is better absorbed than ubiquinone, especially over age 40',
      'Take with fat-containing meal — fat-soluble',
      'Typical dose: 100–300mg/day',
      'Statin users have the strongest rationale for supplementation',
      'Very safe; no serious adverse effects reported in clinical trials'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Coenzyme Q10 (ubiquinone/ubiquinol). Essential for mitochondrial electron transport chain. Endogenous production declines with age. Depleted by statins. Supports cellular energy production.'
  },
  {
    id: 'turmeric',
    name: 'Turmeric / Curcumin',
    category: 'supplement',
    halfLife: '6–7 hours (enhanced absorption forms)',
    effects: ['Anti-inflammatory', 'Antioxidant', 'Joint support', 'Digestive aid', 'Mild antidepressant effect'],
    interactions: ['Blood thinners (antiplatelet effect)', 'Diabetes medications (may lower blood sugar)', 'Iron supplements (reduces absorption)', 'Sulfasalazine (may increase levels)'],
    harmReduction: [
      'Curcumin bioavailability is extremely poor without enhancement (piperine, liposomes, or phytosomes)',
      'Piperine (black pepper extract) increases absorption 2000% but also affects drug metabolism',
      'Longvida, Meriva, and BCM-95 are enhanced formulations with clinical data',
      'High doses may cause GI upset and oxalate kidney stone risk',
      'Do not use high-dose curcumin supplements if on blood thinners or before surgery'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Curcuma longa. Active compound curcumin. Spice used for millennia. Strong anti-inflammatory evidence. Bioavailability problem is the main challenge. Standard turmeric powder is mostly useless for therapeutic doses.'
  },
  {
    id: '5-htp',
    name: '5-HTP',
    category: 'supplement',
    halfLife: '2–7 hours',
    effects: ['Serotonin precursor', 'Mood elevation', 'Sleep improvement', 'Appetite suppression', 'Anxiety reduction'],
    interactions: ['SSRIs (serotonin syndrome — do not combine)', 'MAOIs (serotonin syndrome — fatal)', 'Tramadol (serotonin syndrome)', 'Sertraline (serotonin syndrome)', 'Carbidopa (increased 5-HTP absorption — dangerous)'],
    harmReduction: [
      'Do NOT combine with any serotonergic medication — serotonin syndrome risk is real',
      'Commonly used for MDMA recovery (3 days after, not before or during)',
      'Long-term use without EGCG or green tea extract may deplete dopamine and catecholamines',
      'Typical dose: 50–200mg before bed',
      'Take on empty stomach for best absorption'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: '5-hydroxytryptophan. Direct serotonin precursor from Griffonia simplicifolia seeds. One metabolic step before serotonin. Contraindicated with SSRIs, SNRIs, MAOIs, and other serotonergic drugs.'
  },
  {
    id: 'taurine',
    name: 'Taurine',
    category: 'supplement',
    halfLife: '1–2 hours (plasma)',
    effects: ['Cardiovascular support', 'Antioxidant', 'Electrolyte regulation', 'Mild calming effect', 'Exercise performance'],
    interactions: ['Lithium (taurine may affect renal lithium clearance)', 'Blood pressure medications (additive BP reduction)', 'Stimulants (modulates stimulant effects)'],
    harmReduction: [
      'Found in energy drinks (Red Bull, Monster) at 1000mg — the safe, boring ingredient',
      'Typical supplemental dose: 500–2000mg/day',
      'Very high safety margin — no toxicity reported up to 3g/day in studies',
      'Not an amino acid despite common labeling; technically an amino sulfonic acid'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Amino sulfonic acid. Most abundant free amino acid in the body. Concentrated in heart, brain, and retina. Recent longevity research (Science 2023) showed taurine decline correlates with aging.'
  },
  {
    id: 'glycine',
    name: 'Glycine',
    category: 'supplement',
    halfLife: '1–2 hours (plasma)',
    effects: ['Sleep quality improvement', 'Collagen synthesis', 'Inhibitory neurotransmitter', 'Creatine precursor', 'Anti-inflammatory'],
    interactions: ['Clozapine (may reduce efficacy)', 'Antipsychotics (variable interactions)', 'Magnesium (synergistic for sleep)'],
    harmReduction: [
      '3g before bed is the standard sleep dose (lowers core body temperature)',
      'Extremely safe — naturally present in collagen and gelatin',
      'Sweet tasting — dissolves easily in water',
      'Benefits collagen production when combined with vitamin C',
      'May cause mild GI effects at very high doses (>15g)'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'Simplest amino acid. Inhibitory neurotransmitter. 3g before bed improves sleep quality in multiple studies (lowers core temperature). Also used in collagen synthesis and as creatine precursor.'
  },
  {
    id: 'bacopa',
    name: 'Bacopa Monnieri',
    category: 'supplement',
    halfLife: '2–6 hours (bacosides)',
    effects: ['Memory enhancement', 'Learning improvement', 'Anxiolytic', 'Antioxidant', 'Neuroprotective'],
    interactions: ['Thyroid medications (may increase thyroid hormones)', 'Cholinergic drugs (additive)', 'Calcium channel blockers (additive hypotension)', 'Sedatives (mild additive sedation)'],
    harmReduction: [
      'Takes 8–12 weeks of daily use to see cognitive benefits — not acute',
      'Can cause GI upset — take with fat-containing food (bacosides are fat-soluble)',
      'May cause fatigue/lethargy initially; some take at night',
      'Standardized to 50% bacosides or Synapsa/BacoMind extract',
      'Typical dose: 300–600mg/day of standardized extract'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Brahmi in Ayurvedic medicine. Contains bacosides A and B. One of the best-studied nootropic herbs. Strong evidence for memory improvement with chronic use. Fat-soluble active compounds.'
  },
  {
    id: 'quercetin',
    name: 'Quercetin',
    category: 'supplement',
    halfLife: '11–28 hours',
    effects: ['Anti-inflammatory', 'Antioxidant', 'Antihistamine (natural)', 'Senolytic (with dasatinib)', 'Immune modulation'],
    interactions: ['Cyclosporine (increased levels)', 'Blood thinners (additive antiplatelet)', 'Antibiotics (may interact with fluoroquinolones)', 'Digoxin (may increase levels)'],
    harmReduction: [
      'Poor bioavailability — phytosomal form or combination with bromelain/vitamin C improves absorption',
      'Typical dose: 500–1000mg/day',
      'Found naturally in onions, apples, and berries',
      'Longevity interest as a senolytic (clears senescent cells) when paired with dasatinib',
      'Well tolerated; GI upset at high doses is the main side effect'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Flavonoid antioxidant. Found in many fruits and vegetables. Senolytic properties when combined with dasatinib. Natural mast cell stabilizer (antihistamine). Studied for COVID-19 (mixed results).'
  },
  {
    id: 'probiotics',
    name: 'Probiotics',
    category: 'supplement',
    halfLife: 'N/A (live organisms; transit time 12–72 hours)',
    effects: ['Gut microbiome modulation', 'Digestive support', 'Immune regulation', 'Mood effects (gut-brain axis)', 'Reduced antibiotic-associated diarrhea'],
    interactions: ['Antibiotics (reduce probiotic viability — space apart)', 'Immunosuppressants (theoretical risk of infection in immunocompromised)', 'Antifungals (may affect yeast-based probiotics)'],
    harmReduction: [
      'Strain-specific effects — Lactobacillus rhamnosus GG is not the same as any other strain',
      'Refrigerated products tend to have better viability but shelf-stable forms exist',
      'CFU count matters less than strain selection and viability',
      'Gas and bloating are common initially; usually resolves in 1–2 weeks',
      'Immunocompromised individuals should consult a physician before use'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Live microorganisms. Effects are highly strain-specific. Saccharomyces boulardii for antibiotic diarrhea. Gut-brain axis research is exploding. Quality varies enormously between products.'
  },

  // VITAMINS (6)
  {
    id: 'vitamin-a',
    name: 'Vitamin A',
    category: 'vitamin',
    halfLife: 'Weeks to months (stored in liver)',
    effects: ['Vision support', 'Immune function', 'Skin health', 'Cell differentiation', 'Reproductive health'],
    interactions: ['Retinoids/Accutane (hypervitaminosis A)', 'Blood thinners (high doses)', 'Orlistat (reduces absorption)', 'Alcohol (increases hepatotoxicity)'],
    harmReduction: [
      'Fat-soluble — accumulates in liver; toxicity is real above 10,000 IU/day preformed retinol',
      'Beta-carotene (provitamin A) does not cause toxicity — body regulates conversion',
      'Teratogenic — absolutely contraindicated in pregnancy at high doses',
      'Acute toxicity symptoms: headache, nausea, blurred vision, liver pain',
      'Do not take with isotretinoin (Accutane) — additive toxicity'
    ],
    routes: ['oral'],
    unit: 'IU',
    notes: 'Retinol (preformed) and beta-carotene (provitamin). Fat-soluble. Essential for vision (rhodopsin), immune function, and epithelial integrity. Deficiency causes night blindness. Toxicity causes liver damage.'
  },
  {
    id: 'vitamin-e',
    name: 'Vitamin E',
    category: 'vitamin',
    halfLife: '48–72 hours (alpha-tocopherol)',
    effects: ['Antioxidant', 'Skin protection', 'Immune support', 'Cell membrane integrity'],
    interactions: ['Blood thinners (increased bleeding risk)', 'Statins (may reduce statin efficacy)', 'Chemotherapy (may reduce efficacy)', 'Vitamin K (high-dose vitamin E antagonizes)'],
    harmReduction: [
      'Mixed tocopherols (alpha, beta, gamma, delta) preferred over alpha-tocopherol alone',
      'High-dose alpha-tocopherol alone may increase all-cause mortality (>400 IU/day)',
      'High-dose supplementation in SELECT trial increased prostate cancer risk',
      'Natural form (d-alpha) is twice as bioactive as synthetic (dl-alpha)',
      'Fat-soluble — take with meals containing fat'
    ],
    routes: ['oral', 'topical'],
    unit: 'IU',
    notes: 'Family of tocopherols and tocotrienols. Fat-soluble antioxidant. Protects cell membranes from oxidation. High-dose supplementation studies have been disappointing. 15mg/day (22 IU) is the RDA.'
  },
  {
    id: 'vitamin-k2',
    name: 'Vitamin K2',
    category: 'vitamin',
    halfLife: '6–8 hours (MK-4); 72 hours (MK-7)',
    effects: ['Calcium metabolism direction', 'Bone mineralization', 'Arterial calcification prevention', 'Carboxylation of vitamin K-dependent proteins'],
    interactions: ['Warfarin (directly opposes — must maintain consistent intake)', 'Vitamin D3 (synergistic — take together)', 'Antibiotics (reduce gut synthesis of K2)', 'Orlistat (reduces absorption)'],
    harmReduction: [
      'MK-7 form (from natto) has longer half-life and better tissue distribution than MK-4',
      'Critical pairing with vitamin D3 — directs calcium to bones instead of arteries',
      'If on warfarin/Coumadin, do NOT start K2 without physician approval',
      'Typical dose: 100–200mcg MK-7 per day',
      'No known toxicity even at high doses'
    ],
    routes: ['oral'],
    unit: 'mcg',
    notes: 'Menaquinone. Fat-soluble. MK-4 and MK-7 are the main supplemental forms. MK-7 found in natto (fermented soy). Ensures calcium goes to bones not arteries. Synergistic with D3.'
  },
  {
    id: 'folate',
    name: 'Folate',
    category: 'vitamin',
    halfLife: '3–4 hours (plasma folate)',
    effects: ['DNA synthesis', 'Methylation support', 'Neural tube defect prevention', 'Red blood cell formation', 'Homocysteine reduction'],
    interactions: ['Methotrexate (folate antagonist — folinic acid may be used as rescue)', 'Phenytoin (mutual reduction)', 'Sulfasalazine (reduces folate absorption)', 'B12 (masks B12 deficiency anemia)'],
    harmReduction: [
      'Methylfolate (5-MTHF) preferred over folic acid, especially with MTHFR variants',
      'Folic acid (synthetic) requires conversion via MTHFR — 40% of population has reduced activity',
      'Critical to supplement before and during early pregnancy (400–800mcg/day)',
      'High-dose folic acid may mask B12 deficiency — always take with B12',
      'Folinic acid is another bioavailable form that bypasses MTHFR'
    ],
    routes: ['oral'],
    unit: 'mcg',
    notes: 'Vitamin B9. Essential for DNA synthesis and methylation. Neural tube defect prevention is the most established benefit. MTHFR polymorphisms affect folic acid metabolism. Methylfolate bypasses this.'
  },
  {
    id: 'niacin',
    name: 'Niacin',
    category: 'vitamin',
    halfLife: '45 minutes (nicotinic acid)',
    effects: ['HDL increase', 'Triglyceride reduction', 'Vasodilation (flush)', 'Energy metabolism', 'Skin flushing'],
    interactions: ['Statins (additive myopathy risk at high doses)', 'Blood pressure medications (additive hypotension)', 'Alcohol (worsens flush and liver risk)', 'Aspirin (reduces flush)'],
    harmReduction: [
      'Flush (face/body redness, warmth, tingling) is harmless but uncomfortable — starts 15–30 min after dosing',
      'Take aspirin (81mg) or ibuprofen 30 min before to reduce flush',
      'Flush-free niacin (inositol hexanicotinate) does not work for lipid benefits',
      'Niacinamide (nicotinamide) does not cause flush but also has no lipid effects',
      'Hepatotoxic at high doses, especially sustained-release forms'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Vitamin B3 / nicotinic acid. Precursor to NAD+. Prescription niacin (Niaspan) used for dyslipidemia. NMN and NR are alternative NAD+ precursors without flush. AIM-HIGH trial reduced enthusiasm for lipid use.'
  },
  {
    id: 'biotin',
    name: 'Biotin',
    category: 'vitamin',
    halfLife: '2 hours',
    effects: ['Hair health', 'Nail strength', 'Skin health', 'Glucose metabolism', 'Fatty acid synthesis'],
    interactions: ['Anticonvulsants (carbamazepine, phenytoin deplete biotin)', 'Raw egg whites (avidin binds biotin)', 'Lab tests (high-dose biotin interferes with many immunoassays)'],
    harmReduction: [
      'High-dose biotin (5000–10000mcg) interferes with lab tests including troponin, thyroid, and hormone panels',
      'Stop biotin supplementation 48–72 hours before blood work',
      'Evidence for hair/nail benefits in non-deficient individuals is weak',
      'Deficiency is rare — gut bacteria produce biotin',
      'RDA is only 30mcg; supplement doses are typically 100–1000x this'
    ],
    routes: ['oral'],
    unit: 'mcg',
    notes: 'Vitamin B7. Water-soluble. Most marketed for hair, skin, and nails, though evidence is limited in non-deficient people. Lab test interference at high doses is a real clinical problem.'
  },

  // MINERALS (4)
  {
    id: 'iron',
    name: 'Iron',
    category: 'mineral',
    halfLife: 'N/A (mineral; ferritin half-life ~30 hours)',
    effects: ['Oxygen transport', 'Energy production', 'Cognitive function', 'Immune support'],
    interactions: ['Calcium (reduces absorption — separate by 2 hours)', 'Zinc (competitive absorption)', 'Vitamin C (enhances absorption)', 'PPIs/antacids (reduce absorption)', 'Tetracycline antibiotics (mutual reduction)'],
    harmReduction: [
      'Do not supplement without blood test confirming deficiency — iron overload causes organ damage',
      'Ferritin is the best measure of iron stores; serum iron alone is unreliable',
      'Take with vitamin C on empty stomach for best absorption',
      'Separate from calcium, zinc, coffee, and tea by 2 hours',
      'Constipation and nausea are common — iron bisglycinate is gentlest on the gut'
    ],
    routes: ['oral', 'IV'],
    unit: 'mg',
    notes: 'Essential mineral. Most common nutritional deficiency worldwide. Ferrous forms (sulfate, gluconate, bisglycinate) for oral supplementation. IV iron (Ferinject) for severe deficiency or intolerance.'
  },
  {
    id: 'potassium',
    name: 'Potassium',
    category: 'mineral',
    halfLife: 'N/A (mineral; tightly regulated by kidneys)',
    effects: ['Electrolyte balance', 'Cardiac rhythm regulation', 'Muscle contraction', 'Blood pressure regulation', 'Nerve conduction'],
    interactions: ['ACE inhibitors (hyperkalemia risk)', 'Potassium-sparing diuretics (hyperkalemia — fatal)', 'NSAIDs (increase potassium retention)', 'Trimethoprim (hyperkalemia)'],
    harmReduction: [
      'Hyperkalemia causes fatal cardiac arrhythmia — supplementation requires caution',
      'OTC supplements limited to 99mg per unit (FDA regulation) due to cardiac risk',
      'Food sources are safer: bananas, potatoes, avocados, spinach',
      'Kidney disease patients must monitor potassium carefully',
      'Symptoms of deficiency: muscle cramps, weakness, palpitations'
    ],
    routes: ['oral', 'IV'],
    unit: 'mg',
    notes: 'Essential electrolyte. RDA: 2600–3400mg/day (most adults do not meet this). Tightly regulated by kidneys. Rapid IV infusion is fatal. Most Americans are potassium-deficient.'
  },
  {
    id: 'selenium',
    name: 'Selenium',
    category: 'mineral',
    halfLife: '100–120 days (selenomethionine in tissue)',
    effects: ['Thyroid function support', 'Antioxidant (selenoproteins)', 'Immune regulation', 'DNA synthesis'],
    interactions: ['Statins (may affect selenium status)', 'Chemotherapy (may reduce efficacy or enhance depending on agent)', 'Vitamin C (high doses can reduce selenium absorption in some forms)'],
    harmReduction: [
      'Narrow therapeutic window — toxicity (selenosis) starts above 400mcg/day',
      'Selenosis symptoms: garlic breath, brittle nails, hair loss, GI distress',
      'RDA is 55mcg; most supplements contain 100–200mcg',
      'Brazil nuts are the richest food source — 1–2 nuts per day provides RDA',
      'Selenomethionine is the most bioavailable supplemental form'
    ],
    routes: ['oral'],
    unit: 'mcg',
    notes: 'Essential trace element. Required for glutathione peroxidase and thyroid hormone metabolism. Soil selenium content varies geographically. Both deficiency and excess are harmful.'
  },
  {
    id: 'copper',
    name: 'Copper',
    category: 'mineral',
    halfLife: 'N/A (mineral; ceruloplasmin half-life ~5 days)',
    effects: ['Iron metabolism', 'Connective tissue formation', 'Antioxidant enzyme function (SOD)', 'Melanin production', 'Nerve function'],
    interactions: ['Zinc (antagonistic — high zinc depletes copper)', 'Iron (copper required for iron utilization)', 'Vitamin C (high doses reduce copper absorption)', 'Molybdenum (antagonistic)'],
    harmReduction: [
      'Supplement copper (1–2mg) when taking zinc above 30mg/day',
      'Copper toxicity causes liver damage — do not exceed 10mg/day',
      'Wilson disease patients must avoid all copper supplementation',
      'Copper IUDs release copper locally — no systemic supplementation needed',
      'Most multivitamins contain adequate copper — check before adding standalone'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Essential trace element. RDA: 900mcg. Required for ceruloplasmin (iron transport), superoxide dismutase, and connective tissue crosslinking. Zinc-copper balance is important.'
  },

  // HERBS (5)
  {
    id: 'st-johns-wort',
    name: 'St. John\'s Wort',
    category: 'herb',
    halfLife: '24–48 hours (hyperforin)',
    effects: ['Antidepressant', 'Anti-anxiety', 'Anti-inflammatory', 'Photosensitivity'],
    interactions: ['SSRIs (serotonin syndrome — potentially fatal)', 'Sertraline (serotonin syndrome)', 'Oral contraceptives (reduces efficacy — breakthrough bleeding and pregnancy)', 'HIV medications (reduces levels dramatically)', 'Immunosuppressants (organ rejection risk)'],
    harmReduction: [
      'One of the most dangerous herbs for drug interactions — induces CYP3A4, 2C9, 1A2 and P-glycoprotein',
      'Can render birth control, HIV meds, transplant drugs, and blood thinners ineffective',
      'Do NOT combine with any serotonergic drug (SSRIs, tramadol, triptans)',
      'Photosensitivity — increased sunburn risk',
      'Efficacy for mild-moderate depression is well-evidenced in trials; not for severe depression'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Hypericum perforatum. Contains hyperforin and hypericin. OTC in most countries. Effective for mild depression in clinical trials BUT has more drug interactions than most prescription medications.'
  },
  {
    id: 'valerian',
    name: 'Valerian',
    category: 'herb',
    halfLife: '1–2 hours (valerenic acid)',
    effects: ['Sleep promotion', 'Mild sedation', 'Anxiety reduction', 'Muscle relaxation'],
    interactions: ['Alcohol (additive sedation)', 'Benzodiazepines (additive CNS depression)', 'Other sedatives', 'Anesthetics (prolonged sedation)'],
    harmReduction: [
      'Takes 2–4 weeks of nightly use before full sleep benefit appears',
      'Smells terrible (isovaleric acid) — capsules are preferred over tea',
      'Standardized to 0.8% valerenic acid for consistency',
      'Discontinue 2 weeks before surgery (anesthesia interaction)',
      'Typical dose: 300–600mg extract, 30–60 min before bed'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Valeriana officinalis. Root extract. GABAergic mechanism. Used for centuries as a sleep aid. Evidence is modest but consistent for mild sleep improvement. Generally well tolerated.'
  },
  {
    id: 'kava',
    name: 'Kava',
    category: 'herb',
    halfLife: '9 hours (kavalactones)',
    effects: ['Anxiolytic', 'Muscle relaxation', 'Mild euphoria', 'Sociability', 'Numbness (oral)'],
    interactions: ['Alcohol (potentiates and increases liver stress)', 'Benzodiazepines (additive sedation)', 'Hepatotoxic drugs (additive liver risk)', 'Dopaminergic medications (may reduce efficacy)'],
    harmReduction: [
      'Noble cultivars only — tudei (two-day) kava causes more side effects and liver stress',
      'Liver toxicity debate: likely caused by non-root parts, tudei cultivars, or solvent extracts',
      'Traditional water extraction from root (peeled) has centuries of safe use',
      'Dermopathy (scaly skin) develops with chronic heavy use — reversible on cessation',
      'Typical dose: 150–300mg kavalactones'
    ],
    routes: ['oral'],
    unit: 'g',
    notes: 'Piper methysticum. Pacific Island traditional drink. Active kavalactones. Anxiolytic efficacy comparable to benzodiazepines in some trials. Banned in several EU countries due to liver concerns (now lifted in most).'
  },
  {
    id: 'passionflower',
    name: 'Passionflower',
    category: 'herb',
    halfLife: '2–4 hours (estimated; limited pharmacokinetic data)',
    effects: ['Mild anxiolytic', 'Sleep aid', 'Muscle relaxation', 'Calm without heavy sedation'],
    interactions: ['Sedatives (additive)', 'Benzodiazepines (additive CNS depression)', 'Blood thinners (theoretical)', 'MAOIs (contains trace harmala alkaloids)'],
    harmReduction: [
      'Generally very safe; one of the mildest herbal anxiolytics',
      'Contains trace harmala alkaloids (MAOIs) — clinically insignificant at normal doses',
      'Often combined with valerian and hops for sleep formulations',
      'Typical dose: 250–500mg extract or 1–2 cups tea'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Passiflora incarnata. GABAergic mechanism similar to benzodiazepines but much milder. One clinical trial showed comparable anxiolytic effect to oxazepam. Very low side effect profile.'
  },
  {
    id: 'milk-thistle',
    name: 'Milk Thistle',
    category: 'herb',
    halfLife: '6–8 hours (silybin/silymarin)',
    effects: ['Liver protection', 'Antioxidant', 'Anti-inflammatory', 'Hepatocyte regeneration'],
    interactions: ['CYP3A4 substrates (may inhibit metabolism)', 'CYP2C9 substrates (may inhibit)', 'Diabetes medications (may lower blood sugar)', 'Methotrexate (may reduce hepatotoxicity)'],
    harmReduction: [
      'Silymarin is the active complex; silybin is the most potent component',
      'Phosphatidylcholine complex (Siliphos/silybin phytosome) has better absorption',
      'Most evidence is for alcoholic liver disease and hepatotoxin exposure',
      'Generally very safe; mild GI effects are the most common side effect',
      'Typical dose: 200–400mg silymarin, 2–3 times daily'
    ],
    routes: ['oral'],
    unit: 'mg',
    notes: 'Silybum marianum. Active compound silymarin (mixture of flavonolignans). Used clinically for Amanita mushroom poisoning (IV silibinin). Studied for alcoholic and non-alcoholic liver disease.'
  }
];

export default SUBSTANCES;
