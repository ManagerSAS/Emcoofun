<template>
    <div>
        <Header />
        <Objetivo style="background-color: rgb(227,235,235,0.5)"/>
        <Premisa/>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Header from '~/components/Header';
import Footer2 from '~/components/Footer2';
import Objetivo from '~/components/Sinergia/Objetivo.vue';
import Premisa from '~/components/Sinergia/Premisa.vue';

export default {
    components:{
    Header,
    Objetivo,
    Footer2,
    Premisa
}
    }
</script>