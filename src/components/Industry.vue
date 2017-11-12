<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <h1 v-if="!any">Selecciona tus sectores</h1> <el-button @click="button_finish" v-else class="big space" type="primary">Terminar</el-button>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <!--First button-->
            <el-button v-on:click="isAsisSan = !isAsisSan; anySelected()" class="no-borders" v-bind:class="{ active: isAsisSan}">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">
                        <h1>Asistencia sanitaria</h1>
                    </div>
                </el-col>
            </el-button>

            <!--Second button-->
            <el-button v-on:click="isTrans = !isTrans; anySelected()" class="no-borders" v-bind:class="{ active: isTrans }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">
                        <h1>Transporte</h1>
                    </div>
                </el-col>
            </el-button>
            <!--Third button-->
            <el-button v-on:click="isRecursHum = !isRecursHum; anySelected()" class="no-borders" v-bind:class="{ active: isRecursHum }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">

                        <h1>Recursos humanos</h1>
                    </div>
                </el-col>
            </el-button>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <!--First button-->
            <el-button v-on:click="isConstr = !isConstr;anySelected()" class="no-borders" v-bind:class="{ active: isConstr }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">
                        <h1>Construccion</h1>
                    </div>
                </el-col>
            </el-button>

            <!--Second button-->
            <el-button v-on:click="isManuf = !isManuf;anySelected()" class="no-borders" v-bind:class="{ active: isManuf }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">
                        <h1>Manufacturas</h1>
                    </div>
                </el-col>
            </el-button>
            <!--Third button-->
            <el-button v-on:click="isMark = !isMark;anySelected()" class="no-borders" v-bind:class="{ active: isMark }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">

                        <h1>Marketing</h1>
                    </div>
                </el-col>
            </el-button>
        </el-row>   

        <el-row type="flex" class="row-bg" justify="center">
            <!--First button-->
            <el-button v-on:click="isEdu = !isEdu;anySelected()" class="no-borders" v-bind:class="{ active: isEdu }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">
                        <h1>Educacion</h1>
                    </div>
                </el-col>
            </el-button>

            <!--Second button-->
            <el-button v-on:click="isPeriod = !isPeriod;anySelected()" class="no-borders" v-bind:class="{ active: isPeriod }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">
                        <h1>Periodismo</h1>
                    </div>
                </el-col>
            </el-button>
            <!--Third button-->
            <el-button v-on:click="isArtes = !isArtes;anySelected()" class="no-borders" v-bind:class="{ active: isArtes }">
                <el-col :span="10">
                    <div class="grid-content">
                        <img src="https://cdn-static.findly.com/wp-content/uploads/sites/19/2017/02/job.png" 
                             height="150" class="image">

                        <h1>Artes</h1>
                    </div>
                </el-col>
            </el-button>
        </el-row>   

    </div>
</template>

<script>
import IndustryItem from './IndustryComponents/IndustryItem'

export default{
    name: 'Industry',
    components:{
        IndustryItem
    },
    data: function () {
        return {
            industries: ["Asistencia sanitaria", "Transporte", "Recursos Humanos", "Construccion", "Manufacturas", "Marketing", "Educacion", "Periodismo", "Artes"],
            isAsisSan: false,
            isTrans: false,
            isRecursHum: false,
            isConstr: false,
            isManuf: false,
            isMark: false,
            isEdu: false,
            isPeriod: false,
            isArtes: false,
            any: false
        }
    },
    methods: {
        anySelected: function (event) {
            if(this.isAsisSan || this.isTrans || this.isRecursHum || this.isConstr || this.isManuf || this.isMark || this.isEdu || this.isPeriod || this.isArtes)
                this.any=true;
            else this.any = false;
        },
        button_finish: function (event) {
            var email = localStorage.getItem("email")
            var password = localStorage.getItem("password")
            var name = localStorage.getItem("name")
            var lastnames = localStorage.getItem("lastnames")
            var phone = localStorage.getItem("phone")
            var image = "http://www.drunkmall.com/wp-content/uploads/2016/04/Dickhead-Mask.jpg";

            //Creating the Json
            var industries = '[';

            if(this.isAsisSan)
                industries = industries + '"asistencia_sanitaria",';
            if(this.isTrans)
                industries = industries + '"transportista",';
            if(this.isRecursHum)
                industries = industries + '"recursos_humanos",';
            if(this.isConstr)
                industries = industries + '"construccion",';
            if(this.isManuf)
                industries = industries + '"manufatura",';
            if(this.isMark)
                industries = industries + '"marketing",';
            if(this.isEdu)
               industries = industries + '"educacion",';
            if(this.isPeriod)
                industries = industries + '"periodismo",';
            if(this.isArtes)
                industries = industries + '"artes"';

            if(industries.slice(-1) == ',') //If last element is a ", erase it
                industries = industries.slice(0, -1);

            industries = industries + ']'
            console.log(industries)
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/user/signup/",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache",
                    "postman-token": "bb36f1b8-f073-577e-a794-64c48854f786"
                },
                "data": {
                    "email": email,
                    "password": password,
                    "phone": phone,
                    "avatarImage": image,
                    "firstname": name,
                    "surname": lastnames,
                    "industries": industries
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
    }
}
</script>

<style>
.el-row {
    &:last-child {
        margin-bottom: 0;
    }
}

.img{
    padding: 0 0 0 0;
    margin: 0 0 0 0;
}

.no-borders{
    padding: 0 0 0 0;
    margin: 0 0 0 0;
}
h1{
    text-align: center;
}
.row-bg {
    padding: 20px 0;
}
.active{
    background-color: #c7dff9;
}
.big{
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 25px;
}
.space{
    margin-left: 50px;
}
</style>
