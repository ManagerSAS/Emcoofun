<template>
    <div class="headerstatic">
        <v-toolbar  
            color="white"
            height="80"
            >        
            <!-- <v-toolbar-title class="pt-3"> -->
                <a href = "/" class="header-logo pt-3"><img src="../static/nav/logo.webp" alt="" width="120px" ></a>
            <!-- </v-toolbar-title> -->
            <v-spacer></v-spacer>
            <NuxtLink 
                v-for="({ text, to }, index) in  btnsNav" 
                :key="index"
                :to="{ path: to }"
                class="s-acortag color-blue-dark d-none d-md-block d-lg-flex text-raleway"    
            > {{ text }}
            </NuxtLink> 
            <v-app-bar-nav-icon class="d-block d-lg-none d-md-none d-sm-block text-raleway"  @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer"  app temporary> 
            <v-list density="compact">
                <v-subheader><a href = "/"><img src="../static/nav/logo.webp" alt="" width="130px" ></a></v-subheader>
                <v-list-item
                    v-for="({ text, to }, index) in  btnsNav" 
                    :key="index"
                    :to="{ path: to }"
                    class="color-blue-dark text-raleway"  
                >
                    <v-list-item-title >{{text}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>  
</template>
<script>
export default {
  	data () {
	    return {
			rightDrawer: null,
			drawer: false,
			fixed: false,
			btnsNav:[
				{ text: 'Inicio', to: '/' },
				{ text: '¿Quiénes somos?', to: '/about' },
				{ text: 'Planes exequiales', to: '/plans' },
				{ text: 'Homenajes', to: '/homenaje'  },
				{ text: 'Sedes',to: '/sedes' },
				{ text: 'Productos',to: '/tienda/ProductsCementerio' },
				{ text: 'Pagos',to: '/pay' },
				{ text: 'Noticias',to: '/Eventos' },
			]
    	}
	},
}
</script>
<style lang="scss" scoped>
.headerstatic{
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 10;
}
.s-acortag{
    padding: 15px 15px;
    margin-right: 1px;
    text-decoration: none;
	color: #003B4C;
}
.color-blue-dark{
	color: #003B4C;
}

.header-logo{
	position: relative;
	left: 1rem;
}
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 1px;
  z-index: 2;
}

</style>