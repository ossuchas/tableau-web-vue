<template>
  <v-container>
    <v-card class="mx-auto" max-width="345">
      <v-img class="white--text align-end" :src="img_src_url" height="490px">
        <!-- <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="white--text headline2">
              Code : QBYHRPjmiVgroBgJ
            </v-list-item-title>
            <div class="white--text overline">EXP. 31.12.2022</div>
          </v-list-item-content>
        </v-list-item> -->
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
      <v-chip class="ma-2" color="#c92028" label text-color="white">
        <v-icon left> mdi-label </v-icon>
        Code : tEwEqdmXAlXGPErJ
      <div class="white--text ml-5 caption">
                      Exp. 31.12.2021
                    </div>
      </v-chip>
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
      img_src_url: "",
    };
  },
  created() {
    this.code = this.$route.query.code;
    this.proj = this.$route.query.proj;

    if (this.proj == "60022") {
      this.img_src_url = "https://i.ibb.co/M8vHKd1/60022.jpg";
    } else {
      this.img_src_url = "https://i.ibb.co/dgzWC4V/60019.jpg";
    }
    console.log(this.code, this.proj, this.img_src_url);
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