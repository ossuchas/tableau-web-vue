<template>
  <v-content>
    <v-card>
      <v-card-text>Hello World</v-card-text>
      {{ userId }}
    </v-card>
    <v-row class="text-center">
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
  </v-content>
</template>

<script>
import liff from "@line/liff";
import axios from "axios";

export default {
  name: "DSExecutiveWTD",
  components: {},
  data() {
    return {
      name: "DSExecutiveWTD",
      userId: "",
      viewname: "Executive Dashboard WTD",
      ticket: "",
      url: "",
    };
  },
  mounted() {
    liff
      .init({
        liffId: "1653928950-yZr4g9xQ",
      })
      .then(() => {
        console.log("LIFF initialize finished");
        // TODO: get user profile
        if (liff.isLoggedIn()) {
          liff
            .getProfile()
            .then((profile) => {
              this.userId = profile.userId;
              
              console.log(this.userId);
              /* API Get ticket to authorized tableau */
              axios.get("/genticket").then((response) => {
                this.ticket = response.data["message"];
                console.log(this.ticket);
                
                this.url =
                  process.env.VUE_APP_TABLEAU_URL +
                  "/" +
                  this.ticket +
                  "/t/CRM/views/WalkSummaryByBG/DSWalkKPIByBG?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
              });
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          console.log("LIFF is not logged in");
        }
      })
      .catch((err) => {
        console.error("Error initialize LIFF: ", err);
      });
  },
};
</script>