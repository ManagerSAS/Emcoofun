<template>
    <div justify="center" align="center" class="mb-5 ">
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Servicios EMCOOFUN
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
            <v-col justify="center" align="start" cols="10" sm="10" md="6" lg="6">
                <h4 class="mb-6 text-raleway" style="color:#6E1228; font-size: 20px; font-weight: 800;">
                    Opciones de destino final
                </h4>
                <div justify="center" align="start">
                    <p> <v-icon>mdi-menu-right</v-icon> Inhumación en lote</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Inhumación en bóveda en altura</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Cremación</p>
                </div>  
            </v-col> 
            <v-col cols="12" sm="10" md="6" lg="6">  
                <img class="d-none d-xl-block d-lg-block" src="../../static/OtrosServicios/destino_final.png" width="500">
                <img class="d-none d-md-block d-lg-none" src="../../static/OtrosServicios/destino_final.png" width="300">
                <img class="d-block d-sm-none"  src="../../static/OtrosServicios/destino_final.png" width="300">
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
            <v-col cols="10" sm="10" md="6" lg="6">
                <img class="d-none d-xl-block d-lg-block" src="../../static/OtrosServicios/opciones_destino.png" width="500">
                <img class="d-none d-md-block d-lg-none" src="../../static/OtrosServicios/opciones_destino.png" width="300">
                <img  class="d-block d-sm-none"  src="../../static/OtrosServicios/opciones_destino.png" width="300">
            </v-col>  
            <v-col justify="center" align="start" cols="10" sm="10" md="6" lg="6">
                <h4 class="mb-6 text-raleway" style="color:#6E1228; font-size: 20px; font-weight: 800;">
                    Variadas opciones de destino final para cenizas y restos óseos:
                </h4>
                <div justify="center" align="start">
                    <p> <v-icon>mdi-menu-right</v-icon> Cenízaros en altura</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Columbarios múltiples.</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Columbarios alrededor del lago</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Columbarios en flor de loto en el lago.</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Osarios en altura.</p>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
            <v-col justify="center" align="start" cols="10" sm="10" md="6" lg="6">
                <h4 class="mb-6 text-raleway" style="color:#6E1228; font-size: 20px; font-weight: 800;">
                    Otros servicios:
                </h4>
                <div justify="center" align="start">
                    <p> <v-icon>mdi-menu-right</v-icon> Jardinería.</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Mantenimiento de tumbas.</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Trabajos en mármol.</p>
                    <p> <v-icon>mdi-menu-right</v-icon>Ceremonias especiales.</p>
                </div>  
            </v-col> 
            <v-col cols="10" sm="10" md="6" lg="6">  
                <img class="d-none d-xl-block d-lg-block" src="../../static/OtrosServicios/otros_servicios.png" width="500">
                <img class="d-none d-md-block d-lg-none" src="../../static/OtrosServicios/otros_servicios.png" width="300">
                <img  class="d-block d-sm-none"  src="../../static/OtrosServicios/otros_servicios.png" width="300"> 
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
            <v-col cols="12" sm="10" md="6" lg="6">
                <img class="d-none d-xl-block d-lg-block" src="../../static/OtrosServicios/protocolos.png" width="500">
                <img class="d-none d-md-block d-lg-none" src="../../static/OtrosServicios/protocolos.png" width="300">
                <img  class="d-block d-sm-none"  src="../../static/OtrosServicios/protocolos.png" width="300">
            </v-col>
            <v-col justify="center" align="start" cols="10" sm="10" md="6" lg="6">
                <h4 class="mb-6 text-raleway" style="color:#6E1228; font-size: 20px; font-weight: 800;">
                    Protocolos:
                </h4>
                <div justify="center" align="start">
                    <p> <v-icon>mdi-menu-right</v-icon> Despedida</p>
                    <p> <v-icon>mdi-menu-right</v-icon> Entrega de cenizas.</p>
                </div>
            </v-col> 
        </v-row>
    </div>
</template>
<script>
export default ({
    data() {
      return{
        // destinoFinal:[
        //     {icon:'mdi-menu-right',text:'Inhumación en lote'}
        // ]
      }
    },
})
</script>

