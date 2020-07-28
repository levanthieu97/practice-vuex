<template>
  <div>
    <v-app id="inspire">
      <app-bar class="app--bar"/>
      <navigation-drawer class="navigation--drawer"/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
    
    <!-- <v-snackbar
      v-model="show"
      :timeout="3000"
      :color="snackbar.color"
      :multi-line="true"
      top
      right
    >
      {{ snackbar.text }}
      <v-btn dark flat icon @click.native="show = false">
        <v-icon> mdi-close-circle-outline</v-icon>
      </v-btn>
    </v-snackbar> -->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import { AppBar, NavigationDrawer } from './components/layout' 
export default {
  components: {
    AppBar,
    NavigationDrawer
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapState('global', ['snackbar']),

    show: {
      get(){
        return this.snackbar.show;
      },

      set(){
        this.resetMsg();
      }
    }
  },

  methods: {
    ...mapActions('global', ['resetMsg'])
  }
};
</script>
