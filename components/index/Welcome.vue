<template>
    <div>
        <v-carousel class="d-none d-lg-block d-xl-block pc" width="100%" height="100%" :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hover >
            <v-carousel-item
                class="bg-cover"
                v-for="({src},index) in sliderPc"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="d-none d-md-block d-lg-none" :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hover width="100%" height="100%">
            <v-carousel-item
                v-for="({src},index) in sliderLaptop"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="cel d-block d-sm-none"   :cycle="true"  delimiter-icon="mdi-seed" width="100%"  hide-delimiter-background show-arrows-on-hovers>
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
<style lang="scss">
    .bg-cover{
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
</style>

<script>
export default ({
    data() {
        return{
            sliderPc: [
                {src:'/banners/index/BannerPlanPc.jpg'},
                {src:'/banners/index/BannerPlanPc2.jpg'}
            ],
            sliderLaptop: [
                {src:"/banners/index/BannerPlanLaptop1.jpg"},
                {src:"/banners/index/BannerPlanLaptop2.jpg"}
            ],
            sliderCel: [
                {src:"/banners/index/BannerPlanCel1.jpg"},
                {src:"/banners/index/BannerPlanCel2.jpg"}
            ]
        }
    },
})
</script>