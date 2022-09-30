<template>
<v-row justify="center" align="center" class="mt-5 " >
    <v-col  cols="12" sm="12" md="12" lg="12" xl="11">
        <v-row align="center" justify="center" class="mt-5 mb-5"> 
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12" >
                <p class="mb-5 text-raleway"  style="color:#003B4C; font-size: 40px; font-weight: 900;"   justify="center" align="center"> Nuestras Asociadas</p>
                <!-- <VueSlickCarousel v-bind="settings" >
                    <div v-for="({src}, index) in articlesAdd2" 
                        :key="index" 
                        width="200px">
                        <div>
                          <img  :src="src"><br>
                        </div>
                    </div>
                 </VueSlickCarousel> -->
                 <v-row justify="center" align="center">
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/aseguradora.png">
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/cootrashuila.png">
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/cofeceneiva.png">
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/coocentral.png">
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/cootraslaboyana.png">
                    </v-col>
                 </v-row>
                  <v-row justify="center" align="center">
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/coopeaipe.png">
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/utrahuilca.png">
                    </v-col>
                  <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/coofisam.png">
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/coomorflorencia.png">
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                          <img  src="../../static/iconosemcoofun/coomotor.png">
                      </v-col>
                 </v-row> 
                 <v-row justify="center" align="center">
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                          <img  src="../../static/iconosemcoofun/equidad.png">
                      </v-col>
                      <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                          <img  src="../../static/iconosemcoofun/coofahuila.png">
                      </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/emcosalud.png">
                    </v-col> 
                      <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                          <img  src="../../static/iconosemcoofun/coopserfun.png">
                      </v-col>
                    <v-col cols="12" sm="10" md="4" lg="2" xl="2" >
                        <img  src="../../static/iconosemcoofun/credifuturo.png">
                    </v-col>
                 </v-row> 
                  <v-row justify="center" align="center">
                    <v-col cols="12" sm="10" md="4" lg="3" xl="3" >
                        <img  src="../../static/iconosemcoofun/fonedh.png">
                    </v-col>
                     <v-col cols="12" sm="10" md="4" lg="3" xl="3" >
                        <img  src="../../static/iconosemcoofun/coagrohuila.png">
                    </v-col>
                 </v-row> 
            </v-col>
        </v-row>
    </v-col>
</v-row>
</template>
<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    //  components: { VueSlickCarousel },
  data() {
    return{
        articlesAdd2: [
                { text: 'Credifuturo', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/dighqvtq6za5dwp0tryd.png' },
                { text: 'Cootrans Laboyana',        src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/vfpfkdcad7xfevkkhzxn.png' },
                { text: 'Utrahuilca',       src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/kcuyxmlyfsshywdmey8q.png' },
                { text: 'Fonedh',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401745/neiva/iconosemcoofun/al8ks4k7drcwb6439ptd.png' },
                { text: 'Coocentral',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/deempcpeto9u7otucp6q.png' },
                { text: 'EMCO Salud',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/err3ecl9j5jgt0syaju4.png' },
                { text: 'Cootranshuila',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/bzduqb52yi8hvafofhir.png' },      
                { text: 'Cofaceneiva',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/kpgeepujkgvcvfek0zlb.png' },      
                { text: 'Coopeaipe',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/z6kejjhib7mdp8vpylcg.png' },
                { text: 'Coagrohuila',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/gn2o12in27dvfbqgovjn.png' },      
                { text: 'Coomotorflorencia',          src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1653401744/neiva/iconosemcoofun/mqnkkrwgcl0dkyxh2d8d.png' },      
             ],
        settings:{
          "arrows": false,
          "infinite": true,
          "focusOnSelect": true,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "autoplay": true,
          "speed": 2000,
          "autoplaySpeed": 10,
          "cssEase": "linear"
          ,
          "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "infinite": true,
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
        }
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>