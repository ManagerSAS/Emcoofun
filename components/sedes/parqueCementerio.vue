<template>
    <v-container fluid justify="center" align="center">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="12" lg="10" xl="11">
                <v-row justify="center" align="center">
                    <v-col cols="12" sm="12" md="12" lg="10" justify="center" align="center">
                        <h2 class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 40px;"> Parques Cementerios </h2> <br>
                        <p class="text-comfortaa"> Ofrecemos un lugar donde la belleza, paz y tranquilidad es el mejor homenaje a la memoria de nuestros seres queridos, con personal altamente calificado para ayudarle en los momentos más difíciles. Emcoofun Los Olivos cuenta con dos Parques Cementerios. El Jardín de los Olivos y Jardines el Paraíso; en donde la paz, la tranquilidad y la belleza son los canalizadores del amor que le guardaremos a la memoria de nuestros seres queridos </p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                        <video width="80%" class="mt-2" controls>
                            <source src="../../static/testmonios/jardin_Los_Olivos1.mp4" type="video/mp4">
                        </video>
                    </v-col>
                    <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                        <video justify="center" align="center" width="80%"  class="mt-2" controls>
                            <source src="../../static/testmonios/jardin_Los_Olivos2.mp4" type="video/mp4">
                        </video>
                    </v-col>
                </v-row>
                <v-row  justify="center" align="center">
                    <v-col justify="center" align="center" cols="10" sm="4" md="5" lg="5">
                        <v-btn 
                            style="background: linear-gradient(to right, #B9466A, #660F2E); color: white;"
                            class="shadow-principal btn-hover text-comfortaa font-weight-black "
                            rounded-xl
                            dark
                            large
                            to="/tienda/ProductsCementerio"
                        >
                            Ver Productos
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

