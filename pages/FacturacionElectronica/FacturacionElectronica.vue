<template>
    <div>
        <Header/>
        <RedesSociales/>
        <FacturacionElectronica/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import FacturacionElectronica from '~/components/PagosEnLinea/FacturacionElectronica.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer2.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';
    export default {
    components: { FacturacionElectronica, Header, Footer, RedesSociales }
}
</script>