<template>
    <div>
        <Header />
        <VelacionVirtual/>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Header from '~/components/Header';
import Footer2 from '~/components/Footer2';
import VelacionVirtual from '~/components/VelacionVirtual/index.vue';


export default {
    components:{
    Header,
    Footer2,
    VelacionVirtual
}
    }
</script>