<template>
    <v-container fluid>
        <v-row id="empresariales"  justify="center" align="center" >
			<v-col cols="12" sm="12" md="12" lg="10" xl="9" class="mt-5">
                <v-row >
                    <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                        <div class=" ml-5 mr-5 ">
                            <p class="texto" style="color: #7AB929" > En el cortejo:</p><br>
                            <p class="font"><span style="color: #7AB929">1.</span> Cinta membretada con el nombre del fallecido. </p>
                            <p class="font"><span style="color: #7AB929">2.</span> Honras fúnebres</p>
                            <p class="font"><span style="color: #7AB929">3.</span> Transporte público urbano desde la sala de velación al sitio de exequias y destino final, para acompañantes, hasta 25 personas, en ciudades capitales y ciudades intermedias (donde exista este servicio).  </p>
                            <div v-if="mostrar" >
                                <p class="font"><span style="color: #7AB929">4.</span> Traslado en carroza a lugar de las honras fúnebres y al sitio del destino final por vía transitable para vehículo funerario, siempre y cuando se encuentre dentro del mismo perímetro urbano del lugar de la velación </p>
                            </div>
                            <div align="center" justify="center" class="mb-5">
                                <v-btn  style="background-color: #7AB929; color: white" elevation="2" class="mt-2 text-capitalize" v-if="mostrar === false" @click="mostrar = !mostrar">Ver más</v-btn>
                                <v-btn  style="background-color: #7AB929; color: white" elevation="2" class="mt-2 text-capitalize" v-if="mostrar === true" @click="mostrar = !mostrar">Ver menos</v-btn>
                                <v-btn href="/AfiliacionOnLine"  style="background-color: #7AB929; color: white" elevation="2" class="mt-2 text-capitalize">Afiliarme</v-btn>
                            </div>
                        </div>
                    </v-col>
                     <v-col cols="12" sm="12" md="6" lg="6" xl="5" justify="center" align="center" >
                        <img src="../../static/cortejo.png" width="60%">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
    data(){
        return{
           mostrar: false
        }
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    .font{
        font-family: 'Comfortaa', cursive;
        font-size: 20px;

    }
    .texto{
        font-family: 'Comfortaa', cursive;
        font-weight: bold;
        font-size: 30px;
        color: #003B4C;
    }
</style>