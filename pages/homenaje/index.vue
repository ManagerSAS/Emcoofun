<template>
    <div >
        <Header/>
        <RedesSociales/>
        <Welcome/>
        <CicloHomenaje justify="center" align="center" class="mb-10"/>
        <parqueCementerio style="background-color: rgb(227,235,235,0.5)"/> 
        <PlansExequial/>
        <Testimonios style="background-color: rgb(227,235,235,0.5)"/> 
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>     
    </div>
</template>
<script>
import Welcome from '~/components/homenajes/Welcome.vue';
import CicloHomenaje from '~/components/homenajes/cicloHomenaje.vue';
import parqueCementerio from '~/components/index/parquecementerio.vue'
import PlansExequial from '~/components/homenajes/PlanExequial.vue';
import Testimonios from '~/components/index/Testimonios.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';
export default {
    components:{
    Welcome,
    CicloHomenaje,
    parqueCementerio,
    PlansExequial,
    Testimonios,
    Footer,
    Header,
    RedesSociales
},
}
</script>
