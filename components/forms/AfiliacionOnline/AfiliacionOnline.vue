<template>
    <v-container fluid >
        <v-row  align="center" justify="center" class="mb-15 mt-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row justify="center" align="star">
                    <v-col cols="12" sm="11" md="11" lg="11">
                        <v-row justify="center" align="center">
                            <v-col  cols="12" sm="12" md="12" lg="12" class="text-comfortaa">
                                <h1 style="color:#003B4C; font-size: 40px; background: linear-gradient(to right, #EC6480, #E83E58); -webkit-background-clip: text; -webkit-text-fill-color: transparent;" class="color-blue-dark font-weight-bold mb-6">
                                    Afiliaciones en línea
                                </h1>
                                <div style="font-size:15px">
                                    <p class="secondary--text">
                                        Diligencie su afiliación a Los Olivos Emcoofun, recuerde que al contratar la previsión exequial se acoge a las condiciones de los clausulados establecidos en el contrato exclusivo para afiliaciones online (aplican términos y condiciones US4) por la empresa EMCOOFUN por lo que su afiliación será revisada y aprobada mediante correo electrónico.
                                    </p>
                                    <p>
                                        La vigencia del contrato será de un año contado a partir de la fecha de pago de su plan.
                                    </p>
                                    <p>
                                        En caso de un evento comuníquese con las líneas gratuitas:
                                    </p>
                                    <div>
                                        <span style="color:#003B4C; font-weight: bold;">Neiva:</span> (8) 871 5555 - 316 8747157  
                                    </div>
                                    <div>
                                        <span style="color:#003B4C; font-weight: bold;">Florencia:</span> (4) 435 3314 - (4) 435 1433 - (4) 435 7558 - 316 8747213
                                    </div>
                                    <div>
                                        <span style="color:#003B4C; font-weight: bold;">Garzón:</span> (8) 833 2021 - (8) 833 4879 - 316 8747185   
                                    </div>
                                    <div>
                                        <span style="color:#003B4C; font-weight: bold;">Pitalito:</span> (8) 836 1961 - (8) 836 6929 - 316 8747226
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <v-form ref="formNovelty" autocomplete="off" enctype="multipart/form-data">
                            <h3 class="color-blue-dark font-weight-bold mb-6">
                                Datos del Titular: 
                            </h3>
                            <v-row >
                                <v-col cols="12" sm="11" md="10" lg="8">
                                    <p class="text-raleway" style="color:#003B4C;"> Correo Electronico</p>
                                    <v-text-field
                                        v-model="Correo"
                                        :rules="emailRules"
                                        color="teal darken-4"
                                        label="Correo Electrónico"
                                >
                                </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row >
                                <v-col cols="12" sm="11" md="10" lg="9">
                                    <h3 class="text-comfortaa-verde">NUESTRO PLAN DE PREVISIÓN ONLINE</h3>
                                    <div class="text-comfortaa">
                                        Pensando en su protección exequial integral, Los Olivos EMCOOFUN ha diseñado un PLAN DE PREVISIÓN ONLINE para su familia. Por favor diligencie los siguientes datos para la formalización de su afiliación
                                    </div>
                                </v-col>
                            </v-row>
                            <v-card class="pa-5 rounded-lg mt-2">
                                <v-row>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Estado Civil*</h4>
                                        <v-select
                                            v-model="EstadoCivil"
                                            :items="typeEstadoCivil"
                                            item-value="value"
                                            item-text="text"
                                            :rules="nameRules"
                                            item-color="teal darken-4"
                                            color="teal darken-4"
                                            label="Estado Civil"
                                            clearable
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Tipo de Documento*</h4>
                                        <v-select
                                            v-model="typeId"
                                            :items="itemsTypeId"
                                            item-value="value"
                                            item-text="text"
                                            :rules="nameRules"
                                            item-color="teal darken-4"
                                            color="teal darken-4"
                                            label="Tipo Documento"
                                            clearable
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Numero de Documento*</h4>
                                        <v-text-field
                                            v-model="NDocument"
                                            type="number"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Número de Documento"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Primer Nombre*</h4>
                                        <v-text-field
                                            v-model="Nombre1"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Primer Nombre"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;">  Segundo Nombre*</h4>
                                        <v-text-field
                                            v-model="Nombre2"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Segundo Nombre"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Primer Apellido*</h4>
                                        <v-text-field
                                            v-model="Apellido1"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Primer Apellido"
                                    >
                                    </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Segundo Apellido*</h4>
                                        <v-text-field
                                            v-model="Apellido2"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Segundo Apellido"
                                    >
                                    </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;">  Sexo*</h4>
                                        <v-select
                                            v-model="Genero"
                                            :items="TypeSex"
                                            item-value="value"
                                            item-text="text"
                                            :rules="nameRules"
                                            item-color="teal darken-4"
                                            color="teal darken-4"
                                            label="Tipo Documento"
                                            clearable
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Fecha de nacimiento*</h4>
                                        <v-text-field
                                            v-model="dateBirth"
                                            type="date"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Fecha de nacimiento"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Direccion de Residencia*</h4>
                                        <v-text-field
                                            v-model="Direccion1"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Dirección de Residencia"
                                    >
                                    </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Direccion de Residencia 2 (Opcional)</h4>
                                        <v-text-field
                                            v-model="Direccion2"
                                            color="teal darken-4"
                                            label="Dirección de Residencia"
                                    >
                                    </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Numero de Contacto*</h4>
                                        <v-text-field
                                            v-model="numPhone1"
                                            type="number"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Número de Contacto"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="11" md="10" lg="4">
                                        <h4 class="text-raleway" style="color:#003B4C;"> Numero de Contacto 2 (Opcional)</h4>
                                        <v-text-field
                                            v-model="numPhone2"
                                            type="number"
                                            color="teal darken-4"
                                            label="Número de Contacto"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <!-- --------- -->
                            <v-expansion-panels class="mt-6 rounded-xl">
                                <v-expansion-panel class="rounded-xl">
                                    <v-expansion-panel-header expand-icon="mdi-menu-down pa-1">
                                        <h4 class="color-blue-dark font-weight-bold">
                                            NUESTRO PLAN DE PREVISIÓN ONLINE 
                                        </h4>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p> El<strong> PLAN DE PREVISIÓN EXEQUIAL ONLINE</strong> se conforma según el estado civil del titular, si es soltero o casado/unión libre.</p>
                                        <p><strong> ESTADO CIVIL: SOLTERO</strong></p>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                        <strong> EL TITULAR DEL PLAN DE PREVISIÓN EXEQUIAL ONLINE</strong> , podrá contratar este servicio de previsión desde los 18 años hasta los 65 años. En renovación no aplicará límite de edad.
                                                </v-list-item-title>
                                                <v-list-item-title>
                                                        <strong>SUS BENEFICIARIOS:</strong> , podrá contratar este servicio de previsión desde los 18 años hasta los 65 años. En renovación no aplicará límite de edad
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>
                                                                <strong>- PADRES</strong>, con edad de ingreso máxima de hasta 70 años.  En renovación no aplicará límite de edad
                                                            </v-list-item-title>
                                                            <v-list-item-title>
                                                                <strong>- HERMANOS</strong>, desde el 6° mes de gestación y hasta 30 años de edad, que sean solteros y sin hijos.
                                                            </v-list-item-title>
                                                            <v-list-item-title>
                                                                <strong>- HERMANOS</strong>, que demuestren un estado de discapacidad valorada en un 50% o más. Para estos hermanos en estado de discapacidad no les aplicará límite de edad en su ingreso ni en su permanencia.
                                                            </v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <p><strong>ESTADO CIVIL: CASADO / UNIÓN LIBRE</strong></p>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                        <strong> EL TITULAR DEL PLAN DE PREVISIÓN EXEQUIAL ONLINE</strong>, podrá contratar este servicio de previsión desde los 18 años hasta los 65 años.  En renovación no aplicará límite de edad.
                                                </v-list-item-title>
                                                <v-list-item-title>
                                                        <strong>SUS BENEFICIARIOS:</strong>
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>
                                                                <strong>- CÓNYUGE</strong>, con una edad de ingreso hasta los 65 años. En renovación no aplicará límite de edad.
                                                            </v-list-item-title>
                                                            <v-list-item-title>
                                                                <strong>- PADRES O SUEGROS</strong>, con edad de ingreso máxima de hasta 70 años. Máximo dos (2) beneficiarios. En renovación no aplicará límite de edad.
                                                            </v-list-item-title>
                                                            <v-list-item-title>
                                                                <strong>- HIJOS</strong>, desde el 6° mes de gestación y hasta 30 años de edad, que sean solteros y sin hijos.
                                                            </v-list-item-title>
                                                            <v-list-item-title>
                                                                <strong>- HIJOS</strong>, que demuestren un estado de discapacidad valorada en un 50% o más. Para estos hermanos en estado de discapacidad no les aplicará límite de edad en su ingreso ni en su permanencia.
                                                            </v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <strong> PERIODOS DE CARENCIA PARA TENER DERECHO AL SERVICIO EXEQUIAL:</strong>
                                        <p>Periodo que inicia a partir de la fecha de pago de su afiliación durante el cual no tendrá derecho al servicio exequial ; dependiendo de la causa de fallecimiento</p>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    1. En caso de muerte natural o suicidio, es un periodo de carencia de 90 días.
                                                </v-list-item-title>
                                                <v-list-item-title>
                                                    2.En caso de muerte accidental u homicidio, es desde la hora 24 (12 de la media noche de ese mismo día) luego de radicado el pago de su afiliación.
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item><br>
                                        <p><strong> NOTA 1.</strong>En caso de fallecimiento de los progenitores, estos no podrán ser reemplazados.</p>
                                        <p><strong> NOTA 2.</strong>Al momento de solicitar el servicio deberá demostrar el parentesco, fecha de nacimiento y edad del fallecido con el documento de identidad correspondiente; para validar el derecho al servicio funerario.</p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <!-- ------ -->
                            <v-expansion-panels class="mt-6 rounded-xl">
                                <v-expansion-panel class="rounded-xl">
                                    <v-expansion-panel-header expand-icon="mdi-menu-down pa-1">
                                        <h4 class="color-blue-dark font-weight-bold">
                                            COBERTURA DEL PLAN DE PREVISIÓN ONLINE
                                        </h4>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="color-blue-dark">
                                        <div class="pr-5 pl-5">
                                            <h4 style="color: #2EAE9B" > En la Afiliación:</h4><br>
                                            <p class="text-confortaa"><span style="color: #2EAE9B">1.</span> Atención y consulta permanente. </p>
                                            <p class="text-confortaa"><span style="color: #2EAE9B">2.</span> Cubrimiento del servicio dentro del territorio nacional.</p>
                                        </div>
                                        <div class=" ml-5 mr-5">
                                            <h3 class="text-confortaa" style="color: #E9522C; font-size: 20px;" > En el Deceso:</h3><br>
                                            <p class="text-confortaa"><span style="color: #E9522C">1.</span> Atención y orientación todo el año las 24 horas del día a través del PBX 8715555 en Neiva (Huila), Teléfono 8332021 en Garzón, Teléfono 8361961 en Pitalito, Teléfono 4353314 en Florencia (Caquetá) o la línea gratuita 018000911134 a Nivel Nacional. </p>
                                            <p class="text-confortaa"><span style="color: #E9522C">2.</span> Traslado inicial del cuerpo del fallecido desde el lugar de defunción hasta lugar de la funeraria de le Red Nacional LOS OLIVOS y traslado del cuerpo del afiliado fallecido al sitio de la velación en una distancia de hasta 80 km.. dentro del perímetro urbano don-de se encuentre la sede de LOS OLIVOS, por vía terrestre transitable para vehículos funerarios.</p>
                                            <p class="text-confortaa"><span style="color: #E9522C">3.</span> Traslado nacional del cuerpo del afiliado fallecido, por vía terrestre transitable para vehículos funerarios, limitado a un perímetro de hasta 300 km. o traslado nacional por vía aérea en vuelos comerciales equivalente a un trayecto a criterio de los Olivos.  </p>
                                            <p class="text-confortaa"><span style="color: #E9522C">4.</span> Pago de Impuestos de Inhumación, diligencias ante la Secretaría de Salud y registro notarial (el certificado médico de defunción lo deben aportar los familiares) así como los demás trámites que se requieran de acuerdo con la causa del fallecimiento y normatividad vigente.</p>
                                            <p class="text-confortaa"><span style="color: #E9522C">5.</span> Preservación del fallecido hasta por cuarenta y ocho (48) horas en los laboratorios de las funerarias adscritas a la Red Nacional LOS OLIVOS. </p>
                                            <p class="text-confortaa"><span style="color: #E9522C">6.</span> Suministro de cofre o ataúd en cualquiera de las referencias designadas los planes en el presente contrato o sus anexos.</p>
                                        </div>
                                        <div class="ml-5 mr-5">
                                            <h3 class="text-confortaa" style="color: #ED6D81; font-size: 20px;" > Durante la Velacion:</h3><br>
                                            <p class="text-confortaa"><span style="color: #ED6D81">1.</span> Salas de velación hasta por 24 horas en la Red Nacional LOS OLIVOS, excepto en el Departamento de Antioquia, donde el servicio de velación es hasta por 12 horas y en donde la Red Nacional tenga convenio vigente de acuerdo al caso. </p>
                                            <p class="text-confortaa"><span style="color: #ED6D81">2.</span> Una ofrenda Floral.</p>
                                            <p class="text-confortaa"><span style="color: #ED6D81">3.</span> Conjunto recordatorio (denario, libro de oraciones, registro de asistencia). </p>
                                            <p class="text-confortaa"><span style="color: #ED6D81">4.</span> Servicio de Cafetería (tinto, aromática y agua). </p>
                                            <p class="text-confortaa"><span style="color: #ED6D81">5.</span> Servicio de teléfono y fax (en donde exista este servicio).</p>
                                            <p class="text-confortaa"><span style="color: #ED6D81">6.</span> Una serie de hasta seis (6) Carteles.</p>
                                            <p class="text-confortaa"><span style="color: #ED6D81">7.</span> Velación domiciliaria (incluye préstamo de implementos para la velación y un kit de cafetería). Se realiza de acuerdo a la normatividad vigente.</p>
                                        </div>
                                        <div class="ml-5 mr-5">
                                            <h3 class="text-confortaa" style="color: #7AB929; font-size: 20px;" > En El Cortejo:</h3><br>
                                            <p class="text-confortaa"><span style="color: #7AB929">1.</span> Cinta membretada con el nombre del fallecido. </p>
                                            <p class="text-confortaa"><span style="color: #7AB929">2.</span> Honras fúnebres</p>
                                            <p class="text-confortaa"><span style="color: #7AB929">3.</span> Transporte público urbano desde la sala de velación al sitio de exequias y destino final, para acompañantes, hasta 25 personas, en ciudades capitales y ciudades intermedias (donde exista este servicio).  </p>
                                            <p class="text-confortaa"><span style="color: #7AB929">4.</span> Traslado en carroza a lugar de las honras fúnebres y al sitio del destino final por vía transitable para vehículo funerario, siempre y cuando se encuentre dentro del mismo perímetro urbano del lugar de la velación </p>   
                                        </div>
                                        <div class="ml-5 mr-5">
                                            <h3 class="text-confortaa" style="color: #F59D20; font-size: 20px;" > Destino Final: </h3><br>
                                            <p class="text-confortaa">Las opciones para destino final son las que a continuación se enuncia, salvo que se pacte lo contrario, las cuales son excluyentes entre sí:  </p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Uso temporal de lote o bóveda para la inhumación hasta por cuatro (4) años</span> de EMCOOFUN, los de la Red Nacional Los Olivos, en cementerios distritales, municipales o privados de acuerdo con los convenios que tenga las funerarias adscritas a la Red Nacional LOS OLIVOS.</p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Parágrafo 1:</span> En caso de que el tiempo reglamentado por el cementerio sea menor, se aplica el Límite establecido por este.  </p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Parágrafo 2:</span> Primará el uso de los cementerios propios, los de la Red Nacional Los Olivos de acuerdo con el convenio Nacional vigente y solo se autorizará cementerios distritales, municipales o privados diferentes a los de la Red Olivos cuando en la ciudad de las exequias no se cuente con cementerio propio o de la Red Olivos. </p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Parágrafo 3:</span> Se incluye auxilio para osario, en los cementerios de EMCOOFUN o los de la Red Nacional Los Olivos, en territorios diferentes a la ciudad de Neiva (Huila) de acuerdo con los convenios que se tenga con la Red Nacional LOS OLIVOS, hasta por la suma equivalente a 0.5 smmlv, siempre que el grupo familiar haya permanecido vinculado ininterrumpidamente en el plan de previsión exequial con EMCOOFUN los últimos cuatro (4) años. 2) </p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Cremación</span> en los cementerios de EMCOOFUN, los de la Red Nacional Los OLIVOS, en cementerios privados, distritales o municipales, de acuerdo con los convenios que tengan las funerarias adscritas a la Red Nacional LOS OLIVOS.</p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Parágrafo 1:</span> Primará el uso de los cementerios propios o los de la Red Nacional Los Olivos de acuerdo con el convenio nacional vigente y sólo se autorizará cementerios distritales, municipales o privados diferentes a los de la Red Olivos cuando en la ciudad de las exequias no se cuente con horno crematorio propio o de la Red Olivos. Se incluye una Urna para las cenizas y el cofre o ataúd es de propiedad de la Red Nacional LOS OLIVOS. </p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Parágrafo 2:</span> Se incluye auxilio para cinerarios en los cementerios de EMCOOFUN o los de la Red Nacional Los Olivos, en territorios diferentes a la ciudad de Neiva (Huila) de acuerdo con los convenios que se tenga con la Red Nacional LOS OLIVOS, hasta por la suma equivalente a 0.5 smmlv siempre y cuando el grupo familiar afiliado esté vinculado ininterrumpidamente en el plan de previsión exequial con EMCOOFUN los últimos cuatro (4) años. 3)</p>
                                            <p class="text-confortaa"><span style="color: #F59D20" class="font-weight-bold "> <img src="../../../static/iconos/vineta-03.png" width="15"> Repatriación de Cenizas:</span> Se reconoce el valor del flete correspondiente a la repatriación de las cenizas hasta por un valor equivalente a 1.5 smmlv, salvo que se pacte lo contrario. </p>
                                        </div>
                                        <div class="ml-5 mr-5">
                                            <h3 class="text-confortaa" style="color: #2EAE9B; font-size: 20px;" > Servicios Post-Exequiales:</h3><br>
                                            <p class="text-confortaa"><span style="color: #2EAE9B">1.</span> Misa colectiva del mes (en donde exista este servicio).  </p>
                                            <p class="text-confortaa"><span style="color: #2EAE9B">2.</span> Misa colectiva de aniversario (en donde exista este servicio).</p>
                                        </div>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <!-- ------- -->
                        
                            <div class="mt-5">
                                <h4 class="text-raleway" style="color:#003B4C;"> Autorizo expresamente a EMCOOFUN LOS OLIVOS, en el desarrollo de sus funciones a facturar el valor total a pagar del <span class="font-weight-bold ">PLAN DE PREVISIÓN ONLINE con el cual estoy de acuerdo a las políticas descritas en este formato.</span></h4>
                            </div>
                            <v-row no-gutters align="center">
                                <v-col cols="5">
                                    <v-checkbox
                                        v-model="AutoEmcoofun"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Autorizo"
                                    > </v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row no-gutters align="center">
                                <v-col cols="5">
                                    <v-checkbox
                                        v-model="terminos"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label="Acepto políticas de tratamiento de datos"
                                    > </v-checkbox>
                                </v-col>
                                <v-col cols="7">
                                    <Nuxt-link target="_blank" to="/terminosycondiciones/privacidad-de-datos">Ver términos y Condiciones</Nuxt-link>
                                </v-col>
                            </v-row>
                            <v-row no-gutters align="center">
                                <v-col cols="5">
                                    <v-checkbox
                                        v-model="declaracion"
                                        :rules="nameRules"
                                        color="teal darken-4"
                                        label=" Sí, declaro y autorizo"
                                    > </v-checkbox>
                                </v-col>
                                <v-col cols="7">
                                    <Nuxt-link target="_blank" to="/terminosycondiciones/privacidad-de-datos">Autrización y Declaracion SARLAFT</Nuxt-link>
                                </v-col>
                            </v-row>
                            <!-- captcha -->
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <Gcaptcha @captcha="verifyCaptcha"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-btn
                                        rounded
                                        class="card-shadow"
                                        dark
                                        color="teal darken-3"
                                        @click="sendInfoNovelty"
                                    > Enviar información 
                                    </v-btn>
                                </v-col>
                                <v-container>
                                    <v-row class="mt-5" justify="center" align="center">
                                        <v-col cols="12" sm="12" md="12" lg="12">
                                            <h4 class="mb-6 text-raleway" style="color:#003B4C;">
                                                Por favor, al finalizar el formulario realice el pago en la siguiente opción para la formalización del contrato con Los Olivos Emcoofun
                                            </h4>
                                            <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
                                                <input type="image" border="0" alt="" src="http://www.payulatam.com/img-secure-2015/boton_pagar_mediano.png" onClick="this.form.urlOrigen.value = window.location.href;"/>
                                                <input name="buttonId" type="hidden" value="rlBdHe6fVbJOg5xqRMieT172I+BKw0mbIXsTfqjqxIomnf2iFwnh0g=="/>
                                                <input name="merchantId" type="hidden" value="88971"/>
                                                <input name="accountId" type="hidden" value="93013"/>
                                                <input name="description" type="hidden" value="Plan de previsión online US4"/>
                                                <input name="referenceCode" type="hidden" value="US4 PAGINA WEB"/>
                                                <input name="amount" type="hidden" value="220000.00"/>
                                                <input name="tax" type="hidden" value="0.00"/>
                                                <input name="taxReturnBase" type="hidden" value="0.00"/>
                                                <input name="currency" type="hidden" value="COP"/>
                                                <input name="lng" type="hidden" value="es"/>
                                                <input name="displayBuyerComments" type="hidden" value="true"/>
                                                <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
                                                <input name="buttonType" value="SIMPLE" type="hidden"/>
                                                <input name="signature" value="bdd8dc8aca4d1d3e3afac0706894fb4e3ea15a84bb8d2f3bd58a5765caa77ae7" type="hidden"/>
                                            </form>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-row> 
                        </v-form>
                        <Message :snackbar="snackbar" :color-snackbar="colorSnackbar" :message="message"/> 
                    </v-col>
                </v-row>
            </v-col>
		</v-row>
    </v-container>
