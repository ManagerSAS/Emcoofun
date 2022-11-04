<template>
    <v-container fluid justify="center" align="center" >
        <v-row class="mt-5" justify="center" align="center" >
            <v-col cols="12" sm="12" md="11" lg="8" justify="center" align="center">
                <h2 class="text-raleway font-weight-bold" style="color: #003B4C; font-size: 40px;"> Sedes Los  Olivos Emcoofun </h2> <br>
                <p class="text-comfortaa secondary--text"> Los Olivos EMCOOFUN promueve la previsión, prestación de servicios exequiales y de destino final integrales de excelente calidad. Contribuyendo a la inclusión social de sus asociados, “con rango de acción en los departamentos del Huila, Caquetá y  Putumayo </p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="12" lg="11" justify="center" align="center">
                <v-slide-group 
                    class="pa-4"
                    active-class="success"
                    show-arrows
                >
                    <v-slide-item
                        v-for="({src, text, direccion}, index) in articlesAdd2" 
                        :key="index"
                    >
                        <div class="text-md-center mx-auto mb-8 mr-3 "
                            justify="center" align="center"
                        >
                        
                            <v-img
                                class="img-principal mb-1"   
                                :src="src"
                                height="210"
                                width="310"
                            ></v-img>
                            <v-btn   style="cursor: default; background: linear-gradient(to right, #F59D20, #E9522C); color: white;" class="text-capitalize text-comfortaa font-weight-black" >
                                {{ text }}
                            </v-btn> <br>
                            <div class="text-raleway font-weight-black" > 
                                {{ direccion }} 
                            </div>
                        </div>    
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center">
                <v-btn 
                    style="background-color: #003B4C "
                    class="shadow-principal btn-hover mb-10 text-comfortaa text-capitalize"
                    rounded-xl
                    dark
                    large
                    to="sedes" 
                >
                    Conoce nuestras sedes Emcoofun
                </v-btn>
            </v-col>
        </v-row>
    </v-container >
</template>
<script>

export default {
  data() {
    return{
      articlesAdd2: [
                 { text: 'Sede principal Neiva', direccion:'Calle 16 No. 2-56', src: '/sedes/neiva.png' },
                 { text: 'Sede Pitalito', direccion:'Carrera 3 No. 5-19', src: '/sedes/pitalito.png' },
                 { text: 'Sede Florencia', direccion:'Carrera 15 No. 15-34/36', src: '/sedes/florencia.png' },
                 { text: 'Sede Garzón', direccion:'Calle 7 No. 12-00', src: '/sedes/garzon.png' },
             ],

    }
  }
}
</script>
