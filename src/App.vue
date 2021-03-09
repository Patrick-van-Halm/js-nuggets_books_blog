<template>
  <v-app  >
    <v-app-bar
      elevation=3
      app
      class="bg-primary"
    >
      <v-toolbar-title class="fs-2 indie-flower">Nuggets books blog</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="!this.$screen.sm || !this.$screen.md" />
      <div id="nav" v-else>
        <v-btn :to="{name: 'Home'}" text plain tile active-class="font-weight-black" exact>Home</v-btn>
        <v-btn :to="{name: 'Reviews'}" text plain tile active-class="font-weight-black" exact>Reviews</v-btn>
        <v-btn :to="{name: 'About'}" text plain tile active-class="font-weight-black" exact>About</v-btn>
        <v-btn :to="{name: 'Contact'}" text plain tile active-class="font-weight-black" exact>Contact</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      right
      app
      temporary
      v-if="!this.$screen.sm || !this.$screen.md"
    >
      <v-list
        nav
        flat
      >
        <v-list-item :to="{name: 'Home'}" text plain active-class="font-weight-black" exact>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: 'Reviews'}" text plain active-class="font-weight-black" exact>
          <v-list-item-title>Reviews</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: 'About'}" text plain active-class="font-weight-black" exact>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: 'Contact'}" text plain active-class="font-weight-black" exact>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer padless class="bg-primary" elevation="3">
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }}&copy; — <strong>Geneviève Oudwater</strong>
      </v-col>
  </v-footer>
  </v-app>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&display=swap');

  .dancing-script{
    font-family: 'Dancing Script', cursive !important;
  }

  .indie-flower{
    font-family: 'Indie Flower', cursive;
  }

  .fs-2{
    font-size: 2rem !important;
  }

  .fs-3{
    font-size: 3rem;
  }

  .fs-1{
    font-size: 1rem;
  }

  .fs-1_5{
    font-size: 1.5rem !important;
  }

  h2 {
    font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
  }

  body{
    min-width: 100vw;
  }

  html{
    overflow-y: auto !important;
  }

  .bg-primary{
    background: #5AB9EA !important;
  }

  .bg-secondary{
    background: #FEFFFE !important;
  }

  .bg-tertiary{
    background: #a8d0e6 !important;
  }

  .bg-four{
    background: #C1C8E4 !important;
  }

  .h-100{
    height: 100%;
  }
</style>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null
  }),
};
</script>
