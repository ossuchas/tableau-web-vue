<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-img
        class="white--text align-end"
        src="https://i.ibb.co/tQcXPw1/E-Voucher-1-2x.jpg"
        height="500px"
      >
      <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="white--text headline2">
          Code : QBYHRPjmiVgroBgJ
        </v-list-item-title>
        <div class="white--text overline">
          EXP. 31.12.2022
        </div>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="40"
      >
            <img
              src="https://media.nj.com/business_impact/photo/hoffman-q-r-codejpg-175b88c078d3a00e.jpg"
              width="50px"
              height="50px"
            />
      </v-list-item-avatar>
    </v-list-item>
      <!-- <v-avatar
      tile
      color="blue"
      class="mr-10"
    >
            <img
              src="https://media.nj.com/business_impact/photo/hoffman-q-r-codejpg-175b88c078d3a00e.jpg"
              width="50px"
              height="50px"
            />
    </v-avatar> -->
        <!-- <v-card-title class="white--text mt-8">
          <v-avatar size="50">
            <img
              src="https://media.nj.com/business_impact/photo/hoffman-q-r-codejpg-175b88c078d3a00e.jpg"
            />
          </v-avatar>
        </v-card-title>
          <p class="mr-3">John Doe</p> -->
        <v-row align="center" justify="end"> </v-row>
      </v-img>

      <!-- <v-card-title> Top western road trips </v-card-title> -->

      <!-- <v-card-subtitle> {{ proj }} </v-card-subtitle> -->
    </v-card>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  name: "EvoucherTrue",
  components: {},
  data() {
    return {
      name: "EvoucherTrue",
      code: "",
      proj: "",
    };
  },
  created() {
    this.code = this.$route.query.code;
    this.proj = this.$route.query.proj;
    console.log(this.code, this.proj);

    /* API Write Log to Use */
    // axios
    //   .post("/addlogchatbot", {
    //     name: this.viewname,
    //     userid: this.userId,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });
  },
};
</script>