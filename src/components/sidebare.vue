
<template>
<div class="sidebar1">
    <div class="container">
    
      <input type="checkbox" id="check">
    <!--sidebar start-->    
    <div ref="refSideBare" class="sidebar">
      <h5 class="docum"> <span>Catégories</span></h5>
      <div>
          
        <ul>
          <li :class="catpar.clicked" v-for="(catpar,index) in catParents" :key="index" class="catPar">
             <div v-if="catpar.hasChild==false" class="form-check">
                  <input class="form-check-input" type="checkbox" value="" :id="(catpar.text+catpar.id)">
                  <label class="form-check-label" :for="(catpar.text+catpar.id)">{{catpar.text}}</label>
              </div> 
              <div v-else><label @click="show(index)" class="form-check-label">{{catpar.text}}</label> <span v-if="catpar.clicked=='yes'" @click="show(index)" class="ico"><i class="fas fa-angle-down"></i></span><span v-else @click="show(index)" class="ico"><i class="fas fa-angle-up"></i></span></div>
              <ul class="firstUl">
                  <div v-for="(child,index) in childCat" :key="index">
                      <div class="secendUl" v-if="catpar.id==child.catParents">
                          <li :class="child.clicked" class="catChi"><div v-if="child.hasChild==false" class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" :id="(child.text+child.id)">
                                        <label class="form-check-label" :for="(child.text+child.id)">{{child.text}}</label>
                                    </div> 
                                    <div v-else>{{child.text}}</div>
                                <div v-for="(chi2,index) in child2" :key="index">
                                    <div v-if="child.id==chi2.childCat">
                                        <li><div v-if="chi2.hasChild==false" class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" :id="(chi2.text+child2.id)">
                                                  <label class="form-check-label" :for="(chi2.text+child2.id)">{{chi2.text}}</label>
                                              </div> 
                                              <div v-else><label class="form-check-label">{{chi2.text}}</label></div>
                                              <div v-for="(chi3,index) in child3" :key="index">
                                                  <div v-if="chi2.id==chi3.child2">
                                                      <li><div v-if="chi3.hasChild==false" class="form-check">
                                                              <input class="form-check-input" type="checkbox" value="" :id="(chi3.text+chi3.id)">
                                                              <label class="form-check-label" :for="(chi3.text+chi3.id)">{{chi3.text}}</label>
                                                          </div> 
                                                          <div v-else><label class="form-check-label">{{chi3.text}}</label></div>
                                                          
                                                      </li>
                                                  </div>
                                              </div>
                                        </li>
                                    </div>
                                </div>
                          </li>
                      </div>
                  </div>
              </ul>
          </li>
        </ul>

       </div>
    </div>
    <!--sidebar end-->
    <div class="sideResp">
            <nav class="navbar showBtn">
                <span class="open-slide">
                        <img onclick="openSlideMenu()" src="../assets/btnshow.png" alt="">
                </span>
            </nav>

            <div id="side-menu" class="side-nav">
                <a href="#" class="btn-close" onclick="closeSlideMenu()">&times;</a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
    </div>
                
    </div>
</div>
</template>

<script>
    //import '@/assets/js.js';
    export default {
      name:'sidebar1',
      data(){ return {
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
          }},
        methods:{
            show(index){
              /*if(this.categories[index].dropDown){
                var trouve=false
                  if(this.categories[index].clicked=='no') {this.categories[index].clicked='yes' , trouve=true }
                  if(!trouve) {this.categories[index].clicked='no'}
              }*/
              if(this.catParents[index].hasChild){
                var trouve=false
                  if(this.catParents[index].clicked=='no') {this.catParents[index].clicked='yes' , trouve=true }
                  if(!trouve) {this.catParents[index].clicked='no'}
              }
           },
           showSub1(index){
              if(this.childCat[index].hasChild){
                var trouve=false
                  if(this.childCat[index].clicked=='no') {this.childCat[index].clicked='yes' , trouve=true }
                  if(!trouve) {this.childCat[index].clicked='no'}
              }
           }
        }
      }
</script>

