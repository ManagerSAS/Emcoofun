<template>
    <div>
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
                    <div style="color:#003A4B; font-size: 15px; text-align: justify;" class="text-raleway">{{description}}</div>
                </div>
            </v-col>
        </v-row>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            principies:[
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_80,w_100/v1659709127/neiva/icons/ndcd2kzwvwq9czpzekkc.png',
                    title: 'Trabajo en equipo',
                    description: 'Las bases de nuestras accionesson: El diseño y oferta integral deplanes y servicios, las sinergias entre las áreas de la organización ,el alineamiento con las políticas y objetivos de la organización, paragarantizar el crecimiento y desarrollo',
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_100/v1659709127/neiva/icons/wfflqjw2w82iwekoegej.png',
                    title: 'Responsabilidad y Compromiso',
                    description: 'Asumimos nuestras funciones con laresponsabilidad y cumplimiento quegarantiza nuestra propia satisfacción,la de nuestros clientes y los resultados esperados por nuestras empresas asociadas',
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_100/v1659709127/neiva/icons/twccyy1wcsf6cbpvektr.png',
                    title: 'Liderazgo',
                    description: 'Estamos atentos en la búsqueda deoportunidades de desarrollo en losplanes y servicios, en la canalizaciónde las necesidades de nuestros clientes y en aunar esfuerzos en las diferentes áreas para lograr los ideales de la organización.',
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_100/v1659709127/neiva/icons/itdmveyn54rkfnmnisrs.png',
                    title: 'Transparencia',
                    description: 'Todos nuestros actos administrativos son diáfanos y visibles a la luz de nuestros clientes y autoridades de dirección y control.',
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_100/v1659709127/neiva/icons/sjcimap1jm4s2acznobe.png',
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