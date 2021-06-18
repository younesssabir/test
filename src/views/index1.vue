<template>
  <div class="index1">
    <div class="container">
        <slider />
        <about />
        <categories />
    </div>
      <!--<router-view/>-->
  </div>
</template>
<script>
//import Home from './Home.vue'
import slider from '../components/slider.vue'
import about from '../components/about.vue'
import categories from '../components/categories.vue'
export default {
  name: 'index1',
  components: {
    //Home,
    slider,about,categories
  }
}
</script>


<style scoped>
  
</style>
