<template>
    <div>
        <Header/>
        <ObituarioEmcoofun city="Pitalito"/>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>

<script>
import ObituarioEmcoofun from '~/components/Obituarios/slider/obituarioSlider';
import Footer2 from '~/components/Footer2.vue';
import Header from '~/components/Header.vue';
export default {

    mounted(){
        // console.log(this.city)
    },
    components:{
    ObituarioEmcoofun,
    Footer2,
    Header
},
}
</script>