<style scoped>
 /*@import '../assets/styleSidebare.scss';*/
 @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css'); 
/*.thirdUl, .firstUl, .secendUl{
  display: none;
}*/
.no.firstUl,.no.thirdUl{
  display: none;
}
.yes .firstUl,.yes .thirdUl{
  display: none;
}
/*.yes li{
  border: none;
}
.yes ul{
  text-align: center;
}
.yes input{
  margin-left: 0;
}*/
.dropUl{
  text-align: center;
}

.listeClicked{
   display: none;
}
ul{
  padding: 0;
  margin: 0;
}
/*li{
  border-left: 4px solid rgb(92, 150, 252);
  margin: 5px;
}*/
.chr{
  font-family: Linearicons-Free;
    color: gray;
    font-style: normal;
    font-weight: 300;
    font-variant: normal;
    text-transform: none;
    float: right;
    margin-right: 7px;
}

.sidebar{
  z-index: 1;
  /*top: 0;*/
  background: #ffffff;
  margin-top: 70px;
  /*padding-top: 30px;
  position: fixed;
  left: 0;*/
  width: 250px;
  height: calc(100% - 9%);
  transition: 0.5s;
  transition-property: left;
  overflow-y: auto;
  float: left;
}


.sidebar a{
  color: rgb(88, 88, 88);
    display: block;
    /*border-bottom: 1px solid #d1d5dc;
     transition: 300ms; */
    transition: 300ms;
    /* transition: 300ms; 
    border-left: 3px solid #008c46;*/
    /* margin: 5px; */
    margin: 5px 0 0px 0px;
    width: 100%;
    line-height: 60px;
    text-decoration: none;
    padding: 0 0 0 30px;
    /* padding: 10px; */
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;
}

.sidebar a:hover,.arabeSideBare a:hover{
  background: rgb(237, 242, 250);
}

.sidebar i,.arabeSideBare i{
  padding-right: 10px;
}

label #sidebar_btn{
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 300px;
  font-size: 20px;
  margin: 5px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover{
  color: rgb(92, 150, 252);
}

#check:checked ~ .sidebar{
  left: -185px;
}

#check:checked ~ .sidebar a span{
  display: none;
}

#check:checked ~ .sidebar a{
  font-size: 20px;
  margin-left: 165px;
  width: 100%;
}
#check:checked ~ .sidebar .profile_info{
  display: none;
}

#check{
  display: none;
}

.mobile_nav{
  display: none;
}

.content .card p,.arabeContent .card p{
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  opacity: 0.8;
}

.docum span{
    color: #6c757d!important;
    /*border-bottom: 1px solid #dde3e8;*/
    text-transform: uppercase;
}
.docum{
  text-align: center;
  width: 100%;
}
.storeino{
    height: 40px;
    padding-bottom: 5px;
    margin: -16px 0px 0px 47%;
}
.ico, .ico a{
    border: none;
    margin: 0;
    padding: 0;
    float: right;
}
.clicked a{
  background-color: #edf2fb;
}
li:hover{
  background-color: #f4f5f8;;
}

