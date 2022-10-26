<template>
    <div class="flotante" justify="end" align="end">
        <v-tooltip left color="success" v-model="show">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    elevation="24"
                    class="whatsapp"
                    width="50"
                    height="50"
                    v-bind="attrs"
                    v-on="on"
                    fab
                    href="https://api.whatsapp.com/send?phone=573155804703&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20necesito%20asesoria%20online%20de%20Emcoofun%20Los%20Olivos%20por%20favor%20%F0%9F%99%8F%F0%9F%98%80"
                    target="_blank"
                    >
                </v-btn>
            </template>
            <span>Chat Online</span>
        </v-tooltip><br>
        <v-btn
            elevation="24"
            class="facebook mt-2"
            width="50"
            height="50"
            fab
            href="https://www.facebook.com/LosOlivosEmcoofun"
            target="_blank"
            >
        </v-btn><br>
        <v-btn
            elevation="24"
            class="instagram mt-2"
            width="50"
            height="50"
            fab
            href="https://www.instagram.com/losolivosemcoofun/"
            target="_blank"
            >
        </v-btn>
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
.whatsapp{
	background-image: url('~/static/iconos/iconWhatsapp.png');
	background-repeat:no-repeat;
	height:100%;
	width:100%;
}
.instagram{
	background-image: url('~/static/iconos/iconInsta.png');
}
.facebook{
	background-image: url('~/static/iconos/iconFace.png');
}
.flotante{
    width: 220px;
    position: fixed;
    z-index: 100; 
    margin-left: 40%;
}
@media only screen and(min-width: 1600px) { 
	.flotante{
		width: 220px; 
		position: fixed;
		z-index: 100; 
		margin-left:88%;
	}
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) { 
	.flotante{
		width: 220px;
		position: fixed;
		z-index: 100; 
		margin-left:83%;
	}
}
@media only screen and (min-width: 992px) and (max-width: 1199px) { 
	.flotante{
		position: fixed;
		width: 100px;
		z-index: 100; 
		margin-left:88%;
	}
}
@media only screen and (min-width: 768px) and (max-width: 952px) { 
	.flotante{
		position: fixed;
		width: 100px;
		z-index: 100; 
		margin-left:84%;
	}
}
@media only screen and (min-width: 413px) and (max-width: 765px) { 
	.flotante{
		position: fixed;
		z-index: 100; 
        width: 100px;
		margin-left: 75%;
	}
}

</style>