<template>
  <v-container fluid>
    <v-bottom-navigation :value="activeBtn" grow color="teal">
      <v-btn @click="viewDashboard(1)">
        <span>Week</span>
        <!-- <v-icon>mdi-today</v-icon> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
          />
        </svg>
      </v-btn>

      <v-btn @click="viewDashboard(2)">
        <span>QTD</span>
        <!-- <v-icon>mdi-heart</v-icon> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <g><rect fill="none" height="24" width="24" /></g>
          <g>
            <g>
              <g>
                <path
                  d="M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11s-0.36-0.02-0.52-0.07l-4.55,4.56C4.98,15.65,5,15.82,5,16 c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12s0.36,0.02,0.52,0.07l3.55-3.56C19.02,8.35,19,8.18,19,8 c0-1.1,0.9-2,2-2S23,6.9,23,8z"
                />
              </g>
            </g>
          </g>
        </svg>
      </v-btn>

      <v-btn @click="viewDashboard(3)">
        <span>YTD</span>
        <!-- <v-icon>mdi-map-marker</v-icon> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"
          />
        </svg>
      </v-btn>
    </v-bottom-navigation>
    <v-row class="text-center">
      <v-col cols="12" v-if="activeBtn === 1">
        <ExecutiveReportViewWTD />
      </v-col>
      <v-col cols="12" v-if="activeBtn === 2">
        <ExecutiveReportViewQTD />
      </v-col>
      <v-col cols="12" v-if="activeBtn === 3">
        <ExecutiveReportViewYTD />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExecutiveReportViewYTD from "../components/ExecutiveReportViewYTD.vue";
import ExecutiveReportViewQTD from "../components/ExecutiveReportViewQTD.vue";
import ExecutiveReportViewWTD from "../components/ExecutiveReportViewWTD.vue";
import axios from 'axios';

export default {
  name: "ExecutiveReportView",
  data() {
    return {
      url: null,
      ticket: null,
      activeBtn: 0,
      viewname: "Executive Report Viewer",
    };
  },
  created() {
    if (process.env.NODE_ENV === "production") {
      /* API Write Log to Use */
      axios.post("/addlogchatbot", {name: this.viewname})
      .then((response) => {
          console.log(response.data);
        });
    }
  },
  components: {
    ExecutiveReportViewYTD,
    ExecutiveReportViewQTD,
    ExecutiveReportViewWTD,
  },
  methods: {
    viewDashboard: function(value) {
      this.activeBtn = value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
