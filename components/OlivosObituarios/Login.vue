<template>
<v-row>
    <v-col cols="12" sm="12" md="12" lg="6" xl="5" class="pl-md-15">
        <v-card class="pt-md-15 pl-md-15 pr-md-15" flat color="transparent">
            <v-card-text class="pl-lg-10 pr-lg-10 pt-lg-10">
                <div class="mb-8">
                    <v-img
                        src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663336092/lcc7rkefopzlyhlnlzrb.png"
                        max-width="65"
                    ></v-img>
                </div>
                <div class="mb-6">
                    <h1 class="display-1 font-weight-bold">Login</h1>
                    <p> Si tienes problemas para ingresar comunicate con un administrador. </p>
                </div>
                <v-divider class="mb-9"></v-divider>
                <v-form ref="login" lazy-validation>
                    <v-text-field
                        v-model="email"
                        type="email"
                        :rules="[rules.required, rules.email]"
                        rounded
                        filled
                        color="teal darken-3"
                        label="Correo"
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]"
                        :type="show ? 'text' : 'password'"
                        label="Contraseña"
                        rounded
                        filled
                        color="teal darken-3"
                        class="input-group--focused"
                        @click:append="show = !show"                    
                    ></v-text-field>
                    <v-btn
                        color="teal darken-3"
                            elevation="0"
                        dark
                        large
                        block
                        rounded
                        class="mb-9"
                        @click="validateDataForm"
                    >
                        Ingresar
                    </v-btn>  
                    <div class="d-flex justify-center mb-8 pt-15">
                        <v-progress-circular
                            v-show="loadLogin"
                            indeterminate
                            color="teal darken-3"
                        ></v-progress-circular>
                    </div>
                    <v-snackbar
                        :timeout="-1"
                        :value="showError"
                        :color="snackbarColor"
                        rounded="pill"
                        class="pa-5 text--center"
                    >
                        <span> {{ messageInvalid }} </span>
                    </v-snackbar>          
                </v-form>
            </v-card-text>
            <v-card-text class="pl-md-15 pr-md-15 mt-10">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12" xl="9">
                        <v-img
                            src="https://res.cloudinary.com/dazyyib7u/image/upload/v1663336412/yfqdte1djmvy0czmmepz.png"
                            max-width="30"
                        ></v-img>
                        <span> ©copyright | Todos los derechos reservados 2022 By: </span>
                        <a href="htpps://www.agenciamanager.com">Manager - El equipo para tu marca</a>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
     <v-col cols="12" sm="12" md="12" lg="6" xl="7" width class="background-container-login all-center d-none d-md-none d-lg-flex vh-100">
        <img
            src="../../static/Login/imageLogin.png"
            width="800"
            height="650"
        />
    </v-col>
</v-row>
</template>

<script>
import Login from '../post/login'

export default {
    data(){
        return{
            show: false,
            email: '',
            password: '',
            rules: {
                required: value => !!value || 'Requerido.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Correo invalido.'
                },
            },
            loadLogin: false,
            // dataForm:
            snackbarColor: '',
            showError: false,
            messageInvalid: null
        }
    },
    methods:{
        async validateDataForm(){
            this.loadLogin = true
            const dataUSer = { usuario : this.email ,clave : this.password } 
            try {
                const data = await Login.login(dataUSer)
                const { token } = data.data
                if(data.status === 200 && token !== null){
                    if(token){
                        setTimeout(() => {
                            this.loadLogin = false
                        }, 3000);
                        localStorage.setItem( 'token', token )
                        localStorage.setItem( 'authenticated-olivos-neiva', true )
                        this.$store.dispatch('doLogin', token )
                        this.$store.commit('doLogin', token)
                        this.$router.push({ path: '/dashboard/dashboardNeiva'})
                    }
                }
                else{
                    this.snackbarColor = 'red accent-3'
                    this.showError = true
                    this.messageInvalid = 'Asegurate que el usuario y la contraseña sean correctos'

                    setTimeout(() => {
                        this.snackbarColor = ''
                        this.showError = false
                        this.messageInvalid = ''
                    }, 5000);
                }

            }catch(error){
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.justify-content-center{
    justify-content: center;
}
.vh-100{
    height: 100vh;
}
.background-container-login{
    background-color: #7fffd429;
}
.green-dark{
    color: #274149;
}
.all-center{
    align-items: center;
    justify-content: center;
}

</style>