<template>
    <div>
        <v-row class="mb-15">
            <v-col cols="12" sm="12" md="8">
                <h1 class="color-blue-dark display-1 font-weight-bold mb-6">
                   Asistencias: 
                </h1>
                <p class="secondary--text">
                    Adquiere grandes beneficios en tu plan de previsión exequial, ven y Conoce el complemento ideal para la protección y tranquilidad en los momentos más importantes de tu vida y la de tu familia.
                </p>
            </v-col>
        </v-row>
        <v-row class="mt-15 mb-15">
            <v-col 
                v-for="({icon, title, list}, index) in asistances"
                :key="index"
                cols="12" sm="12" md="12" lg="4"
            >
                <v-card class="rounded-xl card-shadow mb-6">
                    <div class="pl-4 pt-4 mb-2">
                        <v-card width="84" class="rounded-xl box-shadow-teal pa-5 text-center" color="teal accent-3" dark>
                            <v-icon>
                                {{ icon }} mdi-36px
                            </v-icon>
                        </v-card>
                    </div>
                    <v-card-title class="color-blue-dark">
                        {{ title }}
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mb-4"></v-divider>
                        <ul>
                            <li v-for="(item, i) in list"
                                :key="i"
                            > {{ item }} </li>                            
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="12" md="8">
                <v-btn
                    class="shadow-principal btn-hover"
                    color="teal accent-3"
                    dark
                    rounded
                    large
                > Deseo obtener más información </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            asistances:[
                {
                    icon: 'mdi-book',
                    title: 'Asistencia Educativa',
                    list:[
                        'Asesorías educativas telefónicas.',
                        'Transporte escolar por accidente o enfermedad.',
                        'Referencia para eventos infantiles.',
                        'Información para matriculas escolares.',
                        'Referencias de bibliotecas nacionales.'
                    ]
                },
                {
                    icon: 'mdi-account',
                    title: 'Asistencia Personal',
                    list:[
                        'Conductor elegido.',
                        'Auxilio de transporte desde y hacia el aeropuerto.',
                        'Mecánico a domicilio para motocicletas.',
                        'Acompañante para diligencias personales.',
                        'Coordinación para compras a domicilio.'
                    ]
                },
                {
                    icon: 'mdi-paw',
                    title: 'Asistencia para Mascota',
                    list:[
                        'Consulta médica veterinaria a domicilio.',
                        'Orientación médica veterinaria telefónica.',
                        'Servicio de eutanasia por enfermedad o accidente grave.',
                        'Servicio de incineración de la mascota fallecida.',
                        'Primera vacuna de la mascota.'
                    ]
                },
                {
                    icon: 'mdi-medical-bag',
                    title: 'Asistencia Médica',
                    list:[
                        'Medíco o enfermera a domicilio en caso de accidente.',
                        'Medicamentos derivados de la atención médica de urgencias.',
                        'Envío a domicilio de exámenes derivados de la atención de urgencias.',
                        'Orientación telefónica médica.',
                        'Coordinación telefónica de citas médicas.'
                    ]
                },
                {
                    icon: 'mdi-account-supervisor',
                    title: 'Asistencia Tercera Edad',
                    list:[
                        'Coordinación y acompañante para citas médicas.',
                        'Recordatorio de fechas especiales.',
                        'Envío de exámenes médicos.',
                        'Lavandería a domicilio.',
                        'Aseo general del hogar.',
                        'Coordinación para compras a domicilio.',
                        'Paseo de mascotas.',
                    ]
                },
                {
                    icon: 'mdi-phone',
                    title: 'Asistencia Telefónica',
                    list:[
                        'Trasmisión de mensajes urgentes',
                        'Conexión con números de emergencia.',
                        'Información cultural.',
                        'Referencias médicasa a nivel nacional.',
                        'Información sobre el estado de las vías.',
                    ]
                },
            ]
        }
    }
}
</script>