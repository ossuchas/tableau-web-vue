<template>
    <div class="container">
        <div class="display-4 text-center">Test by Suchat {{info}}</div>
        <p>{{ info }}</p>
    </div>
</template>

<script>
export default {
   name: 'Test',
   data() {
       return {
           info: 'xxx'
       }
   },
   mounted() {
       console.log('kai :: ' + process.env.VUE_APP_URL)
   }
}
</script>

<style scoped>

</style>