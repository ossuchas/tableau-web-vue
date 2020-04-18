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
  name: "ExecutiveReportViewQTD",
  data() {
    return {
      url: "",
      ticket: "",
    };
  },
  mounted() {
    axios.get("/genticket").then((response) => {
      var ticket = response.data["message"];
      this.url =
        process.env.VUE_APP_TABLEAU_URL +
        "/" +
        ticket +
        "/t/CRM/views/DashboardExecutive/DSExRptMViewQTD?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
    });
  },
};
</script>

<style lang="scss" scoped></style>
