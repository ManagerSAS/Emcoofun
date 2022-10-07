<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12" lg="6">
                <h2 class="mb-6 secondary--text display-1 font-weight-bold"> Sedes Los <br> Olivos Llanos Orientales </h2>
                <p class="mb-6 secondary--text"> La mejor infraestructura de la región para rendir el mejor homenaje al amor a la memoria de nuestros seres queridos que han partido. Con más de 25 años de experiencia en el mercado nuestra infraestructura provee un ambiente de comodidad y tranquilidad a los usuarios permitiendo una su estancia cómoda durante el homenaje. </p>
                <v-btn 
                    class="orange accent-3 shadow-principal btn-hover"
                    rounded
                    dark
                    large
                >
                    Conoce todas las sedes
                </v-btn>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="6">
                <v-row class="ml-md-8">
                    <v-col cols="12" sm="12" md="6">
                        <v-card class="rounded-xl mb-3 transition-swing">
                            <v-img
                                src="https://res.cloudinary.com/dbepipmro/image/upload/v1633127737/Sala3_dbbxrx.webp"
                                height="150"
                                class="rounded-xl mb-3"
                            ></v-img>
                        </v-card>                        
                        <v-row>
                            <v-col cols="6">                            
                                <v-card class="rounded-xl mb-3 transition-swing">
                                    <v-img
                                        src="https://res.cloudinary.com/dbepipmro/image/upload/v1633127573/foto2_jcjeir.webp"
                                        height="150"
                                        class="rounded-xl mb-3"
                                    ></v-img>
                                </v-card>                                
                            </v-col>
                            <v-col cols="6">                            
                                <v-card class="rounded-xl mb-3 transition-swing">
                                    <v-img
                                        src="https://res.cloudinary.com/dbepipmro/image/upload/v1633127698/sede_ufitsi.webp"
                                        class="rounded-xl mb-3"
                                        height="150"
                                    ></v-img>
                                </v-card>                                
                            </v-col>
                        </v-row>                    
                        <v-card class="rounded-xl mb-3 transition-swing">
                            <v-img
                                :src="src"
                                class="rounded-xl mb-3"
                                height="150"
                            ></v-img>
                        </v-card>                        
                    </v-col>
                    <v-col cols="6" class="d-none d-md-flex">                    
                        <v-card class="rounded-xl mb-3 transition-swing" width="250">
                            <v-img
                                src="https://res.cloudinary.com/dbepipmro/image/upload/v1633127337/Sede_Villavicencio_tr2naj.webp"
                                class="rounded-xl"
                                width="250"
                                height="475"
                            ></v-img>
                        </v-card>                        
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
            model: null,
            src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1633127337/Sede_Villavicencio_tr2naj.webp',
            src2: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631889117/humberto-portillo-GtgHHOzxaHU-unsplash_eadmco.jpg',
            src3: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631888243/saul-flores-uTejvwg8UGE-unsplash_nwnftp.jpg' ,

            images:[
                { 
                    text: 'Sede principal',
                    src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631888243/saul-flores-uTejvwg8UGE-unsplash_nwnftp.jpg'
                },
                { src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631889047/chris-curry-aDXuh9QMtQw-unsplash_gla2e8.jpg' },
                { src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631889117/humberto-portillo-GtgHHOzxaHU-unsplash_eadmco.jpg' },
                { src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631888243/saul-flores-uTejvwg8UGE-unsplash_nwnftp.jpg' },
                { src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631889047/chris-curry-aDXuh9QMtQw-unsplash_gla2e8.jpg' },
            ]
        }
    }
}
</script>