<template>
    <div>
        <el-row type="flex" class="row-bg font-medium" justify="center" style="height:120px;">
            <h1 v-if="!any">Selecciona los sectores en los que quieras trabajar</h1> <el-button @click="button_finish" v-else class="big space" type="primary">Siguiente</el-button>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <!--First button-->
            <el-button v-on:click="isAsisSan = !isAsisSan; anySelected()" class="no-borders" v-bind:class="{ active: isAsisSan}">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/salud.png" class="image sector-img">
                        <h2>Salud</h2>
                    </div>
                </el-col>
            </el-button>

            <!--Second button-->
            <el-button v-on:click="isTrans = !isTrans; anySelected()" class="no-borders" v-bind:class="{ active: isTrans }">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/transporte2.png" class="image sector-img">
                        <h2>Transporte</h2>
                    </div>
                </el-col>
            </el-button>
            <!--Third button-->
            <el-button v-on:click="isRecursHum = !isRecursHum; anySelected()" class="no-borders" v-bind:class="{ active: isRecursHum }">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/gente.png" class="image sector-img">
                        <h2>RRHH</h2>
                    </div>
                </el-col>
            </el-button>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <!--First button-->
            <el-button v-on:click="isConstr = !isConstr;anySelected()" class="no-borders" v-bind:class="{ active: isConstr }">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/construction2.png" class="image sector-img">
                        <h2>Construcción</h2>
                    </div>
                </el-col>
            </el-button>

            <!--Second button-->
            <el-button v-on:click="isManuf = !isManuf;anySelected()" class="no-borders" v-bind:class="{ active: isManuf }">
                <el-col :span="8">
                    <div class="sector font-medium">
                       <img src="../assets/SectorIcons/manufacture.svg" class="image sector-img">
                        <h2>Manufacturas</h2>
                    </div>
                </el-col>
            </el-button>
            <!--Third button-->
            <el-button v-on:click="isMark = !isMark;anySelected()" class="no-borders" v-bind:class="{ active: isMark }">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/marketing.png" class="image sector-img">
                        <h2>Marketing</h2>
                    </div>
                </el-col>
            </el-button>
        </el-row>   

        <el-row type="flex" class="row-bg" justify="center">
            <!--First button-->
            <el-button v-on:click="isEdu = !isEdu;anySelected()" class="no-borders" v-bind:class="{ active: isEdu }">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/education.png" class="image sector-img">
                        <h2>Educacion</h2>
                    </div>
                </el-col>
            </el-button>

            <!--Second button-->
            <el-button v-on:click="isPeriod = !isPeriod;anySelected()" class="no-borders" v-bind:class="{ active: isPeriod }">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/journalism.svg" class="image sector-img">
                        <h2>Periodismo</h2>
                    </div>
                </el-col>
            </el-button>
            <!--Third button-->
            <el-button v-on:click="isArtes = !isArtes;anySelected()" class="no-borders" v-bind:class="{ active: isArtes }">
                <el-col :span="8">
                    <div class="sector font-medium">
                        <img src="../assets/SectorIcons/art.svg" class="image sector-img">
                        <h2>Artes</h2>
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
            var industries = [];

            if(this.isAsisSan)
                industries.push("asistencia_sanitaria");
            if(this.isTrans)
                industries.push("transportista");
            if(this.isRecursHum)
                industries.push("recursos_humanos");
            if(this.isConstr)
                industries.push("construccion");
            if(this.isManuf)
                industries.push("manufatura");
            if(this.isMark)
                industries.push("marketing");
            if(this.isEdu)
                industries.push("educacion");
            if(this.isPeriod)
                industries.push("periodismo");
            if(this.isArtes)
                industries.push("artes");


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
                sessionStorage.setItem("token", response.token);
                router.push('/ofertas');

            });
        }
    }
}
</script>

<style scope>
.sector{
    min-width: 200px;
    min-height: 200px;
    width: auto;
    height: auto;
    padding: 20px;
    text-align: center;
    white-space: normal;
    display: table-cell;
    vertical-align: middle;
}

.sector-img{
    width: auto;
    height: 75px;
    margin-left:auto;
    margin-right:auto;
}

.active {
    border: 4px solid #93c8ff !important;
    background-color: #93c8ff;
}

.el-button:hover {
    border-color: #93c8ff;
}

.el-button {
    border: 4px solid;
}

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
