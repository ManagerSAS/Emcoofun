<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mb-15">
			<v-col cols="12" sm="12" md="9" lg="9" xl="9">
                <v-row class="ma-2">
                    <v-col cols="12" sm="12" md="12" lg="10">
                        <h1 class="color-blue-dark display-1 font-weight-bold mb-6">
                            Planeacion del homenaje:
                        </h1>
                        <p class="secondary--text">
                            Para lograr una excelente y oportuna atención en la solicitud, por favor diligencia el siguiente formulario:
                        </p>
                    </v-col>
                </v-row>
                <v-row class="ma-2">
                    <v-col cols="12" sm="12" md="12" lg="12" xl="8">
                        <v-form ref="formHomenajes" autocomplete="off">
                            <div>
                                <h3 class="color-blue-dark font-weight-bold mb-3">
                                    Datos del solicitante
                                </h3>
                            </div>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        v-model="nameTitular"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Nombre completo"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    <v-text-field
                                        v-model="Departamento"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Departamento"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    <v-text-field
                                        v-model="Ciudad"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Ciudad"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="afiliaty"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        item-color="teal darken-4"
                                        label="Afiliado a:"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-select
                                        v-model="typeId"
                                        :items="TypesIdHomenaje"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        item-color="teal darken-4"
                                        label="Tipo de documento"
                                        hide-details
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="numeroId"
                                        type="number"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="N° de documento:"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="direccion"
                                        :rules="emailRules"
                                        color="teal darken-4"
                                        label="Dirección"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mb-6">
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="email"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Email"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    <v-text-field
                                        v-model="telefono1"
                                        :rules="emailRules"
                                        type="number"
                                        color="teal darken-4"
                                        label="Teléfono"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    <v-text-field
                                        v-model="telefono2"
                                        color="teal darken-4"
                                        type="number"
                                        label="Teléfono # 2"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <div>
                                <h3 class="color-blue-dark font-weight-bold mb-3">
                                    Datos del “Ser Querido”
                                </h3>
                                <p class="secondary--text"> Por favor comparta con nosotros los siguientes datos del ser querido fallecido.</p>
                            </div>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="nameHomenaje"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Nombre completo:"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-select
                                        v-model="typeIdHomenaje"
                                        :items="TypesIdHomenaje"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        item-color="teal darken-4"
                                        label="Tipo de documento"
                                        hide-details
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row class="mb-6">
                                <v-col cols="12"  sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="cityFallecimiento"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Ciudad Fallecimiento"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12"  sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="DepartamentoFallecimiento"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Departamento Fallecimiento"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="mb-6">
                                <v-col cols="12" sm="12" md="12" lg="6">
                                    <v-text-field
                                        v-model="NumdocumentoHome"
                                        :rules="nameRules"
                                        type="number"
                                        color="teal darken-4"
                                        label="N° de documento:"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <div>
                                <h3 class="color-blue-dark font-weight-bold mb-3">
                                    Certificado de defunción:
                                </h3>                
                                <p class="secondary--text"> 
                                    ¿Ya cuenta con el certificado de defunción y con la fotocopia del documento de su “Ser Querido”? 
                                </p>
                                <v-select
                                    v-model="documents"
                                    :items="documentos"
                                    item-value="value"
                                    item-text="text"
                                    :rules="nameRules"
                                    item-color="teal darken-4"
                                    color="teal darken-4"
                                    label="Documentos"
                                    clearable
                                ></v-select>
                                <p class="secondary--text"> 
                                    Si aun no cuentas con estos documentos, comuniquese con uno de nuestros coordinadores al 316 874 7177 o al PBX 8715555 para mayor información
                                </p>
                            </div>
                            <div>
                                <h3 class="color-blue-dark font-weivght-bold mb-3">
                                    Exequias:
                                </h3>
                                <p class="secondary--text">
                                    Las exequias son la ceremonia religiosa que se realizará en nombre de su ser querido, respetando los diferentes credos. Por favor indiquenos si las exequias serán (Católica, Cristiana, Islámica, Budista, otra) 
                                </p>
                                <v-select
                                    v-model="exequias"
                                    :items="religiones"
                                    item-color="teal darken-4"
                                    color="teal darken-4"
                                    label="Ceremonia religiosa"
                                ></v-select>
                            </div>             
                            <div>
                                <h3 class="color-blue-dark font-weivght-bold mb-3">
                                    Templo religioso:
                                </h3>
                                <p class="secondary--text">
                                    Según la sección anterior, escriba los lugares donde quisieran que fuesen las exequias de su ser querido y la hora.
                                </p>
                                <p class="secondary--text">
                                    Por favor escriba 2 opciones. A veces los templos religiosos no cuentan con disponibilidad del día o de la hora.
                                </p>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12" lg="6">
                                        <v-text-field
                                            v-model="Templo1"
                                            :rules="nameRules"
                                            class="mb-2"
                                            color="teal darken-4"
                                            label="Nombre templo #1:"
                                            hint="Ejemplo: Iglesia 1, Iglesia 2"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12" lg="6">
                                        <v-text-field
                                            v-model="DireccionTemplo1"
                                            :rules="nameRules"
                                            type="text"
                                            color="teal darken-4"
                                            label="Dirección templo #1:"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                
                                <v-row>
                                    <v-col cols="12" sm="12" md="6" lg="6">
                                        <v-text-field
                                            v-model="Fecha"
                                            :rules="nameRules"
                                            class="mb-2"
                                            color="teal darken-4"
                                            type="date"
                                            label="Fecha::"
                                            hint="Ejemplo: Iglesia 1, Iglesia 2"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6" lg="6">
                                        <v-text-field
                                            v-model="Hora1"
                                            :rules="nameRules"
                                            type="time"
                                            color="teal darken-4"
                                            label="Hora 1:"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
            
                            <div class="secondary--text mb-8">
                                <h3 class="color-blue-dark font-weivght-bold mb-3">
                                    Homenaje virtual
                                </h3>
                                <p class="secondary--text"> 
                                    Como parte de nuestros protocolos, le entregamos un video de 30 segundos a su Whatsapp; el cual podrá compartir con sus familiares y amigos, por ello requerimos que cuanto antes nos compata una foto la cual puede subir directamente por este medio. O si desea comunicarse a las lineas respectivamente:
                                    <ul>
                                        <li>Florencia: 3168747213</li>
                                        <li>Pitalito: 3168747226</li>
                                        <li>Garzon: 3168747185</li>
                                        <li>Neiva: 3168747157</li>
                                    </ul>
                                </p>            
                            </div>
                            <v-row>
                                <v-col cols="12" sm="10" md="10" lg="10">
                                    <v-card class="rounded-xl mb-8">
                                        <v-slide-group active-class="success" show-arrows>
                                            <v-slide-item
                                                v-for="({src}, index) in articlesAdd2" 
                                                        :key="index">
                                                        <v-card
                                                            color="white"
                                                            class="ma-2 rounded-xl"
                                                            width="215"
                                                        >
                                                        <v-img
                                                            class="rounded-xl img-principal"  height="250" 
                                                            lazy-src="https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg"
                                                            :src="src"
                                                        ></v-img>
                                                </v-card>
                                            </v-slide-item>
                                        </v-slide-group>
                                    </v-card>
                                </v-col>
                            </v-row>
                            
                            <div class="secondary--text mb-8">
                                <h3 class="color-blue-dark font-weivght-bold mb-3">
                                    Cofres Funebres
                                </h3>
                                <p class="text-raleway">Dentro del homenaje se disponen de los siguientes modelos de cofre funebre, puede elegir un modelo para su ser querido (se deben tener en cuenta variables como disponibilidad, color y medidas, por lo tanto esta selección esta sujeta a su respectiva confirmacion)”</p>
                                <v-row>
                                    <v-slide-group active-class="success" show-arrows>
                                        <v-slide-item
                                            v-for="({src, text}, index) in articlesAdd" 
                                            :key="index"
                                        >
                                            <v-card                                    
                                                color="white"
                                                class="ma-2 rounded-xl"
                                                width="150"                                    
                                            >
                                                <v-img
                                                    :src="src"
                                                    height="250"
                                                ></v-img>
            
                                                <v-card-text>
                                                    {{ text }}
                                                </v-card-text>
                                            </v-card>
                                        </v-slide-item>
                                    </v-slide-group>
                                </v-row>
                            </div>
                            <div class="mb-6">
                                <h3 class="color-blue-dark font-weight-bold mb-3">
                                    Prendas:
                                </h3>
                                <p class="secondary--text">
                                    Deseamos rendir el más grande homenaje, por favor coordine con los demás familiares las prendas que desean colocarle a su “Ser Querido”.
                                </p>
                                <p class="secondary--text">
                                    Recomendamos lo siguiente:
                                </p>
                                <ul class="secondary--text mb-3">
                                    <li>Hombre: Camisa y camisilla de algodón, pantalón, correa, chaqueta o saco y ropa interior (Nota: en caso de cremación no usar correa ni zapatos.)</li>
                                    <li>Mujer: Blusa, falda, vestido, ropa interior y brasier  </li>
                                    <li>Si el fallecimiento es muerte violenta, recomendamos camisas manga largas, blusas no escotadas y prendas oscuras para una adecuada presentación</li>  
                                </ul>
                            </div>
                            <v-row no-gutters align="center">
                                <v-col cols="6">
                                    <v-checkbox
                                        v-model="terminos"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Acepto políticas de tratamiento de datos"
                                    > </v-checkbox>
                                </v-col>
                                <v-col cols="6" class="text-right">
                                    <Nuxt-link target="_blank" to="/terminosycondiciones/privacidad-de-datos"> Ver términos y Condiciones</Nuxt-link>
                                </v-col>
                            </v-row>                                
                            <!-- captcha -->
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <Gcaptcha @captcha="verifyCaptcha"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col v-show="botton" cols="12" sm="12" md="12" lg="12">
                                    <v-btn
                                        rounded
                                        class="card-shadow"
                                        dark
                                        color="teal darken-3"
                                        @click="sendFormHomenajes"
                                    > Enviar información </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
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
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <v-progress-circular
                                v-show="loading"
                                indeterminate
                                color="teal darken-3"
                            ></v-progress-circular>
                        </v-col>
                    </v-row>
                </v-row>
            </v-col>
		</v-row>
    </v-container>
