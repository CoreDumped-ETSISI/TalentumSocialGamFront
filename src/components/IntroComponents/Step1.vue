<template>
    <el-row>
        <el-col :span="17" :offset="4">
            <el-card :body-style="{ padding: '0px' }">
                <img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" class="image">
                <div style="padding: 14px;">
                    <span><h2>Di hola a tu futuro trabajo!</h2></span>
                    <div class="bottom clearfix description">
                        Sigue el proceso de registro con nosotros. 
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
.description{
    padding-bottom: 10px;
    font-size: 22px;
}
</style>
