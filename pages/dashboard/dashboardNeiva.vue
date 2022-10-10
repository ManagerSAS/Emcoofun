<template>
    <div>
        <Header style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
        <Dashboard/>
        <Footer style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
    </div>
</template>
<script>
import Header from '~/components/OlivosObituarios/layouts/Header.vue';
import Dashboard from '~/components/OlivosObituarios/dashboard/index.vue';
import Footer from '~/components/OlivosObituarios/layouts/Footer.vue';

export default {
    middleware: 'auth',
    components:{
        Header,
        Dashboard,
        Footer
    },

}
</script>