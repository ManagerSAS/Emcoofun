<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mt-15 mb-15">
            <v-col  cols="12" sm="12" md="10" lg="8" xl="8">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                            Editar Evento
                        </h1>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" class="mt-15 mb-15">
                    <v-col  cols="12" sm="12" md="10" lg="8" xl="8">
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
                                        <v-col class="text-raleway" justify="center" align="start" cols="12" sm="10" md="11" lg="11">
                                            <div class="ma-5">
                                                <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Lugar del Evento: </strong>{{evento.LugarEvento}}</p>
                                                <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Fecha del Evento: </strong>{{evento.fechaEvento}}</p>
                                                <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Hora Evento: </strong>{{evento.HoraEvento}}</p>
                                                <p class="text-raleway" style="color: #10303B "><strong style="color:#E83E58; font-size: 15px;" >Descripcion del evento: </strong>{{evento.DescripcionEvento}}</p>
                                            </div>
                                        </v-col>
                                    </v-row>
                                <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <v-btn
                                                outlined
                                                color="teal darken-4"
                                                @click="editItem(evento)"
                                                >
                                                Editar
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-card v-show="dialogEditItem" width="100%" :loading="loading">
                                    <v-card-title class="mb-10">
                                        <v-toolbar class="rounded-lg" flat dark  color="#499893">
                                            <v-row justify="center" align="center">
                                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                                    <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                        Editar Evento
                                                    </h1>
                                                </v-col>
                                            </v-row>
                                        </v-toolbar>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-card style="background-color: rgb(227,235,235,0.5)" class="mb-2 pa-2 rounded-lg">
                                            <v-row justify="center" align="center">
                                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                                    <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                        Datos del Evento
                                                    </h1>
                                                </v-col>
                                            </v-row>
                                            <v-row justify="center" align="center">
                                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                                    <v-text-field
                                                        v-model="editedItem.NombreEvento"
                                                        color="teal accent-4"
                                                        label="Nombre del titular *"
                                                        prepend-icon="mdi-account-heart-outline"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                                    <v-text-field
                                                        v-model="editedItem.LugarEvento"
                                                        color="teal accent-4"
                                                        label="Direccion"
                                                        prepend-icon="mdi-account-heart-outline"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                                    <v-text-field
                                                        v-model="editedItem.fechaEvento"
                                                        color="teal accent-4"
                                                        type="date"
                                                        label="Municipio"
                                                        prepend-icon="mdi-account-heart-outline"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row class="ma-2" justify="center" align="center">
                                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                                    <v-text-field
                                                        v-model="editedItem.HoraEvento"
                                                        color="teal accent-4"
                                                        type="time"
                                                        label="Telefono"
                                                        prepend-icon="mdi-account-heart-outline"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                                    <v-text-field
                                                        v-model="editedItem.DescripcionEvento"
                                                        color="teal accent-4"
                                                        label="E-mail"
                                                        prepend-icon="mdi-account-heart-outline"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-row class="ma-5">
                                            <v-col justify="center" align="center" cols="12">
                                                <v-btn 
                                                    v-show="botton"
                                                    rounded
                                                    class="card-shadow"
                                                    dark
                                                    color="teal darken-3" 
                                                    @click="editarEvento()"
                                                    >
                                                    <v-icon left> mdi-account-edit-outline </v-icon>
                                                    Editar
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Post from '../../../post/post'
    
    export default ({
        data(){
            return{
                eventos:[],
                editedItem: {
                    NombreEvento: '',
                    LugarEvento: '',
                    fechaEvento: '',
                    HoraEvento:'',
                    DescripcionEvento: '',
                    Pieza: '',
                },
                dialogEditItem: false,
                snackbar:false,
                message:'',
                colorSnackbar:'',
                loading: false,
                botton: true
            }
        },
        mounted(){
            this.consultarEvento()
        },
        methods:{
            async editItem (item) {
                this.editedItem = await Object.assign({},item);
                this.dialogEditItem = true
            },
            async editarEvento(){
                this.loading= true
                this.snackbar= true
                this.colorSnackbar = 'green accent-4'
                this.message = 'Por Favor Espere...'
                console.log(this.editedItem)
                setTimeout(()=>{ this.snackbar = false },4000)
                const response = await Post.editEvento(this.editedItem);
                console.log(response)
                if(response.error === false){
                    this.loading= false
                    this.snackbar= true
                    this.colorSnackbar = 'teal accent-4'
                    this.message = 'Se actualizaron los datos correctamente...'
                    this.dialogEditItem = false
                    setTimeout(()=>{ this.snackbar = false },4000)
                }
                // location.reload()
                },
                
            async  consultarEvento(){
                const response = await Post.ConsultarEvent(); 
                response.results.forEach((element) => {
                    this.eventos.push({
                        id_evento: element.id_evento,
                        NombreEvento: element.NombreEvento,
                        LugarEvento: element.LugarEvento,
                        fechaEvento: element.fechaEvento,
                        HoraEvento:element.HoraEvento,
                        DescripcionEvento: element.DescripcionEvento,
                        Pieza: element.Pieza,
                    })  
                }); 
            } 
        }
    })
    </script>