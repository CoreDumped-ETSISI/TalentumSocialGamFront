<template>
    <div>
        <div class="row" v-if="watchingOffers===true">
            <Offer 
                         :title="title" 
                         :company="company" 
                         :salary="salary" 
                         :image="image" 
                         :locationMap="locationMap" 
                         :description="description">
            </Offer>
            <div style="margin: 20px 0;">
                <el-button-group class="full-width">
                    <el-button class="half-width font-medium" @click="getQuestions" type="success" plain>
                        <i class=" el-icon-message"></i> Solicitar entrevista
                    </el-button>
                    <el-button class="half-width font-medium" type="info" plain>
                        <i class="el-icon-arrow-right" @click="loadOffer"></i> Siguiente
                    </el-button>

                </el-button-group>
            </div>
        </div>

        <div class="row" v-else>
            <Question></Question>
        </div>
    </div>
</template>

<script>
import Offer from './Offer'
import Question from './Question'

export default{
    name: "Offers",
    components: {
        Offer,
        Question
    },
    data() {
        return {
            watchingOffers: true,
            title: "Buscar novia a Pi",
            company: "Tinder",
            salary: "Infinito",
            image: "https://scontent-mad1-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/22277485_772392119600138_2211528147323584512_n.jpg",
            locationMap: "Universo",
            description: "Nada, olvidalo, es imposible... De ahi el salario infinito. \nPero gracias de todas formas",
            id: "1"
        };
    },
    methods: {
        loadOffer() {

            console.log("Hola")
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/offer/random",
                "method": "GET",
                "headers": {
                    "authorization": "Beacon "+sessionStorage.getItem("token")
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });

        },
        getQuestions() {
            this.watchingOffers = false;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/getQuestions",
                "method": "GET",
                "headers": {},
                "data": {
                    "offerId": this.id
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
    },
    mounted: function () {
        this.loadOffer();
    }
}
</script>
