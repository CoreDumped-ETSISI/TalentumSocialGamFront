<template>
    <div>
        <el-form ref="form" :model="form" label-width="25%">
        <el-card class="centered-w75 text-centered">
        <el-container >
            <el-header height="75px" class="blue-bg rounded-corners font-medium" style="padding-right: 45px;">
                <h1>Nueva oferta</h1>
            </el-header>
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Detalles de la oferta" name="1">
                    <div class="interior">
                    <el-form-item label="Titulo">
                        <el-input v-model="form.title" class="input-w75"></el-input>
                    </el-form-item>
                    <el-form-item label="Descripcion">
                        <el-input v-model="form.description" class="input-w75"></el-input>
                    </el-form-item>
                    <el-form-item label="Imagen">
                        <el-input v-model="form.image" class="input-w75"></el-input>
                    </el-form-item>
                    <el-form-item label="Ciudad">
                        <el-input v-model="form.locationMap" class="input-w75"></el-input>
                    </el-form-item>
                    <el-select v-model="industryValue" placeholder="Sector">
                        <el-option
                            v-for="item in industries"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-form-item label="Salario">
                        <el-input v-model="form.industry" class="input-w75"></el-input>
                    </el-form-item>
                    <el-form-item label="Empresa">
                        <el-input v-model="form.company" class="input-w75"></el-input>
                    </el-form-item>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Pregunta #1" name="2">
                <div>        
                    <h1>Introduce la primera pregunta</h1>
                    <el-form-item label="Titulo pregunta">
                        <el-input v-model="form.questionTitle1" class="input-w75"></el-input>
                    </el-form-item>

                    <el-form-item label="Imagen (url)">
                        <el-input v-model="form.questionImage1" class="input-w75"></el-input>
                    </el-form-item>
                    

                    <el-form-item label="Respuesta 1">
                        <el-input v-model="form.answer11" class="input-w75"></el-input>
                    </el-form-item>
                    <el-form-item label="Respuesta 2">
                        <el-input v-model="form.answer12" class="input-w75"></el-input>
                    </el-form-item>
                    <el-form-item label="Respuesta correcta">
                        <el-input v-model="form.questionCorrectAnswer1" class="input-w75"></el-input>
                    </el-form-item></div>
              </el-collapse-item>
              <el-collapse-item title="Pregunta #2" name="3">
                <div><h1>Introduce la segunda pregunta</h1>
        <el-form-item label="Titulo pregunta">
            <el-input v-model="form.questionTitle2" class="input-w75"></el-input>
        </el-form-item>

        <el-form-item label="Imagen">
            <el-input v-model="form.questionImage2" class="input-w75"></el-input>
        </el-form-item>
        
        <el-form-item label="Respuesta 1">
            <el-input v-model="form.answer21" class="input-w75"></el-input>
        </el-form-item>
        <el-form-item label="Respuesta 2">
            <el-input v-model="form.answer22" class="input-w75"></el-input>
        </el-form-item>
        <el-form-item label="Respuesta correcta">
            <el-input v-model="form.questionCorrectAnswer2" class="input-w75"></el-input>
        </el-form-item></div>
              </el-collapse-item>
              <el-collapse-item title="Pregunta #3" name="4">
                <div><h1>Introduce la tercera pregunta</h1>
        <el-form-item label="Titulo pregunta">
            <el-input v-model="form.questionTitle3" class="input-w75"></el-input>
        </el-form-item>

        <el-form-item label="Imagen">
            <el-input v-model="form.questionImage3" class="input-w75"></el-input>
        </el-form-item>
        <el-form-item label="Respuesta 1">
            <el-input v-model="form.answer31" class="input-w75"></el-input>
        </el-form-item>
        <el-form-item label="Respuesta 2">
            <el-input v-model="form.answer32" class="input-w75"></el-input>
        </el-form-item>
        <el-form-item label="Respuesta correcta">
            <el-input v-model="form.questionCorrectAnswer3" class="input-w75"></el-input>
        </el-form-item></div>
              </el-collapse-item>
            </el-collapse>
            </el-container>
        </el-card>        

        <el-button style="margin-top:15px;" type="primary" @click="onSubmit">Enviar</el-button>
    </el-form>
    <div id="floating-button" @click="goHome">
        <i class="el-icon-menu floating-menu"></i>
    </div>
