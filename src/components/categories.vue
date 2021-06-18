<template>
    <div class="categories">
        <h2>Catégories</h2>
        <b-row>
            <b-col md="4" lg="3" sm="6">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button variant="primary">
                        <!--<router-link :to="{name: 'showcategorie',params:{id:'cat123'}}">Categorie1</router-link>-->
                        <router-link to="/showcategorie">Categorie1</router-link>
                        </b-button>
                </b-card>
            </b-col>
            <b-col md="4" lg="3" sm="6">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
            <b-col md="4" lg="3" sm="6">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
            <b-col md="4" lg="3" sm="6">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>  
</template>

<script>
export default {
  name: 'categories',
  components: {
      
  },
  data(){}
}
</script>

<style scoped> 
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css');
.categories{
    margin-top: 11px;
    margin-bottom: 10px;
}
.categories .btn-primary{
    background-color: #008c46;
}
.categories .btn-primary a{
    color: white;
    text-decoration: none;
}
</style>

