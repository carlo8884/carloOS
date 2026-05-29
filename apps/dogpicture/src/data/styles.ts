/**
 * DogPicture.com — Style Presets
 *
 * The 12 styles a customer can pick from on the homepage gallery and the
 * /create page. Each preset bundles:
 *   - id          stable slug used in URLs and DB rows
 *   - name        human label
 *   - tagline     one-line marketing description
 *   - sample      illustrative sample image (Unsplash placeholder until we
 *                 generate real samples in production)
 *   - prompt      OpenAI image-generation prompt template. The literal
 *                 `{pet}` token is replaced with the user's dog's name +
 *                 description at request time.
 *
 * Prompts are intentionally art-direction-heavy and avoid copyrighted
 * studio names (e.g. "Studio Ghibli" → "soft Japanese animation"). This
 * keeps generations consistent and avoids OpenAI policy blocks.
 */

export interface StylePreset {
  id: string
  name: string
  tagline: string
  sample: string
  prompt: string
}

export const STYLE_PRESETS: StylePreset[] = [
  {
    id: 'renaissance',
    name: 'Renaissance',
    tagline: 'Aristocratic noble portrait, c. 1550',
    sample: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A formal Renaissance oil painting portrait of {pet}, dressed in regal 16th-century European nobility attire — velvet doublet with gold embroidery, lace ruff collar, and a small jeweled medallion. Painted in the style of Titian and Hans Holbein the Younger. Soft chiaroscuro lighting from the left, deep maroon and forest-green background with subtle classical drapery. Visible brushstrokes, aged canvas texture, museum-quality composition. Head and shoulders, three-quarter view.',
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    tagline: 'Soft, luminous, hand-painted',
    sample: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A loose, expressive watercolor painting of {pet}. Translucent washes of soft color bleeding into white watercolor paper, visible pigment edges and subtle paper texture. Gentle gradients, a hint of granulation in shadows, minimal background — just a wash of warm cream and a sky-blue suggestion. Light, airy, gift-card quality. Centered portrait, head and upper body.',
  },
  {
    id: 'anime',
    name: 'Anime',
    tagline: 'Soft Japanese animation style',
    sample: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A warm, hand-painted Japanese animation portrait of {pet} in the style of a cozy slice-of-life film. Soft watercolor backgrounds, golden afternoon light streaming through trees, gentle pastel palette of cream, sage, and dusty rose. Round expressive eyes, soft fur rendering with visible painterly strokes, a hint of breeze in the fur. Sense of wonder and warmth.',
  },
  {
    id: 'vintage',
    name: 'Vintage',
    tagline: '1970s film camera portrait',
    sample: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A 1970s vintage film photograph of {pet}, shot on Kodak Portra 400 with a Pentax 35mm. Warm faded color palette — burnt sienna, ochre, and washed denim blues. Slight film grain, mild halation around highlights, soft focus falloff. The dog sits on a worn corduroy couch in a sunlit suburban living room with macramé wall art and a houseplant. Nostalgic, lived-in, family-album feel.',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    tagline: 'Neon-lit, future-noir',
    sample: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A cinematic cyberpunk portrait of {pet} in a rain-slick neon Tokyo alley at night. Magenta and cyan rim lighting from holographic signs, wet pavement reflections, atmospheric haze. The dog wears a sleek techwear collar with subtle LED trim. Shot on a 50mm lens, shallow depth of field, ultra-detailed fur. Mood: confident, futuristic, slightly mysterious.',
  },
  {
    id: 'oil-painting',
    name: 'Oil Painting',
    tagline: 'Thick impasto, gallery quality',
    sample: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A classical oil painting portrait of {pet} in the style of 19th-century animalier painters. Thick impasto brushstrokes, rich warm browns and deep umbers, dramatic Rembrandt lighting from a single window on the left. The dog sits with quiet dignity on an antique velvet cushion. Visible canvas weave, varnished finish, gallery presentation.',
  },
  {
    id: 'pop-art',
    name: 'Pop Art',
    tagline: 'Bold, graphic, screen-print',
    sample: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A 1960s pop-art screen-print portrait of {pet} in the style of Warhol-era color separation. Four flat saturated color zones — hot pink background, electric blue fur, lemon-yellow highlights, bold black outline. Slight registration offset and halftone dot texture suggesting a silkscreen print. Punchy, joyful, museum-poster energy. Centered head-and-shoulders composition.',
  },
  {
    id: 'pencil-sketch',
    name: 'Pencil Sketch',
    tagline: 'Detailed graphite portrait',
    sample: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A highly detailed graphite pencil portrait of {pet} on textured cream paper. Fine cross-hatching, soft shading transitions, sharp eye detail and individual fur strands rendered with a 2H–6B pencil range. Visible paper grain, subtle pencil dust around shaded areas. Pure black and white with a slight warm tone in the paper. Studio-quality artist commission feel.',
  },
  {
    id: 'comic-book',
    name: 'Comic Book',
    tagline: 'Bold ink lines, hero pose',
    sample: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A dynamic American comic-book cover illustration of {pet} as a heroic character. Bold black ink outlines, dramatic perspective, halftone-dot shading, saturated primary colors with crisp highlights. The dog poses confidently with a wind-blown cape effect, a stylized "BOOM!" energy burst behind it. 1990s superhero comic energy — Jim Lee meets Bruce Timm.',
  },
  {
    id: 'royal-pet',
    name: 'Royal Pet',
    tagline: 'Crown, robes, regal throne',
    sample: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=600&q=80&auto=format&fit=crop',
    prompt:
      'An elaborate royal court portrait of {pet} dressed as monarchy — small gold crown set with sapphires and rubies, an ermine-trimmed crimson velvet cape, a delicate gold chain medallion. Seated on a carved gilded throne in a Versailles-style chamber with damask wallpaper and a heavy gold-framed mirror behind. Soft candle-lit lighting. Painted as a classical state portrait, oil on canvas finish.',
  },
  {
    id: 'watercolor-sketch',
    name: 'Watercolor Sketch',
    tagline: 'Loose linework, splash of color',
    sample: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A loose watercolor + ink sketch of {pet}. Confident black ink linework defining the form, then irregular splashes and washes of color — warm sienna, sky blue, sap green — bleeding outside the lines in places. The background is bare cream paper. Spontaneous, fresh, illustrated-journal feel. A little wash drip at the bottom for character.',
  },
  {
    id: 'movie-poster',
    name: 'Movie Poster',
    tagline: 'Cinematic teaser one-sheet',
    sample: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80&auto=format&fit=crop',
    prompt:
      'A dramatic cinematic movie-poster portrait of {pet} as the lead character of an epic adventure film. Golden-hour lighting from behind, dramatic shadow on the face, atmospheric haze, painted in the style of Drew Struzan. Below the dog, a stylized landscape — mountain silhouette, lone figure — establishes scale. Reserve clean space at the bottom for a title treatment. Award-season prestige feel.',
  },
]

export function getStyle(id: string): StylePreset | undefined {
  return STYLE_PRESETS.find((s) => s.id === id)
}
