<template>
    <div>
        <Header/>
        <ObituariosEmcoofun city="Florencia"/>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>

<script>
import ObituariosEmcoofun  from '~/components/Obituarios/slider/obituarioSlider';
import Header from '~/components/Header.vue';
import Footer2 from '~/components/Footer2.vue';
export default {

    mounted(){
        // console.log(this.city)
    },
    components:{
    ObituariosEmcoofun,
    Header,
    Footer2
},
}
</script>