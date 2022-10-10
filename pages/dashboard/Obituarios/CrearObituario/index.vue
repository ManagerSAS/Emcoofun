<template>
    <div>
        <Header style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
        <CrearObituario/>
        <Footer style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
    </div>
</template>
<script>
import Header from '~/components/OlivosObituarios/layouts/Header.vue';
import CrearObituario from '~/components/OlivosObituarios/CrearObituario/index.vue';
import Footer from '~/components/OlivosObituarios/layouts/Footer.vue';

export default {
    middleware: 'auth',
    components:{
    Header,
    CrearObituario,
    Footer
},
}
</script>