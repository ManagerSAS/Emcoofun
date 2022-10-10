<template>
    <div>
        <Header style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
        <VerHomenajes/>
        <Footer style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
    </div>
</template>
<script>
import Header from '~/components/OlivosObituarios/layouts/Header.vue';
import Footer from '~/components/OlivosObituarios/layouts/Footer.vue';
import VerHomenajes from '~/components/OlivosObituarios/Homenajes/VerHomenajes.vue';

export default {
    middleware: 'auth',
    components:{
    Header,
    Footer,
    VerHomenajes
},
}
</script>