<template>
    <div class="pa-2">
       <v-row>
           <v-col cols="12" sm="11" md="12" lg="12">
                <p 
                    class="text-h3 texto mt-5 mb-lg-10 " 
                    justify="center" 
                    align="center"
                    style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 25px; color: white;"
                > 
                    Preguntas Frecuentes
                </p>

                <v-row class="mb-5 ">
                    <v-col cols="12" sm="12" md="6" lg="6" xl="7" class="pl-5 ml-lg-10 mt-15">
                        <div class="mt-6">
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 21px; color: #DDE05D;">¿Puedo ingresar a mis padres mayores de 70 años?</p>
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 18px; color: white;">En planes de previsión exequial, la edad máxima de ingreso es hasta 70 años, para vinculaciones nuevas. Si superado el límite de ingreso permitido para pertenecer a nuestros planes de previsión exequial, tenemos la venta de compra de servicios anticipados a través de nuestro producto PRENECESIDAD, en cual se paga por una sola vez y queda amparado de por vida.</p>
                        </div>
                        <div >
                            <v-divider style=" border-style:dashed" color="#DDE05D" width="80%"></v-divider>
                        </div>
                        <div class="mt-6">
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 21px; color: #DDE05D;">¿Qué requisitos necesito para afiliarme?</p>
                            <p style="font-family: 'Comfortaa', cursive; font-weight: bold; font-size: 18px; color: white;">LEn realidad, los requisitos son mínimos, información del titular y su grupo familiar que debe contener fechas de nacimiento, nombres completos y parentescos con el titular.</p>
                        </div>
                        <div align="center" justify="center">
                            <v-btn  style="background-color: #DDE05D; color: white" elevation="2" class="mt-2">Ver más</v-btn>
                        </div>
                    </v-col>
                   <v-col sm="11" md="6" lg="6" xl="4" justify="center" align="center" >
                        <img class="mt-md-15 d-none d-md-block d-lg-block " src="../../static/preguntas.png"  height="500">
                        <img class="mt-md-15 d-block d-sm-block d-md-none" src="../../static/preguntas.png"  height="400">
                    </v-col>
                </v-row>
           </v-col>
       </v-row>
    </div>
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    .font{
        font-family: 'Comfortaa', cursive;
        font-size: 20px;

    }
    .texto{
        font-family: 'Comfortaa', cursive;
        font-weight: bold;
        font-size: 30px;
        color: #DDE05D;
    }
</style>