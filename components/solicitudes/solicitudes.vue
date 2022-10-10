<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mt-md-2 mb-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                        <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                            Solicitudes en línea
                        </h1>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" class="mt-md-2 mb-md-15 pa-md-0">
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <v-list>
                            <template v-for="({title, subtitle, to}, index) in solicitudes">
                                <v-list-item :key="index" class="pa-3" :to="to">
                                    <v-list-item-avatar size="50">
                                        <v-icon color="teal darken-3">
                                            mdi-clipboard-list-outline mdi-36px
                                        </v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title> {{ title }} </v-list-item-title>
                                        <v-list-item-subtitle> {{ subtitle }} </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn
                                            color="teal darken-3"
                                            dark
                                            fab 
                                            small
                                            :to="to"
                                        > ir </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <v-divider
                                    v-if="index < solicitudes.length - 1"
                                    :key="index"
                                ></v-divider>
                            </template>
                        </v-list>
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
            solicitudes:[
                {
                    title:'Homenajes',
                    subtitle: 'Gracias por confiar en Los Olivos "Un Homenaje al Amor"',
                    to: '/homenajes'
                },
                {
                    title:'Afiliacion en linea',
                    subtitle: 'Afiliate aqui con nosotros, de una manera',
                    to: '/AfiliacionOnLine'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.acortag-volver{
    text-decoration: none;
}
</style>