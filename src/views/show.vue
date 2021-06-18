<template>
  <div class="showCat">
      show <h1>{{test}}</h1><h1>{{catParents[0].text}}</h1>
      <sidebare :test="test" :catParents="catParents" :childCat="childCat" :products="products" />
      <!--<div class="container">
          <div class="contenu">
                
                
                <h2>{{$route.params.id}}</h2>
          </div>
      </div>-->
  </div>
</template>

<script>
import sidebare from '../components/sidebare.vue'
export default {
  name: 'showCat',
  components: {
    sidebare
  }
  ,data(){
          return {
              test:'test123',
            catParents:[{text:'Fruits',clicked:'yes',path:'/',id:'0',hasChild:true},{text:'Vegetables',clicked:'no',path:'/',id:'1',hasChild:false},
                        {text:'Dried fruit - nuts',clicked:'no',path:'/',id:'2',hasChild:false},{text:'Oils and spices',clicked:'no',path:'/',id:'3',hasChild:false},
                        {text:'Honey',clicked:'no',path:'/',id:'4',hasChild:false},{text:'Fishes',clicked:'no',path:'/',id:'5',hasChild:false}]
            ,childCat:[{text:'Orange',clicked:'no',path:'/',id:'0',catParents:'0',hasChild:false},{text:'Lemons',clicked:'no',path:'/',id:'1',catParents:'0',hasChild:false},
                      {text:'Apple',clicked:'no',path:'/',id:'2',catParents:'0',hasChild:false},{text:'Grapes',clicked:'no',path:'/',id:'3',catParents:'0',hasChild:false},
                      {text:'Figs',clicked:'no',path:'/',id:'4',catParents:'0',hasChild:false},{text:'Papaya',clicked:'no',path:'/',id:'5',catParents:'0',hasChild:false},
                      {text:'Nectrarin',clicked:'no',path:'/',id:'6',catParents:'0',hasChild:false},{text:'Berries',clicked:'no',path:'/',id:'7',catParents:'0',hasChild:false},
                      {text:'Clementines',clicked:'no',path:'/',id:'8',catParents:'0',hasChild:false},{text:'Grape Fruit',clicked:'no',path:'/',id:'9',catParents:'0',hasChild:false},
                      {text:'Pears',clicked:'no',path:'/',id:'10',catParents:'0',hasChild:false},{text:'Melons',clicked:'no',path:'/',id:'11',catParents:'0',hasChild:false},
                      {text:'Pomegranate',clicked:'no',path:'/',id:'12',catParents:'0',hasChild:false},{text:'Plums',clicked:'no',path:'/',id:'13',catParents:'0',hasChild:false},
                      {text:'Peach',clicked:'no',path:'/',id:'14',catParents:'0',hasChild:false},{text:'Bananas',clicked:'no',path:'/',id:'15',catParents:'0',hasChild:false}]
            ,products:[{text:'Organic Oranges',prise:'14',comparePrise:'19',id:'0',path:'/',childCat:'0'},{text:'Oranges Valenziana',prise:'11',comparePrise:'12',id:'1',path:'/',childCat:'0'},
                      {text:'Oranges Soft',prise:'18',comparePrise:'22',id:'2',path:'/',childCat:'0'},{text:'Oranges Navil',prise:'15',comparePrise:'33',id:'3',path:'/',childCat:'0'}]
          }
        }
}
</script>


<style scoped>

    .contenu{
        background-color: yellow;
        width: 70%;
        float: right;
    }
    @media screen and (max-width: 767px){
        .contenu{
            width: 100%;
        }
    }
</style>
