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
          leaf: {},
          mud: {
            300: "#fff4e8",
            500: "#4a1615",
          },
          treasure: {},
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
