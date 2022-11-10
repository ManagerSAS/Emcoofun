<template>
    <div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    Preguntas Frecuentes
                </h1>
            </v-col>
            
        </v-row>
        <v-row >
            <v-col cols="12" sm="12" md="4" lg="4">
                <h1 justify="center" align="center" class="mb-6 text-raleway fondo_texto" >
                    PREVISION EXEQUIAL
                </h1>
                <v-expansion-panels focusable>
                    <v-expansion-panel 
                        :readonly="readonly"
                        multiple 
                        v-for="({pregunta,respuesta},index) in preguntasExequiales"
                        :key="index"
                    >
                        <v-expansion-panel-header style="color:#003B4C;">{{pregunta}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{respuesta}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
                <h1 justify="center" align="center"  class="mb-6 text-raleway fondo_texto" >
                    DEPARTAMENTO DE HOMENAJES NEIVA
                </h1>
                <v-expansion-panels focusable>
                    <v-expansion-panel 
                        :readonly="readonly"
                        multiple 
                        v-for="({pregunta,respuesta},index) in preguntasExequiales"
                        :key="index"
                    >
                        <v-expansion-panel-header style="color:#003B4C;">{{pregunta}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{respuesta}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
                <h1 justify="center" align="center"  class="mb-6 text-raleway fondo_texto" >
                    PARQUE CEMENTERIO
                </h1>
                <v-expansion-panels focusable>
                    <v-expansion-panel 
                        :readonly="readonly"
                        multiple 
                        v-for="({pregunta,respuesta},index) in preguntasCementerio"
                        :key="index"
                    >
                        <v-expansion-panel-header style="color:#003B4C;" class="text-raleway">{{pregunta}}</v-expansion-panel-header>
                        <v-expansion-panel-content class="text-comfortaa">
                            {{respuesta}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            
        </v-row>
    </div>
</template>

<style>
.fondo_texto{
    background: linear-gradient(to right, #80C49E, #2EAE9B); 
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    font-size: 20px; 
    font-weight: 800;
}
</style>
<script>
export default ({
    data() {
        return{
            readonly: false,
            preguntasExequiales: [
                {pregunta:'1. ¿A cuántas personas puedo afiliar?', respuesta:'Contamos con un producto para cada tipo de familia, con protección sin límite de permanencia. Se requiere de la información de su grupo familiar.'},
                {pregunta:'2. ¿Puedo ingresar a mis padres mayores de 70 años?', respuesta:'En planes de previsión exequial, la edad máxima de ingreso es hasta 70 años, para vinculaciones nuevas. Si superado el límite de ingreso permitido para pertenecer a nuestros planes de previsión exequial, tenemos la venta de compra de servicios anticipados a través de nuestro producto PRENECESIDAD, en cual se paga por una sola vez y queda amparado de por vida.'},
                {pregunta:'3. ¿Puedo ingresar a una persona que no tiene parentesco conmigo, pero vive con nosotros desde pequeño?', respuesta:'Los beneficiarios del plan de previsión exequial deben tener un vinculo de consanguinidad o de afinidad con el titular del plan exequial.'},
                {pregunta:'4. ¿El plan que me cubre?', respuesta:'Es una cobertura exequial Integral sin preexistencias, sin costos adicional, que cubre los servicios en especie por el fallecimiento del titular o beneficiario registrado en el contrato, desde el momento en que se nos notifica el fallecimiento, su traslado inicial del sitio de velación hasta la funeraria de la Red nacional de los Olivos, la preservación del fallecido, las salas de velación, servicio dentro del Territorio nacional, pago impuestos de inhumación, destino final inhumación en tierra o bóveda o cremación.'},
                {pregunta:'5. ¿Sino ocupo el servicio me dan algún auxilio, por el fallecimiento del beneficiario?', respuesta:'No se reconoce auxilio o compensación por la no utilización de nuestros servicios funerarios.'},
                {pregunta:'6. ¿Tiene Cubrimiento internacional?', respuesta:'Nuestro producto es para utilizar dentro del territorio nacional.'},
                {pregunta:'7. ¿Tiene Cubrimiento a nivel nacional?', respuesta:'Si, nuestros servicios funerarios se extienden dentro del territorio nacional, y prestados a través de la Red Nacional los Olivos.'},
                {pregunta:'8. ¿Cubre repatriación de cuerpos?', respuesta:'No tenemos repatriación de cuerpos, solo auxilio para repatriación de Cenizas'},
                {pregunta:'9. ¿Puedo afiliar a mi mascota?', respuesta:'Nuestro producto exequial no esta diseñado para incluir mascotas, por el momento.'},
                {pregunta:'10. ¿El cubrimiento de la cobertura exequial es inmediato?', respuesta:'La cobertura exequial es casi inmediata solo en caso de fallecimiento, a causa de un accidente u Homicidio. En caso de que el Fallecimiento del titular o su grupo familiar, sea a consecuencia de una muerte natural (por enfermedad), la cobertura inicia con periodos de carencia, tiempos que varían dependiendo del plan suscrito.'},
                {pregunta:'11. ¿Cubre el traslado a nivel nacional?', respuesta:'El traslado del fallecido a nivel nacional esta limitado a 300 km por vía transitable para vehículos funerarios o por vía aérea en vuelos comerciales equivalente a un trayecto.'},
                {pregunta:'12. ¿Tiene incluida la cremación?', respuesta:'La cremación esta incluida en nuestra previsión exequial sin costo adicional.'},
                {pregunta:'13. ¿Como hago para afiliarme?', respuesta:'Entrando al link que aparece en esta página web de afíliese en línea; o personalmente en cualquiera de nuestras oficinas.'},
                {pregunta:'14. ¿Qué requisitos necesito para afiliarme?', respuesta:'En realidad, los requisitos son mínimos, información del titular y su grupo familiar que debe contener fechas de nacimiento, nombres completos y parentescos con el titular.'},
                {pregunta:'15. ¿Como hago para pagar mi plan exequial?', respuesta:'Lo puede hacer o directamente en nuestras oficinas de los Olivos EMCOFUN, En nuestros puntos de Recaudo de Baloto, Su chance, Supergiros ( En el Caquetá), por transferencia a nuestras cuentas Bancolombia y Banco Bogotá, Cooperativa Utrahuilca.'},
                {pregunta:'16. ¿Cada cuanto debo renovar el plan exequial?', respuesta:'El plan exequial es de vigencia anual, los cuales deben ser renovados a más tardar el mismo día que se le vence.'},
                {pregunta:'17. ¿Cuánto me puede costar afiliarme a los Olivos?', respuesta:'El costo de la afiliación depende de la conformación del grupo familiar.'},
                {pregunta:'18. ¿Cuántas personas puedo afiliar a los Olivos?', respuesta:'Usted puede vincular las personas que usted requiera, para esto tenemos una variedad de productos para la previsión exequial. Nuestra área comercial estará atenta a prestar un servicio de asesoramiento.'},
            ],
            preguntasCementerio: [
                {pregunta:'1. ¿Cuál es el horario de atención en la oficina del parque cementerio?', respuesta:'El horario de atención es de 8:00 am a 12:00m y de 02:00 pm a 06:00 pm.'},
                {pregunta:'2. ¿Cuál es el horario de ingreso para visitas a los seres queridos en el parque cementerio?', respuesta:'El horario para visitas es de 8:00 am a 11:30m y de 02:00 pm a 05:00 pm'},
                {pregunta:'3. ¿Por qué la demora en la entrega de los trabajos de marmolería?', respuesta:'Por la alta demanda en la elaboración de trabajos después del confinamiento y retraso en la entrega de materia prima.'},
                {pregunta:'4. ¿Cuál es la garantía en los trabajos de marmolería y que cubre?', respuesta:'La garantía de los trabajos de marmolería es de 3 meses, cubre solo los pegues mas no los desperfectos del mármol luego de su instalación.'},
                {pregunta:'5. ¿Puedo realizar trabajos sobre el lote donde se encuentra mi ser querido, sin tener que contratar los servicios con el parque cementerio?', respuesta:'No es posible, ya que el reglamento del parque cementerio en su artículo sexto parágrafo B establece “Todo el trabajo de nivelación, ornato y mejoras de toda clase así como el cuidado de los lotes, siembras, poda, corte y remoción de árboles, arbustos y pasto de cualquier clase, todas las aperturas y cierre de tumbas entierros, desentierros y remoción de restos, se efectuarán únicamente por los jardines el paraíso, con las autorizaciones legales necesarias en cada caso”. '},
                {pregunta:'6. ¿Qué debo hacer para ofrecer un lote en venta?', respuesta:'El cementerio no sirve como intermediario en negociaciones y no se permite colocar avisos de venta dentro de las instalaciones del parque cementerio.'},
                {pregunta:'7. ¿El cementerio tiene lotes para la venta?', respuesta:'No, únicamente en arrendamiento.'},
                {pregunta:'8. ¿Que cubre el mantenimiento de la jardinería?', respuesta:' El servicio de mantenimiento a las tumbas consta de  limpieza, poda de plantas, riego y lavado de lapida o planchón, no incluye reposición de plantas, pegue de floreros, casas, retoques de lapidas o planchones.'},

            ],
            sliderCel: [
                {pregunta:'1. ¿Qué debo hacer si fallece un familiar?', respuesta:'La familia del ser querido debe solicitar a la clínica, hospital o médico tratante, el certificado médico de defunción para que la funeraria proceda a asistir el ser querido, dependiendo si el fallecimiento se presentó en clínica, hospital o residencia. '},
                {pregunta:'2. ¿Qué horario tiene la funeraria para la coordinación de un servicio Funerario?', respuesta:'EMCOOFUN tiene personal disponible las 24 horas del día, los 365 días del año para la coordinación de los Homenajes.'},
                {pregunta:'3. ¿Cuánto tiempo puedo tener en velación a mi ser querido?', respuesta:'El tiempo de velación es de 24 horas, si la familia requiere que su ser querido permanezca más tiempo en velación, el tanatologo valida si es estado en que se encuentre el cuerpo permite que se pueda tener más tiempo en velación.'},
                {pregunta:'4. ¿Me puedo quedar con el certificado médico de defunción Original?', respuesta:'No, con el certificado médico de defunción original y fotocopia de la cedula del ser querido EMCOOFUN tramita el registro de defunción ante la notaria y el certificado médico de defunción queda en la Notaria.'},
                {pregunta:'5. ¿Para qué sirve el registro notarial de defunción?', respuesta:'Para acreditar legalmente que el ser querido falleció, para trámites de sucesión, cancelación de servicio de salud o cuentas bancarias.'},
                {pregunta:'6. ¿Qué le hacen al ser querido en la embalsamada?', respuesta:'Al ser querido le aplican unos productos químicos para que se conserve hasta el momento de las exequias'},
                {pregunta:'7. ¿Por qué no puedo velar a mí ser querido en la casa?', respuesta:'Por la emergencia sanitaria que se vive por el COVID19, los únicos lugares que están autorizados son las funerarias, por disposición de las autoridades de salud pública.'},
                {pregunta:'8. ¿Cuál es el horario para ingresar a las salas de velación?', respuesta:'El horario para el ingreso de personas a las salas de velación es de 8:00a.m a 6:00p.m, durante la emergencia sanitaria por el covid 19'},
                {pregunta:'9. ¿A cuántos buses   tengo derecho?', respuesta:'Por la afiliación tiene derecho al servicio de un bus para 15 acompañantes en esta época de pandemia donde se debe conservar el distanciamiento.'},
                {pregunta:'10. ¿Cuál es el recorrido del Bus?', respuesta:'El recorrido del bus inicia desde el lugar de velación a la iglesia, después de terminada la ceremonia los lleva al cementerio, en el cementerio espera 45 minutos y los regresa al lugar donde estaba el ser querido en velación.'},
                {pregunta:'11. ¿Tengo derecho a que el bus traiga y lleve a mis familiares a una vereda?', respuesta:'No.  El servicio de bus se presta dentro del perímetro urbano, donde exista este servicio.'},
                {pregunta:'12. ¿Por qué no me puedo ir en la carrozan donde llevan a mi ser querido de traslado?', respuesta:'Porque la responsabilidad de la funeraria es trasladar el ser querido y no es responsabilidad el traslado de los acompañantes.'},
                {pregunta:'13. ¿Por qué no pueden cremar el cuerpo de mi ser querido que lo entrego medicina legal? ', respuesta:'Sí se puede cremar un cuerpo entregado por medicina legal siempre y cuando la fiscalía autorice por escrito.'},
            ]
        }
    },
})
</script>