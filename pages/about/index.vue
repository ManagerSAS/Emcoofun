<template>
    <div >
        <Header/>
        <RedesSociales/>
        <History style="background-color: rgb(227,235,235,0.5)"/>
        <Cards/>
        <Asociados style="background-color: rgb(227,235,235,0.5)"/>
        <Redolivos/>
        <Sedesolivos/>
        <ParqueCementerio style="background-color: rgb(227,235,235,0.5)"/>
        <GaleriaEventos/>
        <CifrasEmcoofun style="background-color: rgb(227,235,235,0.5)"/>
        <Values />  
        <Principies style="background-color: rgb(227,235,235,0.5)"/>  
        <Testimonios/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import History from '~/components/about/aboutDescription.vue';
import Cards from '~/components/about/cardsVisionMision.vue';
import Asociados from '~/components/index/Asociados.vue';
import Redolivos from '~/components/about/redOlivos.vue';
import Values from '~/components/about/valuesEmcoofun.vue';
import Principies from '~/components/about/principiesEmcoofun.vue';
import Testimonios from '~/components/index/Testimonios.vue';
import CifrasEmcoofun from '~/components/about/cifrasEmcoofun.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
import ParqueCementerio from '~/components/sedes/parqueCementerio.vue';
import Sedesolivos from '~/components/index/Sedes.vue';
import GaleriaEventos from '~/components/about/GaleriaEventos.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';


export default {
    components:{
    History,
    Cards,
    Redolivos,
    Values,
    Principies,
    Asociados,
    Testimonios,
    CifrasEmcoofun,
    Footer,
    Header,
    ParqueCementerio,
    Sedesolivos,
    GaleriaEventos,
    RedesSociales
},
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.bg-map{
    background-image: url('https://res.cloudinary.com/dbepipmro/image/upload/v1632170476/map_tpx0lm.jpg');
    background-size: 100%;
}
</style>