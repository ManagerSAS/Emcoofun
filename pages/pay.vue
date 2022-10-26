<template>
    <div>
        <Header/>
        <RedesSociales/>
        <Welcome/>
		<Pay/>
        <PagoPresencial/>
        <ApoyoOlivos/>
        <PlanEmpresarial/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import PagoPresencial from '../components/PagosEnLinea/PagoPresencial.vue';
import Pay from '~/components/PagosEnLinea/payonline.vue';
import ApoyoOlivos from '~/components/PagosEnLinea/ApoyoOlivos.vue';
import PlanEmpresarial from '~/components/index/PlanEmpresarial.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
import Welcome from '~/components/PagosEnLinea/welcome.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';
export default {
    components:{
    Pay,
    ApoyoOlivos,
    PlanEmpresarial,
    PagoPresencial,
    Footer,
    Header,
    Welcome,
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