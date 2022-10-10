<template>
    <v-container fluid > 
        <v-row justify="center" align="center">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <div class="d-none d-lg-block d-xl-block d-md-block">
                    <v-row justify="center" align="center" class="ml-5 mr-5">
                    <v-col cols="12" sm="10" md="11" lg="8" justify="center" align="center">
                        <h2 class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 40px;"> Testimonios </h2> <br>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col cols="12" sm="3" md="3" lg="3">
                            <video width="100%" height="100%" class="mt-2" controls>
                                <source src="../../static/testmonios/testimoni1.mp4" type="video/mp4">
                            </video>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                            <video justify="center" align="center" width="100%" height="100%" class="mt-2" controls>
                                <source src="../../static/testmonios/testimonio2.mp4" type="video/mp4">
                            </video>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                            <video width="100%" height="100%" class="mt-2" controls>
                                <source src="../../static/testmonios/testimono3.mp4" type="video/mp4">
                            </video>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" class="ml-5 mr-5">
                    <v-col cols="12" sm="12" md="11" lg="8" justify="center" align="center">
                        <p class="text-comfortaa">
                            A Los Olivos se les atribuye la promoción de la cultura de Previsión 
                            Exequial. Hoy nos enorgullece saber que somos líderes absolutos del 
                            sector solidario en Colombia
                        </p>
                    </v-col>
                </v-row>
                </div>
                <div class=" d-block d-sm-none">
                    <v-row justify="center" align="center">
                        <v-col cols="12" sm="12" md="11" lg="8" justify="center" align="center">
                            <h2 class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 40px;"> Testimonios </h2> <br>
                        </v-col>
                    </v-row>
                    <v-carousel justify="center" align="center" class="cel d-block d-sm-none mb-5"  height="70%" :cycle="true" delimiter-icon="mdi-seed"  hide-delimiter-background show-arrows-on-hovers>
                            <v-carousel-item justify="center" align="center"
                            >
                                <video width="90%" height="90%" class="mt-2" controls>
                                    <source src="../../static/testmonios/testimoni1.mp4" type="video/mp4">
                                </video>
                            </v-carousel-item>
                            <v-carousel-item justify="center" align="center"
                            >
                                <video width="90%" height="92%" class="mt-2" controls>
                                    <source src="../../static/testmonios/testimonio2.mp4" type="video/mp4">
                                </video>
                            </v-carousel-item>
                            <v-carousel-item justify="center" align="center"
                            >
                                <video width="90%" height="92%" class="mt-2" controls>
                                    <source src="../../static/testmonios/testimono3.mp4" type="video/mp4">
                                </video>
                            </v-carousel-item>
                        </v-carousel>
                        <v-row justify="center" align="center" class="ml-5 mr-5">
                        <v-col cols="12" sm="12" md="11" lg="8" justify="center" align="center">
                            <p class="text-comfortaa">
                                A Los Olivos se les atribuye la promoción de la cultura de Previsión Exequial. Hoy nos enorgullece saber que somos líderes absolutos del sector solidario en Colombia
                            </p>
                        </v-col>
                    </v-row> 
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>