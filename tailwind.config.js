/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redesign palette: deep ink + kraft (corrugated brown) on warm paper.
        ink: '#11161d',
        'ink-soft': '#2b3440',
        'ink-2': '#1a212b',
        paper: '#f6f3ee',
        'paper-2': '#ede7dd',
        line: '#e3dccf',
        wa: '#157f3d',
        'wa-dark': '#106532',
        ultra: '#9a5b22',
        'ultra-lift': '#b3702f',
        mist: '#f6f3ee',
        'mist-deep': '#ede7dd',
        rule: '#e3dccf',
        'kraft-deep': '#a97f4f',
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        kraft: {
          DEFAULT: '#c4a176',
          deep: '#a97f4f',
          50: '#fdfbf7',
          100: '#f7f1e6',
          200: '#ede1cd',
          300: '#e0c79f',
          400: '#d4b183',
          500: '#c59b61',
          600: '#b48344',
          700: '#946635',
          800: '#79522f',
          900: '#64442a',
          950: '#3b2817',
        },
        slate: {
          DEFAULT: '#5f6a83',
          850: '#151f32',
          950: '#090d16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Century Gothic"', 'Outfit', 'Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        grotesk: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Century Gothic"', 'Outfit', 'Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 30px -10px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.05)',
      }
    },
  },
  plugins: [],
}
