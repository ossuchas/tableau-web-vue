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
   name: 'WalkSummary',
   data() {
       return {
           viewname: 'Walk Summary by BG',
           ticket: '',
           url: '',
           userid: ''
       }
   },
   mounted() {
       /* API Get ticket to authorized tableau */
       axios.get('/genticket')
        .then(response => {
            var ticket = response.data['message'];
            var test_url = 'https://tabtesweb.apthai.com/trusted'
            // var test_url = 'http://dashboard.apthai.com/trusted'
            // this.url = process.env.VUE_APP_TABLEAU_URL + "/" + ticket + "/t/CRM/views/LLWalkByBG/Res_WalkBG4?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
            var text_url = test_url + "/" + ticket + "/t/CRM/views/LLWalkByBG/Res_WalkBG4?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
            console.log(text_url)
            this.url = test_url + "/" + ticket + "/t/CRM/views/LLWalkByBG/Res_WalkBG4?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
        });
   },
   created() {
       this.userId = this.$route.query.userId
       /* API Write Log to Use */
       axios.post('/addlogchatbot', {
           name: this.viewname,
           userid: this.userId
           })
       .then(response => {
           console.log(response.data);
       });
   }
}
</script>

<style scoped>

</style>