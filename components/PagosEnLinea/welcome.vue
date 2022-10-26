<template>
    <v-container fluid>
        <div  class="bannerPrincipal" max-width="100%">
            <img width="100%" class="d-none d-lg-block d-xl-block" src="../../static/banners/pagospc.jpg" alt="" srcset="">
            <img width="100%" class="d-none d-md-block d-lg-none" src="../../static/banners/pagosLaptop.jpg" alt="" srcset="">
            <img width="100%" class="d-block d-sm-none" src="../../static/banners/pagoCel.jpg" alt="" srcset="">
            <v-row >
                <v-col justify="center" align="center" class="mt-15" cols="12" sm="12" md="8" lg="8">
                    <v-btn target="_blank" href="https://losolivos.co/" class="btnPisition" style="background: linear-gradient(to right, #4B9098, #14625D); color: #FCF0A5;">
                        Red Olivos
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<style lang="scss" >
    @media only screen and (min-width: 1600px) {
        .btnPisition{
            position: relative;
            top: -10em;
        }
    }
    @media only screen and (min-width: 1200px) and (max-width: 1599px) {
        .btnPisition{
            position: flex;
            top: -8em;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .btnPisition{
            position: flex;
            top: -8em;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 952px) {
        .btnPisition{
            position: flex;
            top: 55em;
        }
        .bannerPrincipal{
            background-image: url('../../static/banners/bannerpagostablet.png');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .btnPisition{
            position: flex;
            top: 38em;
        }
        .bannerPrincipal{
            background-image: url('../../static/banners/bannerpagoscel2.png');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 413px) and (max-width: 575px) {
        .btnPisition{
            position: flex;
            top: -8em;
        }
    }
</style>