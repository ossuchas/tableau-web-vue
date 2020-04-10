<template>
    <div class="container">
        <div class="display-4 text-center">Test by Suchat {{info}}</div>
        <p>{{ info }} + {{ url }}</p>
    </div>
</template>

<script>
export default {
   name: 'Test',
   data() {
       return {
           info: 'xxx',
           url: process.env.VUE_APP_URL
       }
   },
   mounted() {
       console.log('kai :: ' + process.env.VUE_APP_URL)
   }
}
</script>

<style scoped>

</style>