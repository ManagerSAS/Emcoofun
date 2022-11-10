<template>
    <v-container fluid>
        <v-row justify="center" align="center" >
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row>
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h2 style="color:#003B4C; font-size: 36px; font-weight: 800;" class="text-raleway" >
                            Principios EMCOOFUN
                        </h2>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" class="mt-15 mr-5 ml-5 mb-5">
                    <v-col 
                        justify="center" align="center"
                        v-for="({ icon, title, description }, index) in principies"
                        :key="index"
                        cols="12" sm="12" md="4" lg="4"
                    >
                        <div>
                            <div class="mb-5"><img :src="icon"  ></div>
                            <div style="color:#003B4C; font-size: 25px; font-weight: bold;" class="text-raleway mb-5">{{title}}</div>
                            <div style="color:#003A4B; font-size: 15px; text-align: justify;" class="text-comfortaa">{{description}}</div>
                        </div>
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
            principies:[
                {
                    icon: '/iconos/trabajoEquipo.png',
                    title: 'Trabajo en equipo',
                    description: 'Las bases de nuestras acciones son: El diseño y oferta integral deplanes y servicios, las sinergias entre las áreas de la organización, el alineamiento con las políticas y objetivos de la organización, para garantizar el crecimiento y desarrollo',
                },
                {
                    icon: '/iconos/responsabilidad.png',
                    title: 'Responsabilidad y Compromiso',
                    description: 'Asumimos nuestras funciones con la responsabilidad y cumplimiento que garantiza nuestra propia satisfacción, la de nuestros clientes y los resultados esperados por nuestras empresas asociadas',
                },
                {
                    icon: '/iconos/liderazgo.png',
                    title: 'Liderazgo',
                    description: 'Estamos atentos en la búsqueda de oportunidades de desarrollo en los planes y servicios, en la canalizaciónde las necesidades de nuestros clientes y en aunar esfuerzos en las diferentes áreas para lograr los ideales de la organización.',
                },
                {
                    icon: '/iconos/transparenca.png',
                    title: 'Transparencia',
                    description: 'Todos nuestros actos administrativos son diáfanos y visibles a la luz de nuestros clientes y autoridades de dirección y control.',
                },
                {
                    icon: '/iconos/pasion.png',
                    title: 'Pasión por excelencia',
                    description: 'Nuestro trabajo diario se guía por la calidad y el mejoramiento continuo de nuestros productos y servicios, para facilitar la competitividad de la organización.',
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    @media only screen and(max-width: 1920px) { 
        .tamanoimg{
            width: 50px;
        }
    }
     @media only screen and(max-width: 1440px) { 
        .tamanoimg{
            width: 50px;
        }
    }
    @media only screen and(max-width: 1024px) { 
        .tamanoimg{
            width: 80%;
        }
    }
    @media only screen and(max-width: 1280px) { 
        .tamanoimg{
            width: 80%;
        }
    }
    @media only screen and(max-width: 430px) { 
        .tamanoimg{
            width: 100%;
        }
    }
</style>