<template>
  <div class="home">
          <div class="container-fluid">
              <div class="container">
                  <div class="menu1">
                      <ul>
                          <li  style="background-color: white;"><router-link style="color:black" to="/"><span><img src="../assets/m5.png" alt=""></span>Agriculture</router-link></li>
                          <li class="hit"><a href="#"><span><img src="../assets/m3.png" alt="" class="m3"></span><span><img src="../assets/m1.png" alt="" class="m1"></span>Building materials</a></li>
                          <li class="enrg"><a href="#"><span><img src="../assets/m4.png" alt="" class="m4"></span><span><img src="../assets/m2.png" alt="" class="m2"></span>Energy</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="container">
                <div class="menu2">
              <img class="logoo" alt="logo" src="../assets/logoimg.png">
              <input type="text" placeholder="Search term, article number ...">
              <span><img src="../assets/search.png" alt=""></span>
              <ul>
                  <li><a href="#"><i class="fas fa-map-marker-alt"></i>Locations</a></li>
                  <li><a href="#"><i class="fas fa-user"></i>My account</a></li>
                  <li><a href="#"><i class="fas fa-heart"></i>Bookmarks</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i>Shopping cart</a></li>    
              </ul>
          </div>
          <div class="menu3">
              <b-navbar toggleable="lg" variant="faded" type="light">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item href="#">begin</b-nav-item>
                            <b-nav-item href="#">Crop production</b-nav-item>
                            <b-nav-item href="#">machinery</b-nav-item>
                            <b-nav-item href="#">Yard & garden</b-nav-item>
                            <b-nav-item href="#">Yard & garden</b-nav-item>
                            <b-nav-item href="#">Crop production</b-nav-item>
                            <b-nav-item href="#">Yard & garden</b-nav-item>
                            <b-nav-item href="#">machinery</b-nav-item>
                            <b-nav-item href="#">Yard & garden</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
          </div>
          <!--<slider />
          <about />
          <categories />-->
          </div>
      </div>
</template>

<script>
/*import slider from '../components/slider.vue'
import about from '../components/about.vue'
import categories from '../components/categories.vue'
*/export default {
  name: 'home',
  components: {
    //slider,about,
    //categories
  },
  data(){}
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css'); 
/*.home .container{
  overflow: hidden;
}*/
  .m1,.m2,.m3,.m4{
    width: 27px;
    height: 22px;
  }
  .m1,.m2{
    display: none;
}
.menu1 .hit:hover .m1{
   display: inline-block;
}
.menu1 .hit:hover .m3{
   display: none;
}
.menu1 .enrg:hover .m2{
   display: inline-block;
}
.menu1 .enrg:hover .m4{
   display: none;
}
.menu1{
    background-color: #008c46;
    height: 50px;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
}
.menu1 ul{
    margin: 0;
    margin-left: -50px;
}
.menu1 a{
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
}
.menu1 li{
    border-left: 1px solid white;
    padding: 10px;
    float: left;
    list-style-type: none;
    height: 50px;
}
.menu1 li:hover{
    background-color: white;
}
.menu1 a:hover{
    color: black;
}
.white{
    color: white;
}
.menu1 li:hover a{
    color: black;
    background-color: white;
}
.menu2 span img{
    height: 30px;
    width: 28px;
    margin-top: -5px;
    margin-left: 1px;
    cursor: pointer;
}
.menu2 input{
    padding: 3px;
    width: 225px;
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
    margin-left: 1%;
}
.menu2 ul{
  display: inline-flex;
  padding: 0;
  margin: 0;
  margin-left: 1%;
}
.menu2 ul li{
  list-style-type: none;
  float: left;
  padding: 10px;
  white-space: nowrap;
}
.menu2 ul li a{
  text-decoration: none;
  color: black;
}
.menu2 ul li i{
  margin-right: 2px;
}
.logoo{
  width: 320px;
  margin-bottom: 10px;
}
.menu3{
  margin-top: 12px;
  background-color: #f4f4f4;
  overflow: hidden;
  margin-bottom: 20px;
}
.menu3 ul li{
  white-space: nowrap;
  text-align: center;
}
.container-fluid{
  background-color: #008c46;
}
</style>
