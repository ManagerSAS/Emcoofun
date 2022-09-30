<template>
    <div>
         <v-carousel class="d-none d-lg-block d-xl-block pc"  delimiter-icon="mdi-seed"  hide-delimiter-background  height="600">
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
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1661782025/neiva/banners/twpoop0xabnjnatusebr.png"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/olivos-villavicencio/image/upload/v1651004790/f3nggn4zbwrsh0u6bsim.jpg"}
            ],
            sliderLaptop: [
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1661782024/neiva/banners/egnkkn27vsdxqx2gw6mk.png"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657970/fubdjyggapah7no5jyen.jpg"}
            ],
            sliderCel: [
                {titulo: "Servicio al cliente", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1661782024/neiva/banners/ml5metcv1cuptsydb7dp.png"},
                {titulo: "La tranquilidad", src:"https://res.cloudinary.com/dhl17zanz/image/upload/v1653657007/inzy2j5jwpxivy1u5ldy.jpg"}
            ]
        }
    },
})
</script>
