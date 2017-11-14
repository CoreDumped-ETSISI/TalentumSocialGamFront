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
                    <el-button class="half-width font-medium" type="info" @click="loadOffer" plain>
                        <i class="el-icon-arrow-right" ></i> Siguiente empresa
                    </el-button>

                </el-button-group>
            </div>
        </div>

        <div class="row" v-else>
            <Question v-on:send="changeView" :questions="questions"></Question>
        </div>
        <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
        <!--From here to the end is the modal-->
        <el-dialog
                   title="Medalla conseguida!"
                   :visible.sync="dialogVisible"
                   width="50%"
                   class="confetti font-large"
                   center>

            <h2>Has conseguido la medalla del <b>novato</b></h2>
            <img src='http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/reward-icon.png'/>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </el-dialog>
        <div id="floating-button" @click="goHome">
            <i class="el-icon-menu floating-menu"></i>
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
            id: "1",
            questions: [],
            dialogVisible: false
        };
    },
    methods: {
        loadOffer() {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/offer/random",
                "method": "GET",
                "headers": {
                    "authorization": "Beacon "+sessionStorage.getItem("token")
                }
            }

            var self = this;
            $.ajax(settings).done(function (r) {
                self.setData(r.title, r.companyName, r.payout, r.image, r.locationMap, r.description, r.id, r.questions);
                return r
            }).fail(function (error){
                console.log(error);
            });
        },
        setData(title, company, salary, image, locationMap, description, id, questions){
            this.title = title;
            this.company = company;
            this.salary = salary;
            this.image = image;
            this.locationMap = locationMap;
            this.description = description;
            this.id = id;
            this.questions = questions;
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
        },
        changeView(state){
            this.watchingOffers = true;
        },
        goHome(){
            this.$router.push('/perfil');
        }
    },
    mounted: function () {
        this.loadOffer();
    }
}
</script>
<style>
.confetti{
    background-image: url("https://media.giphy.com/media/138i1MiNVi9P0Y/200.gif")
}

.el-dialog__title{
    font-size: 24px;   
}
</style>
