<template>
    <div>
        <Header/>
        <FacturacionElectronica/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import FacturacionElectronica from '~/components/PagosEnLinea/FacturacionElectronica.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer2.vue';
    export default {
    components: { FacturacionElectronica, Header, Footer }
}
</script>