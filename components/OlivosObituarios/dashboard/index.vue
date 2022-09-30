<template>
    <div  class="text-comfortaa">
        <v-row justify="center" align="center" class="ma-10 ">
            <v-col justify="center" align="center" cols="12" sm="8" md="10" lg="9" xl="9">
                <p style="color:#10303B; font-size:300%; font-weight: bold;" class="font-italic">Bienvenido a Los Olivos EMCOOFUN</p>
                <p class="text-raleway" style="color: #003B4C;font-size: 2em; font-weight: 400;">El nuevo sistema implementado para mejorar los procesos de la empresa que ira creciendo poco a poco.</p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="10" md="10" lg="10" xl="10">
                <v-row justify="center" align="center">
                    <!--  crear obituario-->
                    <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4" xl="4">
                        <div @click="redireccionar('crear')"   >
                            <img class="mt-9 ml-2" src="~/static/iconosDashboard/crear.png" alt=""><br>
                        </div>
                        <v-btn to="/dashboard/Obituarios/CrearObituario" class="mt-5" style="background: linear-gradient(to bottom, #347D7D, #1D424A); color: white">Crear Obituario</v-btn>
                    </v-col>
                    <!--  editar obituario-->
                    <v-col cols="12" sm="12" md="4" lg="4" xl="4" >
                        <div @click="redireccionar('editar')" >
                            <img class="mt-9 ml-4" src="../../../static/iconosDashboard/editar.png" alt="">
                        </div>
                        <v-btn to="/dashboard/Obituarios/EditarObituario" class="mt-5" style="background: linear-gradient(to bottom, #347D7D, #1D424A); color: white">Editar Obituario</v-btn>
                    </v-col>
                    <!--ver homenajes-->
                    <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                        <div @click="redireccionar('homenajes')" >
                            <img class="mt-9 ml-2" src="../../../static/iconosDashboard/homenaje.png" alt="">
                        </div>
                        <v-btn to="/dashboard/Homenajes/VerHomenajes" class="mt-5" style="background: linear-gradient(to bottom, #347D7D, #1D424A); color: white">Ver Homenaje</v-btn>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <!-- Crear Evento-->
                    <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                        <div @click="redireccionar('CreateNew')" >
                            <img class="mt-9 ml-2" src="../../../static/iconosDashboard/evento.png" alt="">
                        </div>
                        <v-btn to="/dashboard/NotiOlivos/CrearNoticia" class="mt-5" style="background: linear-gradient(to bottom, #347D7D, #1D424A); color: white">Crear Evento</v-btn>
                    </v-col>
                    <!-- Editar Evento-->
                    <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                        <div @click="redireccionar('EditeNew')" >
                            <img class="mt-9 ml-2" src="../../../static/iconosDashboard/editar_1.png" alt="">
                        </div>
                        <v-btn to="/dashboard/NotiOlivos/EditNoticia" class="mt-5" style="background: linear-gradient(to bottom, #347D7D, #1D424A); color: white">Editar Evento</v-btn>
                    </v-col>
                    <!-- generar resportes-->
                    <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                        <div justify="cneter" align="center" @click="redireccionar('reporte')" >
                            <img class="mt-9 ml-2" src="../../../static/iconosDashboard/reportes.png" alt="">
                        </div>
                        <v-btn to="/dashboard/GenerarReporte/GenerarReporte" class="mt-5" style="background: linear-gradient(to bottom, #347D7D, #1D424A); color: white">Generar reportes</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    data(){
        return{
            cards:[
                {src:'../../../static/iconosDashboard/crear.png', text:'Crar Obituario',to:'/dashboard/CrearObituario'}
            ]
        }
    },
    methods:{
        redireccionar(ubicacion){
            if(ubicacion === 'crear'){
                this.$router.push({ path: '/dashboard/Obituarios/CrearObituario'})
            }
            else if(ubicacion === 'editar'){
                this.$router.push({ path: '/dashboard/Obituarios/EditarObituario'})
            } else if (ubicacion === 'homenajes'){
                this.$router.push({ path: '/dashboard/Homenajes/VerHomenajes'})
            }else if(ubicacion === 'reporte'){
                this.$router.push({ path: '/dashboard/GenerarReporte/GenerarReporte'})
            }else if(ubicacion === 'CreateNew'){
                this.$router.push({ path: '/dashboard/NotiOlivos/CrearNoticia'})
            }else if(ubicacion === 'EditeNew'){
                this.$router.push({ path: '/dashboard/NotiOlivos/EditNoticia'})
            }
        }
    }
}

</script>
