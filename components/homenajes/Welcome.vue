<template>
    <div class="BannerHomenajes">
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" class="mt-15" cols="12" sm="12" md="12" lg="11">
                <v-btn class="btnPisition" style="background: linear-gradient(to right, rgba(185, 70, 106), rgba(120, 15, 46)); color: #FCF0A5;">
                    Velación virtual
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
        .BannerHomenajes{
            background-image: url('../../static/banners/bannerHomenajesPc.jpg');
            height: 600px;
            width: 100%;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .btnPisition{
            position: flex;
            top: 13em;
        }
        .BannerHomenajes{
            background-image: url('../../static/banners/bannerHomenajesLaptop.jpg');
            height: 320px;
            width: 100%;
        }
    }
    @media only screen and (min-width: 413px) and (max-width: 765px) {
        .btnPisition{
            position: flex;
            top: 26em;
        }
        .BannerHomenajes{
            background-image: url('../../static/banners/bannerHomenajesCel.jpg');
            height: 500px;
            width: 100%;
        }
    }


</style>
