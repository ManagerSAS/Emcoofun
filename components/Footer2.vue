<template>
    <v-row justify="center" align="start" class="pa-2">
        <v-col cols="11" >
            <v-row>
                <v-col cols="12" sm="12" md="3" lg="3" xl="3">
                    <div>
                        <img src="../static/nav/logo_blanco.webp" width="50%">
                    </div>
                    <div>
                        <p class="text-comfortaa" style="color:#003B4C; font-size: 20px; font-weight: bold;">PQR</p> 
                        <p class="text-comfortaa" style="color:white; font-size: 15px; font-weight: 400;">
                            Si deseas realizar una solicitud o petición, dejarnos un comentario, felicitación o para radicar una queja por favor diligencia el siguiente formulario.
                        </p>
                    </div>
                    <div>
                        <v-btn 
                            rounded
                            class="card-shadow"
                            dark
                            color="#EEC06E" 
                            style="color:black;"
                            >
                            <v-icon left> mdi-file-document-edit-outline </v-icon>
                            Ingresa Aquí
                        </v-btn>
                    </div>
                    <div>
                        <p class="text-comfortaa" style="color:white; font-size: 20px; font-weight: bold;">Encuéntranos en:</p>
                        <v-icon class="botonRedes" >mdi-facebook mdi-36px</v-icon>
                        <v-icon class="botonRedes" >mdi-instagram mdi-36px</v-icon>
                    </div>
                </v-col>
                <v-col class="mt-10" cols="12" sm="12" md="2" lg="2" xl="2">
                    <h3 class="text-comfortaa mb-2" style="color:white; font-size: 20px; font-weight: bold;">
                        Enlaces de interés
                    </h3>
                    <div
                        v-for="({text, to}, index) in interesting"
                        :key="index"
                        class="mb-1 text-comfortaa" style="color:white; font-size: 12px;"
                    >
                       <img src="../static/iconos/vineta-03.png" width="15">  <Nuxt-link class="text" style="color:white; text-decoration: none;font-size: 15px;" :to="to "> {{ text }} </Nuxt-link>
                    </div>
                </v-col>
                <v-col class="mt-10" cols="12" sm="12" md="3" lg="3" xl="3">
                    <div>
                        <h3 class="text-comfortaa mb-2" style="color:white; font-size: 22px; font-weight: bold;">
                            Ubicación
                        </h3> 
                    </div>
                    <div style="color:white; font-size: 18px; font-weight: 400; ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.591903042192!2d-75.29560698467243!3d2.9329896552599575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74621ec706fb%3A0x9450d529c27be798!2sCl.%2016%20%232-56%2C%20Neiva%2C%20Huila!5e0!3m2!1ses!2sco!4v1662479377177!5m2!1ses!2sco" width="220" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br>
                        <v-row justify="center" align="center">
                            <v-col>
                                <img src="../static/iconos/vineta-03.png" width="15">
                            </v-col>
                            <v-col cols="10" >
                                <span class="text-white"> Sede Principal Neiva - Huila</span><br>
                                <span>Direccion: Calle 16 No. 2-56</span><br>
                            </v-col>
                        </v-row>
                        <v-divider width="90%" color="#FBE78B"></v-divider>
                        <v-row justify="center" align="center">
                            <v-col >
                                <img src="../static/iconos/vineta-03.png" width="15">
                            </v-col>
                            <v-col cols="10" >
                                <span class="text-white"> Sede Pitalito - Huila</span><br>
                            <span>Direccion: Carrera 3 No. 5-19 </span><br>
                            </v-col>
                        </v-row>
                    
                        <v-divider width="90%" color="#FBE78B"></v-divider>
                        <v-row justify="center" align="center">
                            <v-col >
                                <img src="../static/iconos/vineta-03.png" width="15">
                            </v-col>
                            <v-col cols="10" >
                                <span class="text-white"> Sede Florencia</span><br>
                                <span >Direccion: Carrera 15 No. 15-34/36 </span><br>
                            </v-col>
                        </v-row>

                        <v-divider width="90%" color="#FBE78B"></v-divider>
                        <v-row justify="center" align="center">
                            <v-col >
                                <img src="../static/iconos/vineta-03.png" width="15">
                            </v-col>
                            <v-col cols="10" >
                                <span class="text-white"> Sede Garzón - Huila</span><br>
                                <span >Direccion: Calle 7 No. 12-00</span><br>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col class="mt-10" cols="12" sm="12" md="4" lg="4" xl="4">
                    <v-row  align="center" justify="center" class="align-items-center p-green-light" >
                        <v-col cols="12" md="12" lg="11" color="#26A69A" class="text-center text-md-center">
                            <img src="../static/iconos/contacto.png" alt="" height="40">
                            <h2 class="text-raleway " style="color: white; font-size: 20px; ">CONTÁCTANOS</h2>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col cols="12" sm="10" md="12" lg="6">
                                    <v-text-field
                                        height="40"
                                        v-model="nombre"
                                        :rules="nameRules"
                                        label="Nombre Completo*"
                                        placeholder="Jose Alejandro"
                                        color="#EEC06E"
                                        style="background-color: white "
                                        filled
                                        rounded
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="10" md="12" lg="6">
                                    <v-text-field
                                        v-model="telefono"
                                        label="Telefono*"
                                        type="number"
                                        placeholder="314 248 44 66"
                                        color="#EEC06E"
                                        style="background-color: white "
                                        filled
                                        rounded
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="10" md="12" lg="6">
                                    <v-text-field
                                        v-model="documento"
                                        type="number"
                                        label="Numero Documento*"
                                        placeholder="487975474547"
                                        color="#EEC06E"
                                        style="background-color: white "
                                        filled
                                        rounded
                                        hide-details
                                    ></v-text-field>
                               </v-col>
                                <v-col cols="12" sm="10" md="12" lg="6">
                                    <v-text-field
                                        v-model="ciudad"
                                        label="Ciudad*"
                                        placeholder="Ciudad residencia"
                                        color="#EEC06E"
                                        style="background-color: white "
                                        filled
                                        rounded
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                               <v-col cols="12" sm="10" md="12" lg="12">
                                   <v-text-field
                                       v-model="email"
                                       :rules="emailRules"
                                       label="Email*"
                                       placeholder="email@example.com"
                                       color="#EEC06E"
                                       style="background-color: white "
                                       filled
                                       rounded
                                       hide-details
                                   ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="10" md="12" lg="12">
                                    <v-text-field
                                        v-model="asunto"
                                        label="Asunto*"
                                        placeholder="Asunto"
                                        color="#EEC06E"
                                        style="background-color: white "
                                        filled
                                        rounded
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="10" md="12" lg="12">
                                    <v-textarea
                                        label="Mensaje*"
                                        v-model="mensaje"
                                        rows="2"
                                        color="#EEC06E"
                                        style="background-color: white "
                                        filled
                                        rounded
                                        hide-details
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                            <Gcaptcha class="mt-2" @captcha="verifyCaptcha"/>
                            <v-row class="mt-5">
                                <v-row no-gutters align="center">
                                    <v-col cols="2">
                                        <v-checkbox
                                            v-model="termsConditions"
                                            color="#26A69A"
                                            :rules="nameRules"
                                            value=""
                                            required
                                            hide-details
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col cols="10">
                                        <div class="mt-5">
                                            <Nuxt-link to="terminosycondiciones/privacidad-de-datos"> Acepto terminos y Condiciones </Nuxt-link>
                                        </div>
                                    </v-col>
                                </v-row >
                            </v-row>
                            <v-row>
                                <v-col cols="11" align="center" justify="center">
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
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-row justify="center" align="center" class="mb-2">
            <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12" xl="9">
                <v-img
                    src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663336412/yfqdte1djmvy0czmmepz.png"
                    max-width="30"
                ></v-img>
                <span> ©copyright | Todos los derechos reservados 2022 By: </span>
                <a href="https://agenciamanager.com">Manager - El equipo para tu marca</a>
            </v-col>
        </v-row>
    </v-row>
</template>
<script>
import Post from './post/post'
import Gcaptcha from './forms/recaptcha.vue'
export default {
    components:{
        Gcaptcha
    },
    data(){
        return{
            interesting:[
                { text: 'Afiliaciones en linea', to: '/AfiliacionOnLine' },
                { text: 'Solicitudes en línea', to: '/solicitudes-en-linea' },               
                { text: 'Proteccion de datos', to: '/terminosycondiciones/privacidad-de-datos' },
                { text: 'Registro de Defuncion', to: '/registration' },
                { text: 'Velacion virtual', to: '/VelacionVirtual' },
                { text: 'Actualizacion RTE', to: '/ActualizacionRTE' },
                { text: '¿Preguntas frecuentes?', to: '/PreguntasFrecuentes' },
                { text: 'Facturacion Electronica', to: '/FacturacionElectronica/FacturacionElectronica' },
                { text: 'NotiOlivos', to: '/Notiolivos' },
                { text: 'Los Olivos Obituarios', to: '/OlivosObituarios/Login' },

            ],
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
}
</script>

<style lang="scss">
.botonRedes:hover{
    transform: scale(1.3);
    color: #EEC06E;
}
.text-white:hover{
    color: #EEC06E;
}  
</style>