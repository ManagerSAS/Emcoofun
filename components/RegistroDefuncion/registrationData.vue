<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" sm="12" md="12" lg="6" class="text-center">
                <img src="~/static/nav/iconLogin.png" alt="" width="65px">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                    Buscar registro
                </h1>
                <v-text-field
                    v-model="datos"
                    color="teal darken-4"
                    rounded
                    filled
                    label="Escribe el nombre de la persona o numero de identificación"
                    hint="Presiona 'Enter' para iniciar la busqueda"
                ></v-text-field>

                <v-btn 
                    v-show="botton"
                    rounded
                    class="card-shadow"
                    dark
                    color="teal darken-3" 
                    @click="consultar">
                    <v-icon left> mdi-file-excel-outline </v-icon>
                   Consultar
                </v-btn>
                <div class="d-flex justify-center mb-8 pt-15">
                <v-progress-circular
                    v-show="loadLogin"
                    indeterminate
                    color="teal darken-3"
                ></v-progress-circular>
            </div>
            </v-col>
        </v-row>      
        <v-card class="ma-5" style="background-color: rgb(227,235,235,0.5)" v-show="dialogEditItem" width="100%">
            <v-card-title class="mb-10">
                <v-toolbar flat dark  color="#499893">
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <h1 class="mb-6 mt-5 text-raleway" style="color: white; font-size: 20px; font-weight: 800;">
                                Datos del registro de defuncion
                            </h1>
                        </v-col>
                    </v-row>
                </v-toolbar>
            </v-card-title>
            <v-card-text >
                <v-card class="mb-5" v-for="(registro,index) in Registro" :key="index">
                    <v-row class="ma-2">
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <div>
                                <p class="text-comfortaa" style="color:#003B4C; font-size: 20px; font-weight: 800;">
                                    Numero Registro: <span class="text-raleway" style="color:black; font-size: 20px; font-weight: 400;">{{registro.NRegistro}}</span>
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <div>
                                <p class="text-comfortaa" style="color:#003B4C; font-size: 20px; font-weight: 800;">
                                    Nombre: <span class="text-raleway" style="color:black; font-size: 20px; font-weight: 400;">{{registro.nombreCompleto}}</span>
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <div>
                                <p class="text-comfortaa" style="color:#003B4C; font-size: 20px; font-weight: 800;">
                                    Nombre: <span class="text-raleway" style="color:black; font-size: 20px; font-weight: 400;">{{registro.Ciudad}} - {{registro.Departamento}}</span>
                                </p> 
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="ma-2">
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <div>
                                 <p class="text-comfortaa" style="color:#003B4C; font-size: 20px; font-weight: 800;"> 
                                    Fecha: <span class="text-raleway" style="color:black; font-size: 20px; font-weight: 400;">{{registro.fechaFallecimiento}}</span>
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <div>
                                 <p class="text-comfortaa" style="color:#003B4C; font-size: 20px; font-weight: 800;"> 
                                    Cedula: <span class="text-raleway" style="color:black; font-size: 20px; font-weight: 400;">{{registro.NDocumento}}</span>
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <div>
                                 <p class="text-comfortaa" style="color:#003B4C; font-size: 20px; font-weight: 800;">
                                     Notaria: <span class="text-raleway" style="color:black; font-size: 20px; font-weight: 400;">{{registro.Notaria}}</span>
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-card-text>
        </v-card>  
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
    import Post from '../post/post'
    
      export default {
        data () {
          return {
            datos:'',
            botton:true,
            dialogEditItem: false,
            snackbar:false,
            message:'',
            Registro:[],
            colorSnackbar:'',
            loadLogin: false,
          }
        },
        methods:{
            async consultar(){
                this.Registro=[]
                this.snackbar=true
                this.message='Estamos procesando su informacion..Por Favor Espere....'
                this.colorSnackbar='teal accent-4'
                this.botton=false
                this.loadLogin= true
                if(this.datos !== ''){
                    const response = await Post.ConsultaRegistroDefuncion(this.datos);
                    if(response.error === false){
                        this.loadLogin= false
                        this.snackbar= true
                        this.colorSnackbar = 'green accent-4'
                        this.message = 'Su Consulta se realizo con exito...'
                        this.dialogEditItem= true
                        this.botton=true
                        response.results.forEach((element) => {
                            this.Registro.push({
                                id_obituario: element.id_obituario,
                                visualizacion: element.Visualizacion,
                                nombreCompleto: element.nombreCompleto,  
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
                            })
                        })
                    }
                    else{
                        this.snackbar = true
                        this.loadLogin= false
                        this.colorSnack = 'red accent-3'
                        this.message = 'Intente nuevamente.'
                        this.botton=true
                        setTimeout(()=>{ this.snackbar = false },3000)
                    }
                }
                else{
                    this.snackbar = true
                    this.loadLogin= false
                    this.colorSnackbar = 'red accent-3'
                    this.message = 'Por Favor Asegurate de haber llenado los campos.'
                    this.botton=true
                    setTimeout(()=>{ this.snackbar = false },3000)
                }
            }
        }
    }
</script>