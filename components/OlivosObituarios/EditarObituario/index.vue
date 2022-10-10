<template>
   <v-container fluid class="mb-15">
    <v-row justify="center" align="center" class="mt-15 mb-15">
            <v-col  cols="12" sm="12" md="10" lg="8" xl="8">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                            Editar Obituario
                        </h1>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <v-card>
                            <v-card-title>
                                <v-text-field
                                    v-model="datos"
                                    append-icon="mdi-magnify"
                                    label="Datos de busqueda"
                                    @keyup.enter="Enviar"
                                    
                                ></v-text-field>
                            </v-card-title>
                            <v-data-table
                                :headers="headers"
                                :items="Obituario"
                                :loading="loading"
                                loading-text="Buscando... Por Favor Espere"
                                item-key="name"
                                class="elevation-1"
                            >
                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                            </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card :loading="loading" v-show="dialogEditItem" width="100%">
                            <v-card-title class="mb-10">
                                <v-toolbar flat dark  color="#499893">
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                Editar Obituario
                                            </h1>
                                        </v-col>
                                    </v-row>
                                </v-toolbar>
                            </v-card-title>
                            <v-card-text>
                                <v-card class="mb-5 rounded-lg">
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                Acciones
                                            </h1>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2">
                                        <v-col justify="center" align="center" cols="12" sm="6" md="6" lg="6">
                                            <v-checkbox
                                                color="red darken-3"
                                                v-model="editedItem.visualizarObituario"
                                                label="No Visualizar Obituario"
                                                @change="check"
                                            ></v-checkbox>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="6" md="6" lg="6">
                                            <v-checkbox
                                                color="red darken-3"
                                                v-model="editedItem.visualizarFoto"
                                                label="No Visualizar Foto"
                                                @change="check"
                                            ></v-checkbox>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card style="background-color: rgb(227,235,235,0.5)" class="mb-5 rounded-lg">
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                Datos Generales
                                            </h1>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.visualizacion"
                                                color="teal accent-4"
                                                label="Ciudad Visualizacion *"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.NDocumento"
                                                color="teal accent-4"
                                                label="Numero Docuemnto *"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.nombre1"
                                                color="teal accent-4"
                                                label="Primer Nombre *"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.nombre2"
                                                color="teal accent-4"
                                                label="Segundo Nombre *"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.apellido1"
                                                color="teal accent-4"
                                                label="Primer Apellido *"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.apellido2"
                                                color="teal accent-4"
                                                label="Segundo Apellido"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.fechaNacimiento"
                                                type="date"
                                                color="teal accent-4"
                                                label="Fecha Nacimiento *"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.fechaFallecimiento"
                                                type="date"
                                                color="teal accent-4"
                                                label="Fecha Fallecimiento"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.LugarFallecimiento"
                                                color="teal accent-4"
                                                label="Lugar Fallecimiento"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.Notaria"
                                                color="teal accent-4"
                                                label="Notaria"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card class="mb-5 rounded-lg">
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                Datos Exequias
                                            </h1>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.NombreSala"
                                                color="teal accent-4"
                                                label="Nombre de la sala"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.HoraSalidaSala"
                                                type="time"
                                                color="teal accent-4"
                                                label="Hora salida de sala"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.FechaSalidaSala"
                                                type="date"
                                                color="teal accent-4"
                                                label="Fecha salida de sala"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.LugarExequias"
                                                color="teal accent-4"
                                                label="Lugar exequias"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.Departamento" 
                                                color="teal accent-4"
                                                label="Departamento"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            v-model="editedItem.fechaExequias"
                                            type="date"
                                            color="teal accent-4"
                                            label="Fecha de exequias"
                                            hint="Ingresa la ciudad de visualizacion ."
                                            prepend-icon="mdi-account-heart-outline"
                                        ></v-text-field>
                                    </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.HoraExequias" 
                                                type="time"
                                                color="teal accent-4"
                                                label="Hora exequias"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card style="background-color: rgb(227,235,235,0.5)" class="mb-5 rounded-lg">
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                Datos Inhumacion
                                            </h1>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.DestinoFinal"
                                                type="date"
                                                color="teal accent-4"
                                                label="Destino Final"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.HoraInhumacion" 
                                                color="teal accent-4"
                                                label="Hora Inhumacion"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.Ciudad"
                                                color="teal accent-4"
                                                label="Ciudad"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.Sector"
                                                type="date"
                                                color="teal accent-4"
                                                label="Sector"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.Ubicacion" 
                                                color="teal accent-4"
                                                label="Ubicacion"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card class="mb-5 rounded-lg" >
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                Otros Datos
                                            </h1>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center"> 
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.NRegistro"
                                                color="teal accent-4"
                                                label="Numero registro"
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-text-field
                                                v-model="editedItem.FechaExhumacion"
                                                type="date"
                                                color="teal accent-4"
                                                label="Fecha exhumacion"
                                                hint="Ingresa la ciudad de visualizacion ."
                                                prepend-icon="mdi-account-heart-outline"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card class="mb-2 rounded-lg" style="background-color: rgb(227,235,235,0.5)">
                                    <v-row justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                            <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                Foto Ser querido    
                                            </h1>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ml-2 mr-2" justify="center" align="center">
                                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                            <v-img
                                                v-model="editedItem.foto"
                                                color="teal accent-4"
                                                label="Numero registro"
                                                :src="editedItem.foto"
                                            ></v-img>
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
                                            @click="editObituario">
                                            <v-icon left> mdi-account-edit-outline </v-icon>
                                            Editar
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <v-snackbar
                            class="pb-8"
                            :timeout="3000"
                            :value="snackbar"
                            :color="colorSnackbar"
                            rounded="pill"
                        > {{ message }} </v-snackbar>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
   </v-container>
