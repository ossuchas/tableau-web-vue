<template>
    <!-- <div class="container">
        <div class="display-4 text-center">{{info}}</div> -->
        <!-- <div class="tableauPlaceholder" style="width: 1000px; height: 827px;">
            <iframe class="embed-responsive-item" :src="url" width="100%" height="100%"></iframe>
        </div> -->
        <!-- <div class="embed-responsive embed-responsive-1by1" style="height: 2048px"> -->
        <!-- <div class="resp-container">
            <iframe class="embed-responsive-item resp-iframe" :src="url" width="375" height="1000px" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </div> -->
    <!-- </div> -->
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
   name: 'Test',
   data() {
       return {
           info: 'Test Tableau Viewer',
           url: null,
           ticket: null
       }
   },
   mounted() {
    //    console.log('kai :: ' + process.env.VUE_APP_URL)
       
    //    axios.get('https://test-apchatbotapi.apthai.com/api/v1/genticket')
       axios.get('/genticket')
        .then(response => {
            // console.log(response)
            var ticket = response.data['message']
            // this.url = "http://dashboard.apthai.com/trusted/" + response.data['message']+ "/t/CRM/views/LLWalkByBG/Res_WalkBG2?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
            this.url = "http://dashboard.apthai.com/trusted/" + ticket + "/t/CRM/views/LLWalkByBG/Res_WalkBG2?:refresh=true&:embed=yes&:toolbar=no&:tabs=no"
        });
   }
}
</script>

<style scoped>
.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 10px
}

.resp-iframe {
    border: 0;
    overflow:hidden;
}
</style>