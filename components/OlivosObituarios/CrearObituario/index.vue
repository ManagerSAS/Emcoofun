<template>
    <div class="ma-2">
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                    Crear Obituario
                </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-form ref="formObtuario" autocomplete="off">
                    <v-row>
                        <v-col cols="12" sm="10" md="5" lg="5">
                            <p class="text-raleway" style="color:#003B4C;">Ciudad donde se visualizara el Obituario.</p>
                            <v-select
                                v-model="ciudad"
                                :items="ciudades"
                                item-text="text"
                                :rules="nameRules"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Ciudades"
                                clearable
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                                Datos generales
                            </h1>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="NDocumento"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Numero de documento"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="nombre1"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Primer Nombre"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="nombre2"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Segundo Nombre"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="apellido1"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Primer Apellido"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="apellido2"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Segundo Apellido"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="fechaNacimiento"
                                type="date"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Fecha Nacimiento"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="fechaFallecimiento"
                                type="date"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Fecha Fallecimiento"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="LugarFallecimiento"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Lugar Fallecimiento"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="Notaria"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Notaria"
                           >
                           </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                                Exequias
                            </h1>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="NombreSala"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Nombre de la Sala"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="fechaExequias"
                                type="date"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Fecha de las Exequias"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="HoraExequias"
                                type="time"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Hora de las Exequias"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="Departamento"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Departamento"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="LugarExequias"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Lugar Exequias (iglesia)"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="2" lg="2">
                            <v-text-field
                                v-model="FechaSalidaSala"
                                type="date"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Fecha Salida Sala"
                            ></v-text-field> 
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="2" lg="2">
                            <v-text-field
                                v-model="HoraSalidaSala"
                                type="time"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Hora Salida Sala"
                            ></v-text-field> 
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                                Inhumacion
                            </h1>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="DestinoFinal"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Destino Final o Cementerio"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="HoraInhumacion"
                                type="time"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Hora Inhumacion"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="Ciudad"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Ciudad"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="Sector"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Sector"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="Ubicacion"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Ubicacion"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                                Otros
                            </h1>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="NRegistro"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Numero registor de defuncion"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                           <v-text-field
                                v-model="FechaExhumacion"
                                :rules="nameRules"
                                type="date"
                                color="teal darken-4"
                                label="Fecha Exhimacion"
                           >
                           </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                                Foto del ser querido
                            </h1>
                        </v-col>
                    </v-row>
                    <p class="text-raleway" style="color:#003B4C; font-size: 20px;" justify="center" align="center">Antes de Adjuntar foto validar si el titular ya agrego una en el formulario de homenajes*</p>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <v-file-input
                                v-model="file"
                                multiple
                                type="file"
                                accept="image/*"
                                color="teal darken-3"
                                label="Adjuntar archivo(s)"
                                @change="onSelectedFiles(file)"
                            ></v-file-input>
                            <cropper
                                v-model="foto"
                                :stencil-props="{
                                    aspectRatio: 1/1,
                                }"
                                :canvas="{
                                    height: 330,
                                    width: 330
                                }"
                                :src="url"
                                @change="change"
                            />
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
                            <img :src="src" width="300">
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                            <v-snackbar
                                class="pb-8"
                                :timeout="3000"
                                :value="snackbar"
                                :color="colorSnackbar"
                                rounded="pill"
                            > {{ message }} </v-snackbar>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                            <v-progress-circular
                                v-show="loading"
                                indeterminate
                                color="teal darken-3"
                            ></v-progress-circular>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-btn
                                class="ma-2"
                                outlined
                                color="teal darken-4"
                                @click="EnviarInfor()"
                                >
                                Enviar Informacion
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import 'vue-advanced-cropper/dist/style.css'
import { Cropper } from 'vue-advanced-cropper'
import Post from '../../post/Obituarios'

    export default { 
        components: {
		    Cropper,
	    },  
        data(){
            return{
                croppa: {},
                nameRules: [
                    v => !!v || 'Campo requerido',
                ],
                emailRules: [
                    v => /.+@.+\..+/.test(v) || '',
                ],
                ciudad:'',
                ciudades:[
                    'Neiva',
                    'Garzón',
                    'Pitalito',
                    'Florencia'
                ],
                // Datos Generales
                NDocumento:'',
                nombre1:'',
                nombre2:'',
                apellido1:'',
                apellido2:'',
                fechaNacimiento:'',
                fechaFallecimiento:'',
                LugarFallecimiento:'',
                Notaria:'',
                // Exequias
                NombreSala:'',
                fechaExequias:'',
                HoraExequias:'',
                Departamento:'',
                LugarExequias:'',
                FechaSalidaSala:'',
                HoraSalidaSala:'',
                
                // Inhumacion
                DestinoFinal:'',
                HoraInhumacion:'',
                Ciudad:'',
                Sector:'',
                Ubicacion:'',
                // Otros
                NRegistro:'',
                FechaExhumacion:'',
                // snackbar
                snackbar:false,
                message:'',
                colorSnackbar:'',
                loading: false,
                // foto
                file:null,
                foto:null,
                url:'',
                src:'',
                fotoSerquerido: null,

            }
        },
        methods:{
            async onSelectedFiles(file){
                const formdata = new FormData();
                formdata.append("upload_preset", "fotosObituarios");
                formdata.append("file", file[0]);

                const requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                await fetch("https://api.cloudinary.com/v1_1/dazyyib7u/image/upload", requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.url = data.url
                })
            },
            change({ coordinates, canvas }) {
			    this.coordinates = coordinates
                this.foto = canvas.toDataURL()
                this.src = this.foto
                this.enviarImg()
		    },
            async enviarImg(){
                const formdata = new FormData();
                formdata.append("upload_preset", "fotosCortadas");
                formdata.append("file", this.src);

                const requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                await fetch("https://api.cloudinary.com/v1_1/dazyyib7u/image/upload", requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.fotoSerquerido = data.url
                })
            },
            async EnviarInfor(){
                if(this.fotoSerquerido === null){
                    this.fotoSerquerido = ''
                }
                if(this.ciudad !=='' && this.NDocumento !== '' && this.nombre1 !== '' && this.nombre2 !== '' && this.apellido1 !== ''&& this.apellido2 !== '' && this.fechaNacimiento !== ''&& this.fechaFallecimiento !== '' && this.LugarFallecimiento !== '' && this.Notaria !== '' && this.NombreSala !== ''&& this.fechaExequias !== '' && this.HoraExequias !== '' && this.Departamento !== '' && this.LugarExequias !== '' && this.DestinoFinal !== '' && this.HoraInhumacion !== '' && this.Ciudad !== '' && this.Sector !== '' && this.Ubicacion !== '' && this.NRegistro !== '' && this.FechaExhumacion !== '' ){

                    this.snackbar= true
                    this.loading= true
                    this.message='Enviando Datos... Por favor Espere'
                    this.colorSnackbar='teal accent-4'
                    const hoy = new Date(); 
                    setTimeout(() => {
                            this.snackbar= false
                            this.loading = false
                        }, 3000);

                    const datos ={
                        Visualizacion: this.ciudad,
                        NDocumento: this.NDocumento, 
                        nombre1: this.nombre1, 
                        nombre2: this.nombre2, 
                        apellido1: this.apellido1, 
                        apellido2: this.apellido2, 
                        fechaNacimiento: this.fechaNacimiento, 
                        fechaFallecimiento: this.fechaFallecimiento, 
                        LugarFallecimiento: this.LugarFallecimiento, 
                        Notaria: this.Notaria, 
                        NombreSala: this.NombreSala, 
                        fechaExequias: this.fechaExequias, 
                        HoraExequias: this.HoraExequias, 
                        HoraSalidaSala:this.HoraSalidaSala,
                        FechaSalidaSala:this.FechaSalidaSala,
                        Departamento: this.Departamento, 
                        LugarExequias: this.LugarExequias, 
                        foto: this.fotoSerquerido,
                        DestinoFinal: this.DestinoFinal, 
                        HoraInhumacion: this.HoraInhumacion, 
                        Ciudad: this.Ciudad, 
                        Sector: this.Sector, 
                        Ubicacion: this.Ubicacion, 
                        NRegistro: this.NRegistro, 
                        FechaExhumacion: this.FechaExhumacion,
                        fechaRegistro: hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 )  + '-' +  hoy.getDate()
                    }
                    const data = await Post.postObituario( datos )
                    console.log(data.data)
                    if(data.data.error === false){
                        this.snackbar = true
                        this.loading= false
                        this.colorSnack = 'green accent-4'
                        this.message = 'El obituario se ha creado exitosamente.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formObtuario.reset()
                        this.src = ''
                    }
                    else{
                        this.snackbar = true
                        this.loading= false
                        this.colorSnack = 'red accent-3'
                        this.message = 'Intente nuevamente.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formObtuario.reset()
                    }
                    
                }else{
                    this.snackbar= true
                    this.loading= true
                    this.message='Por favor llenar todos los campos'
                    this.colorSnackbar='red'
                    setTimeout(() => {
                            this.loading = false
                        }, 3000);
                }
                
            }

        }
    }
</script>