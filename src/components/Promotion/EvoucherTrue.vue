<template>
<v-container>
  <v-card class="mx-auto" max-width="344">
    <v-img
    class="white--text align-end"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="400px"
    >
    <v-card-title class="white--text mt-8">
            <v-avatar size="80">
              <img
                alt="user"
                src="https://media.nj.com/business_impact/photo/hoffman-q-r-codejpg-175b88c078d3a00e.jpg"
              >
            </v-avatar>
            <p class="ml-3 mt-7">
              John Doe
            </p>
          </v-card-title>
    <v-row
          align="center"
          justify="end"
        >
        </v-row>
    </v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: "EvoucherTrue",
  components: {},
  data() {
    return {
      name: "EvoucherTrue",
    };
  },
};
</script>