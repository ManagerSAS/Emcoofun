<template>
    <div >
        <v-row  align="center" justify="center" class="align-items-center p-green-light" >
            <v-col cols="12" md="12" lg="11" color="#26A69A" class="text-center text-md-center">
                <img src="../../static/iconos/contacto.png" alt="" height="120">
                <h2 class="mb-10 text-raleway font-weight-bold" style="color:#003B4C; font-size: 40px; ">CONTÁCTANOS</h2>
                <p class="text-comfortaa">La satisfacción de nuestros usuarios es muy importante para nosotros, es por esto que te invitamos a dejarnos tus datos y tu opinión para mejorar constantemente </p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12" lg="10" class="pt-10">    
                <v-form ref="formContact" autocomplete="off">
                    <v-row>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <label>Nombre Completo*</label>
                            <v-text-field
                                v-model="nombre"
                                :rules="nameRules"
                                placeholder="Jose Alejandro"
                                color="#26A69A"
                                hide-details
                                outlined
                            ></v-text-field>
                        </v-col>
                         <v-col cols="12" sm="12" md="4" lg="4">
                            <label>Telefono*</label>
                            <v-text-field
                                v-model="telefono"
                                type="number"
                                placeholder="3142484466"
                                color="#26A69A"
                                hide-details
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <label>Email*</label>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                placeholder="email@example.com"
                                color="#26A69A"
                                hide-details
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <label>Documento*</label>
                            <v-text-field
                                v-model="documento"
                                type="number"
                                placeholder="487975474547"
                                color="#26A69A"
                                hint="El numero de documento no debe contener puntos."
                                persistent-hint
                                outlined
                            ></v-text-field>
                        </v-col>
                         <v-col cols="12" sm="12" md="4" lg="4">
                            <label>Ciudad*</label>
                            <v-text-field
                                v-model="ciudad"
                                placeholder="ciudad residencia"
                                color="#26A69A"
                                hide-details
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" lg="4">
                            <label>Asunto*</label>
                            <v-text-field
                                v-model="asunto"
                                placeholder="Asunto"
                                color="#26A69A"
                                hide-details
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <label>Mensaje*</label>
                            <v-textarea
                                v-model="mensaje"
                                color="#26A69A"
                                rows="1"
                                hide-details
                                outlined
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <Gcaptcha @captcha="verifyCaptcha"/>
                        </v-col>
                    </v-row>
                    <v-row class="mt-5">
                        <v-row no-gutters align="center">
                            <v-col cols="1">
                                <v-checkbox
                                    v-model="termsConditions"
                                    color="#26A69A"
                                    :rules="nameRules"
                                    value=""
                                    required
                                    hide-details
                                ></v-checkbox>
                            </v-col>
                            <v-col cols="11">
                                <div class="mt-5">
                                    <Nuxt-link to="terminosycondiciones/privacidad-de-datos"> Acepto terminos y Condiciones </Nuxt-link>
                                </div>
                            </v-col>
                        </v-row >
                    </v-row>
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12" align="center" justify="center">
                                <v-btn
                                    style="background-color: #F08D20"
                                    class="shadow-principal btn-hover"
                                    color="#26A69A"
                                    rounded-xl
                                    large
                                    dark
                                    @click="enviar"
                                > Enviar mensaje </v-btn>
                            </v-col>
                        </v-row>
                     <v-snackbar
                        class="pb-8"
                        :value="snackbar"
                        :timeout="timeout"
                        rounded="pill"
                        :color="colorSnackbar"
                    >
                    {{ text }}
                    </v-snackbar>
                </v-form>
            </v-col>
        </v-row>
    </div>       
</template>
<script>
import Post from '../post/post'
import Gcaptcha from '../forms/recaptcha.vue'
export default ({
    components:{
        Gcaptcha
    },
    data() {
        return{
            nombre:'',
            telefono:'',
            email:'',
            documento:'',
            ciudad:'',
            asunto:'',
            mensaje:'',

            // snackbar
            snackbar: false,
            colorSnackbar: '',
            text: '',
            timeout: 2000,

            termsConditions: false,

            resCaptcha: false,

            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
        }
    },
    methods:{
        async enviar(){
            if(this.nombre !== '' && this.documento !== '' && this.email !== '' && this.telefono !== ''&& this.ciudad !== '' && this.asunto !== '' && this.mensaje !== '' && this.termsConditions !== false && this.resCaptcha !== false){
                this.snackbar = true
                this.colorSnackbar = 'success'
                this.text ='Formulario enviado correctamente'
                setTimeout(()=>{ this.snackbar = false }, 3000)
                const data = {
                    nombre :this.nombre ,
                    documento:this.documento,
                    email:this.email,
                    telefono:this.telefono,
                    ciudad:this.ciudad,
                    asunto:this.asunto,
                    mensaje:this.mensaje
                }
                console.log(data)
                await Post.postFormContac( data );
                this.$refs.formContact.reset()
            }else{
                this.snackbar = true
                setTimeout(()=>{ this.snackbar = false }, 3000)
                this.colorSnackbar = 'red'
                this.text ='Error al enviar el formulario'
                this.$refs.formContact.validate()
            }
        },
        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
    }
})
</script>