</div>
</template>

<script>
export default{
    name: 'CreateOffer',
    data() {
        return {
            activeName: '1',
            form: {
                title: '',
                company: '',
                salary: '',
                image: '',
                locationMap: '',
                description: '',
                questions: [],
                industry: '',
                //Questions
                questionTitle1: '',
                questionImage1:'',
                questionIndustryValue1: '',
                answer11: '',
                answer12: '',

                questionTitle2: '',
                questionImage2:'',
                questionIndustryValue2: '',
                answer21: '',
                answer22: '',

                questionTitle3: '',
                questionImage3:'',
                questionIndustryValue3: '',
                answer31: '',
                answer32: '',


            },
            industries: [{
                value: 'asistencia_sanitaria',
                label: 'Salud'
            }, {
                value: 'transportista',
                label: 'Transportista'
            }, {
                value: 'recursos_humanos',
                label: 'Recursos humanos'
            }, {
                value: 'construccion',
                label: 'Construccion'
            }, {
                value: 'manufactura',
                label: 'Manufactura'
            },{
                value: 'marketing',
                label: 'Marketing'
            },{
                value: 'educacion',
                label: 'Educacion'
            },{ 
                value: 'periodismo',
                label: 'Periodismo'
            },{
                value: 'artes',
                label: 'Artes'

            }
            ],
            industryValue: '',
            //Final values
            companyId:'',
            questionId1:'',
            questionId2:'',
            questionId3:''
        }
    },
    methods: {
        onSubmit() {
            //Create the company
            console.log(this.form.company);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/company/find?name="+this.form.company,
                "method": "GET",
                "headers": {}
            }
            var self = this;
            $.ajax(settings).done(function (response) {
                console.log(response[0]._id);
                self.companyId = response[0]._id;
                self.createQuestion1();
            });
            //Create the questions
            //Create the offer
            console.log('submit!');
        },
        createQuestion1(){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/question/create",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                "data": {
                    "text": this.questionTitle1,
                    "image": this.questionImage1,
                    "category": this.questionIndustryValue1,
                    "option1": this.answer11,
                    "option2": this.answer12
                }
            }
            var self = this;
            $.ajax(settings).done(function (response) {
                console.log(response._id);
                self.questionId1 = response._id;
                self.createQuestion2();
            }); 
        },
        createQuestion2(){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/question/create",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                "data": {
                    "text": this.questionTitle2,
                    "image": this.questionImage2,
                    "category": this.questionIndustryValue2,
                    "option1": this.answer21,
                    "option2": this.answer22
                }
            }
            var self = this;
            $.ajax(settings).done(function (response) {
                console.log(response._id);
                self.questionId2 = response._id;
                self.createQuestion3();
            }); 
        },
        createQuestion3(){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/question/create",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                "data": {
                    "text": this.questionTitle3,
                    "image": this.questionImage3,
                    "category": this.questionIndustryValue3,
                    "option1": this.answer31,
                    "option2": this.answer32
                }
            }
            var self = this;
            $.ajax(settings).done(function (response) {
                console.log(response._id);
                self.questionId3 = response._id;
                self.createQuestion3();
            }); 
        },
        createOffer(){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/offer/create",
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "processData": false,
                "data": {
                    "title": this.title,
                    "payout": this.salary,
                    "industry":this.industry,
                    "questions": [
                        {"question": this.questionId1,"answer":this.questionCorrectAnswer1},
                        {"question":this.questionId2,"answer":this.questionCorrectAnswer2},
                        {"question":this.questionId3,"answer":this.questionCorrectAnswer3}
                    ]
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        },
        goHome(){
            this.$router.push('/perfil');
        }

    }
}
</script>

<style scope>
.el-collapse-item__header{
    background-color:#BADCFF;
    border-radius: 5px;
    font-size: 14pt;
}
.interior{
    padding: 20px
}

.el-select{
    padding-bottom: 25px;
}
.el-form-item__label{
    font-size: 16pt;
}

.input-w75{
    float: left;
    width: 75%;
}

.el-select-dropdown__item{
    font-size: 16pt;
}

.el-button{
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 25px;
}
</style>
