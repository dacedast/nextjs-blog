module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Jost"],
        body: ["Epilogue"],
      },
      colors: {
        primary: "#0046FF",
        secondary: "#000",
        initial: "#fff7f2",
        white: {
          1: "#f8faff",
          2: "f3efff",
          3: "#fff",
        },
      },
    },
  },
  plugins: [],
};
