<template>
  <div class="showCat">
      <sidebare />
      <div class="container">
          <div class="contenu">
                
                
                <h2>{{$route.params.id}}</h2>
          </div>
      </div>
  </div>
</template>

<script>
import sidebare from '../components/sidebare.vue'
export default {
  name: 'showCat',
  components: {
    sidebare
  }
  ,data(){ }
}
</script>


<style scoped>
    .contenu{
        /*background-color: yellow;*/
        width: 70%;
        float: right;
    }
    @media screen and (max-width: 767px){
        .contenu{
            width: 100%;
        }
    }
</style>
