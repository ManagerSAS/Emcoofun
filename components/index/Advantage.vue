<template>
    <v-row align="center" justify="center" class="mt-15">
        <v-col cols="12" sm="12" md="12" lg="6">
            <v-row justify="center" align="center">
                <v-col cols="4" sm="4" md="12" lg="3">
                    <v-hover v-slot="{ hover }">
                            <v-card 
                                :color="`${hover ? 'green accent-3' : 'card-shadow'}`"
                                class="rounded-xl pa-5 transition-swing" 
                                outlined
                            >
                                <v-card-text class="text-center">
                                    <v-icon :color="`${hover ? 'white' : 'green accent-3'}`">
                                        mdi-flag-outline mdi-48px
                                    </v-icon>
                                </v-card-text>
                            </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="4" sm="4" md="12" lg="3">
                    <v-hover v-slot="{ hover }">
                        <v-card 
                            :color="`${hover ? 'blue accent-3' : 'card-shadow'}`"
                            class="rounded-xl pa-5 transition-swing" 
                            outlined
                        >
                            <v-card-text class="text-center">
                                <v-icon :color="`${hover ? 'white' : 'blue accent-3'}`">
                                    mdi-account-outline mdi-48px 
                                </v-icon>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row justify="center">                
                <v-col cols="4" sm="4" md="12" lg="3">
                    <v-hover v-slot="{ hover }">
                        <v-card 
                            :color="`${hover ? 'orange accent-3' : 'card-shadow'}`"
                            class="rounded-xl pa-5 transition-swing" 
                            outlined
                        >
                            <v-card-text class="text-center">
                                <v-icon :color="`${hover ? 'white' : 'orange accent-3'}`">
                                    mdi-city-variant-outline mdi-48px
                                </v-icon>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="4" sm="4" md="12" lg="3">
                    <v-hover v-slot="{ hover }">
                        <v-card 
                            :color="`${hover ? 'pink accent-3' : 'card-shadow'}`"
                            class="rounded-xl pa-5 transition-swing" 
                            outlined
                        >
                            <v-card-text class="text-center">
                                <v-icon :color="`${hover ? 'white' : 'pink accent-3'}`">
                                    mdi-hand-heart-outline mdi-48px
                                </v-icon>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6">
            <h2 class="secondary--text display-1 font-weight-bold mb-6">
                Nuestro equipo
            </h2>
            <p class="mb-6">
                Los Olivos somos un grupo de más de 1382 profesionales, dispuestos a asistir con respeto y dignidad, para que en los momentos más difíciles se sienta protegido.
                <br><br> Nuestra experiencia de más de 36 años, ha merecido la confianza de más de un millón de familias colombianas. 
            </p>
            <div>
                <v-btn 
                    class="pink accent-3 shadow-principal btn-hover"
                    rounded
                    dark
                    large
                >
                    Conoce nuestro equipo
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>