<template>
    <div >
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Beneficios del plan exequial
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="5" lg="5" xl="5" justify="center" align="center" >
                <img justify="center" align="center" src="../../static/afilicacion.png" width="300">
            </v-col>
            <v-col cols="12" sm="12" md="5" lg="6" xl="6">
                <div class="ma-5 ">
                    <p class="texto" style="color: #2EAE9B" > En la Afiliación:</p><br>
                    <p class="font"><span style="color: #2EAE9B">1.</span> Atención y consulta permanente. </p>
                    <p class="font"><span style="color: #2EAE9B">2.</span> Cubrimiento del servicio dentro del territorio nacional.</p>
                    <v-btn href="/AfiliacionOnLine" align="center" justify="center" style="background-color: #2EAE9B; color: white" elevation="2" class="mt-2">Afiliarme</v-btn>
                </div>
            </v-col>   
        </v-row>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    .font{
        font-family: 'Comfortaa',cursive;
        font-size: 20px;

    }
    .texto{
        font-family: 'Comfortaa',cursive;
        font-weight: bold;
        font-size: 30px;
        color: #003B4C;
    }
</style>