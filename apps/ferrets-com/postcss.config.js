// Tailwind needs an explicit postcss config in Next 14 — without this file
// `@tailwind base/components/utilities` directives in globals.css pass through
// the build unprocessed and every utility class becomes a no-op.
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
