<template>
  <div class="app">
    <div>
      <Home />
    </div>
      <router-view/>
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default {
  name: 'app'
  ,components: {
    Home
  }
}
</script>


<style scoped>
  
</style>
