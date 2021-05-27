<template>
  <v-container>
    <v-row dense>
      <v-col cols="12 text-center">
    <v-card class="mx-auto">
      <v-img class="white--text align-end" :src="img_src_url">
        <v-row align="center" justify="end"> </v-row>
      </v-img>
      <div class="aligh-center">
      <v-chip class="ma-1" color="#c92028" label text-color="white">
        <v-icon left> mdi-label </v-icon>
        Code : {{ code }}
        <div class="white--text ml-5 caption">Exp. 31.12.2022</div>
      </v-chip>
      </div>
    </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "EvoucherTrueTest",
  components: {},
  data() {
    return {
      name: "EvoucherTrueTest",
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
  },
};
</script>