<template>
    <div>
        <Header />
        <Notiolivos/>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Header from '~/components/Header';
import Notiolivos from '~/components/Notiolivos/index.vue';
import Footer2 from '~/components/Footer2';

export default {
    components:{
        Header,
        Notiolivos,
        Footer2
    }
    }
</script>