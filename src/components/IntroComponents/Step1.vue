<template>
    <el-row>
        <el-col>
            <el-card :body-style="{ padding: '0px' }">
                <span><h2>Di hola a tu futuro trabajo!</h2></span>
                <img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" class="image hola-img">
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

<style>
.el-row{
    padding-top: 22px;
}
.hola-img{
    min-width:250px;
    width: 25%;
    border-radius: 50%;

}
.description{
    padding-bottom: 10px;
    font-size: 22px;
}
</style>
