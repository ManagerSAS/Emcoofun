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
                {pregunta:'1. ??A cu??ntas personas puedo afiliar?', respuesta:'Contamos con un producto para cada tipo de familia, con protecci??n sin l??mite de permanencia. Se requiere de la informaci??n de su grupo familiar.'},
                {pregunta:'2. ??Puedo ingresar a mis padres mayores de 70 a??os?', respuesta:'En planes de previsi??n exequial, la edad m??xima de ingreso es hasta 70 a??os, para vinculaciones nuevas. Si superado el l??mite de ingreso permitido para pertenecer a nuestros planes de previsi??n exequial, tenemos la venta de compra de servicios anticipados a trav??s de nuestro producto PRENECESIDAD, en cual se paga por una sola vez y queda amparado de por vida.'},
                {pregunta:'3. ??Puedo ingresar a una persona que no tiene parentesco conmigo, pero vive con nosotros desde peque??o?', respuesta:'Los beneficiarios del plan de previsi??n exequial deben tener un vinculo de consanguinidad o de afinidad con el titular del plan exequial.'},
                {pregunta:'4. ??El plan que me cubre?', respuesta:'Es una cobertura exequial Integral sin preexistencias, sin costos adicional, que cubre los servicios en especie por el fallecimiento del titular o beneficiario registrado en el contrato, desde el momento en que se nos notifica el fallecimiento, su traslado inicial del sitio de velaci??n hasta la funeraria de la Red nacional de los Olivos, la preservaci??n del fallecido, las salas de velaci??n, servicio dentro del Territorio nacional, pago impuestos de inhumaci??n, destino final inhumaci??n en tierra o b??veda o cremaci??n.'},
                {pregunta:'5. ??Sino ocupo el servicio me dan alg??n auxilio, por el fallecimiento del beneficiario?', respuesta:'No se reconoce auxilio o compensaci??n por la no utilizaci??n de nuestros servicios funerarios.'},
                {pregunta:'6. ??Tiene Cubrimiento internacional?', respuesta:'Nuestro producto es para utilizar dentro del territorio nacional.'},
                {pregunta:'7. ??Tiene Cubrimiento a nivel nacional?', respuesta:'Si, nuestros servicios funerarios se extienden dentro del territorio nacional, y prestados a trav??s de la Red Nacional los Olivos.'},
                {pregunta:'8. ??Cubre repatriaci??n de cuerpos?', respuesta:'No tenemos repatriaci??n de cuerpos, solo auxilio para repatriaci??n de Cenizas'},
                {pregunta:'9. ??Puedo afiliar a mi mascota?', respuesta:'Nuestro producto exequial no esta dise??ado para incluir mascotas, por el momento.'},
                {pregunta:'10. ??El cubrimiento de la cobertura exequial es inmediato?', respuesta:'La cobertura exequial es casi inmediata solo en caso de fallecimiento, a causa de un accidente u Homicidio. En caso de que el Fallecimiento del titular o su grupo familiar, sea a consecuencia de una muerte natural (por enfermedad), la cobertura inicia con periodos de carencia, tiempos que var??an dependiendo del plan suscrito.'},
                {pregunta:'11. ??Cubre el traslado a nivel nacional?', respuesta:'El traslado del fallecido a nivel nacional esta limitado a 300 km por v??a transitable para veh??culos funerarios o por v??a a??rea en vuelos comerciales equivalente a un trayecto.'},
                {pregunta:'12. ??Tiene incluida la cremaci??n?', respuesta:'La cremaci??n esta incluida en nuestra previsi??n exequial sin costo adicional.'},
                {pregunta:'13. ??Como hago para afiliarme?', respuesta:'Entrando al link que aparece en esta p??gina web de af??liese en l??nea; o personalmente en cualquiera de nuestras oficinas.'},
                {pregunta:'14. ??Qu?? requisitos necesito para afiliarme?', respuesta:'En realidad, los requisitos son m??nimos, informaci??n del titular y su grupo familiar que debe contener fechas de nacimiento, nombres completos y parentescos con el titular.'},
                {pregunta:'15. ??Como hago para pagar mi plan exequial?', respuesta:'Lo puede hacer o directamente en nuestras oficinas de los Olivos EMCOFUN, En nuestros puntos de Recaudo de Baloto, Su chance, Supergiros ( En el Caquet??), por transferencia a nuestras cuentas Bancolombia y Banco Bogot??, Cooperativa Utrahuilca.'},
                {pregunta:'16. ??Cada cuanto debo renovar el plan exequial?', respuesta:'El plan exequial es de vigencia anual, los cuales deben ser renovados a m??s tardar el mismo d??a que se le vence.'},
                {pregunta:'17. ??Cu??nto me puede costar afiliarme a los Olivos?', respuesta:'El costo de la afiliaci??n depende de la conformaci??n del grupo familiar.'},
                {pregunta:'18. ??Cu??ntas personas puedo afiliar a los Olivos?', respuesta:'Usted puede vincular las personas que usted requiera, para esto tenemos una variedad de productos para la previsi??n exequial. Nuestra ??rea comercial estar?? atenta a prestar un servicio de asesoramiento.'},
            ],
            preguntasCementerio: [
                {pregunta:'1. ??Cu??l es el horario de atenci??n en la oficina del parque cementerio?', respuesta:'El horario de atenci??n es de 8:00 am a 12:00m y de 02:00 pm a 06:00 pm.'},
                {pregunta:'2. ??Cu??l es el horario de ingreso para visitas a los seres queridos en el parque cementerio?', respuesta:'El horario para visitas es de 8:00 am a 11:30m y de 02:00 pm a 05:00 pm'},
                {pregunta:'3. ??Por qu?? la demora en la entrega de los trabajos de marmoler??a?', respuesta:'Por la alta demanda en la elaboraci??n de trabajos despu??s del confinamiento y retraso en la entrega de materia prima.'},
                {pregunta:'4. ??Cu??l es la garant??a en los trabajos de marmoler??a y que cubre?', respuesta:'La garant??a de los trabajos de marmoler??a es de 3 meses, cubre solo los pegues mas no los desperfectos del m??rmol luego de su instalaci??n.'},
                {pregunta:'5. ??Puedo realizar trabajos sobre el lote donde se encuentra mi ser querido, sin tener que contratar los servicios con el parque cementerio?', respuesta:'No es posible, ya que el reglamento del parque cementerio en su art??culo sexto par??grafo B establece ???Todo el trabajo de nivelaci??n, ornato y mejoras de toda clase as?? como el cuidado de los lotes, siembras, poda, corte y remoci??n de ??rboles, arbustos y pasto de cualquier clase, todas las aperturas y cierre de tumbas entierros, desentierros y remoci??n de restos, se efectuar??n ??nicamente por los jardines el para??so, con las autorizaciones legales necesarias en cada caso???. '},
                {pregunta:'6. ??Qu?? debo hacer para ofrecer un lote en venta?', respuesta:'El cementerio no sirve como intermediario en negociaciones y no se permite colocar avisos de venta dentro de las instalaciones del parque cementerio.'},
                {pregunta:'7. ??El cementerio tiene lotes para la venta?', respuesta:'No, ??nicamente en arrendamiento.'},
                {pregunta:'8. ??Que cubre el mantenimiento de la jardiner??a?', respuesta:' El servicio de mantenimiento a las tumbas consta de  limpieza, poda de plantas, riego y lavado de lapida o planch??n, no incluye reposici??n de plantas, pegue de floreros, casas, retoques de lapidas o planchones.'},

            ],
            sliderCel: [
                {pregunta:'1. ??Qu?? debo hacer si fallece un familiar?', respuesta:'La familia del ser querido debe solicitar a la cl??nica, hospital o m??dico tratante, el certificado m??dico de defunci??n para que la funeraria proceda a asistir el ser querido, dependiendo si el fallecimiento se present?? en cl??nica, hospital o residencia. '},
                {pregunta:'2. ??Qu?? horario tiene la funeraria para la coordinaci??n de un servicio Funerario?', respuesta:'EMCOOFUN tiene personal disponible las 24 horas del d??a, los 365 d??as del a??o para la coordinaci??n de los Homenajes.'},
                {pregunta:'3. ??Cu??nto tiempo puedo tener en velaci??n a mi ser querido?', respuesta:'El tiempo de velaci??n es de 24 horas, si la familia requiere que su ser querido permanezca m??s tiempo en velaci??n, el tanatologo valida si es estado en que se encuentre el cuerpo permite que se pueda tener m??s tiempo en velaci??n.'},
                {pregunta:'4. ??Me puedo quedar con el certificado m??dico de defunci??n Original?', respuesta:'No, con el certificado m??dico de defunci??n original y fotocopia de la cedula del ser querido EMCOOFUN tramita el registro de defunci??n ante la notaria y el certificado m??dico de defunci??n queda en la Notaria.'},
                {pregunta:'5. ??Para qu?? sirve el registro notarial de defunci??n?', respuesta:'Para acreditar legalmente que el ser querido falleci??, para tr??mites de sucesi??n, cancelaci??n de servicio de salud o cuentas bancarias.'},
                {pregunta:'6. ??Qu?? le hacen al ser querido en la embalsamada?', respuesta:'Al ser querido le aplican unos productos qu??micos para que se conserve hasta el momento de las exequias'},
                {pregunta:'7. ??Por qu?? no puedo velar a m?? ser querido en la casa?', respuesta:'Por la emergencia sanitaria que se vive por el COVID19, los ??nicos lugares que est??n autorizados son las funerarias, por disposici??n de las autoridades de salud p??blica.'},
                {pregunta:'8. ??Cu??l es el horario para ingresar a las salas de velaci??n?', respuesta:'El horario para el ingreso de personas a las salas de velaci??n es de 8:00a.m a 6:00p.m, durante la emergencia sanitaria por el covid 19'},
                {pregunta:'9. ??A cu??ntos buses   tengo derecho?', respuesta:'Por la afiliaci??n tiene derecho al servicio de un bus para 15 acompa??antes en esta ??poca de pandemia donde se debe conservar el distanciamiento.'},
                {pregunta:'10. ??Cu??l es el recorrido del Bus?', respuesta:'El recorrido del bus inicia desde el lugar de velaci??n a la iglesia, despu??s de terminada la ceremonia los lleva al cementerio, en el cementerio espera 45 minutos y los regresa al lugar donde estaba el ser querido en velaci??n.'},
                {pregunta:'11. ??Tengo derecho a que el bus traiga y lleve a mis familiares a una vereda?', respuesta:'No.  El servicio de bus se presta dentro del per??metro urbano, donde exista este servicio.'},
                {pregunta:'12. ??Por qu?? no me puedo ir en la carrozan donde llevan a mi ser querido de traslado?', respuesta:'Porque la responsabilidad de la funeraria es trasladar el ser querido y no es responsabilidad el traslado de los acompa??antes.'},
                {pregunta:'13. ??Por qu?? no pueden cremar el cuerpo de mi ser querido que lo entrego medicina legal? ', respuesta:'S?? se puede cremar un cuerpo entregado por medicina legal siempre y cuando la fiscal??a autorice por escrito.'},
            ]
        }
    },
})
</script>