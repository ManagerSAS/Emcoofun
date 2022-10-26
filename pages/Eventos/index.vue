<template>
    <div >
        <Header/>
        <RedesSociales />
        <Eventos justify="center" align="center"/>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>

</template>

<script>
import Header from "~/components/Header.vue";
import Eventos from "~/components/Eventos/Eventos.vue";
import Footer2 from "~/components/Footer2.vue";
import RedesSociales from "~/components/RedesSociales/index.vue";
export default ({
    components: {
    Header,
    Eventos,
    Footer2,
    RedesSociales
}, 
})
</script>
