<template>
    <div class="container">
        <div class="display-4 text-center">Test by Suchat</div>
        <!-- <p>URL : {{ api_url }}</p> -->
        <span>{{ test2 }}</span>
    </div>
</template>

<script>
export default {
    name: 'Test',
    date() {
        return {
            test2: 'xxx'
        }
    },
    mounted() {
        console.log(process.env.VUE_APP_URL)
        // this.api_url = process.env.VUE_APP_URL;
    }
}
</script>

<style scoped>

</style>