<template>
    <div >
        <Header/>
        <Welcome/>
        <CicloHomenaje  style="background-color: rgb(227,235,235,0.5)" justify="center" align="center" class="pt-5 pb-5"/>

        <v-row justify="center" align="center" class="mt-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <parqueCementerio/>
            </v-col>
        </v-row> 
         <v-row style="background-color: rgb(227,235,235,0.5)" justify="center" align="center" class="mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="10" xl="9">
                <PlansExequial/>
            </v-col>
        </v-row> 
        <v-row justify="center" align="center">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Testimonios/>
            </v-col>
        </v-row>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>     
    </div>
</template>
<script>


import Welcome from '~/components/homenajes/Welcome.vue';
import CicloHomenaje from '~/components/homenajes/cicloHomenaje.vue';
import parqueCementerio from '~/components/index/parquecementerio.vue'
import PlansExequial from '~/components/homenajes/PlanExequial.vue';
import Testimonios from '~/components/index/Testimonios.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';


export default {
    components:{
        Welcome,
        CicloHomenaje,
        parqueCementerio,
        PlansExequial,
        Testimonios,
        Footer,
        Header
    },
}
</script>

<style lang="scss">
.olivos--text{
    color: #234b50;
}
</style>