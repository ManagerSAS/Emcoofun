<template>
    <div>
        <Header/>
        <Welcome/>
        <ServiciosFunerarios class="mb-5"/>
        <DestinoFinalCenizas class="mb-5" style="background-color: rgb(227,235,235,0.5)"/>
        <OtrosServicios/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Welcome from '~/components/tienda/welcome.vue'
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue'
import ServiciosFunerarios from '~/components/tienda/ServiciosFunerarios.vue'
import DestinoFinalCenizas from '~/components/tienda/DestinoFinalCenizas.vue'
import OtrosServicios from '~/components/tienda/OtrosServicios.vue'
export default ({
    components:{
        Header,
        Welcome,
        ServiciosFunerarios,
        DestinoFinalCenizas,
        OtrosServicios,
        Footer
    }
})

</script>