<template>
    <div class="container">
        <div class="display-4 text-center">Test by Suchat</div>
        <!-- <p>URL : {{ api_url }}</p> -->
    </div>
</template>

<script>
export default {
    name: 'Test',
    // date() {
    //     return {
    //         api_url: ''
    //     }
    // },
    mounted() {
        console.log(process.env.VUE_APP_URL)
        // this.api_url = process.env.VUE_APP_URL;
    }
    
}
</script>

<style scoped>

</style>