<template>
    <el-row>
        <el-card class="box-card">
            <div class="grid-content">
                <!-- Contenido de la pregunta-->
                <span><h2>{{title}}</h2></span>

                <img v-bind:src="image" class="image offer-img">
                <!-- Respuestas binarias -->
                <div style="margin: 20px 0" v-if="binary">
                    <el-button-group>
                        <el-button type="danger" plain @click="clicked(binaryOption1)">{{binaryOption1}}</el-button>
                        <el-button type="primary" plain @click="clicked(binaryOption2)">{{binaryOption2}}</el-button>
                    </el-button-group>
                </div>
                <!--Respuesta gradual -->
                <div style="margin: 20px 0" v-else>
                    <el-button-group class="full-width">
                        <el-button class="quarter" type="danger" @click="clicked('Ninguno')" plain>Ninguno</el-button>
                        <el-button  class="quarter" type="default" plain @click="clicked('Bajo')">Bajo</el-button>
                        <el-button  class="quarter" type="default" plain @click="clicked('Medio')">Medio</el-button>
                        <el-button  class="quarter" type="success" plain @click="clicked('Alto')">Alto</el-button>
                    </el-button-group>
                </div>
                <!--Fin de la pregunta -->
            </div>
        </el-card>
        <div style="margin: 20px 0;">
            <el-button-group class="full-width el-zoom-in-top">
                <el-button class="half-width font-medium" type="info" plain>Contestar más tarde</el-button>
                <el-button class="half-width font-medium" type="success" @click="loadQuestion" plain>Aceptar</el-button>
            </el-button-group>
        </div>
    </el-row>
</template>

<script>

export default{
    name: 'Question',
    data() {
        return{
            binary: false,
            questionsF:'',
            actualQuestion: -1,
            title: "",
            lenghtQuestion: 0,
            image:"",
            binaryOption1:'',
            binaryOption2:'',
            actualValue:''
        }
    },
    props: ['questions', 'watchingOffers'],
    methods: {
        loadQuestion() {

            this.actualQuestion++;
            if(this.actualQuestion > this.lenghtQuestion-1){
                //Validate if he got hired
                this.$emit('send', 'true')}
            else{
                //Previous answer
                //Send data
                if(this.actualQuestion !=0)
                    this.sendAnswer();

                //Actual answer
                this.title = this.questionsF[this.actualQuestion].question.text;
                this.image = this.questionsF[this.actualQuestion].question.image;

                this.options = JSON.parse(JSON.stringify(this.questionsF[this.actualQuestion].question.options))
                //console.log(this.options)
                if(this.options["option4"] != undefined)
                    this.binary = false;
                else {
                    this.binary = true;
                    this.binaryOption1 = this.options["option1"];
                    this.binaryOption2 = this.options["option2"];
                }
                if(this.title == null) this.title = "Undefined"+this.actualQuestion
            }
        },
        sendAnswer(){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/answer/create",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "authorization": "Beacon "+sessionStorage.getItem("token")
                },
                "data": {
                    "answer": this.actualValue,
                    "questionId": this.questionsF[this.actualQuestion].question._id
                }
            }

            console.log(this.actualValue);
            console.log(this.questionsF[this.actualQuestion].question._id)

            $.ajax(settings).done(function (response) {
                console.log(response);
            }).fail(function(error){
                console.log(error)
            });

        },
        clicked(value){
            console.log(value)
            this.actualValue = value;
        }
    },
    mounted: function () {
        this.questionsF = JSON.parse(JSON.stringify(this.questions))
        this.lenghtQuestion=this.questionsF.length

        this.loadQuestion();

    }
}

</script>

<style scope>
.el-row{
    width: 100%;
}
.el-button{
    width: 50%;
    font-size: 20pt;
    border-width: medium;
}
.half-width{
    width: 50%;
}
.quarter{
    width: 25%;
}
.eight{
    width: 12.5%;
}
.el-button-group{
    width: 100%;
}
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    padding: 10px;
}

.full-width{
    width: 100%;
}

.font-medium{
    font-size: 14pt;
}
</style>
