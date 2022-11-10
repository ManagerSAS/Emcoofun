<template>
        <div class="BannerHomenajes p  b-0">
            <img width="100%" class="d-none d-lg-block d-xl-block" src="../../static/banners/homenajes/bannerHomenajesPc.jpg" alt="" srcset="">
            <img width="100%" class="d-none d-md-block d-lg-none" src="../../static/banners/homenajes/bannerHomenajesLaptop.jpg" alt="" srcset="">
            <img width="100%" class="d-block d-sm-none" src="../../static/banners/homenajes/bannerHomenajesCel.jpg" alt="" srcset="">
            <v-btn class="btnPisition" href="/VelacionVirtual" style="background: linear-gradient(to right, rgba(185, 70, 106), rgba(120, 15, 46)); color: #FCF0A5;">
                Velación virtual
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
        .BannerHomenajes{
            background-image: url('../../static/banners/homenajes/bannerHomenajesCel.jpg');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .btnPisition{
            top: -2em;
            left: 35%;
        }
        .BannerHomenajes{
            background-image: url('../../static/banners/homenajes/bannerHomenajesCel.jpg');
            height: 60em;
            width: 100%;
        }
    }
    @media only screen and (min-width: 413px) and (max-width: 575px) {
        .btnPisition{
            top: -4em;
            left: 30%;
        }
    }
    .btnPisition{
        top: -4em;
        left: 30%;
    }
</style>
