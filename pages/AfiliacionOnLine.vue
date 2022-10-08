<template>
	<div >
		<Header/>
		<v-row  class="mt-md-15 ma-2">
			<v-col cols="12" sm="12" md="12" lg="12" xl="10">
		        <v-row justify="center" align="center">
					<v-col cols="12" sm="12" md="12" lg="10" class="text-comfortaa">
						<h1 style="color:#003B4C; font-size: 40px; background: linear-gradient(to right, #EC6480, #E83E58); -webkit-background-clip: text; -webkit-text-fill-color: transparent;" class="color-blue-dark font-weight-bold mb-6">
							Afiliaciones en línea
						</h1>
						<div style="font-size:15px">
							<p class="secondary--text">
								Diligencie su afiliación a Los Olivos Emcoofun, recuerde que al contratar la previsión exequial se acoge a las condiciones de los clausulados establecidos en el contrato exclusivo para afiliaciones online (aplican términos y condiciones US4) por la empresa EMCOOFUN por lo que su afiliación será revisada y aprobada mediante correo electrónico.
							</p>
							<p>
								La vigencia del contrato será de un año contado a partir de la fecha de pago de su plan.
							</p>
							<p>
								En caso de un evento comuníquese con las líneas gratuitas:
							</p>
							<div>
								<span style="color:#003B4C; font-weight: bold;">Neiva:</span> (8) 871 5555 - 316 8747157  
							</div>
							<div>
								<span style="color:#003B4C; font-weight: bold;">Florencia:</span> (4) 435 3314 - (4) 435 1433 - (4) 435 7558 - 316 8747213
							</div>
							<div>
								<span style="color:#003B4C; font-weight: bold;">Garzón:</span> (8) 833 2021 - (8) 833 4879 - 316 8747185   
							</div>
							<div>
								<span style="color:#003B4C; font-weight: bold;">Pitalito:</span> (8) 836 1961 - (8) 836 6929 - 316 8747226
							</div>
						</div>
					</v-col>
				</v-row>
			</v-col>
        </v-row>
		<v-row justify="center" align="center" class="mb-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Formulario/>
			</v-col>
		</v-row>
		<Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>

import Formulario from '../components/forms/AfiliacionOnline/AfiliacionOnline.vue';
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