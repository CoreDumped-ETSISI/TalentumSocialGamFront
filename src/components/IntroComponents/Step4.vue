<template>
    <el-row>
        <el-col :span="17" :offset="4">
            <el-card :body-style="{ padding: '0px' }">

                    <h1>Termina el registro</h1>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Arrastra el archivo aqui o<em> picha aqui</em></div>
                    <div class="el-upload__tip" slot="tip">Archivos jpg/png con un tamano menor de 500kb</div>
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
