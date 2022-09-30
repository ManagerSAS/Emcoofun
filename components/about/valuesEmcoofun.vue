<template>
    <div class="mt-5 mb-10">
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
                        <v-col justify="center" align="center" cols="2" class="margen">
                            <div class="rounded-xl  pa-2 box-shadow-green tamanocontent" outlined style="background: linear-gradient(to right, #9DC31A, #79B729); " >
                                <img :src="icon" class="tamanoimg">
                            </div>
                        </v-col>
                        <v-col cols="10" class="secondary--text">
                            <h3 style="color:#AAD054; font-size: 30px; font-weight: bold;" class="text-comfortaa"> {{ title }} </h3>
                            <span style="color:#003A4B; font-size: 20px;" class="text-raleway"> {{ description }} </span>
                        </v-col>
                    </v-row>
                </div>
            </v-col>            
        </v-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            values:[
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659705913/neiva/icons/r6hj7sfob6ip9xwonxi1.png',
                    title: 'Sentido Humano',
                    description: 'Comprendemos el duelo y lo atendemos integralmente.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1660138389/neiva/icons/dc2wd7jstqkcbphahhjs.png',
                    title: 'Solidaridad',
                    description: 'Somos gente que trabaja para la gente.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1660138390/neiva/icons/dttm744hnxy33gieaujc.png',
                    title: 'Respeto',
                    description: 'Reconocemos, valoramos y consideramos al otro en su condición de ser humano.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659706003/neiva/icons/vhk0u6rsitrw6gzppwd4.png',
                    title: 'Equidad',
                    description: 'Actuamos en justicia y promovemos el juego limpio.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659705913/neiva/icons/pyj34z2aae0bq9wwx645.png',
                    title: 'Lealtad',
                    description: 'Hacia la empresa de la cual hago parte.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659705913/neiva/icons/hhuukn9p8dpzsq4oc9y3.png',
                    title: 'Integridad',
                    description: 'Nuestro actuar es intachable.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659705913/neiva/icons/xnrwbwdmcinrarqgernf.png',
                    title: 'Coherencia',
                    description: 'Nuestro comportamiento corresponde con la filosofía y principios cooperativos.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659705913/neiva/icons/gubob9fsfs9ppil0vcql.png',
                    title: 'Honestidad',
                    description: 'Procedemos con rectitud.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1660138157/neiva/icons/gmqpnm3cyp5xrfjualvu.png',
                    title: 'Compromiso',
                    description: 'Desarrollamos nuestro trabajo acorde con el objeto social de EMCOOFUN.'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1660138088/neiva/icons/olv0unv4gboa1t1emet5.png',
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