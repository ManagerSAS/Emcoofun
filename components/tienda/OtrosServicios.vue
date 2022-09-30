<template>
    <div class="mb-10 ">
        <!-- Jardineria -->
        <div class="mt-10">
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                        Jardineria
                    </h1>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="10" sm="10" md="10" lg="10">
                <v-sheet justify="center" align="center" class="mx-auto rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div justify="center" align="center" v-for="({src,nombre,href},index) in fotosFlores"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="300">
                                <img class="d-none d-md-block d-lg-none" :lazy-src="src" :src="src" width="250">
                                <img class="d-block d-sm-none"  :lazy-src="src" :src="src" width="200">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                            <div >
                                <a :href="href">
                                    <v-btn justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                                        <span class="text-yellow">Comprar </span>
                                    </v-btn>
                                </a>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
        <!-- Columbario Dobles -->
        <div class="mt-10">
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                        Columbario Dobles
                    </h1>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="8" lg="8">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="6">
                        <div class="mb-5">
                            <img class="d-none d-xl-block d-lg-block" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663349200/ColumbarioPersonalizado/jt8km2mfwci2etnl9w7i.png" width="350">
                            <img class="d-none d-md-block d-lg-none" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663349200/ColumbarioPersonalizado/jt8km2mfwci2etnl9w7i.png" width="300">
                            <img class="d-block d-sm-none"  src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663349200/ColumbarioPersonalizado/jt8km2mfwci2etnl9w7i.png" width="200">
                        </div>
                        <div class="mt-5">
                            <v-btn @click="columbarioperson" justify="center" align="center"  style="background: linear-gradient(to right, #A780B8, #442158); color: white;" class="text-comfortaa font-weight-black" >
                               <span class="text-yellow">Columbario Doble Personalizado </span> 
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="6">
                        <div class="mb-5">
                            <img class="d-none d-xl-block d-lg-block" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/ColumbarioDobles/rxmjynzqijfqffirvfcv.png" width="350">
                            <img class="d-none d-md-block d-lg-none" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/ColumbarioDobles/rxmjynzqijfqffirvfcv.png" width="300">
                            <img class="d-block d-sm-none"  src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/ColumbarioDobles/rxmjynzqijfqffirvfcv.png" width="200">
                        </div>
                        <div class="bt-5">
                            <v-btn @click="columbarioDoble" justify="center" align="center"  style="background: linear-gradient(to right, #A780B8, #442158); color: white;" class="text-comfortaa font-weight-black" >
                               <span class="text-yellow"> Columbario Doble</span>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <!-- Columbario Dobles personalizado -->
        <v-row justify="center" align="center" v-show="FotosColumbariPerson">
            <v-col justify="center" align="center" cols="10" sm="10" md="10" lg="10">
                <v-sheet style="background-color: #DFD6EA" justify="center" align="center" class="mx-auto rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div justify="center" align="center" v-for="({src},index) in Columbarios"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="300">
                                <img class="d-none d-md-block d-lg-none" :lazy-src="src" :src="src" width="250">
                                <img class="d-block d-sm-none"  :lazy-src="src" :src="src" width="200">
                            </div>
                            <div>
                                <a :href="href">
                                    <v-btn justify="center" align="center"  class="text-comfortaa font-weight-black botn" >
                                        <span class="text-yellow">Comprar</span>
                                    </v-btn>
                                </a>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
        <!-- Columbario doble -->
        <v-row justify="center" align="center" v-show="Columbariodoble">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet style="background-color: #DFD6EA" justify="center" align="center" class=" rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div justify="center" align="center" v-for="({src,nombre,href},index) in ColumbarioDoble"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="300">
                                <img class="d-none d-md-block d-lg-none" :lazy-src="src" :src="src" width="250">
                                <img class="d-block d-sm-none"  :lazy-src="src" :src="src" width="200">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                            <div>
                                <a :href="href">
                                    <v-btn justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                                        <span class="text-yellow">Comprar</span>
                                    </v-btn>
                                </a>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
         <!-- Osarios -->
        <div class="mt-10">
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                        Osarios
                    </h1>
                </v-col>
            </v-row>
        </div>
       
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="10" sm="10" md="10" lg="10">
                <v-sheet  justify="center" align="center" class=" rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div justify="center" align="center" v-for="({src,nombre,href},index) in Osarios"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="300">
                                <img class="d-none d-md-block d-lg-none" :lazy-src="src" :src="src" width="250">
                                <img class="d-block d-sm-none"  :lazy-src="src" :src="src" width="200">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                            <div>
                                <a :href="href">
                                    <v-btn justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                                       <span class="text-yellow">Comprar</span> 
                                    </v-btn>
                                </a>
                            </div>
                        </div>
                    </VueSlickCarousel>
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
    }
    .text-yellow{
        color: #FCF0A5;
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
            FotosColumbariPerson: true,
            Columbariodoble: false,
            fotosFlores:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/ghtkclxwjvfuyedkvm4r.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/t8yo5yeoicjmwdodx9vk.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/hoxomflkkim7id8tspv7.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/rohfobbeqlzenqg6j4aq.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/retstb5w8iphufkcbw3t.png'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347880/ArregloFloral/dkhfoas0iqgitlai9wzm.png'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/a6lvu2u2oapxcpendlo5.png'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/vic9c6orh0gcpubkdtve.png'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/meeeuyykiprnbeyhnayt.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663347879/ArregloFloral/mbhzlnmr8gbloaeagikh.png'},
            ],
            Columbarios:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349202/ColumbarioPersonalizado/uqyq23m8g9pue3zeaxsy.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/ColumbarioPersonalizado/wky3qjmunntve0kxxwyf.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/ColumbarioPersonalizado/i32edn4q5i9gq04gfbpu.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/ColumbarioPersonalizado/jivzzzwgwdh4fxlp2ler.png'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/ColumbarioPersonalizado/qnmx7jirsy0modnjqowx.png'}, 
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/ColumbarioPersonalizado/i32edn4q5i9gq04gfbpu.png'},  
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/ColumbarioPersonalizado/dna5qrxanjzw8q1dqhuu.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/ColumbarioPersonalizado/w9sf8ipvuu1sirfzghzn.png'},
            ],
            ColumbarioDoble:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/ColumbarioDobles/naa63chz0t9mqrnjajbi.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/ColumbarioDobles/kdxrzbmdrkxksck4axie.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/ColumbarioDobles/uxq19bvojydza2iuioyd.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/ColumbarioDobles/br6x42chyfqg9j9hklk5.png'}, 
            ],
            Osarios:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663354507/Osarios/n2cpfsof99j8knpufnmm.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663354507/Osarios/z5ydz4trdkkd9mmyjkx6.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663354506/Osarios/iaw5yrxyba2ucv6qbsby.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663354506/Osarios/gbq1gyselviimkt9hdqg.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663354506/Osarios/wgc057nkxs7qhipiyk2v.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663354506/Osarios/kguv4u7hjjj41c4q1mdk.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663354506/Osarios/dig79ypvrqzzvwtavjkm.png'},

            ],
            settings  :{
                "autoplay": true,
                "focusOnSelect": true,
                "infinite": true,
                "autoplaySpeed": 5000,
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
        },
        methods:{
            columbarioperson(){
                this.FotosColumbariPerson = !this.FotosColumbariPerson
                this.Columbariodoble = false
            },
            columbarioDoble(){
                this.FotosColumbariPerson = false
                this.Columbariodoble = !this.Columbariodoble
            }
        }
    })

</script>
