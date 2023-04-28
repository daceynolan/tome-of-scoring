/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-display": '"Balthazar", serif',
      },
      colors: {
        dm: {
          aquamarine: {
            50: "#eff8f8",
            100: "#6dc9c7",
            200: "#298c90",
            300: "#166b70",
            400: "#03656d",
          },
          topaz: "#fecc58",
        },
        m: {
          brick: {
            500: "#b22222",
          },
          leaf: {
            100: "#d4edda",
            200: "#c3e6cb",
            500: "#155724",
          },
          mud: {
            300: "#fff4e8",
            500: "#4a1615",
          },
          treasure: {
            100: "#fff3cd",
            200: "#ffeeba",
            500: "#daa710",
            800: "#856404",
          },
          water: {
            100: "#d1ecf1",
            200: "#bee5eb",
            500: "#0c5460",
          },
        },
      },
      minWidth: {
        "dm-cell": 120,
      },
    },
  },
  plugins: [],
};
