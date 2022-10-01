<template>
		<div>
			<Header/>
			<div class="flotante" justify="end" align="end">
				<v-tooltip left color="success" v-model="show">
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							elevation="24"
							class="whatsapp"
							width="50"
							height="50"
							v-bind="attrs"
							v-on="on"
							fab
							href="https://api.whatsapp.com/send?phone=+573160176457.&amp;text=Hola! me pueden apoyar?"
							target="_blank"
							>
						</v-btn>
					</template>
					<span>Chat Online</span>
				</v-tooltip><br>
				<v-btn
					elevation="24"
					class="facebook mt-2"
					width="50"
					height="50"
					fab
					href="https://www.facebook.com/LosOlivosEmcoofun"
					target="_blank"
					>
				</v-btn><br>
				<v-btn
					elevation="24"
					class="instagram mt-2"
					width="50"
					height="50"
					fab
					href="https://www.instagram.com/losolivosemcoofun/"
					target="_blank"
					>
				</v-btn>
			</div>	
			<Welcome/>
			<CallToAction style="background-color: rgb(227,235,235,0.5)"/>
			<Cards />
			<Sedes style="background-color: rgb(227,235,235,0.5)"/>
			<parqueCementerio />
			<Asistence style="background-color: rgb(227,235,235,0.2)"/>
			<Asociados />	
			<Testimonios style="background-color: rgb(227,235,235,0.5)"/>
			<!-- <v-row justify="center" align="center" class="ml-5 mt-15  mr-5">
				<v-col cols="12" sm="12" md="12" lg="12" xl="9">
					<Formcontact/>
				</v-col>
			</v-row> -->
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
// import Formcontact from '~/components/index/FormContact.vue';
import Testimonios from '~/components/index/Testimonios.vue';
import parqueCementerio from '~/components/index/parquecementerio.vue'
import PlanEmpresarial from '~/components/index/PlanEmpresarial.vue';
// import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue';
import CallToAction from '~/components/index/CallToAction.vue';
import Footer2 from '~/components/Footer2.vue';

export default {
	components:{
    Welcome,
    Cards,
    Sedes,
    Asociados,
    // Formcontact,
    parqueCementerio,
    Asistence,
    Testimonios,
    PlanEmpresarial,
    // Footer,
    Header,
    CallToAction,
    Footer2
},
	data() {
		return{
			show:true
		}
	}
}
</script>

<style lang="scss">

.color-blue-dark{
	color: #003B4C;
}
.btn-hover{
    transition: 250ms;
    &:hover{
        transform: scale(1.06);        
    }
}
.whatsapp{
	background-image: url('static/iconos/iconWhatsapp.png');
	background-repeat:no-repeat;
	height:100%;
	width:100%;
	// background-position:center;
}
.instagram{
	background-image: url('static/iconos/iconInsta.png');
}
.facebook{
	background-image: url('../static/iconos/iconFace.png');
}

@media only screen and(min-width: 1440px) { 
	.flotante{
		width: 220px;
		position: fixed;
		z-index: 100; 
		margin-left:85%;
	}
}
@media only screen and(max-width: 1380px) { 
	.flotante{
		width: 220px;
		position: fixed;
		z-index: 100; 
		margin-left:84%;
	}
}
@media only screen and(max-width: 1024px) { 
	.flotante{
		position: fixed;
		width: 100px;
		z-index: 100; 
		margin-left:82%;
	}
}
@media only screen and(max-width: 1280px) { 
	.flotante{
		position: fixed;
		z-index: 100; 
		margin-left:88%;
	}
}
@media only screen and(max-width: 430px) { 
	.flotante{
		width: 220px;
		position: fixed;
		z-index: 100; 
		margin-left:200px;
	}
}

.d-100{
    max-width: 100%;
}
.card-shadow{
	box-shadow: 1px 60px 55px -25px #00000018 !important;
}
.shadow-principal{
    box-shadow: 1px 2px 45px -8px rgba(0, 0, 0, 0.18) !important;
}
.card-shadow-2{
	box-shadow: 1px 35px 45px -25px rgba(0,0,0,0.09412) !important;
}


</style>
