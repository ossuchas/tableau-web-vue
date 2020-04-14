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
// import axios from 'axios';
import axios from 'axios';

export default {
   name: 'WalkSummary',
   data() {
       return {
           ticket: '',
           url: ''
       }
   },
   mounted() {
       axios.get('/genticket')
        .then(response => {
            var ticket = response.data['message'];
            this.url = "http://dashboard.apthai.com/trusted/" + ticket + "/t/CRM/views/LLWalkByBG/Res_WalkBG2?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
        });
   }
}
</script>

<style scoped>

</style>