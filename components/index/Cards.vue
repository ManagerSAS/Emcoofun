<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mt-5 mb-4">
            <v-col cols="12" sm="12" md="3" lg="3" class="justify-start" align="center">
                <div class="contencard">
                    <div  class="mb-1">                                
                        <img src="../../static/iconos/pagosLinea.png" alt="" height="60">
                        <h2 class="text-raleway font-weight-black" style="color: #003B4C">Pagos en línea</h2>
                        <br>
                    </div>
                    <div justify="start" align="center" class="color-blue-dark text-comfortaa">
                        Aquí podrás realizar el pago de tu plan de previsión exequial o cualquier otro tipo de pago a través de PSE, PayU y tarjetas de crédito u otros medios de pago
                    </div>
                    <div><br>
                        <v-btn
                            style="background: linear-gradient(to right, #A7CB68, #5AB780)"
                            class="shadow-principal btn-hover text-capitalize text-raleway"
                            dark
                            rounded-xl
                            to="pay"
                        >
                            Pagos
                        </v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" >
                <div class="contencard">
                    <div justify="start" align="center" class="mb-1">                                
                        <img src="../../static/iconos/registroObituario.png" alt="" height="60">
                        <h2 class="text-raleway font-weight-black " style="color: #003B4C">Registro de defunción</h2>
                    </div><br>
                    <div justify="start" align="center" class="color-blue-dark text-comfortaa">
                        Haz click aquí y encuentra el registro civil de defunción. Solo digita el número de cédula de tu ser querido
                    </div>
                    <div><br>
                        <v-btn 
                            style="background: linear-gradient(to right, #80C49D, #2EAE9B)"
                            class="shadow-principal btn-hover text-capitalize text-raleway mt-5"
                            dark
                            rounded-xl
                            to="registration"
                        >
                            Buscar registros
                        </v-btn>
                    </div>
                </div>            
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3">
                <div class="contencard">
                    <div justify="start" align="center" class="mb-1">                                
                        <img src="../../static/iconos/obituarios.png" alt="" height="60">
                        <h2 class="text-raleway font-weight-black" style="color: #003B4C">Obituarios</h2>
                    </div><br>
                    <div justify="start" align="center" class="color-blue-dark text-comfortaa" >
                        Servicios funerarios que se encuentran disponibles en velación en nuestras diferentes sedes, sede principal Neiva, Sedes Florencia, Garzón y Pitalito.
                    </div>
                    <div><br>
                        <v-btn
                            style="background: linear-gradient(to right, #EC6480, #E83E58)" 
                            class="shadow-principal btn-hover text-capitalize text-raleway"
                            dark
                            rounded-xl
                            to="/obituarios"
                        >
                            Ver obituarios
                        </v-btn>
                    </div>
                </div>            
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3">
                <div class="contencard">
                    <div justify="center" align="center" class="mb-1">                                 
                        <img src="../../static/iconos/homenajes.png" alt="" height="60">
                        <h2 class="text-raleway font-weight-black" style="color: #003B4C">Homenajes</h2>
                        <br>
                    </div>
                    <div justify="start" align="center" class="color-blue-dark text-comfortaa" >
                        En Los Olivos brindamos una experiencia integral para homenajear a tu ser querido con respeto y amor.
                    </div>
                    <div><br>
                        <v-btn
                            style="background: linear-gradient(to right, #F59D20, #E9522C)" 
                            class="shadow-principal btn-hover text-capitalize text-raleway mt-5"
                            dark
                            rounded-xl
                            to="/homenaje"
                        >
                            Ver Homenajes
                        </v-btn>
                    </div>
                </div>            
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.contencard{
    width: 100%;
    line-height: 1.3rem;
    @media only screen and (min-width: 1600px) {
        width: 80%;
    
    }
}

</style>