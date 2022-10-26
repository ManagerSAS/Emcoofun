<template>
    <div>
        <Header/>
        <RedesSociales/>
        <ActualizacionRTE/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import ActualizacionRTE from '~/components/ActualizacionRTE/index.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer2.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';
    
    export default {
        components:{
    Header,
    ActualizacionRTE,
    Footer,
    RedesSociales
},
        
    }
</script>