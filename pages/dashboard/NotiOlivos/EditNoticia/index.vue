<template>
    <div>
        <Header style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
       <EditNoticia/>
       <Footer style="background: linear-gradient(to top, #347D7D, #1D424A);"/>
    </div>
    
</template>
<script>
   import EditNoticia from '~/components/OlivosObituarios/NotiOlivos/EditNoticia/EditNoticia';
   import Header from '~/components/OlivosObituarios/layouts/Header.vue';
    import Footer from '~/components/OlivosObituarios/layouts/Footer.vue';
   export default {
       components:{
            EditNoticia,
            Header,
            Footer
       },
   }
</script>