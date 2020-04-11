<template>
    <div class="container">
        <div class="display-4 text-center">{{info}}</div>
        <!-- <p>{{ info }} + {{ url }}</p> -->
        <div class="tableauPlaceholder" style="width: 1000px; height: 827px;">
            <iframe :src="url" width="100%" height="100%"></iframe>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'Test',
   data() {
       return {
           info: 'Test Tableau Viewer',
           url: null
       }
   },
   mounted() {
       console.log('kai :: ' + process.env.VUE_APP_URL)
       
       axios.get('https://test-apchatbotapi.apthai.com/api/v1/genticket')
        .then(response => {
            console.log(response)
            this.url = "http://dashboard.apthai.com/trusted/" + response.data['message']+ "/t/CRM/views/LLWalkByBG/DS_LLWalkBG?:embed=yes&:toolbar=no&:tabs=no"
        });
   }
}
</script>

<style scoped>

</style>