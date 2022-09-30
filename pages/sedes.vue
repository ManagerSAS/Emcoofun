<template>
    <div>
        <Header/>
        <v-row style="background-color: rgb(227,235,235,0.5)" justify="center" align="center" >
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <Sedesolivos />
            </v-col>
        </v-row>
        <v-row justify="center" align="center" c>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <Parquescementerio />
            </v-col>
        </v-row>
        <v-row style="background-color: rgb(227,235,235,0.5)" justify="center" align="center" >
            <v-col cols="12" sm="12" md="10" lg="8" xl="8">
                <ServiciosEmcoofun />
            </v-col>
        </v-row>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Parquescementerio from '~/components/sedes/parqueCementerio.vue'
import Sedesolivos from '~/components/sedes/sedesolivos.vue'
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue'
import ServiciosEmcoofun from '~/components/sedes/ServiciosEmcoofun.vue'
export default ({
    components:{
        Sedesolivos,
        Parquescementerio,
        Footer,
        Header,
        ServiciosEmcoofun
    }
})
</script>
