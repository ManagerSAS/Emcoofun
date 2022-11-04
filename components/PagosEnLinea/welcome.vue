<template>
    <div  class="bannerPrincipal" max-width="100%">
        <img width="100%" class="d-none d-lg-block d-xl-block" src="../../static/banners/pagos/pagospc.jpg" alt="" srcset="">
        <img width="100%" class="d-none d-md-block d-lg-none" src="../../static/banners/pagos/pagosLaptop.jpg" alt="" srcset="">
        <img width="100%" class="d-block d-sm-none" src="../../static/banners/pagos/pagoCel.jpg" alt="" srcset="">
        <v-btn target="_blank" href="https://losolivos.co/" class="btnPisition" style="background: linear-gradient(to right, #4B9098, #14625D); color: #FCF0A5;">
            Red Olivos
        </v-btn>
    </div>
</template>
<style lang="scss" >
    @media only screen and (min-width: 1600px) {
        .btnPisition{
            position: relative;
            top: -5em;
            left: 28%;
            // float: center;
        }
    }
    @media only screen and (min-width: 1200px) and (max-width: 1599px) {
        .btnPisition{
            top: -5em;
            left: 28%;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .btnPisition{
            top: -4em;
            left: 28%;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 952px) {
        .btnPisition{
            top: 60em;
            left: 35%;
        }
        .bannerPrincipal{
            background-image: url('../../static/banners/pagos/bannerpagostablet.png');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .btnPisition{
            top: -2em;
            left: 35%;
        }
        .bannerPrincipal{
            background-image: url('../../static/banners/pagos/bannerpagoscel2.png');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 413px) and (max-width: 575px) {
        .btnPisition{
            top: -4em;
            left: 35%;
        }
    }
    .btnPisition{
        top: -4em;
        left: 35%;
    }
</style>