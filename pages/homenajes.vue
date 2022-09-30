<template>
	<div >
		<Header/>
		<v-row justify="center" align="center" class="mt-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="9" lg="9" xl="9">
		        <v-row class="ma-2">
					<v-col cols="12" sm="12" md="12" lg="10">
						<h1 class="color-blue-dark display-1 font-weight-bold mb-6">
							Planeacion del homenaje:
						</h1>
						<p class="secondary--text">
							Para lograr una oportuna atención en la solicitud, llena el siguiente formulario con la información pertinente
						</p>
					</v-col>
				</v-row>
			</v-col>
        </v-row>
		<v-row justify="center" align="center" class="mb-15 pa-md-0">
			<v-col cols="12" sm="12" md="9" lg="9" xl="9">
				<Formulario/>
			</v-col>
		</v-row>
		<Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>

import Formulario from '../components/forms/homenajes/homenajes-olivos.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
export default {
    components:{
    Formulario,
    Footer,
    Header
}
}
</script>