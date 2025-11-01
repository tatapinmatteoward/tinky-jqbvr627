/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e2e2e',
        accent: '#0d1b2a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
