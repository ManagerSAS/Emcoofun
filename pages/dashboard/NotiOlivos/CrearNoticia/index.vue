<template>
     <div>
        <Header style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
        <v-row justify="center" align="center" class="mt-15 mb-15">
            <v-col  cols="12" sm="12" md="10" lg="8" xl="8">
                <CrearNoticia/>
            </v-col>
        </v-row>
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