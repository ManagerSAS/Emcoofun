<template>
    <div>
        <Header/>
        <v-row justify="center" align="center" class="mt-15 mb-15">
            <v-col  cols="12" sm="12" md="10" lg="8" xl="8">
                <Eventos/>
            </v-col>
        </v-row>
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>

</template>

<script>
import Header from "~/components/Header.vue";
import Eventos from "~/components/Eventos/Eventos.vue";
import Footer2 from "~/components/Footer2.vue";
export default ({
    components: {
        Header,
        Eventos,
        Footer2
	}, 
})
</script>
