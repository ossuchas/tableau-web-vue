<template>
  <div>
    <ul>
      <li v-for="result in results" v-bind:key="result.id">{{ result.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'test2',
  data() {
    return {
      results: []
    }
  },
  mounted() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    axios.get(url).then(response => {
      this.results = response.data
      console.log(this.results)
      })
    }
}
</script>

<style lang="scss" scoped>

</style>