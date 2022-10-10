<template>
	<div >
		<Header/>
		<Terminos/>
		<Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
	</div>
</template>

<script>

import Terminos from '~/components/terminos/privacidad-datos.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
export default {
	components:{
    Terminos,
    Footer,
    Header
}
}
</script>
