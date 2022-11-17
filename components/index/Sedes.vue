<template>
    <v-container fluid justify="center" align="center" >
        <v-row class="mt-5" justify="center" align="center" >
            <v-col cols="12" sm="12" md="11" lg="8" justify="center" align="center">
                <h2 class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 40px;"> Sedes Los  Olivos Emcoofun </h2> <br>
                <p class="text-comfortaa secondary--text"> Los Olivos EMCOOFUN promueve la previsión, prestación de servicios exequiales y de destino final integrales de excelente calidad. Contribuyendo a la inclusión social de sus asociados, “con rango de acción en los departamentos del Huila, Caquetá y  Putumayo </p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="12" lg="10" justify="center" align="center">
                <VueSlickCarousel 
                :arrows="false" v-bind="settings"
                >
                    <div
                        v-for="({src, text, direccion}, index) in articlesAdd2" 
                        :key="index"
                        class="text-md-center mx-auto mb-8 mr-3 "
                            justify="center" align="center"
                    >
                    <div justify="center" align="center">
                        <v-img
                            class="img-principal mb-1"   
                            :src="src"
                            height="210"
                            width="310"
                        ></v-img>
                            <div  class="btnsedes rounded-lg white--text text-capitalize text-comfortaa font-weight-black" >
                                {{ text }}
                            </div> <br>
                            <div class="text-raleway font-weight-black" > 
                                {{ direccion }} 
                            </div>   
                        </div>
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center">
                <v-btn 
                    style="background-color: #003B4C "
                    class="shadow-principal btn-hover mb-10 text-comfortaa text-capitalize"
                    rounded-xl
                    dark
                    large
                    to="sedes" 
                >
                    Conoce nuestras sedes Emcoofun
                </v-btn>
            </v-col>
        </v-row>
    </v-container >
</template>
<style>
.btnsedes{
    width: 200px;
    height: 40px;
    padding: 10px 10px 10px 10px;;
    background: linear-gradient(to right, #F59D20, #E9522C); 
    color: white; 
}
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
  data() {
    return{
        articlesAdd2: [
                 { text: 'Sede principal Neiva', direccion:'Calle 16 No. 2-56', src: '/sedes/neiva.png' },
                 { text: 'Sede Pitalito', direccion:'Carrera 3 No. 5-19', src: '/sedes/pitalito.png' },
                 { text: 'Sede Florencia', direccion:'Carrera 15 No. 15-34/36', src: '/sedes/florencia.png' },
                 { text: 'Sede Garzón', direccion:'Calle 7 No. 12-00', src: '/sedes/garzon.png' },
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
}
</script>
