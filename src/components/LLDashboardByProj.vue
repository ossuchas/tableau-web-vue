<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <iframe class="embed-responsive-item resp-iframe" :src="url" width="375" height="1000px" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
   name: 'LLDashboardByProj',
   data() {
       return {
           viewname: 'LL Dashboard by Project',
           ticket: '',
           url: '',
           userid: ''
       };
   },
   mounted() {
       this.userId = this.$route.query.userId;
    //    console.log('kai => ' + this.userId)
    //    this.userid = "U087b2673fb770b30b0ff1f8bd2768451"
       /* API Get ticket to authorized tableau */
       axios.get('/genticket')
        .then(response => {
            var ticket = response.data['message'];
            this.url = process.env.VUE_APP_TABLEAU_URL + "/" + ticket + "/t/CRM/views/LLDashboard/LLDashboardByProj?:refresh=true&:embed=yes&:toolbar=no&:tabs=no&userId=" + this.userId;
        });
   },
   created() {
       this.userId = this.$route.query.userId;
       /* API Write Log to Use */
       axios.post('/addlogchatbot', {
           name: this.viewname,
           userid: this.userId
           })
       .then(response => {
           console.log(response.data);
       });
   }
};
</script>


<style lang="scss" scoped>

</style>