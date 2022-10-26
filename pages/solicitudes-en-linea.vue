<template>
    <div>
        <Header/>
        <RedesSociales/>
        <Solicitudes/>	
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Solicitudes from '~/components/solicitudes/solicitudes.vue'
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue'
import RedesSociales from '~/components/RedesSociales/index.vue';
export default {
    components:{
    Solicitudes,
    Footer,
    Header,
    RedesSociales
}
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.acortag-volver{
    text-decoration: none;
}
</style>