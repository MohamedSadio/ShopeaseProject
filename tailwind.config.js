module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      maxHeight: {
        '260px': '260px',
      },
      minHeight:{
        '260':'260'
      },
      maxWidth: {
        '240px': '240px',
        '200px': '200px'
      },
      minWidth:{
        '240px':'240px'
      },
      text:{
        '16px':'16px'
      },
      scale: ['hover'],
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    fill: true, // Active explicitement 'fill' si désactivé
  },
};
