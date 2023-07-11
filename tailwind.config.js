/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  /*   theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },



  }, */
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#67e8f9",
          secondary: "#fef08a",
          accent: "#fbbf24",
          neutral: "#d6d3d1",
          "base-100": "#f3f4f6",
          info: "#ddd6fe",
          success: "#13967c",
          warning: "#fbd26a",
          error: "#f75f73",
          
        },
      },
      "cupcake",
      "dark",
      "retro",
    ],
  },
  plugins: [require("daisyui")],
};
