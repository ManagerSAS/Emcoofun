<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                    Servicio de Jardineria
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                <VueSlickCarousel :arrows="false" v-bind="settings"  justify="center" align="center" class="rounded-xl mb-8">
                    <div justify="center" align="center" v-for="({src},index) in Sercvicios"
                    :key="index" class=" mt-5 mb-5">
                        <div>
                            <img :lazy-src="src" :src="src" width="80%">
                        </div>
                    </div>
                </VueSlickCarousel>
                <div>
                    <v-btn target="_blank" href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20JARDINERIA%20PARA%20TUMBAS%E2%9B%AA%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="mb-5 text-comfortaa font-weight-black botn ma-2 white--text" >
                        Comprar
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
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
              Sercvicios:[
                  {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664919927/Productos/Jardineria/m9nwcm1pwsuuaf2ch7ax.png'},
                  {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664919926/Productos/Jardineria/wwt4mcwdpucp7a5hxauo.png'},
                  {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664919926/Productos/Jardineria/chrcvqlzrh5xwyunxgc2.png'},
                  {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664919926/Productos/Jardineria/h76eoca4yyzi0j2zwqnv.png'},
                  {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664919926/Productos/Jardineria/ugeshsunvanlqhbdybuy.png'},
                  {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664919926/Productos/Jardineria/mms1piudhhybuzxrjt2i.png'},
              ],
              settings  :{
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