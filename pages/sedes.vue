<template>
    <div>
        <Header/>
        <Sedesolivos style="background-color: rgb(227,235,235,0.5)"/>
        <Parquescementerio />
        <ServiciosEmcoofun style="background-color: rgb(227,235,235,0.5)"/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Parquescementerio from '~/components/sedes/parqueCementerio.vue'
import Sedesolivos from '~/components/sedes/sedesolivos.vue'
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue'
import ServiciosEmcoofun from '~/components/sedes/ServiciosEmcoofun.vue'
export default ({
    components:{
        Sedesolivos,
        Parquescementerio,
        Footer,
        Header,
        ServiciosEmcoofun
    }
})
</script>
