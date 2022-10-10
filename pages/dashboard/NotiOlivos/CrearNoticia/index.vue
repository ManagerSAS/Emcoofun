<template>
     <div>
        <Header style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
        <CrearNoticia/>  
        <Footer style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
     </div>
     
</template>
<script>
    import CrearNoticia from '~/components/OlivosObituarios/NotiOlivos/CrearNoticia/CrearNoticia';
import Header from '~/components/OlivosObituarios/layouts/Header.vue';
import Footer from '~/components/OlivosObituarios/layouts/Footer.vue';
    
    export default {
        middleware: 'auth',
        components:{
            CrearNoticia,
            Header,
            Footer
        },
    }
</script>