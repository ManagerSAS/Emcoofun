<template>
    <div >
        <div  class="bannerPrincipal" max-width="100%">
            <img width="100%" class="d-none d-lg-block d-xl-block" src="../../static/banners/pagos/pagospc.jpg" alt="" srcset="">
            <img width="100%" class="d-none d-md-block d-lg-none" src="../../static/banners/pagos/pagosLaptop.jpg" alt="" srcset="">
            <img width="100%" class="d-block d-sm-none" src="../../static/banners/pagos/pagoCel.jpg" alt="" srcset="">
            <v-btn target="_blank" href="https://losolivos.co/" class="btnPisition" style="background: linear-gradient(to right, #4B9098, #14625D); color: #FCF0A5;">
                Red Olivos
            </v-btn>
        </div>
        <div justify="center" align="center">
            <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 30px; font-weight: 800;">
                Facturacion Electronica
            </h1>
        </div>
        <div justify="center" align="center">
            <v-card class="mx-auto"  mix-width="80%" max-width="90%">
                <v-form ref="formFacturacion" autocomplete="off">
                    <v-row class="ma-5">
                        <v-col cols="12" sm="12" md="2" lg="2">
                            <v-select
                                v-model="identificacion"
                                :items="tipoIdentidad"
                                item-value="value"
                                item-text="text"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Tipo Identificacion"
                            ></v-select>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="4" md="4" lg="4">
                            <v-text-field
                                v-model="NumIdentificacion"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Identificacion"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                v-model="Nombre"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Nombre Empresa o Persona"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="ma-5">
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                v-model="NumeroTelefono"
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Numero Telefono"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                v-model="Email"
                                :rules="emailRules"
                                color="teal darken-4"
                                label="Correo Electronico"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="ma-5">
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                v-model="Ciudad"
                                color="teal darken-4"
                                label="Ciudad"
                            ></v-text-field>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                v-model="Direccion"
                                color="teal darken-4"
                                label="Direccion Residencia"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="ma-5" no-gutters align="center">
                        <v-col cols="12" sm="12" md="3" lg="5">
                            <v-checkbox
                                v-model="terminos"
                                color="teal darken-4"
                                label="Acepto políticas de tratamiento de datos"
                            > </v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="12" md="3" lg="3" class="text-right">
                            <Nuxt-link target="_blank" to="/terminosycondiciones/privacidad-de-datos"> Ver términos y Condiciones</Nuxt-link>
                        </v-col>
                    </v-row>    
                    <v-row class="ma-5">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <Gcaptcha @captcha="verifyCaptcha"/>
                        </v-col>
                    </v-row>
                    <v-row class="ma-5">
                        <v-col v-show="botton" cols="12" sm="12" md="12" lg="12">
                            <v-btn
                                rounded
                                class="card-shadow"
                                dark
                                color="teal darken-3"
                                @click="sendMail"
                            > Enviar información </v-btn>
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
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                        <v-snackbar
                            class="pb-8"
                            :timeout="3000"
                            :value="snackbar"
                            :color="colorSnack"
                            rounded="pill"
                        > {{ message }} </v-snackbar>
                    </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</template>
<style lang="scss" >
@media only screen and (min-width: 1600px) {
        .btnPisition{
            position: relative;
            top: -5em;
            left: 28%;
            // float: center;
        }
    }
    @media only screen and (min-width: 1200px) and (max-width: 1599px) {
        .btnPisition{
            top: -5em;
            left: 28%;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .btnPisition{
            top: -4em;
            left: 28%;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 952px) {
        .btnPisition{
            top: 60em;
            left: 35%;
        }
        .bannerPrincipal{
            background-image: url('../../static/banners/pagos/bannerpagostablet.png');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .btnPisition{
            top: -2em;
            left: 35%;
        }
        .bannerPrincipal{
            background-image: url('../../static/banners/pagos/bannerpagoscel2.png');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 413px) and (max-width: 575px) {
        .btnPisition{
            top: -4em;
            left: 35%;
        }
    }
    .btnPisition{
        top: -4em;
        left: 35%;
    }
</style>
<script>
import Gcaptcha from '../forms/recaptcha.vue'
import Post from '../post/post'

export default { 
    components:{
        Gcaptcha,
    },
    data(){
        return{
            NumIdentificacion:'',
            identificacion:'',
            tipoIdentidad:[
                'NIT',
                'C.C.',
                'C.E',
            ],
            NumeroTelefono : '',
            Email : '',
            Ciudad : '',
            Direccion : '',
            Nombre:'',
            terminos: false,
            resCaptcha: false,
            snackbar: false,
            message: '',
            colorSnack: '',
            loading: false,
            botton: true,
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
        }
    },
    methods:{
        async sendMail(){
            this.botton = false
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'

            if(this.NumIdentificacion !== '' && this.identificacion !== '' && this.Nombre!== '' && this.NumeroTelefono !== '' &&  this.Email !== '' &&this.Ciudad !== '' && this.Direccion !== '' ){
                const datas ={
                    NumIdentificacion:this.NumIdentificacion,
                    identificacion:this.identificacion,
                    Nombre: this.Nombre,
                    NumeroTelefono:this.NumeroTelefono,
                    Email:this.Email,
                    Ciudad:this.Ciudad,
                    Direccion:this.Direccion,
                }
                const data  = await Post.EnviarCorreoFacturaElectronica( datas )
                if(data.error === false){
                    this.botton = true
                    this.loading= false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.resCaptcha= false
                    this.message = 'Se envio correctamente el formulario..'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formFacturacion.reset()
                }else{
                    this.botton = true
                    this.loading= false
                    this.snackbar = true
                    this.colorSnack = 'red accent-3'
                    this.message = 'Por favor intente nuevamente...'
                    setTimeout(()=>{ this.snackbar = false },3000)
                }
            }
        },
        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
    }
}

</script>