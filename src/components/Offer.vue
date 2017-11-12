<template>
    <div class="row">
        <el-card>
            <el-row>
                <h1>Título de oferta</h1>
                <img src="../assets/Offer.jpeg" class="image offer-img">
                <span><h2>Nombre empresa</h2></span>
            </el-row>
            <el-row>
                <el-tag type="success" class="salario font-medium">
                    <i class=" el-icon-check "></i> Salario</el-tag>
                <el-tag type="success" class="ubicacion font-medium"><i class="el-icon-location"></i> Ubicación</el-tag>
            </el-row>
            <el-row>
                <p>Descripción del puesto de trabajo.</p>
            </el-row>
        </el-card>
        <div style="margin: 20px 0;">
            <el-button-group class="full-width">
                <el-button class="half-width font-medium" type="info" plain>
                    <i class="el-icon-arrow-left"></i> Volver atrás</el-button>
                <el-button class="half-width font-medium" type="success" plain><i class=" el-icon-message "></i> Solicitar entrevista</el-button>
            </el-button-group>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Offer'
}
</script>

<style scope>
.offer-img{
    width: 33.33%;
    min-width: 200px;
    border-radius: 50%;
    padding: 5px;
}
.el-row{
    width: 100%;
    padding-left: 0%;
}
.el-button{
    width: 50%;
    font-size: 20pt;
    border-width: medium;
}

.half-width{    width: 50%;}
.full-width{    width: 100%;}

.font-medium{    font-size: 14pt;}
.font-large{    font-size: 20pt;}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    padding: 10px;
}

.el-header, .el-footer {
    color: #333;
    text-align: center;
    vertical-align: middle;
    height: 60px;
    line-height: 60px;
}

.el-aside {
    color: #333;
    text-align: center;
}

.el-main {
    color: #333;
    text-align: center;
    padding: 20px;   

}

body > .el-container {
    margin-bottom: 10px;
}


.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.el-card__body {
    padding: 0 20px;
}
</style>
