<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-steps :active="active" finish-status="success" simple>
                <el-step title="Paso 1"></el-step>
                <el-step title="Paso 2"></el-step>
                <el-step title="Paso 3"></el-step>
                <el-step title="Paso 4"></el-step>
                <el-step title="Paso 5"></el-step>
            </el-steps>
            <div v-if="active === 0">
                <Step1/>
                <el-button class="step_button" @click="next" type="primary">Siguiente</el-button>
            </div>
            <div v-if="active === 1">
                <Step2 v-on:saveUser="saveUserParent"/>
                <el-button class="step_button" @click="next" type="primary">Siguiente</el-button>
            </div>
            <div v-if="active === 2">
                <Step3/>
                <el-button class="step_button" @click="next" type="primary">Siguiente</el-button>
            </div>
            <div v-if="active === 3">
                <Step4/>
                <el-button type="info">Mas tarde</el-button>
                <el-button class="step_button" @click="next" type="primary">Siguiente</el-button>
            </div>
            <div v-if="active === 4">
                <Step5/>
                <el-button type="info">Mas tarde</el-button>
                <el-button class="step_button" @click="next" type="primary">Siguiente</el-button>
            </div>
            <div v-if="active === 5">
                Bye
            </div>
        </el-col>
    </el-row>
</template>

<script>
import router from '../router'

import Step1 from './IntroComponents/Step1'
import Step2 from './IntroComponents/Step2'
import Step3 from './IntroComponents/Step3'
import Step4 from './IntroComponents/Step4'
import Step5 from './IntroComponents/Step5'

export default {
    name: 'Intro',
    components: {
        Step1,
        Step2,
        Step3,
        Step4,
        Step5
    },
    data() {
        return {
            active: 0,
            email: "",
            password: ""
        };
    },

    methods: {
        next() {
            if (this.active++ > 4) this.active = 0;
            if(this.active > 4) this.$router.push('/sector');

            //Storing values
            if(this.active == 2){

                this.email = localStorage.getItem("email")
                this.password = localStorage.getItem("password")

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://52.166.126.249:3000/user/login",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    "data": {
                        "email": this.email,
                        "password": this.password,
                    }
                }

                $.ajax(settings).done(function (response) {
                    console.log(response);
                    router.push('/ofertas');
                }).fail(function (error){
                    console.log(error.responseText);
                });
            }
        },
        saveUserParent(value) {
            alert(value)
        }
    },
    created() {
        this.$on('saveUser', function (_email) {
            alert(this.email);
            this.email = _email;
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-button{
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 25px;
}
.el-step__head{
    font-size: 20px !important;
}
.el-step__title{
    font-size: 20px !important;
}
.is-process{
    font-size: 25px !important;
}
.step_button{
    margin-top: 35px;
}
</style>

