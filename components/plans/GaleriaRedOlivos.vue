<template>
    <div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <h1 class="mb-6 text-raleway" style="color:#003B4C; font-size: 36px; font-weight: 800;">
                    RED OLIVOS
                </h1>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="10">
                <v-sheet justify="center" align="center" class=" mb-8">
                    <VueSlickCarousel style="background-color: rgb(227,235,235,0.5)" v-bind="settings">
                        <div v-for="({src,nameSede} ,index) in Eventos" :key="index">
                            <v-img
                                class="rounded-xl img-principal"  max-width="80%" 
                                :lazy-src="src"
                                :src="src"
                            ></v-img><br>
                            <p class="text-comfortaa" style="color:#003B4C; font-size: 20px;">{{nameSede}}</p>
                        </div>
                    </VueSlickCarousel>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default ({
    components: { VueSlickCarousel },
    data() {
      return{
        Eventos:[
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441481/04.%20Galeria/hrprxzvifnw8clcxpp1e.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441481/04.%20Galeria/a0lcirgq9wer3roy0krz.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441481/04.%20Galeria/tztomgsqiuy2viq2tex1.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/bxkgximwcnzazpuwwnmj.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441481/04.%20Galeria/wwwegxwyhgwvxi0hdges.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/knflbyi7dmgefqi5xm7z.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/l8kkcqcoxernp56belcd.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/vpxgy0k233ozm3fb8uha.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/akw74wsxszrl46eai4ik.png',nameSede:'Evento'},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/us8qzhl3bfsek1ubygeg.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/jbsdzhseo6h2m4czx5oz.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/zo0pknspuvztgraudti5.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/ljqoh3kmu2mywrpbz1m5.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/q6x2mcgocstnxeaqzhgp.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/nltke22hfvfxot4yq9yp.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/lmm0uullixepudtwsqyy.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/d4p1vgmog8mgr78k48ck.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/ijwtspj5if6vbkdxzmfd.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/mq9p7qng7crtacjvndgr.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/enxmuokfbudyqd3ov6rb.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441480/04.%20Galeria/cc3ii2sx1mve6l3uoyap.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/np6lbed8j6jxxsykpsa7.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/ryyn0egfm1ejpudybvzp.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/g9ofybk1ryygirqyx3wq.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/i84zox8c5bmcdblc0oug.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/bzednbmpmrou8jmbguda.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/g5mqyfc1wawiphvqzgc8.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441479/04.%20Galeria/rro7tsqmcs110adzzmih.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/eogbdzovexhs7o2skwdd.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/oszdwtwxsobgspli7uvk.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/afkjcj7icdtaokjsrvfw.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/dndf2qljb88sedolpiri.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/wdmox4wlvkl7zmns3ifz.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/xtk3dlfj47mg7sxghpbp.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/se1tc8od4reu9e9xxl6q.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/w4qxfweurhy4ftjuqxay.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/vhebschuby41ypyghlhs.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/yeu2ldphrlhyezmasvzy.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/j8dbyubeosqeudfvaxef.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/meblq8anwfhxkcuubs5e.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/xorgem0cf00sgrrwfheh.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441478/04.%20Galeria/uojjbvxfuoz3f2i4zhl9.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/l8kkcqcoxernp56belcd.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/ihf2rgvnx0nkeyk1epff.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/sezvsaqvynxcsll0eqfx.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/bkph0wwjrtfdmitnfzoi.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/ylenozxcbje6bpn024gs.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/thxyp742velfe8qoliz1.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441477/04.%20Galeria/gxjdc6qcxftjj4mkmfni.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/uaymta1meex7ixqscdql.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/q5jssmlxxke0i8nt8xda.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/asgk7wnmldbk0rqbbeet.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/rsunnns40l4hfvip50dw.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/lmkagusuit9v7gmnmgqp.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/n4hr3oft72y86qsvpcty.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/qjnl9g9bmfeadc5iqntw.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/ud0cwxn7dknstcxqw4h9.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/epuh50l8bdeasykbea5x.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/xiwdijgvzukbqsrsq1o4.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/plknubgm5j0fsjarsqt5.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/srrkfysf1dslcfmjlkyy.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/k7lizlvndqlaupnlcoer.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441476/04.%20Galeria/j5lqlidxwnkl8jm15i7y.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/oajwyikvu23yf6dvleu7.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/x72i97odwqyw25edne36.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/vcgsac2ppftttwzqka2o.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/ocoeacxhp8gpuw0kykls.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/jhribiesryx7f2b7dfal.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/ovparv6h7q5vpezlwglu.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441475/04.%20Galeria/tozdisbqfqsuwvahy9re.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/dsessctxfseaa88v9vja.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/bmoudkiapprgxvpt2efn.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/uapcmlgucmtkoyjzxxvr.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/bx54lyqstendvwu4etxw.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/vwsogcbx0s3r9qpjmpcr.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/pw4svrfbdtluk11yxwbw.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/g8ijecqzflq0vlsqbais.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/mprvj0wcstdkbvpxlrww.png',nameSede:''},
            {src:'https://res.cloudinary.com/dazyyib7u/image/upload/v1665441474/04.%20Galeria/wtygiznofc1ufydn6otz.png',nameSede:''},
        ],
        settings  :{
            "autoplay": true,
            "focusOnSelect": true,
            "infinite": true,
            "autoplaySpeed": 3000,
            "slidesToShow": 5,
            "slidesToScroll": 1,
            "responsive": [
                {
                "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                "breakpoint": 414,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                }
                ,
                {
                "breakpoint": 720,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                }
            ]
        },
        }
    }
})
</script>