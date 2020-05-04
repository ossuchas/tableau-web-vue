<template>
  <v-container fluid>
    <!-- <v-row class="text-center">
            <v-col cols="12">
                <iframe class="embed-responsive-item resp-iframe" :src="url" width="375" height="1000px" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </v-col>
        </v-row> -->
    <v-bottom-navigation :value="activeBtn" grow color="teal">
      <v-btn @click="clickMethod(1)">
        <span>Week</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn @click="clickMethod(2)">
        <span>QTD</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn @click="clickMethod(3)">
        <span>YTD</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-row class="text-center">
      <v-col cols="12" v-if="activeBtn === 1">
        <iframe
          class="embed-responsive-item resp-iframe"
          :src="url"
          width="375"
          height="1000px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="12" v-if="activeBtn === 2">
        <h2>Click#2</h2>
      </v-col>
      <v-col cols="12" v-if="activeBtn === 3">
        <h2>Click#3 ทดสอบ</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
// import { mapState } from "vuex";

export default {
  name: "Test",
  data() {
    return {
      info: "Test Tableau Viewer",
      url: null,
      // ticket: null,
      displayName: this.$store.getters.fullName,
      activeBtn: 0,
      bg: '',
      subbg: ''
    };
  },
  // computed: {
  //   ...mapState(['ticket'])
  // },
  mounted() {
    // this.parameters = this.$route.query
    // console.log(this.parameters)
    this.bg = this.$route.query.pTypeDesc
    this.subbg = this.$route.query.ProjectGroup

    console.log(this.bg)
    // this.$store.dispatch('loadTicket');
    // console.log('kai ' + ticket_x);
    // axios.get("/genticket").then((response) => {
    //   // console.log(response)
    //   var ticket = response.data["message"];
    //   // this.url = "http://dashboard.apthai.com/trusted/" + response.data['message']+ "/t/CRM/views/LLWalkByBG/Res_WalkBG2?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
    //   this.url =
    //     "http://dashboard.apthai.com/trusted/" +
    //     ticket +
    //     "/t/CRM/views/LLWalkByBG/Res_WalkBG3?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
    // });
  },
  methods: {
    clickMethod: function(value) {
      this.activeBtn = value;
      // console.log(this.activeBtn);
      if (this.activeBtn === 1) {
        this.viewTableau();
      }
    },
    viewTableau: function() {
      axios.get("/genticket").then((response) => {
        var ticket = response.data["message"];
        this.url =
          "http://dashboard.apthai.com/trusted/" +
          ticket +
          "/t/CRM/views/WalkSummaryByBG/DSWalkKPIByProj?:refresh=true&:embed=yes&:toolbar=no&:tabs=no&pTypeDesc=" + this.bg + "&ProjectGroup=" + this.subbg;
          // "/t/CRM/views/WalkSummaryByBG/DSWalkKPIBySubBG4Sub?pTypeDesc=2.TH&:iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 10px;
}

.resp-iframe {
  border: 0;
  overflow: hidden;
}
.h2 {
  font-family: 'AP-Regular' !important;
}
</style>
