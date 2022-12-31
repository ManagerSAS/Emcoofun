<template>
	<div >
		<Header/>
        <RedesSociales/>
		<Formulario class="text-raleway"/>
		<Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>

import Formulario from '../components/forms/homenajes/homenajes-olivos.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
import RedesSociales from '~/components/RedesSociales/index.vue';
export default {
    components:{
    Formulario,
    Footer,
    Header,
    RedesSociales
}
}
</script>