</template>
<script>

import Post from '../../post/Obituarios'
  export default {
    data () {
      return {
        headers: [
            {
                text: '#',
                align: 'start',
                value: 'id_obituario',
            },
            {
                text: 'Nombre',
                value: 'nombre1',
            },
            {
                text: 'Apellido',
                value: 'apellido1',
            },
            { 
                text: 'Numero Documento', 
                value: 'NDocumento' 
            },
            { 
                text: 'Actions', 
                value: 'actions', 
                sortable: false
            },
        ],
        editedItem: {
            id_obituario:'',
			visualizacion: '',
            visualizarObituario:'',
            NDocumento: '', 
            nombre1: '', 
            nombre2: '', 
            apellido1: '', 
            apellido2: '', 
            fechaNacimiento: '', 
            fechaFallecimiento: '', 
            LugarFallecimiento: '', 
            Notaria: '', 
            NombreSala: '', 
            fechaExequias: '', 
            HoraExequias: '', 
            HoraSalidaSala:'',
            FechaSalidaSala:'',
            Departamento: '', 
            LugarExequias: '', 
            DestinoFinal: '', 
            HoraInhumacion: '', 
            Ciudad: '', 
            Sector: '', 
            Ubicacion: '', 
            NRegistro: '', 
            FechaExhumacion: '',
            foto:'',
            visualizarFoto: false
		},
        botton:true,
        dialogEditItem: false,
        datos:'',
        Obituario:[],
        snackbar:false,
        message:'',
        colorSnackbar:'',
        loading: false,
    }
    },
    methods:{
        check(){
            if(this.editedItem.visualizarObituario){
                this.editedItem.visualizarObituario = 1
            }else{
                this.editedItem.visualizarObituario = 0
            }

            if(this.editedItem.visualizarFoto){
                this.editedItem.visualizarFoto = 1
            }else{
                this.editedItem.visualizarFoto = 0
            }
        },
        async editItem (item) {
            this.editedItem = await Object.assign({},item);
            this.dialogEditItem = true
        },
        async editObituario(){
            this.loading= true
            this.snackbar= true
            this.colorSnackbar = 'green accent-4'
            this.message = 'Por Favor Espere...'
            setTimeout(()=>{ this.snackbar = false },4000)
            console.log(this.editedItem)
            const response = await Post.editObituarios(this.editedItem);
            if(response.error === false){
                this.loading= false
                this.snackbar= true
                this.colorSnackbar = 'teal accent-4'
                this.message = 'Se actualzaron los datos correctamente...'
                this.dialogEditItem = false
                setTimeout(()=>{ this.snackbar = false },4000)
                location.reload()
            }
        },
        async Enviar(){
            this.Obituario=[]
            this.loading= true
            this.snackbar= true
            this.colorSnackbar = 'teal accent-4'
            this.message = 'Consultando homenaje... Por Favor Espere...'
            if(this.datos !== ''){
                const response = await Post.ConsultObituarios(this.datos);
                if(response.error === false){
                    
                    this.loading= false
                    this.snackbar= true
                    this.colorSnackbar = 'green accent-4'
                    this.message = 'Su Consulta se realizo con exito...'
                    setTimeout(()=>{ this.snackbar = false },4000)
                    response.results.forEach((element) => {
                        this.Obituario.push({
                            id_obituario: element.id_obituario,
                            visualizacion: element.Visualizacion,
                            visualizarObituario: element.visualizarObituario,
                            nombre1: element.nombre1, 
                            nombre2: element.nombre2, 
                            apellido1: element.apellido1, 
                            apellido2: element.apellido2, 
                            NDocumento: element.NDocumento,
                            fechaNacimiento: element.fechaNacimiento, 
                            fechaFallecimiento: element.fechaFallecimiento, 
                            LugarFallecimiento: element.LugarFallecimiento, 
                            Notaria: element.Notaria, 
                            NombreSala: element.NombreSala, 
                            fechaExequias: element.fechaExequias, 
                            HoraExequias: element.HoraExequias, 
                            HoraSalidaSala:element.HoraSalidaSala,
                            FechaSalidaSala:element.FechaSalidaSala,
                            Departamento: element.Departamento, 
                            LugarExequias: element.LugarExequias, 
                            DestinoFinal: element.DestinoFinal, 
                            HoraInhumacion: element.HoraInhumacion, 
                            Ciudad: element.Ciudad, 
                            Sector: element.Sector, 
                            Ubicacion: element.Ubicacion, 
                            NRegistro: element.NRegistro, 
                            FechaExhumacion: element.FechaExhumacion, 
                            foto: element.foto,
                            visualizarFoto: element.visualizarFoto
                        })
                    })
                }
                else{
                    this.snackbar = true
                    this.loading= false
                    this.colorSnack = 'red accent-3'
                    this.message = 'Intente nuevamente.'
                    setTimeout(()=>{ this.snackbar = false },3000)
                }
            }
            else{
                this.snackbar = true
                this.loading= false
                this.colorSnackbar = 'red accent-3'
                this.message = 'Por Favor Asegurate de haber llenado los campos.'
                setTimeout(()=>{ this.snackbar = false },3000)
            }
        }
    }
  }
</script>
