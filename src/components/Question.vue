<template>
    <el-row>
            <el-card class="box-card">
                <div class="grid-content">
                    <!-- Contenido de la pregunta-->
                    <span><h2>¿Sabes programar en Javascript?</h2></span>
                    <!-- Respuestas binarias -->
                    <div style="margin: 20px 0">
                        <el-button-group>
                            <el-button type="danger" plain>NO</el-button>
                            <el-button type="primary" plain>YES</el-button>
                        </el-button-group>
                    </div>
                    <!-- Respuesta gradual -->
                    <div style="margin: 20px 0">
                        <el-button-group class="full-width">
                              <el-button class="quarter" type="danger" plain>Ninguno</el-button>
                              <el-button  class="quarter" type="default" plain>Bajo</el-button>
                              <el-button  class="quarter" type="default" plain>Medio</el-button>
                              <el-button  class="quarter" type="success" plain>Alto</el-button>
                        </el-button-group>
                    </div>
                    <!-- Fin de la pregunta -->
                </div>
            </el-card>
            <div style="margin: 20px 0;">
                <el-button-group class="full-width el-zoom-in-top">
                    <el-button class="half-width font-medium" type="info" plain>Contestar más tarde</el-button>
                    <el-button class="half-width font-medium" type="success" plain>Aceptar</el-button>
                </el-button-group>
            </div>
        </el-row>
</template>

<script>
//import IndustryItem from './IndustryComponents/IndustryItem'

export default{
    name: 'Question',
    components:{
        // IndustryItem
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
