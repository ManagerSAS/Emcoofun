<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Eventos EMCOOFUN
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="11">
                <v-sheet justify="center" align="center" class="rounded-xl">
                    <VueSlickCarousel :arrows="false" v-bind="settings">
                        <div v-for="({src} ,index) in Eventos" :key="index">
                            <v-img
                                class="rounded-xl img-principal"  width="300px" 
                                :lazy-src="src"
                                :src="src"
                            ></v-img><br>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container >
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
            {src:'/Galeria/eventos/event1.png'},
            {src:'/Galeria/eventos/event2.png'},
            {src:'/Galeria/eventos/event3.png'},
            {src:'/Galeria/eventos/event4.png'},
            {src:'/Galeria/eventos/event5.png'},
            {src:'/Galeria/eventos/event6.png'},
            {src:'/Galeria/eventos/event7.png'},
            {src:'/Galeria/eventos/event8.png'},
            {src:'/Galeria/eventos/event9.png'},
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
                        "dots": false
                    }
                }
                ,
                {
                "breakpoint": 720,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": false
                    }
                }
            ]
        },
        }
    }
})
</script>