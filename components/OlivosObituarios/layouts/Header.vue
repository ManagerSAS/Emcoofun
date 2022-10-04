<template>
    <div class="pt-5 fixed-bar header-section">
        <div justify="center" align="center" >
            <v-row >
                <v-col cols="12" sm="2" md="2" lg="2" xl="2">
                    <v-app-bar-nav-icon style="background: linear-gradient(to right, #9CC9D2, #499893);" class="text-comfortaa ma-5"  @click="drawer = !drawer"></v-app-bar-nav-icon>
                    <v-navigation-drawer justify="center" align="start" v-model="drawer"  app temporary> 
                        <v-list density="compact">
                            <v-subheader><a href = "/"><img src="../../../static/nav/logo.webp" alt="" width="110px" ></a></v-subheader>
                            <v-list-item
                                v-for="({ text, to }, index) in  btnsNav" 
                                :key="index"
                                :to="{ path: to }"
                                class="color-blue-dark"  
                            >
                                <v-list-item-title >{{text}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                    <a href = "/"><img src="@/static/nav/logo_blanco.webp" alt="" width="150px" ></a>
                </v-col>
                <v-spacer></v-spacer>
                <v-col justify="center" align="center" cols="12" sm="2" md="2" lg="2" xl="2">
                   <v-btn class="text-comfortaa ma-5" style="background: linear-gradient(to right, #9CC9D2, #499893); " @click="logout">
                    Cerrar 
                   </v-btn>
                </v-col>
            </v-row>
        </div>
    </div>  
</template>
<script>


export default {
  	data () {
	    return {
			drawer: false,
            btnsNav:[
				{ text: 'Inicio', to: '/dashboard/dashboardNeiva' },
				{ text: 'Crear Obituario', to: '/dashboard/Obituarios/CrearObituario' },
				{ text: 'Editar Obituario', to: '/dashboard/Obituarios/EditarObituario' },
				{ text: 'Ver Homenajes', to: '/dashboard/Homenajes/VerHomenajes'  },
				{ text: 'Crear Evento',to: '/dashboard/NotiOlivos/CrearNoticia' },
				{ text: 'Editar Evento',to: '/dashboard/NotiOlivos/EditNoticia' },
				{ text: 'Generar Reporte',to: '/dashboard/GenerarReporte/GenerarReporte' },
			]
    	}
	},
    methods:{
        logout(){
			localStorage.removeItem('authenticated-olivos-neiva')
			localStorage.removeItem('token')
			this.$store.commit("doLogout");
    		this.$router.push("/");
		}
    }
}
</script>

<style lang="scss" scoped>
.header-section {
    min-height: 100px;
    
}

</style>