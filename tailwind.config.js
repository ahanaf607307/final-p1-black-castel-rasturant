import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'featuredBg': "url('/src/assets/home/featured.jpg')",
      },
    },
  },
  plugins: [daisyui],
}