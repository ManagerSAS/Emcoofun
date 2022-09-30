<template>
    <div>
        <Header/>
        <Welcome/>
		<v-row justify="center" align="center" class="mt-md-2 mb-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Pay/>
			</v-col>
		</v-row>
        <PagoPresencial/>
        <ApoyoOlivos/>
        <PlanEmpresarial/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import PagoPresencial from '../components/PagosEnLinea/PagoPresencial.vue';
import Pay from '~/components/PagosEnLinea/payonline.vue';
import ApoyoOlivos from '~/components/PagosEnLinea/ApoyoOlivos.vue';
import PlanEmpresarial from '~/components/index/PlanEmpresarial.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
import Welcome from '~/components/PagosEnLinea/welcome.vue';
export default {
    components:{
    Pay,
    ApoyoOlivos,
    PlanEmpresarial,
    PagoPresencial,
    Footer,
    Header,
    Welcome
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