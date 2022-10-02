<template>
    <div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Eventos EMCOOFUN
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet justify="center" align="center" class="rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div v-for="({src,nameEvent} ,index) in Eventos" :key="index">
                            <v-img
                                class="rounded-xl img-principal"  width="210" 
                                :lazy-src="src"
                                :src="src"
                            ></v-img><br>
                            <p class="text-comfortaa" style="color:#003B4C; font-size: 20px;">{{nameEvent}}</p>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default ({
    components: { VueSlickCarousel },
    data() {
      return{
        Eventos:[
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/jcilaaadusfrjnyu4ijr.png', nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/ktqq7epgd0bctvwby4jn.png', nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/jwvatwm25gvudvoaihy2.png',  nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/pc4el8uhrobnn2ngpf7w.png',  nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/tsuaecjcy2nfg0oagmjd.png',  nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/ittwvobhbegzgvuvzxdp.png',  nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/slcspaefnejuswmjhauv.png',  nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485800/Galeria/msh3ilg2b4k8mdhgxsql.png',  nameEvent:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664485801/Galeria/div2omh3ndxgubj6idan.png',  nameEvent:'Evento'},

        ],
        settings  :{
            "centerPadding": "5px",
            "autoplay": true,
            "focusOnSelect": true,
            "infinite": true,
            "autoplaySpeed": 5000,
            "slidesToShow": 4,
            "slidesToScroll": 4,
            "responsive": [
                {
                "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                "breakpoint": 414,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                }
                ,
                {
                "breakpoint": 720,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                }
            ]
        },
        }
    }
})
</script>