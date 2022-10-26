<template>
    <v-container fluid>
        <v-row justify="center" align="center"> 
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-row class="mt-10" justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h1 class=" text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                            Osarios
                        </h1>
                    </v-col>
                </v-row> 
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                        <VueSlickCarousel :arrows="false" v-bind="settings"  justify="center" align="center" class="rounded-xl mb-8">
                            <div justify="center" align="center" v-for="({src},index) in Osarios"
                            :key="index" class=" mt-5 mb-5">
                                <div>
                                    <img :lazy-src="src" :src="src" width="80%">
                                </div>
                            </div>
                        </VueSlickCarousel>
                        <div>
                            <v-btn target="_blank" href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20destino%20final%20OSARIOS%20%20%F0%9F%8E%9A%EF%B8%8F%20%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="mb-5 text-comfortaa font-weight-black botn ma-2 white--text" >
                            Comprar
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
                <div >
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="11">
                            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                Cofres Osarios
                            </h1>
                        </v-col>
                    </v-row>
                </div>  
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                        <VueSlickCarousel :arrows="false" v-bind="settings"  justify="center" align="center" class="rounded-xl mb-8">
                            <div justify="center" align="center" v-for="({src},index) in CofresOsarios"
                            :key="index" class=" mt-5 mb-5">
                                <div>
                                    <img :lazy-src="src" :src="src" width="80%">
                                </div>
                            </div>
                        </VueSlickCarousel>
                        <div>
                            <v-btn target="_blank" href="https://api.whatsapp.com/send?phone=573164708294&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20quiero%20el%20servicio%20de%20destino%20final%20OSARIOS%20%20%F0%9F%8E%9A%EF%B8%8F%20%2C%20me%20pueden%20brindar%20asesor%C3%ADa%20por%20favor%20%20%F0%9F%99%8F" justify="center" align="center" class="mb-5 text-comfortaa font-weight-black botn ma-2 white--text" >
                            Comprar
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
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
             Osarios:[
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664989800/Productos/Osario/xnk2fsfhzrz46zimrmub.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664989800/Productos/Osario/lofaxvotmxh00yjhxrbn.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664989800/Productos/Osario/z84gnfaresgm0vikvj0q.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664989800/Productos/Osario/db6lhiqhiuuabvq6wmjg.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664989800/Productos/Osario/rmxfwntsqsshwlgq2dof.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664396400/Productos/Osario/myldtjr9a2jhygp6jmh0.png'},
             ],
             CofresOsarios:[
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920667/Productos/Osario/kjzhyopaqtg6xym2rkxw.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920667/Productos/Osario/kgpfbcxadaf7zyvakvvy.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920667/Productos/Osario/uom880hepinttqmmacnq.png'},
                 {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1664920668/Productos/Osario/h1qifxk46vvu4tux9acp.png'},
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