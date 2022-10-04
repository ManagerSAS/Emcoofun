<template>
   <v-row justify="center" align="center"> 
        <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
            <v-row class="mt-10" justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class=" text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                       Opciones destino final
                    </h1>
                </v-col>
            </v-row>
            <div >
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                            Cenizario
                        </h1>
                    </v-col>
                </v-row>
            </div>  
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                    <VueSlickCarousel v-bind="settings"  justify="center" align="center" class="rounded-xl mb-8">
                        <div justify="center" align="center" v-for="({src},index) in Cenizario"
                        :key="index" class=" mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="80%">
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <div>
                        <v-btn href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20DESTINO%20FINAL%20CENIZARIO%E2%9B%AA%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="mb-5 text-comfortaa font-weight-black botn" >
                        <span class="text-yellow">Comprar</span> 
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <div >
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="11">
                        <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                            Cofres Cenizario
                        </h1>
                    </v-col>
                </v-row>
            </div>  
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                    <VueSlickCarousel v-bind="settings"  justify="center" align="center" class="rounded-xl mb-8">
                        <div justify="center" align="center" v-for="({src},index) in CofresCenizario"
                        :key="index" class=" mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="80%">
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <div>
                        <v-btn href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20DESTINO%20FINAL%20CENIZARIO%E2%9B%AA%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="mb-5 text-comfortaa font-weight-black botn" >
                        <span class="text-yellow">Comprar</span> 
                        </v-btn>
                    </div>
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
            Cenizario:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347671/Productos/cenizarios/eptdon2krsfoctxjs1fq.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347671/Productos/cenizarios/nx2ds1f852no8oredu2a.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347671/Productos/cenizarios/aotuvdycxhjksglnoltd.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347670/Productos/cenizarios/byjwxfnadc8hvbkyo50r.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347670/Productos/cenizarios/kt5jsn8kod6iptowum2e.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347670/Productos/cenizarios/jtunaxwp1jeb8nuwjksa.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347669/Productos/cenizarios/xbcthnr9mcfocklgykhr.png'},
            ],
            CofresCenizario:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920906/Productos/cenizarios/hvguljdgvmbkbykh7800.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920906/Productos/cenizarios/hg3dqofvlawlksvt0yp0.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920905/Productos/cenizarios/sy5meczd9leruov1o9ng.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920905/Productos/cenizarios/alishtpsfvi0jnibwkwg.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920905/Productos/cenizarios/pmoasy1ozzmslzd3sraz.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920905/Productos/cenizarios/w9vc56mcgiyxkjf9paqm.png'},
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