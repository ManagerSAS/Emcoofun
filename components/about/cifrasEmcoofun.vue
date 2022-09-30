<template>
    <div > 
        <v-row justify="center" align="center" class="mt-15 ">
            <v-col  cols="12" sm="6" md="7" lg="7">   
                <div class="ml-lg-5 mr-md-8 ml-5 mr-5">
                    <v-row>
                        <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                            <h2 style="color:#6E1228; font-size: 36px; font-weight: 800;" class="text-raleway" >
                                Nuestras Cifras
                            </h2>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col cols="8">
                            <div class="mb-6">
                                <p class="text-comfortaa mb-6" style="font-size: 20px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem, voluptatum iusto cumque aperiam reprehenderit, ab consequatur officia consequuntur ut debitis eum veniam maiores pariatur aut facilis suscipit quasi. Ut.
                                    </p>
                                <p class="text-comfortaa" style="font-size: 20px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ab velit accusantium animi quod eum consequuntur perferendis! Quos eveniet laudantium sunt hic iusto ipsa ipsam porro nulla veritatis, officia quo..</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col  cols="12" sm="6" md="5" lg="5">   
                <img class="d-none d-xl-block d-lg-block" src="../../static/cifras/nuestasCifras.png"  width="500">
                <img class="d-none d-md-block d-lg-none" src="../../static/cifras/nuestasCifras.png"  width="350">
                <img class="d-block d-sm-none" src="../../static/cifras/nuestasCifras.png"  width="250">
            </v-col>
        </v-row>  
    </div>
</template>

<style lang="scss">
.img .cifrashover{
    visibility: hidden;
    width: 120px;
    color: #003B4C;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    font-size: 36px; 
    font-weight: 800;
}
.img:hover .cifrashover {
    visibility: visible;
}
</style>

<script>
export default {
    data(){
        return{
            principies:[
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659792196/neiva/cifras/gryyyxmfrotnntifyhek.png',
                    title: 'Colaboradores  ',
                    cifras:'1.965'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659792196/neiva/cifras/mzpe1s2cznlxbgtmypnj.png',
                    title: 'Sedes propias ',
                    cifras:'104'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659792196/neiva/cifras/v0cm0m74xcqupslxemem.png',
                    title: 'Carrozas funerarias  ',
                    cifras:'192'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659792196/neiva/cifras/rbpdicuqv3jrxqrhiely.png',
                    title: 'Parque Cementerio',
                    cifras:'10 '
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659792196/neiva/cifras/zq20thbp7xmgchty7tcf.png',
                    title: 'Salas De Homenajes Propias',
                    cifras:'304'
                },
                {
                    icon: 'https://res.cloudinary.com/dhl17zanz/image/upload/v1659792196/neiva/cifras/ukjktry4fai707pd06h5.png',
                    title: 'Unidades crematorias',
                    cifras:'15'
                }
            ]
        }
    }
}
</script>