.clicked li{
  opacity: 0;
}
/*.sidebar .clk:hover ul,.arabeSideBare .clk:hover ul{
  animation: load 1s forwards;
  display: block;
}*/
.sidebar .clk:hover .clicked li a,.arabeSideBare .clk:hover .clicked li a{
  text-align: center;
}
.nonClicked{
  display: none;
}
.clicked{
  display: block;text-align: center;
}
@keyframes load {
  0%{transform: translateX(-5px) rotate(10deg)}
  100%{opacity: 1;transform: translateX(0px) rotate(0)}
}
.sidebar li :first-child,.arabeSideBare li :first-child{
  animation-delay: 0s;
}
.sidebar li :nth-child(2),.arabeSideBare li :nth-child(2){
  animation-delay: 0.5s;
}
.sidebar li :nth-child(3),.arabeSideBare li :nth-child(3){
  animation-delay: 1s;
}
.sidebar li :nth-child(4),.arabeSideBare li :nth-child(4){
  animation-delay: 1.5s;
}
.clicked li{
  opacity: 1;
}
.atherLang{
  background-color: #e8e8e8;
    color: black;
}
.activLang{
  background: rgb(92, 150, 252);
}
.noActivLang{
  background-color: white;color: black;
}
.arabeSideBare{
    z-index: 1;
    top: 0;
    background: #ffffff;
    margin-top: 86px;
    /* padding-top: 0px; */
    position: fixed;
    right: 0;
    width: 250px;
    height: calc(100% - 9%);
    transition: 0.5s;
    transition-property: left;
    overflow-y: auto;
}
.arabeContent{
    width: (100% - 250px);
    margin-top: 60px;
    padding: 20px;
    margin-right: 250px;
    /* background: url(background.png) no-repeat; */
    background-position: center;
    background-size: cover;
    height: 100vh;
    transition: 0.5s;
    text-align: right;
}
.floatLangLeft{
  float: left;
}
.floatLangRight{
  float: right;
}
.arabeSideBare ul{
  text-align: right;
}
.arabeSideBare a{
  padding-right: 30px;
  border-right: 3px solid #008c46;
  border-left: none;
}
.arabeSideBare .ico{
  float: left;
}
.content h1{
  text-align: left;
  border-bottom: 1px solid #dde3e8;
  color: #6c757d!important;
  text-transform: uppercase;
}
.content .btn-primary{
  width: 178px;
  border-radius: 3.25rem;
}
.card{
  padding: 0px 0px 50px 0px;
}
.categ{
  float: none;
}
.navbar-nav li{
    text-align: center;
    white-space: nowrap;
}
.nonClicked{
  display: none;
}
.clicked{
  display: block;text-align: center;
}
 li{
    /*border-left: 3px solid #008c46;*/
    padding: 15px;
    margin-bottom: 5px;
    /*border-bottom: 1px solid #d8d3d3;*/
    list-style-type: none;
}
.ico{
    font-size: 29px;
    margin-top: -9px;
    color: #008c46;
}
label:hover, span:hover{
  cursor: pointer;
}
.catPar{
  border-bottom: 1px solid #d8d3d3;
}
.catChi{
  border-top: 1px solid #d8d3d3;
}
.navbar{
    background-color:#3b5998;
    overflow:hidden;
    height:63px;
  }
  
  .navbar a{
    float:left;
    display:block;
    color:#f2f2f2;
    text-align:center;
    padding:14px 16px;
    text-decoration:none;
    font-size:17px;
  }
  
  .navbar ul{
    margin:8px 0 0 0;
    list-style:none;
  }
  
  .navbar a:hover{
    background-color:#ddd;
    color:#000;
  }
  
  .side-nav{
    height:100%;
    width:0;
    position:fixed;
    z-index:1;
    top:0;
    left:0;
    background-color:#111;
    opacity:0.9;
    overflow-x:hidden;
    padding-top:60px;
    transition:0.5s;
  }
  
  .side-nav a{
    padding:10px 10px 10px 30px;
    text-decoration:none;
    font-size:22px;
    color:#ccc;
    display:block;
    transition:0.3s;
  }
  
  .side-nav a:hover{
    color:#fff;
  }
  
  .side-nav .btn-close{
    position:absolute;
    top:0;
    right:22px;
    font-size:36px;
    margin-left:50px;
  }
  
  #main{
    transition:margin-left 0.5s;
    padding:20px;
    overflow:hidden;
    width:100%;
  }
  
  @media(max-width:568px){
    .navbar-nav{display:none}
  }
  
  @media(min-width:568px){
    /*.open-slide{display:none}*/
  }
.showBtn{
     width: 62px;
     background-color: white;
     margin: 0; 
     padding: 0;
     position: absolute;
    top: 52px;
    right: 0;
}
.sideResp{
    display: none;
}
.sidebar{
    /*background-color: red;*/
    width: 30%;
    float: left;
}
/* Responsive CSS */
/*////////////////////////////////////*//*////////////////////////////////////*//*////////////////////////////////////*/
@media screen and (max-width: 767px){
.sidebar{
    display: none;
}
.sideResp{
    display: block;
}
}
      
    
</style>

