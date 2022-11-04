<template>
    <v-container fluid>
        <div justify="center" align="center" cols="12" sm="12" md="12" lg="12">
            <h1 class="mb-6 pt-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                RED OLIVOS
            </h1>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <VueSlickCarousel :arrows="false" v-bind="settings">
                    <div v-for="({src,nameSede} ,index) in Eventos" :key="index">
                        <v-img
                            class="rounded-xl img-principal"  max-width="80%" 
                            :src="src"
                        ></v-img><br>
                        <p class="text-comfortaa" style="color:#003B4C; font-size: 20px;">{{nameSede}}</p>
                    </div>
                </VueSlickCarousel>
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
        Eventos:[
            // Barrancabermeja y Sur de Bolivar
            {src:'/Galeria/Redolivos/1_Barrancabermeja_y_Sur_de_Bolivar-1.png',nameSede:'Barrancabermeja y Sur de Bolivar'},
            {src:'/Galeria/Redolivos/1_Barrancabermeja_y_Sur_de_Bolivar-2.png',nameSede:'Barrancabermeja y Sur de Bolivar'},
            {src:'/Galeria/Redolivos/1_Barrancabermeja_y_Sur_de_Bolivar-3.png',nameSede:'Barrancabermeja y Sur de Bolivar'},
            {src:'/Galeria/Redolivos/1_Barrancabermeja_y_Sur_de_Bolivar-4.png',nameSede:'Barrancabermeja y Sur de Bolivar'},
            {src:'/Galeria/Redolivos/1_Barrancabermeja_y_Sur_de_Bolivar-5.png',nameSede:'Barrancabermeja y Sur de Bolivar'},
            // Atantico-Cesar-y-La-Guajira
            {src:'/Galeria/Redolivos/2-Atantico-Cesar-y-La-Guajira-1.png',nameSede:'Atantico, Cesar y La Guajira'},
            {src:'/Galeria/Redolivos/2-Atantico-Cesar-y-La-Guajira-2.png',nameSede:'Atantico, Cesar y La Guajira'},
            {src:'/Galeria/Redolivos/2-Atantico-Cesar-y-La-Guajira-3.png',nameSede:'Atantico, Cesar y La Guajira'},
            {src:'/Galeria/Redolivos/2-Atantico-Cesar-y-La-Guajira-4.png',nameSede:'Atantico, Cesar y La Guajira'},
            {src:'/Galeria/Redolivos/2-Atantico-Cesar-y-La-Guajira-5.png',nameSede:'Atantico, Cesar y La Guajira'},
            // Cundinamarca
            {src:'/Galeria/Redolivos/3-Cundinamarca-1.png',nameSede:'Cundinamarca'},
            {src:'/Galeria/Redolivos/3-Cundinamarca-2.png',nameSede:'Cundinamarca'},
            {src:'/Galeria/Redolivos/3-Cundinamarca-3.png',nameSede:'Cundinamarca'},
            {src:'/Galeria/Redolivos/3-Cundinamarca-4.png',nameSede:'Cundinamarca'},
            // Bucaramanga
            {src:'/Galeria/Redolivos/4-Bucaramanga-1.png',nameSede:'Bucaramanga'},
            {src:'/Galeria/Redolivos/4-Bucaramanga-2.png',nameSede:'Bucaramanga'},
            {src:'/Galeria/Redolivos/4-Bucaramanga-3.png',nameSede:'Bucaramanga'},
            {src:'/Galeria/Redolivos/4-Bucaramanga-4.png',nameSede:'Bucaramanga'},
            {src:'/Galeria/Redolivos/4-Bucaramanga-5.png',nameSede:'Bucaramanga'},
            // Caldas
            {src:'/Galeria/Redolivos/5-Caldas-1.png',nameSede:'Caldas'},
            {src:'/Galeria/Redolivos/5-Caldas-2.png',nameSede:'Caldas'},
            {src:'/Galeria/Redolivos/5-Caldas-3.png',nameSede:'Caldas'},
            {src:'/Galeria/Redolivos/5-Caldas-4.png',nameSede:'Caldas'},
            {src:'/Galeria/Redolivos/5-Caldas-5.png',nameSede:'Caldas'},
            // Valle Cauca y Narino
            {src:'/Galeria/Redolivos/6-Valle-Cauca-y-Narino-1.png',nameSede:'Valle del Cauca y Narino'},
            {src:'/Galeria/Redolivos/6-Valle-Cauca-y-Narino-2.png',nameSede:'Valle del Cauca y Narino'},
            {src:'/Galeria/Redolivos/6-Valle-Cauca-y-Narino-3.png',nameSede:'Valle del Cauca y Narino'},
            {src:'/Galeria/Redolivos/6-Valle-Cauca-y-Narino-4.png',nameSede:'Valle del Cauca y Narino'},
            {src:'/Galeria/Redolivos/6-Valle-Cauca-y-Narino-5.png',nameSede:'Valle del Cauca y Narino'},
            // Bolivar
            {src:'/Galeria/Redolivos/7-Bolivar-1.png',nameSede:'Bolivar'},
            {src:'/Galeria/Redolivos/7-Bolivar-2.png',nameSede:'Bolivar'},
            {src:'/Galeria/Redolivos/7-Bolivar-3.png',nameSede:'Bolivar'},
            {src:'/Galeria/Redolivos/7-Bolivar-4.png',nameSede:'Bolivar'},
            {src:'/Galeria/Redolivos/7-Bolivar-5.png',nameSede:'Bolivar'},
            // Tolima
            {src:'/Galeria/Redolivos/9-Tolima-1.png',nameSede:'Tolima'},
            {src:'/Galeria/Redolivos/9-Tolima-2.png',nameSede:'Tolima'},
            {src:'/Galeria/Redolivos/9-Tolima-3.png',nameSede:'Tolima'},
            {src:'/Galeria/Redolivos/9-Tolima-4.png',nameSede:'Tolima'},
            {src:'/Galeria/Redolivos/9-Tolima-5.png',nameSede:'Tolima'},
            // Antioquia
            {src:'/Galeria/Redolivos/10-Antioquia-1.png',nameSede:'Antioquia'},
            {src:'/Galeria/Redolivos/10-Antioquia-2.png',nameSede:'Antioquia'},
            {src:'/Galeria/Redolivos/10-Antioquia-3.png',nameSede:'Antioquia'},
            {src:'/Galeria/Redolivos/10-Antioquia-4.png',nameSede:'Antioquia'},
            {src:'/Galeria/Redolivos/10-Antioquia-5.png',nameSede:'Antioquia'},
            {src:'/Galeria/Redolivos/10-Antioquia-6.png',nameSede:'Antioquia'},
            // Cordoba y Sucre
            {src:'/Galeria/Redolivos/11-Cordoba-y-Sucre-1.png',nameSede:'Cordoba y Sucre'},
            {src:'/Galeria/Redolivos/11-Cordoba-y-Sucre-2.png',nameSede:'Cordoba y Sucre'},
            {src:'/Galeria/Redolivos/11-Cordoba-y-Sucre-3.png',nameSede:'Cordoba y Sucre'},
            {src:'/Galeria/Redolivos/11-Cordoba-y-Sucre-4.png',nameSede:'Cordoba y Sucre'},
            {src:'/Galeria/Redolivos/11-Cordoba-y-Sucre-5.png',nameSede:'Cordoba y Sucre'},
            // Huila y Florencia
            {src:'/Galeria/Redolivos/12-Huila-y-Florencia-1.png',nameSede:'Huila y Florencia'},
            {src:'/Galeria/Redolivos/12-Huila-y-Florencia-2.png',nameSede:'Huila y Florencia'},
            {src:'/Galeria/Redolivos/12-Huila-y-Florencia-3.png',nameSede:'Huila y Florencia'},
            {src:'/Galeria/Redolivos/12-Huila-y-Florencia-4.png',nameSede:'Huila y Florencia'},
            {src:'/Galeria/Redolivos/12-Huila-y-Florencia-5.png',nameSede:'Huila y Florencia'},
            // Quindio y Risaralda
            {src:'/Galeria/Redolivos/13-Quindio-y-Risaralda-1.png',nameSede:'Quindio y Risaralda'},
            {src:'/Galeria/Redolivos/13-Quindio-y-Risaralda-2.png',nameSede:'Quindio y Risaralda'},
            {src:'/Galeria/Redolivos/13-Quindio-y-Risaralda-3.png',nameSede:'Quindio y Risaralda'},
            {src:'/Galeria/Redolivos/13-Quindio-y-Risaralda-4.png',nameSede:'Quindio y Risaralda'},
            {src:'/Galeria/Redolivos/13-Quindio-y-Risaralda-5.png',nameSede:'Quindio y Risaralda'},
            // Magdalena
            {src:'/Galeria/Redolivos/14-Magdalena-1.png',nameSede:'Magdalena'},
            {src:'/Galeria/Redolivos/14-Magdalena-2.png',nameSede:'Magdalena'},
            {src:'/Galeria/Redolivos/14-Magdalena-3.png',nameSede:'Magdalena'},
            {src:'/Galeria/Redolivos/14-Magdalena-4.png',nameSede:'Magdalena'},
            {src:'/Galeria/Redolivos/14-Magdalena-5.png',nameSede:'Magdalena'},
            // Norte del Valle
            {src:'/Galeria/Redolivos/15-Norte-del-Valle-1.png',nameSede:'Norte del Valle'},
            {src:'/Galeria/Redolivos/15-Norte-del-Valle-2.png',nameSede:'Norte del Valle'},
            {src:'/Galeria/Redolivos/15-Norte-del-Valle-3.png',nameSede:'Norte del Valle'},
            {src:'/Galeria/Redolivos/15-Norte-del-Valle-4.png',nameSede:'Norte del Valle'},
            // Llanos Orientales
            {src:'/Galeria/Redolivos/16-Llanos-Orientales-1.png',nameSede:'Llanos Orientales'},
            {src:'/Galeria/Redolivos/16-Llanos-Orientales-2.png',nameSede:'Llanos Orientales'},
            {src:'/Galeria/Redolivos/16-Llanos-Orientales-3.png',nameSede:'Llanos Orientales'},
            {src:'/Galeria/Redolivos/16-Llanos-Orientales-4.png',nameSede:'Llanos Orientales'},
            {src:'/Galeria/Redolivos/16-Llanos-Orientales-5.png',nameSede:'Llanos Orientales'},
            {src:'/Galeria/Redolivos/16-Llanos-Orientales-6.png',nameSede:'Llanos Orientales'},
        ],
        settings  :{
            "autoplay": true,
            "focusOnSelect": true,
            "infinite": true,
            "autoplaySpeed": 3000,
            "slidesToShow": 5,
            "slidesToScroll": 1,
            "responsive": [
                {
                "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": false
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