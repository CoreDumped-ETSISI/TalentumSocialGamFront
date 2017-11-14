<template>
    <el-row>
        <el-col>
            <el-card :body-style="{ padding: '0px' }">
                <span><h2>¡Di hola a tu futuro trabajo!</h2></span>
                <img src="../../assets/jodapty.svg" class="image hola-img">
                <div style="padding: 14px;">
                    <div class="bottom clearfix description">
                    Vamos a iniciar sesión, si no tienes cuenta, haremos una nueva.
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default{
    name: 'Step1'
}
</script>

<style scope>
.el-row{
    padding-top: 22px;
}
.hola-img{
    min-width:450px;
    width: 25%;
}
.description{
    padding-bottom: 10px;
    font-size: 22px;
}
</style>
