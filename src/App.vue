<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://i.ibb.co/8Bh5MgL/aplogo2018.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://i.ibb.co/crLYCHt/text-apthai.png"
          width="100"
        />
      </div> -->

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.apthai.com/th/home"
        target="_blank"
        text
      >
        <span class="ml-auto emp_txt">EMPOWER LIVING</span>
        <v-icon class="ml-auto">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap";
.v-application .primary {
    background-color: #c92028 !important;
    border-color: #c92028 !important;
}
// .emp_txt {
//   font-size: 18px;
//   font-weight: bold;
//   font-family: 'AP';
// } 
// $primary: #c92028;
@font-face {
  font-family: "AP";
  src: local("AP"),
  url(./fonts/AP/AP-Regular.ttf) format("truetype");
  }
</style>
