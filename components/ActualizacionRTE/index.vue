<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                    Actualizacion RTE
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mb-15">
            <v-col justify="center" align="star" cols="12" sm="12" md="10" lg="10">
                <v-list>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <h1 class="mb-6 text-raleway" style="color:#59AB9B; font-size: 30px; font-weight: 800;">
                                {{titleRTE2021}}
                            </h1>
                        </v-col>
                    </v-row>
                <v-list-item-group
                    color="primary"
                >  
                    <v-list-item
                        v-for="(text, i) in textDescRTE2021"
                        :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title class="mb-6 text-raleway">
                            {{text.linkDesc}}
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-btn
                            elevation="24"
                            class="mt-2"
                            color="#499893"
                            width="50"
                            height="50"
                            fab
                            v-bind:href="text.idUrl" target="_blank"
                            >
                            <v-icon color="white">mdi-file-document-edit-outline</v-icon>
                        </v-btn>
                        <a ></a>
                    </v-list-item-icon>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data(){
            return {
                titleRTE2021: 'RTE 2021',
                textDescRTE2021:[
                    {linkDesc: 'ESTADOS FINANCIEROS A 31 DE DICIEMBTE DE 2021', idUrl: 'https://apineiva.agenciamanager.net/ActualizacionRTE/2021/ESTADOS_FINANCIEROS_A_31_DE_DICIEMBTE_DE_2021.pdf'},
                    {linkDesc: 'INFORME DE GESTION 2021', idUrl: 'https://apineiva.agenciamanager.net/ActualizacionRTE/2021/INFORME DE GESTIÓN 2021.pdf'},
                    {linkDesc: 'LA CONTRALORÍA DELEGADA PARA RESPONSABILIDAD FISCAL', idUrl: 'https://apineiva.agenciamanager.net/ActualizacionRTE/2021/LA CONTRALORÍA DELEGADA PARA RESPONSABILIDAD FISCAL.pdf'},
                    {linkDesc: 'MEMORIA 2021', idUrl: 'https://apineiva.agenciamanager.net/ActualizacionRTE/MEMORIA 2021.pdf'},
                    {linkDesc: 'PROCURADURIA', idUrl: 'https://apineiva.agenciamanager.net/ActualizacionRTE/PROCURADURIA.pdf'},
                ],
            }
        }
        
    }
</script>