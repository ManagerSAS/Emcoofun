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
                                        v-model="editedItem.nameTitular"
                                        color="teal accent-4"
                                        label="Nombre del titular *"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.Departamento"
                                        color="teal accent-4"
                                        label="Departamento"
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
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.typesId"
                                        color="teal accent-4"
                                        label="Tipo Identificacion"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.Barrio"
                                        color="teal accent-4"
                                        label="Barrio"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.numeroId"
                                        color="teal accent-4"
                                        label="N° Documento"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.direccion"
                                        color="teal accent-4"
                                        label="direccion"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.email"
                                        color="teal accent-4"
                                        label="email"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.telefono1"
                                        color="teal accent-4"
                                        label="telefono #1"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.telefono2"
                                        color="teal accent-4"
                                        label="telefono #2"
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
                                        v-model="editedItem.nameHomenaje"
                                        color="teal accent-4"
                                        label="Nombre del titular *"
                                        hint="Ingresa la ciudad de visualizacion ."
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.NumdocumentoHome"
                                        color="teal accent-4"
                                        label="Numero Documento"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.typeIdHomenaje"
                                        color="teal accent-4"
                                        label="Tipo identificacion"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.afiliaty"
                                        color="teal accent-4"
                                        label="Afiliado"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.DepartamentoFallecimiento"
                                        color="teal accent-4"
                                        label="Departamento Fallecimiento"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.cityFallecimiento"
                                        color="teal accent-4"
                                        label="Ciudad Fallecimiento"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.documents"
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
                                        v-model="editedItem.other"
                                        color="teal accent-4"
                                        label="Otro"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.Templo1"
                                        color="teal accent-4"
                                        label="Barrio"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.DireccionTemplo1"
                                        color="teal accent-4"
                                        label="hora Exequias"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.Templo2"
                                        color="teal accent-4"
                                        label="Templo #2"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.DireccionTemplo2"
                                        color="teal accent-4"
                                        label="Palabras"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.Fecha"
                                        color="teal accent-4"
                                        label="Destino Final"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.Hora1"
                                        color="teal accent-4"
                                        label="Hora #1"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.Hora2"
                                        color="teal accent-4"
                                        label="Hora #2"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editedItem.palabras"
                                        color="teal accent-4"
                                        label="Palabras"
                                        prepend-icon="mdi-account-heart-outline"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-card style="background-color: rgb(227,235,235,0.5)" class="rounded-lg">
                            <v-row class="ma-2 " justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                        Foto del ser querido
                                    </h1>
                                </v-col>
                            </v-row>
                            <v-row class="ma-2" justify="center" align="center">
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
                value: 'nameTitular',
            },
            {
                text: 'Nombre Homenaje',
                value: 'nameHomenaje',
            },
            { 
                text: 'Actions', 
                value: 'actions', 
                sortable: false
            },
        ],
        editedItem: {
            id_homenaje:'',
			nameTitular:'',
            Departamento:'',
            Ciudad:'',
            typesId:'',
            Barrio:'',
            numeroId:'',
            direccion:'',
            email:'',
            telefono1:'',
            telefono2:'',
            nameHomenaje:'',
            NumdocumentoHome:'',
            typeIdHomenaje:'',
            afiliaty:'',
            DepartamentoFallecimiento:'',
            cityFallecimiento:'',
            documents:'',
            exequias:'',
            other:'',
            Templo1:'',
            DireccionTemplo1:'',
            Templo2:'',
            DireccionTemplo2:'',
            Fecha:'',
            Hora1:'',
            Hora2:'',
            palabras:'',
            foto:'',
            fecha_registro:'',
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
            this.Homenaje=[]
            this.loading= true
            this.snackbar= true
            this.colorSnackbar = 'teal accent-4'
            this.message = 'Consultando homenaje... Por Favor Espere...'
            if(this.datos !== ''){
                const response = await Post.ConsultHomenaje(this.datos);
                console.log(response)
                if(response.error === false){
                    
                    this.loading= false
                    this.snackbar= true
                    this.colorSnackbar = 'green accent-4'
                    this.message = 'Su Consulta se realizo con exito...'
                    setTimeout(()=>{ this.snackbar = false },4000)

                    response.results.forEach((element) => {
                        this.Homenaje.push({
                            id_homenaje:element.id_homenaje,
                            nameTitular: element.nameTitular,
                            Departamento: element.Departamento,
                            Ciudad: element.Ciudad,
                            typesId: element.typesId,
                            Barrio: element.Barrio,
                            numeroId: element.numeroId,
                            direccion: element.direccion,
                            email: element.email,
                            telefono1: element.telefono1,
                            telefono2: element.telefono2,
                            nameHomenaje: element.nameHomenaje,
                            NumdocumentoHome: element.NumdocumentoHome,
                            typeIdHomenaje: element.typeIdHomenaje,
                            afiliaty: element.afiliaty,
                            DepartamentoFallecimiento: element.DepartamentoFallecimiento,
                            cityFallecimiento: element.cityFallecimiento,
                            documents: element.documents,
                            exequias: element.exequias,
                            other: element.other,
                            Templo1: element.Templo1,
                            DireccionTemplo1: element.DireccionTemplo1,
                            Templo2: element.Templo2,
                            DireccionTemplo2: element.DireccionTemplo2,
                            Fecha: element.Fecha,
                            Hora1: element.Hora1,
                            Hora2: element.Hora2,
                            palabras: element.palabras,
                            foto: element.foto,
                            fecha_registro: element.fecha_registro,
                        })

                        console.log(this.Homenaje)
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