<template>
    <div class="flotante" justify="center" align="center">
        <v-tooltip left color="success" v-model="show">
            <template v-slot:activator="{ on, attrs }">
                <a
                    class="whatsapp"
                    v-bind="attrs"
                    v-on="on"
                    fab
                    href="https://api.whatsapp.com/send?phone=573155804703&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20necesito%20asesoria%20online%20de%20Emcoofun%20Los%20Olivos%20por%20favor%20%F0%9F%99%8F%F0%9F%98%80"
                    target="_blank"
                    >
                </a>
            </template>
            <span>Chat Online</span>
        </v-tooltip>
        <a
            class="facebook ma-2"
            fab
            href="https://www.facebook.com/LosOlivosEmcoofun"
            target="_blank"
            >
        </a>
        <a
            class="instagram mt-2"
            width="50"
            height="50"
            fab
            href="https://www.instagram.com/losolivosemcoofun/"
            target="_blank"
            >
        </a>
    </div>	
</template>
<script>
    export default {
        data() {
            return{
                show:true
            }
        }
    }
</script>
<style lang="scss">
// .whatsapp{
// 	background-image: url('~/static/iconos/iconWhatsapp.png');
// 	background-repeat:no-repeat;
// 	height:100%;
// 	width:100%;
// }

.whatsapp{
    background-image: url('~/static/iconos/iconWhatsapp.png');
    background-repeat:no-repeat;
    border-radius: 50%;
    background-position: center;
    position: relative;
    display: block;
    margin: auto;
    height: 55px;
    width: 55px;
    max-width: 50px;
    max-height: 50px;
    min-width: 40px;
    min-height: 40px;
    @media only screen and (max-width: 575px) and (max-width: 767px){
        width: 25px;
        height: 25px;
    }
}
.instagram{
	background-image: url('~/static/iconos/iconInsta.png');
    background-repeat:no-repeat;
    border-radius: 50%;
    background-position: center;
    position: relative;
    display: block;
    margin: auto;
    height: 55px;
    width: 55px;
    max-width: 50px;
    max-height: 50px;
    min-width: 40px;
    min-height: 40px;
    @media only screen and (max-width: 575px) and (max-width: 767px){
        width: 25px;
        height: 25px;
    }
}
.facebook{
	background-image: url('~/static/iconos/iconFace.png');
    background-repeat:no-repeat;
    border-radius: 50%;
    background-position: center;
    position: relative;
    display: block;
    margin: auto;
    height: 55px;
    width: 55px;
    max-width: 50px;
    max-height: 50px;
    min-width: 40px;
    min-height: 40px;
    @media only screen and (max-width: 575px) and (max-width: 767px){
        width: 25px;
        height: 25px;
    }
}
.flotante{
    max-width: 80px;
    position: fixed;
    z-index: 10; 
    right: 0; 
}
</style>