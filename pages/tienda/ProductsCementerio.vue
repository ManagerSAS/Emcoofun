<template>
    <div >
        <Header/>
        <RedesSociales/>
        <Welcome/>
        <div >
            <ServiciosFunerarios class="mb-5" style="background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center; background-repeat: no-repeat;"/>
            <DestinoFinalCenizas class="mb-5" style="background-color: rgb(227,235,235,0.5); background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center; background-repeat: no-repeat;"/>
            <Osarios style="background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center; background-repeat: no-repeat;"/>
            <Columbarios class="mb-5" style="background-color: rgb(227,235,235,0.5); background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center; background-repeat: no-repeat;"/>
            <ServiceJardin style="background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center; background-repeat: no-repeat;"/>
            <ServiceMarmol  style="background-color: rgb(227,235,235,0.5); background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center; background-repeat: no-repeat;"/>
        </div>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Welcome from '~/components/tienda/welcome.vue'
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue'
import ServiciosFunerarios from '~/components/tienda/ServiciosFunerarios.vue'
import DestinoFinalCenizas from '~/components/tienda/DestinoFinalCenizas.vue'
import Osarios from '~/components/tienda/Osarios.vue'
import Columbarios from '~/components/tienda/Columbarios.vue'
import ServiceJardin from '~/components/tienda/ServiceJardin.vue'
import ServiceMarmol from '~/components/tienda/ServiceMarmol.vue'
import RedesSociales from '~/components/RedesSociales/index.vue'
export default ({
    components:{
    Header,
    Welcome,
    ServiciosFunerarios,
    DestinoFinalCenizas,
    Osarios,
    Columbarios,
    ServiceJardin,
    ServiceMarmol,
    Footer,
    RedesSociales
}
})

</script>