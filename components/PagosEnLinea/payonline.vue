<template>
    <v-container  fluid>
        <v-row justify="center" align="center" >
			<v-col cols="12" sm="12" md="12" lg="10" xl="10">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" sm="10" md="12" lg="12">
                        <h1 class="mb-6 ml-1 mr-1 text-raleway" style="color:#003B4C;line-height: normal;  font-size: 36px; font-weight: 800;">
                            Nuestros <br> medios de pago
                        </h1>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" class="mt-md-10">
                    <v-col cols="12" sm="5" md="5" lg="4" justify="center" align="center">
                        <v-row justify="center" align="center">
                            <v-col  cols="12" sm="5" md="5" lg="6" justify="center" align="center">
                                <img src="../../static/iconos/FacturaElectronica-02.png" width="150px">
                                <div style="color:#E9522C; font-size: 20px; font-weight: 800;">
                                    <p class="text-raleway">Pagos con tarjeta de credíto</p>
                                </div>
                                <div>
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
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col justify="center" align="center" cols="12" sm="5" md="5" lg="4">
                        <v-row justify="center" align="center"  >
                            <v-col  cols="12" sm="5" md="5" lg="6" justify="center" align="center">
                                <img src="../../static/iconos/PagosEnLinea-02.png" width="150px">
                                <div style="color:#E9522C; font-size: 20px; font-weight: 800;">
                                    <p class="text-raleway mt-1">Pagos PSE</p>
                                </div>
                                <div>
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
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
		</v-row>
    </v-container>
</template>