</template>
<script>
import Post from '../../post/post'
import Gcaptcha from '../recaptcha.vue'

export default {   
    components:{
        Gcaptcha,
    },
    data(){
        return{

            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            
            // Datos del titular
            nameTitular:'',
            Departamento:'',
            Ciudad:'',
            typeId:'',
            Barrio:'',
            numeroId:'',
            direccion:'',
            email:'',
            telefono1:'',
            telefono2:'',

            // datos del homenaje
            nameHomenaje:'',
            NumdocumentoHome:'',
            typeIdHomenaje:'',
            TypesId: [ 'C.C', 'C.E', 'T.I'],
            TypesIdHomenaje: [ 'C.C', 'C.E', 'T.I'],
            DepartamentoFallecimiento:'',
            cityFallecimiento:'',
            afiliaty: '',
            // documentos
            documents: '',
            documentos: [ 'Si','No' ],
            
            // exequias
            exequias: '',
            religiones: ['Católico', 'Cristiano'],
            other: '',
            
            // articulos
            articlesAdd: [
                { text: 'Cofre', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Cofre', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Cofre', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Cofre', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],
            articlesAdd2: [
                { text: 'Homenaje fotográfico', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Areglo floral', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Arreglo floral más foto', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],

            // templo religioso
            Templo1:'',
            DireccionTemplo1:'',
            Fecha:'',
            Hora1:'',
            // terminos
            terminos: false,
            
            // captcha
            resCaptcha: false,

            // message send form
            snackbar: false,
            message: '',
            colorSnack: '',
            loading: false,
            botton: true,
            // isEditing
            isEditing: true

        }
    },
    methods:{
        async sendFormHomenajes(){
            this.botton = false
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            
            if(this.terminos !== false && this.resCaptcha !== false){

                const datas = {
                    nameTitular:this.nameTitular,
                    Departamento:this.Departamento,
                    Ciudad:this.Ciudad,
                    typesId:this.typeId,
                    Barrio:this.Barrio,
                    numeroId:this.numeroId,
                    direccion:this.direccion,
                    email:this.email,
                    telefono1:this.telefono1,
                    telefono2:this.telefono2,
                    nameHomenaje:this.nameHomenaje,
                    NumdocumentoHome:this.NumdocumentoHome,
                    typeIdHomenaje:this.typeIdHomenaje,
                    afiliaty:this.afiliaty,
                    DepartamentoFallecimiento:this.DepartamentoFallecimiento,
                    cityFallecimiento:this.cityFallecimiento,
                    documents:this.documents,
                    exequias:this.exequias,
                    other:this.other,
                    Templo1:this.Templo1,
                    DireccionTemplo1:this.DireccionTemplo1,
                    Fecha:this.Fecha,
                    Hora1:this.Hora1,
                    fecha_registro: this.$moment().format('YYYY-MM-DD HH:mm:ss')
                }
                const data  = await Post.postFormHomenajes( datas )
                if(data.error === false){
                    this.botton = true
                    this.loading= false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Se envio tu solicitud de homenaje.'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formHomenajes.reset()
                    
                }else{
                    this.botton = true
                    this.loading= false
                    this.snackbar = true
                    this.colorSnack = 'red accent-3'
                    this.message = 'Por favor intente nuevamente...'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formHomenajes.reset()
                }

                
            }else{
                this.botton = true
                this.loading = false
                this.snackbar = true
                this.colorSnack = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{ this.snackbar = false },3000)
                this.$refs.formHomenajes.validate()
                setTimeout(()=>{ this.$refs.formHomenajes.resetValidation() }, 5000)
            }
        },

        selectedRetablo(param){
            if(param === '1'){
                this.isEditing = false
            }else{
                this.isEditing = true
            }
        },

        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
    },

}
</script>

<style lang="scss" scoped>
// .img-principal{
    
// }
</style>