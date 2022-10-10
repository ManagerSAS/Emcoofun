<template>
    <div >
        <Header/>
		<Registration/>
        <Footer style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Registration from '~/components/RegistroDefuncion/registrationData.vue';
import Footer from '~/components/Footer2.vue'
import Header from '~/components/Header.vue';
export default {
    components:{
    Registration,
    Footer,
    Header
}
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.acortag-volver{
    text-decoration: none;
}
</style>