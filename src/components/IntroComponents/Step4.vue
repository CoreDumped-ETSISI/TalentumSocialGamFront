<template>
    <el-row>
        <el-col>
            <el-card :body-style="{ padding: '0px' }">

                    <h1>Añade una foto</h1>
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
                <div style="padding: 14px;">
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default{
    name: 'Step4',
    data() {
        return {
            form: {
                name: '',
                lastnames: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>


<style scope>

</style>