<template>
    <div class="container">
        <div class="display-4 text-center">{{info}}</div>
        <!-- <div class="tableauPlaceholder" style="width: 1000px; height: 827px;">
            <iframe class="embed-responsive-item" :src="url" width="100%" height="100%"></iframe>
        </div> -->
        <div class="embed-responsive embed-responsive-1by1">
            <iframe class="embed-responsive-item" :src="url" width="100%" height="100%"></iframe>
        </div>
        <!-- <div class='tableauPlaceholder' style='width: 1000px; height: 827px;'>
            <object class='tableauViz' width='1000' height='827' style='display:none;'>
                <param name='host_url' value="http://dashboard.apthai.com" />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value="/t/CRM" />
                <param name='name' value="/LLWalkByBG/DS_LLWalkBG/" />
                <param name='tabs' value='no' /><param name='toolbar' value='yes' />
                <param name='showAppBanner' value='false' />
                <param name='filter' value='iframeSizedToWindow=true' />
                <param name="path" value="url" />
            </object>
        </div> -->
        <!-- <script type='text/javascript' src='http://dashboard.apthai.com/javascripts/api/viz_v1.js'></script> -->
        <!-- <div class='tableauPlaceholder' style='width: 1000px; height: 827px;'>
            <object class='tableauViz' width='1000' height='827' style='display:none;'>
                <param name='host_url' value='http%3A%2F%2Fdashboard.apthai.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='&#47;t&#47;CRM' />
                <param name='name' value='LLWalkByBG&#47;DS_LLWalkBG' />
                <param name='tabs' value='no' /><param name='toolbar' value='yes' />
                <param name='showAppBanner' value='false' />
                <param name='filter' value='iframeSizedToWindow=true' />
                <param name='ticket' value='ticket' />
            </object>
        </div> -->
    </div>
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
       console.log('kai :: ' + process.env.VUE_APP_URL)
       
       axios.get('https://test-apchatbotapi.apthai.com/api/v1/genticket')
        .then(response => {
            console.log(response)
            // this.url = "http://dashboard.apthai.com/trusted/" + response.data['message']+ "/t/CRM/views/LLWalkByBG/DS_LLWalkBG?:embed=yes&:toolbar=no&:tabs=no"
            this.url = "http://dashboard.apthai.com/trusted/" + response.data['message']+ "/t/CRM/views/LLWalkByBG/Resp_WalkBG?:embed=yes&:toolbar=no&:tabs=no"
            // this.url = "/trusted/" + response.data['message']+ "/t/CRM/views/LLWalkByBG/DS_LLWalkBG?:embed=yes&:toolbar=no&:tabs=no"
            // this.ticket = response.data['message'];
            // console.log('ticket kai : ' + this.ticket)
        });
   }
}
</script>

<style scoped>

</style>