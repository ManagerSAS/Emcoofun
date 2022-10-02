<template>
    <div class="mb-10 ">
        <div class="mt-10">
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                        En Sala de Velacion
                    </h1>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="8" lg="8">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="6">
                        <div class="mb-5">
                            <img class="d-none d-xl-block d-lg-block" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/ehs0jchhqp8lqzbff2gu.png" width="350">
                            <img class="d-none d-md-block d-lg-none" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/ehs0jchhqp8lqzbff2gu.png" width="300">
                            <img class="d-block d-sm-none"  src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/ehs0jchhqp8lqzbff2gu.png" width="200">
                        </div>
                        <div class="mt-5">
                            <v-btn @click="ArreglosFlorales" justify="center" align="center"  style="background: linear-gradient(to right, #A780B8, #442158); color: white;" class="text-comfortaa font-weight-black" >
                               Arreglos Florales
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="6">
                        <div class="mb-5">
                            <img class="d-none d-xl-block d-lg-block" src="../../static/OtrosServicios/forma1-2_Mesa de trabajo 1.jpg" width="350">
                            <img class="d-none d-md-block d-lg-none" src="../../static/OtrosServicios/forma1-2_Mesa de trabajo 1.jpg" width="300">
                            <img class="d-block d-sm-none"  src="../../static/OtrosServicios/forma1-2_Mesa de trabajo 1.jpg" width="200">
                        </div>
                        <div class="bt-5">
                            <v-btn @click="Condolencia" justify="center" align="center"  style="background: linear-gradient(to right, #A780B8, #442158); color: white;" class="text-comfortaa font-weight-black" >
                              Bono de Condolencia
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <!-- Arreglo floral -->
        <v-row justify="center" align="center" v-show="FotosArreglosFlorales">
            <v-col justify="center" align="center" cols="10" sm="10" md="10" lg="10">
                <v-sheet style="background-color: #DFD6EA" justify="center" align="center" class="mx-auto rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div justify="center" align="center" v-for="({src,nombre},index) in fotosFlores"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="300">
                                <img class="d-none d-md-block d-lg-none" :lazy-src="src" :src="src" width="250">
                                <img class="d-block d-sm-none"  :lazy-src="src" :src="src" width="200">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <div>
                        <v-btn href="https://api.whatsapp.com/send?phone=573168747157&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20comprar%20un%20arreglo%20floral%20%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%F0%9F%8C%BB%F0%9F%8C%BC" justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                            Comprar
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        <!-- Condolencias -->
        <v-row justify="center" align="center" v-show="FotosCondolencias">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet style="background-color: #DFD6EA" justify="center" align="center" class=" rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div justify="center" align="center" v-for="({src,nombre},index) in Condolencias"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="300">
                                <img class="d-none d-md-block d-lg-none" :lazy-src="src" :src="src" width="250">
                                <img class="d-block d-sm-none"  :lazy-src="src" :src="src" width="200">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <div>
                        <v-btn href="https://api.whatsapp.com/send?phone=573168747157&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20comprar%20un%20BONO%20DE%20CONDOLENCIAS%20%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%F0%9F%92%8C%E2%9C%89%EF%B8%8F" justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                            Comprar
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        
    </div>
</template>
<style>
    a{
        text-decoration:none
    }
    .text{
        color:#003B4C; font-size: 25px; font-weight: 800;
    }
    .botn{
        background: linear-gradient(to right, #A780B8, #442158); 
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
            FotosArreglosFlorales: true,
            FotosCondolencias: false,
            fotosFlores:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/ghtkclxwjvfuyedkvm4r.png', nombre:'Arreglo floral', href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/t8yo5yeoicjmwdodx9vk.png', nombre:'Arreglo floral', href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/hoxomflkkim7id8tspv7.png', nombre:'Arreglo floral', href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/rohfobbeqlzenqg6j4aq.png', nombre:'Arreglo floral', href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/retstb5w8iphufkcbw3t.png', nombre:'Arreglo floral', href:'comprar'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/dkhfoas0iqgitlai9wzm.png', nombre:'Arreglo floral', href:'comprar'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/a6lvu2u2oapxcpendlo5.png', nombre:'Arreglo floral', href:'comprar'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/vic9c6orh0gcpubkdtve.png', nombre:'Arreglo floral', href:'comprar'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/meeeuyykiprnbeyhnayt.png', nombre:'Arreglo floral', href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/mbhzlnmr8gbloaeagikh.png', nombre:'Arreglo floral', href:'comprar'},

            ],
            Condolencias:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_200/v1662396476/gngbxykylidz3ckvg4nu.png', nombre:'Bono 1' , href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_200/v1662396477/jefjvwrux8nooxrjfygh.png', nombre:'Bono 2' , href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_200/v1662396476/gngbxykylidz3ckvg4nu.png', nombre:'Bono 3' , href:'comprar'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_200/v1662396477/jefjvwrux8nooxrjfygh.png', nombre:'Bono 4' , href:'comprar'}
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
        },
        methods:{
            ArreglosFlorales(){
                this.FotosArreglosFlorales = !this.FotosArreglosFlorales
                this.FotosCondolencias = false
            },
            Condolencia(){
                this.FotosArreglosFlorales = false
                this.FotosCondolencias = !this.FotosCondolencias
            }
        }
    })

</script>
