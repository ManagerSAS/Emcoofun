<template>
	<div >
		<Header/>
		<Formulario style="background-image: url(https://res.cloudinary.com/dazyyib7u/image/upload/v1664031736/xjaotapgqpbdqnypm6en.png); background-position: center;
        background-size: cover ;
        background-repeat: no-repeat;" class=""/>
		<Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Formulario from '../components/forms/AfiliacionOnline/AfiliacionOnline.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
export default {
    components:{
        Formulario,
        Footer,
        Header
    }
}
</script>
