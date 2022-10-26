<template>
	<div>
		<Header/>
		<RedesSociales/>
		<Welcome/>
		<CallToAction style="background-color: rgb(227,235,235,0.5)"/>
		<Cards justify="center" align="center" class="mt-5 mb-4"/>
		<Sedes style="background-color: rgb(227,235,235,0.5)"/>
		<parqueCementerio />
		<Asistence style="background-color: rgb(227,235,235,0.2)"/>
		<Asociados />	
		<Testimonios style="background-color: rgb(227,235,235,0.5)"/>
		<PlanEmpresarial />
		<!-- <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/> -->
		<Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
	</div>
</template>

<script>

import Welcome from '~/components/index/Welcome.vue';
import Cards from '~/components/index/Cards.vue';
import Asistence from '~/components/index/Asistencias.vue';
import Sedes from '~/components/index/Sedes.vue';
import Asociados from '~/components/index/Asociados.vue';
import Testimonios from '~/components/index/Testimonios.vue';
import parqueCementerio from '~/components/index/parquecementerio.vue'
import PlanEmpresarial from '~/components/index/PlanEmpresarial.vue';
import Header from '~/components/Header.vue';
import CallToAction from '~/components/index/CallToAction.vue';
import Footer2 from '~/components/Footer2.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';

export default {
	components:{
    Welcome,
    Cards,
    Sedes,
    Asociados,
    parqueCementerio,
    Asistence,
    Testimonios,
    PlanEmpresarial,
    Header,
    CallToAction,
    Footer2,
    RedesSociales
},
	data() {
		return{
			show:true
		}
	}
}
</script>


