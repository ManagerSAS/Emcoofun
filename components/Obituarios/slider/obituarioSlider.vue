<template>
    <v-container fluid class="ml-lg-8">
        <v-row>
            <v-col cols="12"  class="mb-md-5 mb-lg-10 mt-lg-10 text-center text-uppercase text-raleway-verde tituloPrincipal">
                <h2>OBITUARIOS SEDE {{city}}</h2>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" v-if="obituarios.length === 0">
            <v-col justify="center" align="center" cols="12" lg="5">
                <img src="../../../static/NoHayObituarios.png" width="80%">
            </v-col>
        </v-row>
        <!-- obituarios extra pc -->
        <div class="pc" justify="center" align="center">
            <v-row v-if="obituarios.length">
                <v-col cols="7" align="center">
                    <v-row justify="center" align="center">
                        <v-col cols="11" style="background-color: #ECECEC;" class="rounded-lg ml-3">
                            <div  align="center"  class="text-center justify-center text-raleway-verde">
                                <h2>Un homenaje al amor</h2>
                            </div>
                            <p align="center" style="color: #489791;"  class="text-comfortaa text-center justify-center px-10 mx-10">“Dios de misericordia y amor, ponemos en tus manos amorosas a nuestra ser querido  
                            que has llamado de esta vida a tu santa presencia y permite que la luz de tu amor
                            ilumine nuestro camino y fortalezca nuestro corazón”</p>
                        </v-col>
                    </v-row>
                    <v-progress-linear
                        v-show="loading"
                        indeterminate
                        color="green"
                    ></v-progress-linear>
                    <v-row justify="center" align="center">
                        <v-col cols="12">
                            <div class="justify-center ml-3" >
                                <v-carousel
                                    hide-delimiter-background
                                    delimiter-icon="mdi-minus"
                                    show-arrows-on-hover
                                    height="700"
                                    interval="10000"
                                    cycle
                                    class="mt-1"
                                    v-if="obituarios.length"    
                                    justify="center" align="center"                            
                                >
                                    <v-carousel-item v-for="(obituarios ,index) in obituarios" :key="index" class="contObituario " justify="center" align="center">
                                        <div justify="center" align="center">
                                            <v-row justify="center" align="start">
                                                <v-col cols="12" lg="11" class="mt-5" style="max-width: 550px">
                                                    <div class="text-raleway white--text font-weight-bold textname">{{obituarios.nombreCompleto}}</div>
                                                    <div class="text-raleway font-italic white--text textDescansa">Descansa en la paz del señor</div>
                                                </v-col>        
                                            </v-row> 
                                            <v-row  justify="center" align="center">
                                                <v-col cols="12" lg="5" class="justify-end" >
                                                    <div  class="circulogrande">
                                                        <div >
                                                            <img class="fotohomenajegrande" :src="obituarios.foto" v-if="obituarios.visualizarFoto === '0' && obituarios.foto === ''" >
                                                            <img class="fotohomenajegrande" v-else src="../../../static/CintaLuto.jpg" >
                                                        </div>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" lg="6" justify="center" align="center">
                                                    <div class="text-comfortaa text-left mb-1 " style="font-size: 1.5em;"><span style="color: #FCF0A5;">Fecha fallecimiento: </span>   {{obituarios.fecha_fallecimiento}}</div>
                                                    <div class="text-comfortaa text-left  mb-1" style="font-size: 1.5em;"><span style="color: #FCF0A5;">Nombre sala: </span>   {{obituarios.nombre_sala}}</div>
                                                    <div class="text-comfortaa text-left  mb-1" style="font-size: 1.5em;"><span style="color: #FCF0A5;">Fecha Salida sala: </span>   {{obituarios.fecha_salida_sala}}</div>
                                                    <div class="text-comfortaa text-left  mb-1" style="font-size: 1.5em;"><span style="color: #FCF0A5;">Hora Salida sala: </span>   {{obituarios.hora_salida_sala}}</div>
                                                    <v-divider style="width: 90%;" class="mt-3 mb-3"></v-divider>
                                                    <div class="text-comfortaa text-left  mb-1" style="font-size: 1.5em;"><span style="color: #FCF0A5;">Hora exequias: </span>   {{obituarios.hora_exequias}}</div>
                                                    <div class="text-comfortaa text-left  mb-1" style="font-size: 1.5em;"><span style="color: #FCF0A5;">Fecha exequias: </span>   {{obituarios.fecha_exequias}}</div>
                                                    <div class="text-comfortaa text-left  mb-1" style="font-size: 1.5em;"><span style="color: #FCF0A5;">Lugar exequias: </span>   {{obituarios.lugar_exequias}}</div>
                                                    <div class="text-comfortaa text-left  mb-1" style="font-size: 1.5em;"><span style="color: #FCF0A5;">Destino final: </span>   {{obituarios.destino_final_cementerio}}</div>
                                                </v-col>
                                            </v-row> 
                                        </div>
                                    </v-carousel-item>
                                </v-carousel>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="4" class="ml-1 rounded-lg mb-5" style="background-color: #ECECEC; height: 750px;">
                    <VueSlickCarousel v-bind="settings" v-if="obituarios.length" :style="{height: '700px'}">
                        <div v-for="(Contenido ,index) in obituarios" :key="index" class=" fondoSlider">
                            <div>
                                <v-row justify="center" align="center">
                                    <v-col cols="12" lg="11" >
                                        <div class="text-raleway mt-2 text-center white--text font-weight-bold text-capitalize">{{Contenido.nombreCompleto}}</div>
                                        <div class="text-raleway text-center font-italic white--text" style="font-size: 10px;">Descansa en la paz del señor</div>
                                    </v-col>        
                                </v-row>
                                <v-row justify="center" align="center"> 
                                    <v-col cols="12" lg="4" class="justify-end" align="center">
                                        <div  class="circuloPequeño ml-5">
                                            <img class="fotohomenaje" v-if="obituarios.visualizarFoto === '0' && obituarios.foto === ''" :src="Contenido.foto" >
                                            <img class="fotohomenaje" v-else src="../../../static/CintaLuto.jpg" >
                                        </div>
                                    </v-col>
                                    <v-col cols="12" lg="6"  class="ml-5">
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Fecha fallecimiento: </span>   {{Contenido.fecha_fallecimiento}}</div>
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Nombre sala: </span>   {{Contenido.nombre_sala}}</div>
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Fecha Salida sala: </span>   {{Contenido.fecha_salida_sala}}</div>
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Hora Salida Sala: </span>   {{Contenido.hora_salida_sala}}</div>
                                        <v-divider style="width: 70%;" class="mt-3 mb-3"></v-divider>
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Hora exequias: </span>   {{Contenido.hora_exequias}}</div>
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Fecha exequias: </span>   {{Contenido.fecha_exequias}}</div>
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Lugar exequias: </span>   {{Contenido.lugar_exequias}}</div>
                                        <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Destino final: </span>   {{Contenido.destino_final_cementerio}}</div>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </v-col>
            </v-row>
        </div>
        <!-- laptop obituarios -->
        <div class="laptop" v-if="obituarios.length">
            <v-row justify="center" align="center">
                <v-col cols="11" style="background-color: #ECECEC;" class="rounded-lg ml-2">
                    <div  align="center"  class="text-center justify-center text-raleway-verde">
                        <h2>Un homenaje al amor</h2>
                    </div>
                    <p align="center" style="color: #489791;"  class="text-comfortaa text-center justify-center">“Dios de misericordia y amor, ponemos en tus manos amorosas a nuestra ser querido que has llamado de esta vida a tu santa presencia y permite que la luz de tu amor
                    ilumine nuestro camino y fortalezca nuestro corazón”</p>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="7" align="center">
                    <v-row justify="center" align="center">
                        <v-col cols="12" md="12">
                            <div >
                                <v-carousel
                                    hide-delimiter-background
                                    delimiter-icon="mdi-minus"
                                    show-arrows-on-hover
                                    height="550px"
                                    width="800px"
                                    interval="10000"
                                    cycle
                                    v-if="obituarios.length"                                
                                >
                                    <v-carousel-item v-for="(obituarios ,index) in obituarios" :key="index" class="contObituario ">
                                            <v-row>
                                            <v-col cols="12" class="mt-5">
                                                <div class="text-raleway white--text font-weight-bold textname2">{{obituarios.nombreCompleto}}</div>
                                                <div class="text-raleway font-italic white--text textDescansa2" >Descansa en la paz del señor</div>
                                            </v-col>        
                                        </v-row> 
                                        <v-row>
                                            <v-col cols="5" class="justify-end" align="center">
                                                <div  class="circulogrande ml-3">
                                                    <div align="center">
                                                        <img class="fotohomenajegrande" :src="obituarios.foto" v-if="obituarios.visualizarFoto === '0' && obituarios.foto === ''" >
                                                        <img class="fotohomenajegrande" v-else src="../../../static/CintaLuto.jpg" >
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="7" >
                                                <div class="text-comfortaa text-left mb-1 " style="font-size: 1em;"><span style="color: #FCF0A5;">Fecha fallecimiento: </span>   {{obituarios.fecha_fallecimiento}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 1em;"><span style="color: #FCF0A5;">Nombre sala: </span>   {{obituarios.nombre_sala}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 1em;"><span style="color: #FCF0A5;">Fecha Salida sala: </span>   {{obituarios.fecha_salida_sala}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 1em;"><span style="color: #FCF0A5;">Hora Salida sala: </span>   {{obituarios.hora_salida_sala}}</div>
                                                <v-divider style="width: 80%;" class="mt-1 mb-1"></v-divider>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 1em;"><span style="color: #FCF0A5;">Hora exequias: </span>   {{obituarios.hora_exequias}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 1em;"><span style="color: #FCF0A5;">Fecha exequias: </span>   {{obituarios.fecha_exequias}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 1em;"><span style="color: #FCF0A5;">Lugar exequias: </span>   {{obituarios.lugar_exequias}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 1em;"><span style="color: #FCF0A5;">Destino final: </span>   {{obituarios.destino_final_cementerio}}</div>
                                            </v-col>
                                        </v-row> 
                                    </v-carousel-item>
                                </v-carousel>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="4" class="rounded-lg mt-3 mb-2" style="background-color: #ECECEC; height: 550px; ">
                    <VueSlickCarousel v-bind="settings" v-if="obituarios.length" :style="{height: '550px'}">
                        <div v-for="(Contenido ,index) in obituarios" :key="index" class="fondoSlider">
                            <v-row>
                                <v-col cols="12" lg="11" >
                                    <div class="text-raleway text-center white--text font-weight-bold text-capitalize textname" >{{Contenido.nombreCompleto}}</div>
                                    <div class="text-raleway text-center font-italic white--text textDescansa" >Descansa en la paz del señor</div>
                                </v-col>        
                            </v-row>
                            <v-row class="mb-5 mr-1">
                                <v-col cols="6" class="justify-end" align="center">
                                    <div  class="circuloPequeño ml-5">
                                        <img class="fotohomenaje" v-if="obituarios.visualizarFoto === '0' && obituarios.foto === ''" :src="Contenido.foto" >
                                        <img class="fotohomenaje" v-else src="../../../static/CintaLuto.jpg" >
                                    </div>
                                </v-col>
                                <v-col cols="6"  >
                                    <div class="text-comfortaa mb-1 description" ><span class="titulos">Fecha fallecimiento: </span>   {{Contenido.fecha_fallecimiento}}</div>
                                    <div class="text-comfortaa mb-1 description" ><span class="titulos">Nombre sala: </span>   {{Contenido.nombre_sala}}</div>
                                    <div class="text-comfortaa mb-1 description" ><span class="titulos">Fecha Salida sala: </span>   {{Contenido.fecha_salida_sala}}</div>
                                    <div class="text-comfortaa description" ><span class="titulos">Hora Salida Sala: </span>   {{Contenido.hora_salida_sala}}</div>
                                    <v-divider style="width: 200px;"></v-divider>
                                    <div class="text-comfortaa mb-1 description" ><span class="titulos">Hora exequias: </span>   {{Contenido.hora_exequias}}</div>
                                    <div class="text-comfortaa mb-1 description" ><span class="titulos">Fecha exequias: </span>   {{Contenido.fecha_exequias}}</div>
                                    <div class="text-comfortaa mb-1 description" ><span class="titulos">Lugar exequias: </span>   {{Contenido.lugar_exequias}}</div>
                                    <div class="text-comfortaa mb-1 description" ><span class="titulos">Destino final: </span>   {{Contenido.destino_final_cementerio}}</div>
                                </v-col>
                            </v-row>
                        </div>
                    </VueSlickCarousel>
                </v-col>
            </v-row>
        </div>
        <!-- Tablet obituarios -->
        <div class="tablet" v-if="obituarios.length">
            <v-row justify="center" align="center">
                <v-col cols="10" style="background-color: #ECECEC;" class="rounded-lg">
                    <div  align="center"  class="text-raleway-verde">
                        <h2>Un homenaje al amor</h2>
                    </div>
                    <p align="center" style="color: #489791;"  class="text-comfortaa text-center justify-center">“Dios de misericordia y amor, ponemos en tus manos amorosas a nuestra ser querido que has llamado de esta vida a tu santa presencia y permite que la luz de tu amor
                    ilumine nuestro camino y fortalezca nuestro corazón”</p>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="12">
                    <div justify="center" align="center">
                        <!-- <v-container  fluid fill-height> -->
                            <v-carousel
                                hide-delimiter-background
                                delimiter-icon="mdi-minus"
                                show-arrows-on-hover
                                height="860"
                                interval="10000"
                                cycle
                                v-if="obituarios.length"                                
                            >
                                <v-carousel-item justify="center" align="center" v-for="(obituarios ,index) in obituarios" :key="index" class="slider">
                                    <div class="contObituario mt-2" justify="center" align="center">
                                        <v-row>
                                            <v-col cols="12" lg="12" class="mt-5">
                                                <div class="text-raleway white--text font-weight-bold textname2">{{obituarios.nombreCompleto}}</div>
                                                <div class="text-raleway font-italic white--text textDescansa2" >Descansa en la paz del señor</div>
                                            </v-col>        
                                        </v-row> 
                                        <v-row justify="center" align="center">
                                            <v-col cols="12" >
                                                <div  class="circulogrande ml-3">
                                                    <img class="fotohomenajegrande" :src="obituarios.foto" v-if="obituarios.visualizarFoto === '0' && obituarios.foto === ''" >
                                                    <img class="fotohomenajegrande" v-else src="../../../static/CintaLuto.jpg" >
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row justify="center" align="center" class="mb-5">
                                            <v-col cols="8" justify="center" align="center">
                                                <v-row>
                                                    <v-col cols="12" justify="center" align="center">
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;">Fecha fallecimiento:  </span><br> {{obituarios.fecha_fallecimiento}} </div>
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;"> Nombre sala:         </span><br> {{obituarios.nombre_sala}}</div>
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;"> Fecha Salida sala:   </span><br> {{obituarios.fecha_salida_sala}}</div>
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;">Hora Salida sala:     </span><br> {{obituarios.hora_salida_sala}}</div>
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;">Hora exequias:        </span><br> {{obituarios.hora_exequias}}</div>
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;">Fecha exequias:       </span><br> {{obituarios.fecha_exequias}}</div>
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;">Lugar exequias:       </span><br> {{obituarios.lugar_exequias}}</div>
                                                        <div class="text-comfortaa" style="font-size: 18px;"><span style="color: #FCF0A5;">Destino final:        </span><br> {{obituarios.destino_final_cementerio}}</div>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row> 
                                    </div>
                                </v-carousel-item>
                            </v-carousel>
                        <!-- </v-container> -->
                    </div>
                </v-col>
            </v-row>
            <v-row class="ml-1">
                <v-col cols="12" class="rounded-lg mb-10" style="background-color: #ECECEC; height: 200px;">
                    <VueSlickCarousel v-bind="settings2" v-if="obituarios.length" >
                        <div v-for="(Contenido ,index) in obituarios" :key="index" class="fondoSlider">
                            <div justify="center" class="mt-1" align="center">
                                <div class="text-raleway white--text font-weight-bold text-capitalize textname">{{Contenido.nombreCompleto}}</div>
                                <div class="text-raleway font-italic white--text textDescansa" >Descansa en la paz del señor</div>
                            </div>
                            <v-row>
                                <v-col cols="5" class="justify-end" align="center">
                                    <div  class="circuloPequeño  mt-1">
                                        <img class="fotohomenaje" v-if="obituarios.visualizarFoto === '0' && obituarios.foto === ''" :src="Contenido.foto" >
                                        <img class="fotohomenaje" v-else src="../../../static/CintaLuto.jpg" >
                                    </div>
                                </v-col>
                                <v-col cols="7" class="mt-1">
                                    <div class="text-comfortaa mb-1 description" > <span class="titulos">Fecha fallecimiento: </span>   {{Contenido.fecha_fallecimiento}}</div>
                                    <div class="text-comfortaa mb-1 description" > <span class="titulos">Nombre sala:         </span>   {{Contenido.nombre_sala}}</div>
                                    <div class="text-comfortaa mb-1 description" > <span class="titulos">Fecha Salida sala:   </span>   {{Contenido.fecha_salida_sala}}</div>
                                    <div class="text-comfortaa description" >      <span class="titulos">Hora Salida Sala:    </span>   {{Contenido.hora_salida_sala}}</div>
                                    <div class="text-comfortaa mb-1 description" > <span class="titulos">Hora exequias:       </span>   {{Contenido.hora_exequias}}</div>
                                    <div class="text-comfortaa mb-1 description" > <span class="titulos">Fecha exequias:      </span>   {{Contenido.fecha_exequias}}</div>
                                    <div class="text-comfortaa mb-1 description" > <span class="titulos">Lugar exequias:      </span>   {{Contenido.lugar_exequias}}</div>
                                    <div class="text-comfortaa mb-1 description" > <span class="titulos">Destino final:       </span>   {{Contenido.destino_final_cementerio}}</div>
                                </v-col>
                            </v-row>
                        </div>
                    </VueSlickCarousel>
                </v-col>
            </v-row>
        </div>
        <!-- Celular obituarios -->
        <div class="cel" v-if="obituarios.length">
            <v-row justify="center" align="center">
                <v-col cols="10" style="background-color: #ECECEC;" class="rounded-lg">
                    <div  align="center"  class="text-raleway-verde">
                        <h2>Un homenaje al amor</h2>
                    </div>
                    <p align="center" style="color: #489791;"  class="text-comfortaa text-center justify-center">
                        “Dios de misericordia y amor, ponemos en tus manos amorosas a nuestra ser querido que has llamado de esta vida a tu santa presencia y permite que la luz de tu amor
                         ilumine nuestro camino y fortalezca nuestro corazón”
                    </p>
                </v-col>
            </v-row>
            <v-row class="ml-1">
                <v-col cols="12" class="rounded-lg mb-10">
                    <VueSlickCarousel v-bind="settings3" v-if="obituarios.length" >
                        <div v-for="(Contenido ,index) in obituarios" :key="index" class="fondoSlider">
                            <div justify="center" class="mt-1 mb-5" align="center">
                                <div class="text-raleway white--text font-weight-bold text-capitalize textname">{{Contenido.nombreCompleto}}</div>
                                <div class="text-raleway font-italic white--text textDescansa" >Descansa en la paz del señor</div>
                            </div>
                            <div class="justify-end" align="center">
                                <div  class="circuloPequeño  mt-1">
                                    <img class="fotohomenaje" v-if="Contenido.visualizarFoto === 0" :src="Contenido.foto" >
                                    <img class="fotohomenaje" v-else src="../../../static/CintaLuto.jpg" >
                                </div>
                            </div>
                            <div  justify="center" align="center" class="mt-1">
                                <div class="text-comfortaa mb-1 description" > <span class="titulos">Fecha fallecimiento:   </span> {{Contenido.fecha_fallecimiento}}</div>
                                <div class="text-comfortaa mb-1 description" > <span class="titulos">Nombre sala:           </span> {{Contenido.nombre_sala}}</div>
                                <div class="text-comfortaa mb-1 description" > <span class="titulos">Fecha Salida sala:     </span> {{Contenido.fecha_salida_sala}}</div>
                                <div class="text-comfortaa description mb-2" > <span class="titulos">Hora Salida Sala:      </span> {{Contenido.hora_salida_sala}}</div>
                                <div class="text-comfortaa mb-1 description" > <span class="titulos">Hora exequias:         </span> {{Contenido.hora_exequias}}</div>
                                <div class="text-comfortaa mb-1 description" > <span class="titulos">Fecha exequias:        </span> {{Contenido.fecha_exequias}}</div>
                                <div class="text-comfortaa mb-1 description" > <span class="titulos">Lugar exequias:        </span> {{Contenido.lugar_exequias}}</div>
                                <div class="text-comfortaa mb-1 description" > <span class="titulos">Destino final:         </span> {{Contenido.destino_final_cementerio}}</div>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Post from '../../post/Obituarios'

export default {
     components: { VueSlickCarousel },
    props: ['city'],  
    data(){
        return{
            obituarios:[],
            loading: false,
            settings: {
                "centerMode": true,
                "centerPadding": "5px",
                "autoplay": true,
                "focusOnSelect": true,
                "autoplaySpeed": 9555,
                "infinite": true,
                "slidesToShow": 2,
                "vertical": true,
                "verticalSwiping": true,
                "swipeToSlide": true
            },
            settings2  :{
                "centerMode": true,
                "centerPadding": "2px",
                "autoplay": true,
                "focusOnSelect": true,
                "infinite": true,
                "autoplaySpeed": 9555,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "responsive": [
                    {
                    "breakpoint": 769,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 900,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    }
                ]
            },
            settings3  :{
                "centerMode": true,
                "centerPadding": "5px",
                "autoplay": true,
                "focusOnSelect": true,
                "infinite": true,
                "autoplaySpeed": 9555,
                "slidesToShow": 1,
                "slidesToScroll": 1,
            }
        }
    },
    mounted(){
        this.selectedCity()
    },
    methods:{
        async selectedCity(){
            this.loading = true;
            const response = await Post.getObituarios(this.city); 
            response.results.forEach((element) => {
                this.obituarios.push({
                    nombreCompleto: element.nombreCompleto,
                    fecha_fallecimiento: element.fechaFallecimiento,
                    fecha_salida_sala: element.FechaSalidaSala,
                    hora_salida_sala:element.HoraSalidaSala,
                    nombre_sala: element.NombreSala,
                    hora_exequias: element.HoraExequias,
                    fecha_exequias: element.fechaExequias,
                    lugar_exequias: element.LugarExequias,
                    foto: element.foto,
                    destino_final_cementerio: element.DestinoFinal,
                    visualizarFoto: element.visualizarFoto,
                    ciudad: this.city
                })  
            }); 
            console.log(this.obituarios)
            if(this.obituarios.length !== 0 ) {
                this.loading = false;
            }else{
                this.loading = false;
                
            }
        },
         
    },
    }

</script>