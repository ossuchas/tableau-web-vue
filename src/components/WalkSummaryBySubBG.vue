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
           url: ''
       }
   },
   mounted() {
       /* API Get ticket to authorized tableau */
       axios.get('/genticket')
        .then(response => {
            var ticket = response.data['message'];
            this.url = process.env.VUE_APP_TABLEAU_URL + "/" + ticket + "/t/CRM/views/WalkSummaryByBG/DSWalkKPIBySubBG?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
        });
   },
   created() {
       /* API Write Log to Use */
       axios.post('/addlogchatbot', {name: this.viewname})
       .then(response => {
           console.log(response.data);
       });
   }
}
</script>

<style scoped>

</style>