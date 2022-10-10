<template>
    <div>
        <Header/>
        <Eventos/>
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
