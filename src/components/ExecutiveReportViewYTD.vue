<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
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
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ExecutiveReportViewYTD",
  data() {
    return {
      url: "",
      ticket: "",
      viewname: "Executive Report Viewer YTD",
      userid: ''
    };
  },
  created() {
    this.userId = this.$route.query.userId
    /* API Write Log to Use */
    axios.post("/addlogchatbot", {
      name: this.viewname,
      userid: this.userId
      })
    .then((response) => {
      console.log(response.data);
    });
  },
  mounted() {
    axios.get("/genticket").then((response) => {
      // console.log(response)
      var ticket = response.data["message"];
      this.url =
        process.env.VUE_APP_TABLEAU_URL +
        "/" +
        ticket +
        "/t/CRM/views/DashboardExecutive/DSExRptMViewYTD?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
    });
  },
};
</script>

<style lang="scss" scoped></style>
