<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mt-15 mb-15">
            <v-col  cols="12" sm="12" md="10" lg="8" xl="8">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                            Generar Informe
                        </h1>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                        <v-btn 
                            rounded
                            class="card-shadow"
                            dark
                            color="teal darken-3" 
                            @click="mostrarHomenaje">
                            <v-icon left> mdi-file-document-edit-outline </v-icon>
                            Informe de Homenajes
                        </v-btn>
                    </v-col>
                    <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                        <v-btn 
                            rounded
                            class="card-shadow"
                            dark
                            color="teal darken-3" 
                            @click="mostrarObituario">
                            <v-icon left> mdi-file-document-edit-outline </v-icon>
                            Informe de Obituarios
                        </v-btn>
                    </v-col>
                </v-row>
                <div v-show="dialogoHomenaje" class="mt-15">
                    <v-row>
                        <v-col justify="center" align="center" cols="12" sm="12" md="5" lg="5">
                            <v-text-field
                                v-model="fechaInicio"
                                type="date"
                                color="teal darken-4"
                                label="Primera Fecha"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="12" md="5" lg="5">
                            <v-text-field
                                v-model="fechafin"
                                type="date"
                                color="teal darken-4"
                                label="Segunda Fecha"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="6" >
                            <v-btn 
                                v-show="botton"
                                rounded
                                class="card-shadow"
                                dark
                                color="teal darken-3" 
                                @click="consultarHomenaje">
                                <v-icon left> mdi-file-excel-outline </v-icon>
                                Consultar
                            </v-btn>
                        </v-col>
                        <v-col justify="center" align="center" cols="6" >
                            <v-btn 
                                v-show="botton"
                                rounded
                                class="card-shadow"
                                dark
                                color="teal darken-3" 
                                @click="descargarReportHomenaje">
                                <v-icon left> mdi-file-excel-outline </v-icon>
                                Descargar Reporte
                            </v-btn>
                        </v-col>
                    </v-row>
                    <div class="d-flex justify-center mb-8 pt-15">
                        <v-progress-circular
                            v-show="loadLogin"
                            indeterminate
                            color="teal darken-3"
                        ></v-progress-circular>
                    </div>
                    <!-- homenajes -->
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-card>
                                <v-card-title>
                                    <v-row justify="center" align="center">
                                            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                                <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                    Homenajes
                                                </h1>
                                            </v-col>
                                        </v-row>
                                </v-card-title>
                                <v-data-table
                                    ref="tableObtuario"
                                    :headers="headers"
                                    :items="Homenaje"
                                    loading-text="Buscando... Por Favor Espere"
                                    item-key="name"
                                    class="elevation-1"
                                >
                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <div v-show="dialogObituario">
                    <v-row>
                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="fechaInicio"
                                type="date"
                                color="teal darken-4"
                                label="Primera Fecha"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                                v-model="fechafin"
                                type="date"
                                color="teal darken-4"
                                label="Segunda Fecha"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="12" md="4" lg="4">
                            <v-select
                                v-model="ciudad"
                                :items="ciudades"
                                item-value="value"
                                item-text="text"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Ciudades"
                                clearable
                            ></v-select>
                        </v-col>
                    </v-row>
                    <div class="d-flex justify-center mb-8 pt-15">
                        <v-progress-circular
                            v-show="loadLogin"
                            indeterminate
                            color="teal darken-3"
                        ></v-progress-circular>
                    </div>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="6" >
                            <v-btn 
                                v-show="botton"
                                rounded
                                class="card-shadow"
                                dark
                                color="teal darken-3" 
                                @click="consultarObituario">
                                <v-icon left> mdi-file-excel-outline </v-icon>
                                Consultar
                            </v-btn>
                        </v-col>
                        <v-col justify="center" align="center" cols="6" >
                            <v-btn 
                                v-show="botton"
                                rounded
                                class="card-shadow"
                                dark
                                color="teal darken-3" 
                                @click="descargarReportObituario">
                                <v-icon left> mdi-file-excel-outline </v-icon>
                                Descargar Reporte
                            </v-btn>
                        </v-col>
                    </v-row>
                    <!-- Obituario -->
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-card>
                                <v-card-title>
                                    <v-row justify="center" align="center">
                                            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                                <h1 class="mb-6 mt-5 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                                    Obituarios
                                                </h1>
                                            </v-col>
                                        </v-row>
                                </v-card-title>
                                <v-data-table
                                    ref="tableObtuario"
                                    :headers="headersObituario"
                                    :items="Obituarios"
                                    loading-text="Buscando... Por Favor Espere"
                                    item-key="name"
                                    class="elevation-1"
                                >
                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
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
import ExporXlsFile from 'export-from-json'
import Post from '../../post/Obituarios'

    export default {
        data () {
            return {
                headersObituario: [
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
                        text: 'Ciudad', 
                        value: 'Visualizacion', 
                    },
                ],
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
                        text: 'Municipio', 
                        value: 'municipio', 
                    },
                    { 
                        text: 'Afiliado', 
                        value: 'afiliado', 
                    },
                ],
                ciudades:[
                    'Neiva',
                    'Garzón',
                    'Pitalito',
                    'Florencia'
                ],
                Homenaje:[],
                Obituarios:[],
                dialogoHomenaje: false,
                dialogObituario: false,
                fechaInicio:'',
                fechafin:'',
                ciudad:'',
                snackbar:false,
                message:'',
                colorSnackbar:'',
                loadLogin: false,
                botton: true
            }
        },
        methods:{
            descargarReportHomenaje(){
                if(this.fechaInicio !== '' && this.fechafin !== ''){
                    this.loadLogin = true
                    setTimeout(()=>{ this.loadLogin = false },3000)

                    const data= this.Homenaje
                    const fileName = 'Reporte Homenajes'
                    const exportType = ExporXlsFile.types.xls 
                    ExporXlsFile({data,fileName,exportType})
                }else{
                    this.message='Por favor asegurate de llenar todos los campos...'
                    this.colorSnackbar='red accent-4'
                    this.loadLogin= false
                    this.botton = true
                    setTimeout(()=>{ this.snackbar = false },4000)
                }
            },
            descargarReportObituario(){
                if(this.fechaInicio !== '' && this.fechafin !== ''){
                    this.loadLogin = true
                    setTimeout(()=>{ this.loadLogin = false },3000)

                    const data= this.Obituarios
                    const fileName = 'Reporte Obituarios'
                    const exportType = ExporXlsFile.types.xls 
                    ExporXlsFile({data,fileName,exportType})
                }else{
                    this.message='Por favor asegurate de llenar todos los campos...'
                    this.colorSnackbar='red accent-4'
                    this.loadLogin= false
                    this.botton = true
                    setTimeout(()=>{ this.snackbar = false },4000)
                }
                this.Obituarios = []
            },
            mostrarHomenaje(){
                this.dialogoHomenaje = !this.dialogoHomenaje 
                this.dialogObituario = false
            },
            mostrarObituario(){
                this.dialogObituario = !this.dialogObituario
                this.dialogoHomenaje = false 
            },
            async consultarHomenaje(){
                this.Homenaje = []
                this.botton = false
                this.snackbar = true
                this.message = 'Procesando su informacion... Pro favor espere....'
                this.colorSnackbar = 'green accent-4'
                this.loadLogin = true
                if(this.fechaInicio !== '' && this.fechafin !== ''){
                    const data ={
                        fechaInicio:this.fechaInicio,
                        FechaFin:this.fechafin
                    }
                    const response = await Post.GenerarReporte(data);
                    if(response.error === false){
                        this.message='Su Consulta se realizo con exito.'
                        this.colorSnackbar='green accent-4'
                        this.loadLogin= false
                        this.botton = true
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
                        this.message='Intenta Nuevamente...s'
                        this.colorSnackbar='red accent-4'
                        this.loadLogin= false
                        this.botton = true

                        setTimeout(()=>{ this.snackbar = false },4000)
                    }
                }else{
                    this.message='Por favor asegurate de llenar todos los campos...'
                    this.colorSnackbar='red accent-4'
                    this.loadLogin= false
                    this.botton = true
                    setTimeout(()=>{ this.snackbar = false },4000)
                }
            },
            async consultarObituario(){
                this.Obituarios = []
                this.botton = false
                this.snackbar = true
                this.message = 'Procesando su informacion... Pro favor espere....'
                this.colorSnackbar = 'green accent-4'
                this.loadLogin = true
                if(this.fechaInicio !== '' && this.fechafin !== '' && this.ciudad !==''){
                    const data ={
                        ciudad: this.ciudad,
                        fechaInicio: this.fechaInicio,
                        fechafin: this.fechafin
                    }
                    const response = await Post.GenerarReporteObituario(data);
                    if(response.error === false){
                        if(response.results.length >= 1){
                            this.message='Su Consulta se realizo con exito.'
                            this.colorSnackbar='green accent-4'
                            this.loadLogin= false
                            this.botton = true
                            setTimeout(()=>{ this.snackbar = false },4000)
                            response.results.forEach((element) => {
                                this.Obituarios.push({
                                    id_obituario: element.id_obituario,
                                    Visualizacion: element.Visualizacion,
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
                                    foto: element.foto,
                                    HoraInhumacion: element.HoraInhumacion, 
                                    Ciudad: element.Ciudad, 
                                    Sector: element.Sector, 
                                    Ubicacion: element.Ubicacion, 
                                    NRegistro: element.NRegistro, 
                                    FechaExhumacion: element.FechaExhumacion,
                                })
                            })
                        }else{
                            this.message='No se encontraron registros'
                            this.colorSnackbar='green accent-4'
                            this.loadLogin= false
                            this.botton = true 
                        }
                    }else{
                        this.message='Intenta Nuevamente...s'
                        this.colorSnackbar='red accent-4'
                        this.loadLogin= false
                        this.botton = true
                        setTimeout(()=>{ this.snackbar = false },4000)
                    }
                }else{
                    this.message='Por favor asegurate de llenar todos los campos...'
                    this.colorSnackbar='red accent-4'
                    this.loadLogin= false
                    this.botton = true
                    setTimeout(()=>{ this.snackbar = false },4000)
                }
            }
        }

    }
</script>