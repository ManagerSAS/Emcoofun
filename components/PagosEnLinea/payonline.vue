<template>
    <div class="ma-5">
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Nuestros medios de pago
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-md-10">
            <v-col cols="12" sm="5" md="5" lg="4" justify="center" align="center">
                <v-row>
                    <v-col  cols="12" sm="5" md="5" lg="6" justify="center" align="center">
                        <img src="../../static/iconos/FacturaElectronica-02.png" width="150px">
                    </v-col>
                    <v-col  cols="12" sm="5" md="5" lg="6" >
                        <div style="color:#E9522C; font-size: 20px; font-weight: 800;">
                            <p>Facturacion Electronica</p>
                        </div>
                        <div style="color:#003B4C; font-size: 15px; font-weight: 800;">
                            <p class="text-raleway">Para recibir tu facturacion electronica, por favor registra tus datos aqui</p>
                        </div>
                        <v-btn 
                            rounded
                            class="card-shadow"
                            dark
                            color="#E9522C" 
                            to="/FacturacionElectronica/FacturacionElectronica"
                            >
                            <v-icon left> mdi-account-edit-outline </v-icon>
                            Solictar Factura
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col justify="center" align="center" cols="12" sm="5" md="5" lg="4">
                <v-row>
                    <v-col  cols="12" sm="5" md="5" lg="6" justify="center" align="center">
                        <img src="../../static/iconos/PagosEnLinea-02.png" width="150px">
                    </v-col>
                    <v-col  cols="12" sm="5" md="5" lg="6">
                        <div style="color:#E9522C; font-size: 20px; font-weight: 800;">
                            <p>Pagos En Línea</p>
                        </div>
                        <div style="color:#003B4C; font-size: 15px; font-weight: 800;">
                            <p class="text-raleway">Digita tus datos para realizar el pago</p>
                        </div>
                        <v-btn 
                            rounded
                            class="card-shadow"
                            dark
                            color="#E9522C" 
                            >
                            <v-icon left> mdi-account-edit-outline </v-icon>
                            Realizar Pago
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
