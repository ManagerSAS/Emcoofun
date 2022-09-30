<template>
	<div >
		<Header/>
		<v-row justify="center" align="center" class="pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Terminos/>
			</v-col>
		</v-row>
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
