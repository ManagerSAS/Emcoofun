<template>
    <div class="BannerPagos">
        <v-row >
            <v-col justify="center" align="center" class="mt-15" cols="12" sm="12" md="8" lg="8">
                <v-btn class="btnPisition" style="background: linear-gradient(to right, #4B9098, #14625D); color: #FCF0A5;">
                    Red Olivos
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<style lang="scss" >
    @media only screen and (min-width: 1600px) {
        .btnPisition{
            position: relative;
            top: 30em;
        }
        .BannerPagos{
            background-image: url('../../static/banners/pagospc.jpg');
            height: 500px;
            width: 100%;
        }
    }
    @media only screen and (min-width: 1200px) and (max-width: 1536px) {
        .btnPisition{
            position: flex;
            top: 19em;
        }
        .BannerPagos{
            background-image: url('../../static/banners/bannerpagospc2.png');
            height: 480px;
            width: 100%;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .btnPisition{
            position: flex;
            top: 13em;
        }
        .BannerPagos{
            background-image: url('../../static/banners/pagosLaptop.jpg');
            height: 320px;
            width: 100%;
        }
    }
    @media only screen and (min-width: 413px) and (max-width: 765px) {
        .btnPisition{
            position: flex;
            top: 26em;
        }
        .BannerPagos{
            background-image: url('../../static/banners/pagoCel.jpg');
            height: 500px;
            width: 100%;
        }
    }
</style>