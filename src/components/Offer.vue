<template>
    <div class="row" >
        <el-card >
            <el-row>
                <h1>{{title}}</h1>
                <img v-bind:src="image" class="image offer-img">
                <span><h2>Compania: {{company}}</h2></span>
            </el-row>
            <el-row>
                <el-tag type="success" class="salario font-medium">
                    <i class=" el-icon-check "></i> {{salary}}$</el-tag>
                <el-tag type="success" class="ubicacion font-medium"><i class="el-icon-location"></i> {{locationMap}}</el-tag>
            </el-row>
            <el-row>
                <p>{{description}}</p>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default{
    name: 'Offer',
    props: ['title', "description", 'image', 'company', 'salary', 'locationMap'],
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
.image{
height: 100%; 
width: 100%; 
max-width: 400px;
}
</style>
