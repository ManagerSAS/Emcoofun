<template>
    <div>
        <Header />
        <v-row justify="center" align="center" >
            <v-col cols="12" sm="12" md="10" lg="10">
                <Objetivo justify="center" align="center"/>
            </v-col>
        </v-row>
        <Premisa justify="center" align="center" style="background-color: rgb(227,235,235,0.5)"/>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="10" lg="10">
                <PlaneacionPlanSinergia/>
            </v-col>
        </v-row>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Header from '~/components/Header';
import Footer2 from '~/components/Footer2';
import Objetivo from '~/components/Sinergia/Objetivo.vue';
import Premisa from '~/components/Sinergia/Premisa.vue';
import PlaneacionPlanSinergia from '~/components/Sinergia/PlaneacionPlanSinergia.vue';

export default {
    components:{
    Header,
    Objetivo,
    Footer2,
    Premisa,
    PlaneacionPlanSinergia
}
    }
</script>