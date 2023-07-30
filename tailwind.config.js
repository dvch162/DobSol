// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0c2e8a',
          secondary: '#50d8af',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  