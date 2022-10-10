<template>
    <v-container fluid style="background: linear-gradient(to right, #B7456A, #650F2E)">
        <v-row>
            <v-col justify="center" align="center">
                <div>
                    <img class="d-none d-xl-block d-lg-block" src="../../static/apoyo.png" width="90%">
                    <img class="d-none d-md-block d-lg-none" src="../../static/apoyo.png" width="90%">
                    <img class="d-block d-sm-none" src="../../static/apoyoCel-04.png" width="90%">
                </div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" class="position" cols="12" sm="12" lg="5" md="6"  xl="5">
                    <v-btn
                    class="text-raleway" style=" font-size: 20px; font-weight: 800; color:#410411;"
                    to="/sedes"
                    color="#FBEFA3">
                    Nuestros Cementerios
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
@media only screen and(min-width: 1440px) { 
	.position{
        position: relative;
        bottom: 5em;
        right: 5em;
    }
}
@media only screen and(max-width: 1024px) { 
	.position{
        position: absolute;
        top:55%;
    }
}
@media only screen and(max-width: 1280px) { 
	.position{
        position: absolute;
        top:53%;
    }
}
@media only screen and(max-width: 414px) { 
	.position{
        width: 400px;
        position: relative;
        top:-1em;
    }
}
</style>