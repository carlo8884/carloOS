/** Shared source citations reused across pages (each page also adds specifics). */
export const SRC = {
  aafco:
    'Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).',
  nrc:
    'National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.',
  wsava:
    'World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.',
  fdaPet:
    'U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labels — General</em>; <em>Animal Food Ingredients: Regulatory Framework</em>; FDA CVM Recalls &amp; Withdrawals database.',
  fdaDcm:
    'U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>FDA Provides Update on Investigation into Potential Connection Between Certain Diets and Cases of Canine Heart Disease</em> (27 June 2019).',
}

// Standard closing source set most nutrition pages cite.
export const STD = [SRC.aafco, SRC.nrc, SRC.wsava]