</template>
<script>

import Gcaptcha from '../recaptcha.vue'
import Post from '../../post/post'
import Message from '../messages/message1.vue'
export default {
    components:{ 
        Gcaptcha, 
        Message,
    },
    data(){
        return{
            Correo:'',
            NDocument: '',
            Nombre1: '',
            Nombre2: '',
            Apellido1: '',
            Apellido2: '',
            Genero:'',
            TypeSex: ['Femenino','Masculino','Otro','Prefiro no decir'],
            // date birth
            dateBirth: '',
            typeId:'',
            itemsTypeId: ['C.C','C.E','P.E.P'],
            numPhone1: '',
            numPhone2: '',
            Direccion1: '',
            Direccion2: '',
            EstadoCivil: '',
            typeEstadoCivil:['Soltero', 'Casado', 'Unión libre'],



            snackbar: false,
            message: '',
            colorSnackbar: '',

            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            AutoEmcoofun:false,
            terminos: false,
            declaracion: false,
            resCaptcha: false,
        }
    }, 
    methods:{
        async sendInfoNovelty(){
            if(this.Correo !== '' && this.NDocument !== '' && this.Nombre1 !== '' && this.Nombre2 !== '' && this.Apellido1 !== '' && this.Apellido2 !== '' && this.Genero !== ''&& this.dateBirth !== ''&& this.typeId !== '' && this.numPhone1 !== ''&& this.Direccion1 !== '' && this.EstadoCivil !== '' && this.terminos === true && this.AutoEmcoofun === true && this.declaracion === true && this.resCaptcha === true){         
      
                const data = {
                    Correo:this.Correo,
                    NDocument: this.NDocument,
                    Nombre1: this.Nombre1,
                    Nombre2: this.Nombre2,
                    Apellido1: this.Apellido1,
                    Apellido2: this.Apellido2,
                    Genero:this.Genero,
                    dateBirth: this.dateBirth,
                    typeId:this.typeId,
                    numPhone1: this.numPhone1,
                    numPhone2: this.numPhone2,
                    Direccion1: this.Direccion1,
                    Direccion2: this.Direccion2,
                    EstadoCivil: this.EstadoCivil,
                }
                const response = await Post.postFormAfiliacion( data );
                console.log(response);
                if(response.error === false){
                    this.snackbar = true
                    this.colorSnackbar = 'green accent-4'
                    this.message = 'Se envio tu solicitud'
                    setTimeout(()=>{ this.snackbar = false }, 3000)
                    this.$refs.formNovelty.reset()
                }else{
                    this.snackbar = true
                    this.colorSnackbar = 'red accent-3'
                    this.message = 'no se envio tu solicitud'
                    console.log(response.error)
                    setTimeout(()=>{ this.snackbar = false }, 3000)
                    this.$refs.formNovelty.reset()
                }                    
            }else{
                this.snackbar = true
                this.colorSnackbar = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{ this.snackbar = false },3000)
                this.$refs.formNovelty.validate()
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
.bg-list{
    background-color: #003b4c0f;
}
</style>