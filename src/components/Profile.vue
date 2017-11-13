<template>
    <div class="row" >
        <el-card >
                <h1>Perfil</h1>
            <el-container>
                <el-header class="profile-header ">
                    <!--Contenido de la cabecera-->
                    Nombre:  Néstor Javier Oubiña{{name}}
                </el-header>
                <el-container>
                    <el-aside>
                        <!--Contenido del panel lateral-->
                        <img src="../assets/nestor.jpg" class="image user-img">
                        <el-row>
                            <div style="padding: 1em;">
                            <h2>Nivel actual</h2>
                        </div>
                        </el-row>
                        <el-row>
                                <div style="padding: 1em;">
                                <h2>Próximo nivel</h2>
                                <el-progress 
                                    type="line" 
                                    stroke-width="20"
                                    text-inside 
                                    :percentage="25"></el-progress>
                                </div>
                            </el-row>
                        </el-aside>    
                    <el-main>
                        <!--Contenido del panel principal-->
                        <!-- ACORDEON
                        <el-collapse accordion>
                            <el-collapse-item title="Datos personales" name="1">
                                <div>Introducir paneles de nuevos nombres y apellidos</div>
                            </el-collapse-item>
                            <el-collapse-item title="Correo electrónico" name="2">
                                <div>Introducir paneles de nuevo correo electrónico</div>
                            </el-collapse-item>
                            <el-collapse-item title="Fotografía" name="3">
                                <div>Introduce una nueva fotografía</div>
                            </el-collapse-item>
                        </el-collapse>
                        -->
                        <el-tabs type="border-card" tab-position="left">
                            <el-tab-pane>
                                <span slot="label" class="font-medium">Datos personales <i class="el-icon-edit"></i> </span>
                                    <el-form ref="form" :model="form" label-width="120px" label-position="top">
                                        <el-form-item label="Nombre"  class="input-text">
                                            <el-input  prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item label="Apellidos" class="input-text">
                                            <el-input prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item label="Numero de telefono" class="input-text">
                                            <el-input prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                    </el-form>
                                <el-button class="width-48" type="primary">Guardar cambios</el-button>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label" class="font-medium"> Correo electrónico <i class="el-icon-message"></i></span>
                                <el-form ref="form" :model="form" label-width="120px" label-position="top">
                                        <el-form-item label="Correo electrónico"  class="input-text">
                                            <el-input  prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item label="Contraseña" class="input-text">
                                            <el-input prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                    </el-form>
                                <el-button class="width-48" type="primary">Guardar cambios</el-button>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label" class="font-medium"> Fotografía <i class="el-icon-picture"></i></span>
                                    <h1>Introduce tu nueva fotografía de perfil</h1>
                                    <div 
                                        class="bottom clearfix description">
                                        Elige una fotografía tuya en la que no salga nadie más.
                                    </div>
                                    <el-upload
                                        class="upload-demo"
                                        drag
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :file-list="fileList"
                                        multiple>
                                        <i class="el-icon-upload"></i>
                                        <div class="el-upload__text" style="font-size: 14pt; font-family: 'Varela Round'">Arrastra el archivo aquí o<em> picha aqui</em></div>
                                        <div class="el-upload__tip font-medium" slot="tip">Archivos jpg/png con un tamaño menor de 500kb</div>
                                    </el-upload>
                                <el-button class="width-48" type="primary">Guardar cambios</el-button>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label" class="font-medium"> Contraseña <i class="el-icon-more"></i></span>
                                <div class="tab-header">Cambio de contraseña</div>
                                <el-form ref="form" :model="form" label-width="120px" label-position="top">
                                        <el-form-item label="Contraseña"  class="input-text">
                                            <el-input  prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item label="Contraseña nueva" class="input-text">
                                            <el-input prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item label="Verificar contraseña nueva" class="input-text">
                                            <el-input prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                    </el-form>
                                    <el-button class="width-48" type="primary">Guardar cambios</el-button>
                            </el-tab-pane>
                            <el-tab-pane>
                                <span slot="label" class="font-medium"> Darse de baja <i class="el-icon-remove-outline"></i></span>
                                <div class="tab-header">CUIDADO: Vas a eliminar tu cuenta</div>
                                <el-form ref="form" :model="form" label-width="120px" label-position="top">
                                        <el-form-item label="Contraseña"  class="input-text">
                                            <el-input  prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item label="Escribe 'Quiero eliminar mi cuenta'" class="input-text">
                                            <el-input prop="text" v-on:input="change">
                                            </el-input>
                                        </el-form-item>
                                    </el-form>
                                    <el-button class="width-48" type="danger">darse de baja</el-button>
                            </el-tab-pane>
                        </el-tabs>
                    </el-main>
                </el-container>    
            </el-container>
        </el-card>
        <el-button type="info" class=" width-48" >Volver atras</el-button>
        <el-button class="width-48" type="primary">Siguiente</el-button>
    </div>
</template>

<script>
export default{
    name: 'Profile'

}
</script>

<style scope>
.user-img{
    height: 15em;
    box-shadow: 0 0.5em 0.5em #ccc;
    overflow: auto;
    border-radius: 10px;
    margin-top: 20px;
    }

.tab-header{
    font-size: 18pt;
    padding: 15px 0;
}

.el-button{
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 25px;
}
.profile-header{
    background-color:#409EFF;
    border-radius: 4px;
    font-family: "Varela Round";
    font-size: 24pt;
    color: white;
    height: 60px;
    line-height: 60px;
    vertical-align: middle;
}
.el-collapse-item__header{
    background-color:#BADCFF;
    font-size: 24pt;
}

.input-text{
    padding: 20px;
    border: 2pt solid #BADCFF;
    background-color: #BADCFF;
    border-radius: 5px;
}

.el-upload-list__item{
    font-size: 20pt;
}

</style>
