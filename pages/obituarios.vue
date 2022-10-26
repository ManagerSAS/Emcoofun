<template>
    <div>
        <Header/>
        <RedesSociales/>
        <CardsObituarios />
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import CardsObituarios from '~/components/Obituarios/CardObituarios.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer2.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';

export default {
    components:{
    CardsObituarios,
    Header,
    Footer,
    RedesSociales
},
}
</script>
