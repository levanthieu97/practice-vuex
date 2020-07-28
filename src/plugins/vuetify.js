import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);


const theme = {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#00695c',
          secondary: '#424242',
          accent: '#a1a1a1',
  
          error: '#c9302c',
          info: '#888888',
          success: '#00695c',
          warning: '#ec971f',
          failure: '#FF6B6B'
        },
        dark: {
          primary: '#00695c'
        },
      },
    },
    options: {
      customProperties: true,
    },
    icons: {
      iconfont: 'mdi', // default is 'mdi'
    },
  }

export default new Vuetify(theme);
