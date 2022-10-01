<template>
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
                        <v-select
                            v-model="typeId"
                            :items="TypesId"
                            :rules="nameRules"
                            color="teal darken-4"
                            item-color="teal darken-4"
                            label="Afiliado a olivos"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="Barrio"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Barrio"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mb-6">
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
                            type="number"
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
                            color="teal darken-4"
                            label="Teléfono"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3" lg="3">
                        <v-text-field
                            v-model="telefono2"
                            color="teal darken-4"
                            label="Teléfono # 2"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <div>
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Datos del “Ser Querido”
                    </h3>
                    <p class="secondary--text"> Por favor comparta con nosotros los siguientes datos del afiliado fallecido.</p>
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
                            v-model="afiliaty"
                            :items="afiliatys"
                            :rules="nameRules"
                            color="teal darken-4"
                            item-color="teal darken-4"
                            label="Afiliado a olivos"
                            hide-details
                        ></v-select>
                       
                    </v-col>
                </v-row>
                <v-row class="mb-6">
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-select
                            v-model="typeIdHomenaje"
                            :items="TypesId"
                            :rules="nameRules"
                            color="teal darken-4"
                            item-color="teal darken-4"
                            label="Afiliado a olivos"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="3" lg="3">
                        <v-text-field
                            v-model="DepartamentoFallecimiento"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Departamento Fallecimiento"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3" lg="3">
                        <v-text-field
                            v-model="cityFallecimiento"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Ciudad Fallecimiento"
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
                        :rules="nameRules"
                        item-color="teal darken-4"
                        color="teal darken-4"
                        label="Ceremonia religiosa"
                        @change="selectedReligion"
                    ></v-select>
                    <div v-show="showOther">
                        <v-text-field
                            v-model="other"
                            color="teal darken-4"
                            label="¿Cuál?"
                        ></v-text-field>
                    </div>
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
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="Templo2"
                                :rules="nameRules"
                                class="mb-2"
                                color="teal darken-4"
                                label="Nombre templo #2:"
                                hint="Ejemplo: Iglesia 1, Iglesia 2"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="DireccionTemplo2"
                                :rules="nameRules"
                                type="text"
                                color="teal darken-4"
                                label="Dirección templo #2:"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
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
                        <v-col cols="12" sm="12" md="3" lg="3">
                            <v-text-field
                                v-model="Hora1"
                                :rules="nameRules"
                                type="time"
                                color="teal darken-4"
                                label="Hora 1:"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="3" lg="3">
                            <v-text-field
                                v-model="Hora2"
                                :rules="nameRules"
                                type="time"
                                color="teal darken-4"
                                label="Hora 2:"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>

                <div class="secondary--text mb-8">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Homenaje virtual
                    </h3>
                    <p class="secondary--text"> 
                        Como parte de nuestros protocolos, le entregaremos un video de 30 segundos a su Whatsapp; el cual podrà compartir con sus familiares y amigos, por ello requerimos que cuanto antes nos comparta una foto al 316 874 7177. También la puedes subir directamente por este medio.
                    </p>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="12" sm="10" md="4" lg="4">
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
                    <v-row>
                        <v-col cols="12" sm="10" md="12" lg="10">
                            <div class="mb-6">
                                <p class="secondary--text">
                                    Aquí pueden dejar unas palabras de amor a su “Ser Querido”.
                                    (Tengan en cuenta Legado, Eneñanzas, Hobbies y Aspectos destacados en vida)  
                                </p>
                                <v-text-field
                                    v-model="palabras"
                                    :rules="nameRules"
                                    color="teal darken-4"
                                    label="Palabras"
                                ></v-text-field>
                            </div>
                        </v-col>
                    </v-row>

                </div>
                <v-row>
                    <v-col cols="12" sm="10" md="10" lg="10">
                        <p class="secondary--text">
                            Elije uno o varios artículos si deseas añadirlos o si quieres mas información. Asì podras consultar con nuestros Coordinadores en cualquier momento para concretar su adquisición adicionál.  
                        </p>
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
                        Cofres de lujo (Adicionales)
                    </h3>
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
                 <div class="secondary--text mb-8">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Cenizarios 
                    </h3>
                    <v-row>
                        <v-slide-group active-class="success" show-arrows>
                            <v-slide-item
                                v-for="({src, text}, index) in cenizariosAdd" 
                                :key="index"
                            >
                                <v-card                                    
                                    color="white"
                                    class="ma-5 rounded-xl"
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
                        <li>Hombre: Camisa y camisilla de algodón, pantalón, correa, chaqueta o saco y ropa interior</li>
                        <li>Mujer: Blusa, falda, vestido, ropa interior y brasier (pueden traer el labial de su preferencia).</li>
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
            afiliaty:'',
            afiliatys: [ 'Si', 'No'],
            DepartamentoFallecimiento:'',
            cityFallecimiento:'',
  
            // documentos
            documents: '',
            documentos: [ 'Si','No' ],
            
            // exequias
            exequias: '',
            religiones: ['Católico', 'Cristiano', 'Islámica', 'Budista', 'Otro'],
            showOther: false,
            other: '',
            
            // articulos
            articlesAdd: [
                { text: 'Homenaje fotográfico', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Baúl del duelo', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Arreglo floral', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Bono savime', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],
            articlesAdd2: [
                { text: 'Homenaje fotográfico', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Areglo floral', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Arreglo floral más foto', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],
            cenizariosAdd:[
                { text: 'Urnas', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Urnas', src:'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg'},
                { text: 'Urnas', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
                { text: 'Urnas', src: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1645899921/Sede_Neiva9_uiq1qw.jpg' },
            ],

            // templo religioso
            Templo1:'',
            DireccionTemplo1:'',
            Templo2:'',
            DireccionTemplo2:'',
            Fecha:'',
            Hora1:'',
            Hora2:'',
            // foto
            file:null,
            foto:null,
            url:'',
            src:'',
            fotoSerquerido: null,
            // palabras de amor
            palabras: '',
            // cenizarios
            cenizarios: [ 'Cenizario Sencillo', 'Cenizario Doble','Cenizario Octagonal'],

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
                    typesId:this.typesId,
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
                    Templo2:this.Templo2,
                    DireccionTemplo2:this.DireccionTemplo2,
                    Fecha:this.Fecha,
                    Hora1:this.Hora1,
                    Hora2:this.Hora2,
                    palabras:this.palabras,
                    file:this.fotoSerquerido,
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

        selectedReligion(param){
            if(param === 'Otro'){
                this.showOther = true
            }else{
                this.showOther = false
                this.other = ''
            }
        },
    },

}
</script>

<style lang="scss" scoped>
// .img-principal{
    
// }
</style>