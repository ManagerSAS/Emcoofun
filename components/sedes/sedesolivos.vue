<template>
    <div class="mb-10">
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Sedes EMCOOFUN
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="5" xl="5">
                <div>
                    <img class="d-none d-xl-block d-lg-block" src="../../static/sedes/neiva.png" width="500">
                    <img class="d-none d-md-block d-lg-none" src="../../static/sedes/neiva.png" width="400">
                    <img class="d-block d-sm-none"  src="../../static/sedes/neiva.png" width="300">
                </div>
                <div class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 15px;">
                    <div>
                        <v-btn @click="mostrarNeiva" justify="center" align="center"  style="cursor: default; background: linear-gradient(to right, #F59D20, #E9522C); color: white;" class="text-comfortaa font-weight-black" >
                             Sede Principal Nieva
                        </v-btn> <br></div>
                    <div>Direccion: Calle 16 No. 2-56</div>
                    <div>Linea Atencion: : PBX: 8715555</div>
                    <div>Whatsapp : +57 3168747157</div>
                </div>
            </v-col>
            <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="5" xl="5">
                <div>
                    <img class="d-none d-xl-block d-lg-block" src="../../static/sedes/garzon.png" width="500">
                    <img class="d-none d-md-block d-lg-none" src="../../static/sedes/garzon.png" width="400">
                    <img class="d-block d-sm-none"  src="../../static/sedes/garzon.png" width="300">
                </div>
                <div class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 15px;">
                    <div>
                        <v-btn @click="mostrarGarzon" justify="center" align="center"  style="cursor: default; background: linear-gradient(to right, #F59D20, #E9522C); color: white;" class="text-comfortaa font-weight-black" >
                            Sede Garzón
                        </v-btn>
                    </div>
                    <div>Direccion: Calle 7 No. 12-00</div>
                    <div>Linea Atencion: : (8) 8332021-(8) 8334879</div>
                    <div>Whatsapp : +57 3168747185</div>
                </div>
            </v-col>
        </v-row>
        <!-- FotosNeiva -->
        <v-row justify="center" align="center" v-show="FotosNeiva">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet justify="center" align="center" class="rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div v-for="({src,nombreSala} ,index) in sedesNeiva" :key="index">
                            <v-card  color="white"
                                    class="ma-2 rounded-xl"
                                    width="315" >
                                <v-img
                                    class="rounded-xl img-principal"  height="250" 
                                    :lazy-src="src"
                                    :src="src"
                                ></v-img><br>
                                <p class="text-comfortaa" style="color:#003B4C; font-size: 20px;">{{nombreSala}}</p>
                            </v-card>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
        <!-- FotosGarzon -->
        <v-row justify="center" align="center" v-show="FotosGarzon">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet justify="center" align="center" class="rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div v-for="({src,nombreSala} ,index) in sedesGarzon" :key="index">
                            <v-card  color="white"
                                    class="ma-2 rounded-xl"
                                    width="315" >
                                <v-img
                                    class="rounded-xl img-principal"  height="250" 
                                    :lazy-src="src"
                                    :src="src"
                                ></v-img><br>
                                <p class="text-comfortaa" style="color:#003B4C; font-size: 20px;">{{nombreSala}}</p>
                            </v-card>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="5" xl="5">
                <div>
                    <img class="d-none d-xl-block d-lg-block" src="../../static/sedes/florencia.png" width="500">
                    <img class="d-none d-md-block d-lg-none" src="../../static/sedes/florencia.png" width="400">
                    <img class="d-block d-sm-none"  src="../../static/sedes/florencia.png" width="300">
                </div>
                <div class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 15px;">
                    <div >
                        <v-btn @click="mostrarPitalito" justify="center" align="center"  style="cursor: default; background: linear-gradient(to right, #F59D20, #E9522C); color: white;" class="text-comfortaa font-weight-black" >
                            Sede Pitalito
                        </v-btn>
                    </div>
                    <div>Direccion: Carrera 3 No. 5-19</div>
                    <div>Linea Atencion: :  (8) 8361961 – (8) 8366929 </div>
                    <div>Whatsapp : +57 3168747226</div>
                </div>
            </v-col>
            <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="5" xl="5">
                <div>
                    <img class="d-none d-xl-block d-lg-block" src="../../static/sedes/pitalito.png" width="500">
                    <img class="d-none d-md-block d-lg-none" src="../../static/sedes/pitalito.png" width="400">
                    <img class="d-block d-sm-none"  src="../../static/sedes/pitalito.png" width="300">
                </div>
                <div class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 15px;">
                    <div>
                        <v-btn @click="mostrarFlorencia" justify="center" align="center"  style="cursor: default; background: linear-gradient(to right, #F59D20, #E9522C); color: white;" class="text-comfortaa font-weight-black" >
                            Sede  Florencia
                        </v-btn>
                    </div>
                    <div>Direccion: Carrera 15 No. 15-34/36</div>
                    <div>Linea Atencion: (4) 4353314 - (4) 4351433 - (4) 4357558 </div>
                    <div>Watsapp : +57 3168747213</div>
                </div>
            </v-col>
        </v-row>
        <!-- FotosPitalito -->
        <v-row justify="center" align="center" v-show="FotosPitalito">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet justify="center" align="center" class="rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div v-for="({src,nombreSala} ,index) in sedesPitalito" :key="index">
                            <v-card  color="white"
                                    class="ma-2 rounded-xl"
                                    width="315" >
                                <v-img
                                    class="rounded-xl img-principal"  height="250" 
                                    :lazy-src="src"
                                    :src="src"
                                ></v-img><br>
                                <p class="text-comfortaa" style="color:#003B4C; font-size: 20px;">{{nombreSala}}</p>
                            </v-card>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
        <!-- FotosFlorencia -->
        <v-row justify="center" align="center" v-show="FotosFlorencia">
            <v-col cols="12" sm="12" md="10" lg="10"  justify="center" align="center" >
                <v-sheet justify="center" align="center" class="rounded-xl mb-8">
                    <VueSlickCarousel v-bind="settings">
                        <div v-for="({src,nombreSala} ,index) in sedesFlorencia" :key="index">
                            <v-card  color="white"
                                    class="ma-2 rounded-xl"
                                    width="315" >
                                <v-img
                                    class="rounded-xl img-principal"  height="250" 
                                    :lazy-src="src"
                                    :src="src"
                                ></v-img><br>
                                <p class="text-comfortaa" style="color:#003B4C; font-size: 20px;">{{nombreSala}}</p>
                            </v-card>
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
        FotosNeiva: false,
        FotosGarzon: false,
        FotosPitalito: false,
        FotosFlorencia: false,
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
        sedesNeiva:[
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662384757/SalaSedes/Neiva/keagwosqvkiib97yuqle.jpg', nombreSala:'Salón Oratorio'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662384757/SalaSedes/Neiva/oplnxisljvday5gpvddn.jpg', nombreSala:'Salón Oratorio'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662385217/SalaSedes/Neiva/x0tcwqufoaytrth9elxh.jpg', nombreSala:'Sala Tercer Piso'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662385220/SalaSedes/Neiva/qjgkvgpimgehwfjsa2qa.jpg', nombreSala:'Sala Tercer Piso'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662384757/SalaSedes/Neiva/ktphothu0w3y05oi0xc0.jpg', nombreSala:'Sala Tercer Piso'},
        ],
        sedesGarzon:[
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662389729/SalaSedes/Garzon/vwmlnyhj8rlgpqlf3z48.jpg', nombreSala:'Sala Rosa'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662389729/SalaSedes/Garzon/iy1mm6vjbcfpf8wu7hs0.jpg', nombreSala:'Sala Rosa'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662389728/SalaSedes/Garzon/gmh0ofixlnomfs9mme2c.jpg', nombreSala:'Sala Amarilla'},
        ],
        sedesFlorencia:[
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662390388/SalaSedes/Florencia/oobrl7tdq5ighee1rz79.jpg', nombreSala:'Sala Primer Piso'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662390388/SalaSedes/Florencia/bfmjvrgaj0evrnkamqyr.jpg', nombreSala:'Sala Segundo Piso'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662390388/SalaSedes/Florencia/bslxjlne8fhfd6rywldc.jpg', nombreSala:'Sala Tercer Pïso'},
        ],
        sedesPitalito:[
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662390988/SalaSedes/Pitalito/p8jsduojzfpqxtdbni6x.jpg', nombreSala:'Sala 101'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662390989/SalaSedes/Pitalito/ar87htmvnunyuvmanjcg.jpg', nombreSala:'Sala 102'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_374,q_auto:best/v1662390989/SalaSedes/Pitalito/l9mvqidpzh9gycvvf9t3.jpg', nombreSala:'Sala 103'},
        ],
      }
      
    },
    methods:{
        mostrarNeiva(){
            this.FotosGarzon = false
            this.FotosFlorencia= false
            this.FotosPitalito= false
            this.FotosNeiva = !this.FotosNeiva
        },
        mostrarGarzon(){
            this.FotosNeiva = false
            this.FotosFlorencia= false
            this.FotosPitalito= false
            this.FotosGarzon = !this.FotosGarzon
        },
        mostrarFlorencia(){
            this.FotosFlorencia= !this.FotosFlorencia
            this.FotosNeiva = false
            this.FotosPitalito= false
            this.FotosGarzon = false
        },
        mostrarPitalito(){
            this.FotosPitalito= !this.FotosPitalito
            this.FotosNeiva = false
            this.FotosFlorencia= false
            this.FotosGarzon = false
        }
    }
})
</script>
