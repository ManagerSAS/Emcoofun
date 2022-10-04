<template>
    <div class="mb-10 ">
        <div class="mt-10">
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                        Columbarios
                    </h1>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="4" md="4" lg="4">
                        <div class="mb-5">
                            <img class="d-none d-xl-block d-lg-block" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1664396343/Productos/FlorLoto/t3m8npjqlsh8eu9l4d4a.png" width="80%">
                        </div>
                        <div class="mt-5">
                            <v-btn @click="showFlorLoto" justify="center" align="center"  style="background: linear-gradient(to right, #A780B8, #442158); color: white;" class="text-comfortaa font-weight-black" >
                               Flor de Loto
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col justify="center" align="center" cols="12" sm="4" md="4" lg="4">
                        <div class="mb-5">
                            <img class="d-none d-xl-block d-lg-block" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/Productos/AlrededorLago/rxmjynzqijfqffirvfcv.png" width="80%">
                        </div>
                        <div class="bt-5">
                            <v-btn @click="ShowAlrededor" justify="center" align="center"  style="background: linear-gradient(to right, #A780B8, #442158); color: white;" class="text-comfortaa font-weight-black" >
                              Al Rededor del lago
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col justify="center" align="center" cols="12" sm="4" md="4" lg="4">
                        <div class="mb-5">
                            <img class="d-none d-xl-block d-lg-block" src="https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/gmsmbtkuvurndpsudddt.png" width="80%">
                        </div>
                        <div class="bt-5">
                            <v-btn @click="ShowMultiples" justify="center" align="center"  style="background: linear-gradient(to right, #A780B8, #442158); color: white;" class="text-comfortaa font-weight-black" >
                              Multiples
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <!-- FotosFlorLoto -->
        <v-row justify="center" align="center" v-show="FotosFlorLoto">
            <v-col justify="center" align="center" cols="10" sm="10" md="10" lg="10">
                <v-sheet style="background-color: #DFD6EA" justify="center" align="center" class="mx-auto rounded-xl mb-8">
                    <VueSlickCarousel  v-bind="settings">
                        <div justify="center" align="center" v-for="({src,nombre},index) in fotosFlores"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="80%">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <div>
                        <v-btn href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20destino%20final%20COLUMBARIO%20EN%20FLOR%20DE%20LOTO%20%F0%9F%8C%BB%20%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                            Comprar
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        <!-- FotosAlrededorlago -->
        <v-row justify="center" align="center" v-show="FotosAlrededorlago">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet style="background-color: #DFD6EA" justify="center" align="center" class="mx-auto rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings" >
                        <div justify="center" align="center" v-for="({src,nombre},index) in FotosAlrededor"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="80%">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <div>
                        <v-btn href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20destino%20final%20COLUMBARIO%20AL%20REDEDOR%20DEL%20LAGO%20%F0%9F%8C%B7%20%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                            Comprar
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        <!-- multiples -->
        <v-row justify="center" align="center" v-show="FotosMultiples">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet style="background-color: #DFD6EA" justify="center" align="center" class="mx-auto rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings" >
                        <div justify="center" align="center" v-for="({src,nombre},index) in Fotosmultiples"
                        :key="index" class="ma-lg-2 mt-5 mb-5">
                            <div>
                                <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="80%">
                            </div>
                            <div>
                                <p class="mb-6 text-raleway text">{{nombre}}</p>
                            </div>
                        </div>
                    </VueSlickCarousel>
                    <div>
                        <v-btn href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20destino%20final%20COLUMBARIO%20M%C3%9ALTIPLE%20(entre%20b%C3%B3vedas)%20%F0%9F%8C%B7%20%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                            Comprar
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        <div class="mt-10">
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                        Urnas Cenizarias Para Columbarios
                    </h1>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <VueSlickCarousel v-bind="settings" justify="center" align="center" class=" rounded-xl mb-8">
                    <div justify="center" align="center" v-for="({src},index) in UrnasColumbarios"
                    :key="index" class="ma-lg-2 mt-5 mb-5">
                        <div>
                            <img class="d-none d-xl-block d-lg-block" :lazy-src="src" :src="src" width="80%">
                        </div>
                    </div>
                </VueSlickCarousel>
                <div>
                    <v-btn href="href" justify="center" align="center" class="text-comfortaa font-weight-black botn" >
                        Comprar
                    </v-btn>
                </div>
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
            FotosFlorLoto: true,
            FotosAlrededorlago: false,
            FotosMultiples:false,
            fotosFlores:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396343/Productos/FlorLoto/t3m8npjqlsh8eu9l4d4a.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/Productos/FlorLoto/wky3qjmunntve0kxxwyf.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/Productos/FlorLoto/qnmx7jirsy0modnjqowx.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349201/Productos/FlorLoto/sghulas5riphgvqzshok.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349200/Productos/FlorLoto/mupyv7wn14mrddzuc7yl.png'}, 
            ],
            FotosAlrededor:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/Productos/AlrededorLago/rxmjynzqijfqffirvfcv.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/Productos/AlrededorLago/naa63chz0t9mqrnjajbi.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/Productos/AlrededorLago/kdxrzbmdrkxksck4axie.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/Productos/AlrededorLago/uxq19bvojydza2iuioyd.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1663349641/Productos/AlrededorLago/br6x42chyfqg9j9hklk5.png'},
            ],
            Fotosmultiples:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396401/Productos/multiples/apvz7pyqcwgzm3zsc006.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/kf5sdei4yxyj1kujymkc.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/skhilqbfwcizxpuxwo3e.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/oa7ayjzpsgkyvg8asjls.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/gntignbfoegwqbyet0fq.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/gmsmbtkuvurndpsudddt.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/j38gtzhihunjfa5lfpaa.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/lpucnjf3b0s1u8aeqavi.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/multiples/yiesxeyrhhw7wumkdgc4.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396399/Productos/multiples/r5vcpoaaq1eawetxx0ze.png'},
            ],
            UrnasColumbarios:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920024/Productos/UrnasCenizariasColumbarios/rzixocl2eerwoujyyjza.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920024/Productos/UrnasCenizariasColumbarios/fmxwzvoi0ma3brq3buhw.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920024/Productos/UrnasCenizariasColumbarios/v0oqccsvpp7bofae4mgo.png'},
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920024/Productos/UrnasCenizariasColumbarios/echuiwqeqkbimvgiktiq.png'}
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
            showFlorLoto(){
                this.FotosFlorLoto = !this.FotosFlorLoto
                this.FotosAlrededorlago = false
                this.FotosMultiples = false
            },
            ShowAlrededor(){
                this.FotosAlrededorlago = !this.FotosAlrededorlago
                this.FotosFlorLoto = false
                this.FotosMultiples = false
            },
            ShowMultiples(){
                this.FotosMultiples = !this.FotosMultiples
                this.FotosFlorLoto = false
                this.FotosAlrededorlago = false
            }
        }
    })

</script>
