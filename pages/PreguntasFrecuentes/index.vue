<template>
    <v-container fluid>
        <Header/>
        <RedesSociales/>
        <v-row justify="center" align="center" class="ml-5 mt-15 mb-10 mr-5">
            <v-col cols="12" sm="12" md="12" lg="12" xl="10">
                <PreguntasFrecuentes/>
            </v-col>
        </v-row>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </v-container >
</template>
<script>

import PreguntasFrecuentes from '~/components/PreguntasFrecuentes/PreguntasFrecuentes.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer2.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';

export default {
    components:{
    PreguntasFrecuentes,
    Header,
    Footer,
    RedesSociales
},
}
</script>