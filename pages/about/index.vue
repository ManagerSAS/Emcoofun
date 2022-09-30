<template>
    <div >
        <Header/>
       <History style="background-color: rgb(227,235,235,0.5)"/>
        <v-row justify="center" align="center" class="mt-15 mb-5 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="10" xl="8">
                <Cards/>
            </v-col>
        </v-row>
        <Asociados style="background-color: rgb(227,235,235,0.5)"/>
        <v-row justify="center" align="center" class="mt-5">
			<v-col cols="12" sm="12" md="12" lg="12" xl="10">
                <Redolivos/>
            </v-col>
        </v-row>
        <Sedesolivos/>
        <ParqueCementerio style="background-color: rgb(227,235,235,0.5)"/>
        <CifrasEmcoofun />
        <v-row style="background-color: rgb(227,235,235,0.5)" justify="center" align="center" class="mt-15 mb-10 pa-5 pa-md-5">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Values />
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Principies/>
            </v-col>
        </v-row>
        <v-row style="background-color: rgb(227,235,235,0.5)" justify="center" align="center">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Testimonios/>
            </v-col>
        </v-row>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import History from '~/components/about/aboutDescription.vue';
import Cards from '~/components/about/cardsVisionMision.vue';
import Asociados from '~/components/index/Asociados.vue';
import Redolivos from '~/components/about/redOlivos.vue';
import Values from '~/components/about/valuesEmcoofun.vue';
import Principies from '~/components/about/principiesEmcoofun.vue';
import Testimonios from '~/components/index/Testimonios.vue';
import CifrasEmcoofun from '~/components/about/cifrasEmcoofun.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
import ParqueCementerio from '~/components/sedes/parqueCementerio.vue';
import Sedesolivos from '~/components/index/Sedes.vue';


export default {
    components:{
    History,
    Cards,
    Redolivos,
    Values,
    Principies,
    Asociados,
    Testimonios,
    CifrasEmcoofun,
    Footer,
    Header,
    ParqueCementerio,
    Sedesolivos
},
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.bg-map{
    background-image: url('https://res.cloudinary.com/dbepipmro/image/upload/v1632170476/map_tpx0lm.jpg');
    background-size: 100%;
}
</style>