<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <iframe
          class="embed-responsive-item resp-iframe"
          :src="url"
          width="375"
          height="700px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import liff from "@line/liff";
import axios from "axios";

export default {
  name: "DSExecutiveBG2GCN",
  components: {},
  data() {
    return {
      name: "DSExecutiveBG2GCN",
      userId: "",
      viewname: "Ex Dashboard BG2 YTD Gross Cancel Net",
      ticket: "",
      url: "",
    };
  },
  mounted() {
    liff
      .init({
        liffId: "1653928950-O0MVlDe7",
      })
      .then(() => {
        console.log("LIFF initialize finished");
        // TODO: get user profile
        if (liff.isLoggedIn()) {
          liff
            .getProfile()
            .then((profile) => {
              this.userId = profile.userId;
    
              /* API Write Log to Use */
              axios.post('/addlogchatbot', {
                name: this.viewname,
                userid: this.userId
              })
              .then(response => {
                console.log(response.data);
              });
              
              /* API Get ticket to authorized tableau */
              axios.get("/gettableauticket").then((response) => {
                this.ticket = response.data["message"];
                console.log(this.ticket);
                
                this.url =
                  process.env.VUE_APP_IT_TABLEAU_URL +
                  "/" +
                  this.ticket +
                  "/views/DashboardExecutiveMailReport/ExRptBG2GrossCancelNet_M?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
              });
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          console.log("LIFF is not logged in");
              
              /* API Get ticket to authorized tableau */
              axios.get("/gettableauticket").then((response) => {
                this.ticket = response.data["message"];
                console.log(this.ticket);
                
                this.url =
                  process.env.VUE_APP_IT_TABLEAU_URL +
                  "/" +
                  this.ticket +
                  "/views/DashboardExecutiveMailReport/ExRptBG2GrossCancelNet_M?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
                
              });
        }
      })
      .catch((err) => {
        console.error("Error initialize LIFF: ", err);
      });
  },
  // created() {
  //   this.userId = this.$route.query.userId;
  //   /* API Write Log to Use */
  //   axios.post('/addlogchatbot', {
  //     name: this.viewname,
  //     userid: this.userId
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //     });
  // }
};
</script>

<style lang="scss" scoped>
</style>