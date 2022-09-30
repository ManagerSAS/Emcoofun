<template>
     <div >
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Crear Evento
                </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-form ref="formObtuario" autocomplete="off">
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="start" cols="12" sm="12" md="12" lg="12">
                            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 25px; font-weight: 800;">
                                Datos Del evento
                            </h1>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="start" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="NombreEvento"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Nombre del Evento"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="start" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="LugarEvento"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Lugar del Evento"
                           >
                           </v-text-field>
                        </v-col>
                        <v-col justify="center" align="start" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="fechaEvento"
                                type="date"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Fecha Evento"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="start" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="HoraEvento"
                                type="time"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Hora del Evento"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="start" cols="12" sm="10" md="4" lg="4">
                            <v-file-input
                                v-model="file"
                                multiple
                                name="file"
                                type="file"
                                accept="image/*"
                                color="teal darken-3"
                                label="Adjuntar archivo(s)"
                                @change="onSelectedFiles(file)"
                            ></v-file-input>
                        </v-col>
                        <v-col justify="center" align="start" cols="12" sm="10" md="4" lg="4">
                            <v-text-field
                                v-model="DescripcionEvento"
                                :rules="nameRules"
                                row="2"
                                color="teal darken-4"
                                label="Descripcion del evento"
                           >
                           </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-btn
                                class="ma-2"
                                outlined
                                color="teal darken-4"
                                @click="CrearEvento()"
                                >
                                Crear Evento
                            </v-btn>
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
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-progress-circular
                                v-show="loading"
                                indeterminate
                                color="teal darken-3"
                            ></v-progress-circular>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import Post from '../../../post/post'
export default { 

    data(){
        return{
            NombreEvento:'',
            LugarEvento:'',
            fechaEvento:'',
            HoraEvento:'',
            DescripcionEvento:'',
            file: null,

            message:'',
            snackbar:false,
            colorSnackbar:'',
            loading: false,
            url:'',
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
        }
    },
    methods:{
        async onSelectedFiles(file){ 
            const formdata = new FormData();
            formdata.append("upload_preset", "eventos");
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
        async CrearEvento(){
            if(this.NombreEvento !== '' && this.LugarEvento !== '' && this.fechaEvento !== '' && this.HoraEvento !== '' && this.DescripcionEvento !== '' && this.url !== ''){
                this.snackbar= true
                this.loading= true
                this.message='Enviando Datos... Por favor Espere'
                this.colorSnackbar='teal accent-4'
                const hoy = new Date(); 
                const datos ={
                    NombreEvento:this.NombreEvento,
                    LugarEvento:this.LugarEvento,
                    fechaEvento:this.fechaEvento,
                    HoraEvento:this.HoraEvento,
                    DescripcionEvento:this.DescripcionEvento,
                    Pieza:this.url,
                    Fecha_Registro: hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 )  + '-' +  hoy.getDate()  
                }

                const data = await Post.CreateEvent( datos )
                
                if(data.error === false){
                    this.snackbar = true
                    this.loading= false
                    this.colorSnack = 'green accent-4'
                    this.message = 'Se envio tu solicitud de homenaje.'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formObtuario.reset()
                    this.src=''
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