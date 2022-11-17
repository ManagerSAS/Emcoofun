<template>
    <v-container  fluid>
        <v-row justify="center" align="center" class="mt-15 mb-10 pa-5 pa-md-5">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row>
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h2 style="color:#003B4C; font-size: 36px; font-weight: 800;" class="text-raleway">
                            Valores EMCOOFUN
                        </h2>
                    </v-col>
                </v-row>
                <v-row class="mt-10">
                    <v-col 
                        v-for="({icon, title, description}, index) in values"
                        :key="index"
                        cols="12" sm="12" md="6" lg="6">
                        <div class="rounded-xl ">
                            <v-row >
                                <v-col justify="end" align="center" cols="2" class="margen">
                                    <v-img :src="icon" width="50px"/>
                                </v-col>
                                <v-col cols="10" class="secondary--text">
                                    <h3 style="color:#AAD054; font-size: 30px; font-weight: bold;" class="text-comfortaa"> {{ title }} </h3>
                                    <span style="color:#003A4B; font-size: 20px;" class="text-raleway"> {{ description }} </span>
                                </v-col>
                            </v-row>
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
            values:[
                {
                    icon: '/iconos/SENTIDO.png',
                    title: 'Sentido Humano',
                    description: 'Comprendemos el duelo y lo atendemos integralmente.'
                },
                {
                    icon: '/iconos/SOLIDARIDAD.png',
                    title: 'Solidaridad',
                    description: 'Somos gente que trabaja para la gente.'
                },
                {
                    icon: '/iconos/RESPETO.png',
                    title: 'Respeto',
                    description: 'Reconocemos, valoramos y consideramos al otro en su condición de ser humano.'
                },
                {
                    icon: '/iconos/EQUIDAD.png',
                    title: 'Equidad',
                    description: 'Actuamos en justicia y promovemos el juego limpio.'
                },
                {
                    icon: '/iconos/LEALTAD.png',
                    title: 'Lealtad',
                    description: 'Hacia la empresa de la cual hago parte.'
                },
                {
                    icon: '/iconos/INTEGRIDAD.png',
                    title: 'Integridad',
                    description: 'Nuestro actuar es intachable.'
                },
                {
                    icon: '/iconos/COHERENCIA.png',
                    title: 'Coherencia',
                    description: 'Nuestro comportamiento corresponde con la filosofía y principios cooperativos.'
                },
                {
                    icon: '/iconos/HONESTIDAD.png',
                    title: 'Honestidad',
                    description: 'Procedemos con rectitud.'
                },
                {
                    icon: '/iconos/COMPROMISO.png',
                    title: 'Compromiso',
                    description: 'Desarrollamos nuestro trabajo acorde con el objeto social de EMCOOFUN.'
                },
                {
                    icon: '/iconos/SENTIDODEPERTENENCIA.png',
                    title: 'Sentido de pertenencia',
                    description: 'Porque amamos lo que hacemos.'
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    @media only screen and(max-width: 1920px) { 
        .tamanoimg{
            width: 90%;
        }
        .tamanocontent{
            width: 60px;
            height: 60px;
        }
    }
     @media only screen and(max-width: 1440px) { 
        .tamanoimg{
            width: 90%;
        }
        .tamanocontent{
            width: 80px;
            height: 80px;
        }
    }
    @media only screen and(max-width: 1024px) { 
        .tamanoimg{
            width: 90%;
        }
        .tamanocontent{
            width: 60px;
            height: 60px;
        }
    }
    @media only screen and(max-width: 1280px) { 
        .tamanoimg{
            width: 90%;
        }
        .tamanocontent{
            width: 60px;
            height: 60px;
        }
    }
    @media only screen and(max-width: 430px) { 
        .tamanoimg{
            width: 90%;
        }
        .tamanocontent{
            width: 60px;
            height: 60px;
        }
    }
</style>