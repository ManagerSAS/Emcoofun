<template>
    <div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                    Homenajes
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
                        ref="tableObtuario"
                        :headers="headers"
                        :items="Homenaje"
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
                <v-card v-show="dialogEditItem" width="100%" :loading="loading">
                    <v-card-title class="mb-10">
                        <v-toolbar class="rounded-lg" flat dark  color="#499893">
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                        Editar Homenaje
                                    </h1>
                                </v-col>
                            </v-row>
                        </v-toolbar>
                    </v-card-title>
                    <v-card-text>
                        <v-card style="background-color: rgb(227,235,235,0.5)" class="mb-2 rounded-lg">
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                        Datos del titular
                                    </h1>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.nombre_titular"
                                        color="teal accent-4"
                                        label="Nombre del titular *"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.direccion"
                                        color="teal accent-4"
                                        label="Direccion"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.barrio"
                                        color="teal accent-4"
                                        label="Barrio"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.municipio"
                                        color="teal accent-4"
                                        label="Municipio"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.telefono"
                                        color="teal accent-4"
                                        label="Telefono"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.email"
                                        color="teal accent-4"
                                        label="E-mail"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>

                        <v-card class="mt-5 rounded-lg">
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                        Datos del homenaje
                                    </h1>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.nombre_homenaje"
                                        color="teal accent-4"
                                        label="Nombre del titular *"
                                        hint="Ingresa la ciudad de visualizacion ."
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.n_documento"
                                        color="teal accent-4"
                                        label="Direccion"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.afiliado"
                                        color="teal accent-4"
                                        label="Barrio"
                                        hint="Ingresa la ciudad de visualizacion ."
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.lugar_fallecimiento"
                                        color="teal accent-4"
                                        label="Lugar Fallecimiento"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.documentos"
                                        color="teal accent-4"
                                        label="Documentos"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-card style="background-color: rgb(227,235,235,0.5)" class="rounded-lg">
                            <v-row class="ma-2 " justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                        Datos de Exequias
                                    </h1>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.exequias"
                                        color="teal accent-4"
                                        label="Nombre del titular *"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.otro"
                                        color="teal accent-4"
                                        label="Otro"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.iglesia"
                                        color="teal accent-4"
                                        label="Barrio"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.hora_exequias"
                                        type="time"
                                        color="teal accent-4"
                                        label="hora Exequias"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.retablo"
                                        color="teal accent-4"
                                        label="Retablo"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.palabras"
                                        color="teal accent-4"
                                        label="Palabras"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.destino_final"
                                        color="teal accent-4"
                                        label="Destino Final"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.parentescos"
                                        color="teal accent-4"
                                        label="Parentescos"
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
                                    @click="editarHomenaje">
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
    </div>
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
                value: 'id_homenaje',
            },
            {
                text: 'Nombre Titular',
                value: 'nombre_titular',
            },
            {
                text: 'Nombre Homenaje',
                value: 'nombre_homenaje',
            },
            { 
                text: 'Actions', 
                value: 'actions', 
                sortable: false
            },
        ],
        editedItem: {
            id_homenaje:'',
			nombre_titular: '',
            direccion: '',
            barrio: '',
            municipio: '',
            telefono: '',
            email: '',
            nombre_homenaje: '',
            n_documento: '',
            afiliado: '',
            lugar_fallecimiento: '',
            documentos: '',
            exequias: '',
            otro: '',
            iglesia: '',
            hora_exequias: '',
            retablo: '',
            palabras: '',
            destino_final: '',
            parentescos: '',
            archivado:''
		},
        dialogEditItem: false,
        datos:'',
        Homenaje:[],
        snackbar:false,
        message:'',
        colorSnackbar:'',
        loading: false,
        botton: true
      }
    },
    methods:{
        async editItem (item) {
            this.editedItem = await Object.assign({},item);
            this.dialogEditItem = true
        },
        async editarHomenaje(){

            this.loading= true
            this.snackbar= true
            this.colorSnackbar = 'green accent-4'
            this.message = 'Por Favor Espere...'

            setTimeout(()=>{ this.snackbar = false },4000)
            const response = await Post.editHomenaje(this.editedItem);

            if(response.error === false){
                this.loading= false
                this.snackbar= true
                this.colorSnackbar = 'teal accent-4'
                this.message = 'Se actualizaron los datos correctamente...'
                this.dialogEditItem = false
                setTimeout(()=>{ this.snackbar = false },4000)
            }
            location.reload()
        },
        async Enviar(){
            this.loading= true
            this.snackbar= true
            this.colorSnackbar = 'teal accent-4'
            this.message = 'Consultando homenaje... Por Favor Espere...'
            if(this.datos !== ''){
                const response = await Post.ConsultHomenaje(this.datos);
                if(response.error === false){
                    
                    this.loading= false
                    this.snackbar= true
                    this.colorSnackbar = 'green accent-4'
                    this.message = 'Su Consulta se realizo con exito...'
                    setTimeout(()=>{ this.snackbar = false },4000)

                    response.results.forEach((element) => {
                        this.Homenaje.push({
                            id_homenaje:element.id_homenaje,
                            nombre_titular: element.nombre_titular,
                            direccion: element.direccion,
                            barrio: element.barrio,
                            municipio: element.municipio,
                            telefono: element.telefono,
                            email: element.email,
                            nombre_homenaje: element.nombre_homenaje,
                            n_documento: element.n_documento,
                            afiliado: element.afiliado,
                            lugar_fallecimiento: element.lugar_fallecimiento,
                            documentos: element.documentos,
                            exequias: element.exequias,
                            otro: element.otro,
                            iglesia: element.iglesia,
                            hora_exequias: element.hora_exequias,
                            retablo: element.retablo,
                            palabras: element.palabras,
                            destino_final: element.destino_final,
                            parentescos: element.parentescos,
                            archivado:element.archivado
                        })
                    })
                }else{
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