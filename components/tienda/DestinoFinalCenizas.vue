<template>
   <v-row justify="center" align="center"> 
        <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
            <v-row class="mt-10" justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                        Destino Final Cenizario
                    </h1>
                </v-col>
            </v-row>
            <VueSlickCarousel v-bind="settings">
                <div justify="center" align="center" v-for="({src},index) in destinofinal" :key="index" class="ma-lg-2 mt-5 mb-5">
                    <div class="ma-8">
                        <div>
                            <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="300">
                            <img class="d-none d-md-block d-lg-none" :lazy-src="src" :src="src" width="250">
                            <img class="d-block d-sm-none"  :lazy-src="src" :src="src" width="200">
                        </div>
                    </div>
                </div>
            </VueSlickCarousel>
            <v-row justify="center" align="center" class="mb-5">
                <v-col justify="center" align="center">
                    <v-btn @click="Condolencia" justify="center" align="center" class="text-comfortaa font-weight-black boton" >
                        Comprar
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<style>
.text{
    color:#003B4C; 
    font-size: 25px; 
    font-weight: 800;
}
.boton{
    background: linear-gradient(to right, #C36C90, #7D2449); 
    color: white;
}
</style>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default ({
    components: { VueSlickCarousel },
        data() {
          return{
            destinofinal:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347671/DesatinoFinalCenizario/nx2ds1f852no8oredu2a.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347670/DesatinoFinalCenizario/byjwxfnadc8hvbkyo50r.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347671/DesatinoFinalCenizario/eptdon2krsfoctxjs1fq.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347670/DesatinoFinalCenizario/cuz2bjfqahzj8uwrudqt.png'},
                
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347670/DesatinoFinalCenizario/vjsp3upxwjx0slgrwppy.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347669/DesatinoFinalCenizario/psqiwifytel8gmtywg98.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347670/DesatinoFinalCenizario/kt5jsn8kod6iptowum2e.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347669/DesatinoFinalCenizario/pgapkdj2nz9koxikhkqy.png'},

            ],
            settings  :{
                "centerPadding": "5px",
                "autoplay": true,
                "focusOnSelect": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 4,
                "slidesToScroll": 2,
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