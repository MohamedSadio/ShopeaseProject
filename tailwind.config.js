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
        '260px':'260px'
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
      },
      width: {
        '30%': '30%',
        '20%':'20%'
      },
      padding: {
        '10px': '10px',
        '15px':'15px',
        '20px':'20px',
        '40px':'40px',
      },
      margin: {
        '20px': '20px'
      },
      accentColor: {  // Ajout de la configuration pour `accent-black`
        black: '#000000',
      }
    },
  },
  plugins: [],
  corePlugins: {
    fill: true, // Active explicitement 'fill' si désactivé
  },
};
