<template>
    <div>
        <v-carousel class="d-none d-lg-block d-xl-block pc" width="100%" :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hover >
            <v-carousel-item
                
                v-for="({src},index) in sliderPc"
                :key="index"
                :src="src"
                cycle
            >
            </v-carousel-item>
        </v-carousel>
        <v-carousel class="d-none d-md-block d-lg-none laptop" :cycle="true"  delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hover width="100%">
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
<script>
export default ({
    data() {
        return{
            sliderPc: [
                {src:'https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_500,w_1921/v1662383569/Banners/Home/dtgvmipzpgtph4jhisg9.png'},
                {src:"https://res.cloudinary.com/dazyyib7u/image/upload/c_scale,h_500,w_1921/v1662383759/Banners/Home/kcnhsrmwi4psggtseajj.png"}
            ],
            sliderLaptop: [
                {src:"https://res.cloudinary.com/dazyyib7u/image/upload/v1662383569/Banners/Home/pplwcntmi0wtkxtbtsq6.png"},
                {src:"https://res.cloudinary.com/dazyyib7u/image/upload/v1662383759/Banners/Home/mbuoaqakniwwltxbqkyp.png"}
            ],
            sliderCel: [
                {src:"https://res.cloudinary.com/dazyyib7u/image/upload/v1662383569/Banners/Home/uolhwwijhpxw5nrd4ani.png"},
                {src:"https://res.cloudinary.com/dazyyib7u/image/upload/v1662383759/Banners/Home/iafc8f5jv5cb8qafrfp3.png"}
            ]
        }
    },
})
</script>