<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mt-15 mb-15">
            <v-col  cols="12" sm="12" md="10" lg="8" xl="8">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                            Eventos 
                        </h1>
                    </v-col>
                </v-row>
                <v-row v-if="eventos.length === 0">
                    <v-col justify="center" align="center" cols="12" lg="5" md="5">
                        <img src="../../static/NoHayEventos.png" width="80%">
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="4" lg="4" v-for="(evento ,index) in eventos" :key="index">
                        <v-card class="rounded-xl" style="background-color: rgb(227,235,235,0.2)">
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="11" md="11" lg="11">
                                    <h1 class="text-comfortaa" style="color:#E83E58; font-size: 20px; font-weight: 800;">
                                    {{evento.NombreEvento}}
                                    </h1>
                                </v-col>
                            </v-row>
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <img class="elevation-5" :src="evento.Pieza" width="90%">
                                </v-col>
                            </v-row>
                            <v-row justify="center" align="center">
                                <v-col class="text-comfortaa" justify="center" align="start" cols="12" sm="11" md="11" lg="11">
                                    <div>
                                        <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Lugar del Evento: </strong>{{evento.LugarEvento}}</p>
                                        <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Fecha del Evento: </strong>{{evento.fechaEvento}}</p>
                                        <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Hora Evento: </strong>{{evento.HoraEvento}}</p>
                                        <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Descripcion del evento: </strong>{{evento.DescripcionEvento}}</p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Post from '../post/post'

export default ({
    data(){
        return{
            eventos:[],
        }
    },
    mounted(){
        this.consultarEvento()
    },
    methods:{
       
        async  consultarEvento(){
            const response = await Post.ConsultarEvent(); 
            response.results.forEach((element) => {
                this.eventos.push({
                    NombreEvento: element.NombreEvento,
                    LugarEvento: element.LugarEvento,
                    fechaEvento: element.fechaEvento,
                    HoraEvento:element.HoraEvento,
                    DescripcionEvento: element.DescripcionEvento,
                    Pieza: element.Pieza,
                })  
            }); 
            console.log(this.eventos)
        } 
    }
})
</script>
    