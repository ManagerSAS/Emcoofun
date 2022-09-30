<template>
    <div>
        <Header />
        <Sinergia />
        <Footer2 style="background: linear-gradient(270deg, #8fddaa 0%, #59ab9b 100%);"/>
    </div>
</template>
<script>
import Header from '~/components/Header';
import Sinergia from '~/components/Sinergia/index';
import Footer2 from '~/components/Footer2';

export default {
    components:{
        Header,
        Sinergia,
        Footer2,
    }
    }
</script>