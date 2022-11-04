<template>
    <div>
         <v-carousel class="d-none d-lg-block d-xl-block pc"  delimiter-icon="mdi-seed"  hide-delimiter-background  width="100%">
            <v-carousel-item
                v-for="({src},index) in sliderPc"
                :key="index"
                :src="src"
                cycle 
                
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="d-none d-md-block d-lg-none laptop" cycle  delimiter-icon="mdi-seed"  hide-delimiter-background height="350" >
            <v-carousel-item
                v-for="({src},index) in sliderLaptop"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="cel d-block d-sm-none"   cycle  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows width="414">
            <v-carousel-item
                v-for="({src},index) in sliderCel"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
export default ({
    data() {
        return{
            sliderPc: [
                {titulo: "Servicio al cliente", src:"/banners/plans/bannerPC1.jpg"},
                {titulo: "La tranquilidad", src:"/banners/plans/bannerPC2.jpg"}
            ],
            sliderLaptop: [
                {titulo: "Servicio al cliente", src:"/banners/plans/bannerLaptop1.jpg"},
                {titulo: "La tranquilidad", src:"/banners/plans/bannerLaptop2.jpg"}
            ],
            sliderCel: [
                {titulo: "Servicio al cliente", src:"/banners/plans/bannercel1.jpg"},
                {titulo: "La tranquilidad", src:"/banners/plans/bannercel2.jpg"}
            ]
        }
    },
})
</script>
