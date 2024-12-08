// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#ADD8E6', // Custom light blue color
        // You can add more custom colors here
      },
      spacing: {
        // Example: add custom spacing
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
  plugins: [],
}
