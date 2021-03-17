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
  name: "DSBG1BLBySubBG",
  components: {},
  data() {
    return {
      name: "DSBG1BLBySubBG",
      userId: "Uc7494761328a3ec1970287ed59cc7a0a",
      viewname: "Dashboard BL BG1 by SubBG",
      ticket: "",
      url: "",
    };
  },
  mounted() {
    liff
      .init({
        liffId: "1653928950-X9915QkA",
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
                  "/views/Chatobt_BG1Performance/DSBLbySubBG?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
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
                  "/views/Chatobt_BG1Performance/DSBLbySubBG?:refresh=true&:embed=yes&:toolbar=no&:tabs=no";
              });
        }
      })
      .catch((err) => {
        console.error("Error initialize LIFF: ", err);
      });
  },
};
</script>

<style lang="scss" scoped>

</style>