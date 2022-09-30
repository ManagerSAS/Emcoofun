<template>
    <div>
        <Header/>
        <v-row justify="center" align="center" class="mt-15">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row>
                    <v-col cols="12">
                        <h1 class="color-blue-dark display-1 font-weight-bold">
                            Solicitudes en línea
                        </h1>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
		<v-row justify="center" align="center" class="mt-md-2 mb-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Solicitudes/>
			</v-col>
		</v-row>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Solicitudes from '~/components/solicitudes/solicitudes.vue'
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue'
export default {
    components:{
    Solicitudes,
    Footer,
    Header
}
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.acortag-volver{
    text-decoration: none;
}
</style>