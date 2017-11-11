<template>
    <el-row>
        <el-col :span="17" :offset="4">
            <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                    <h1>Tu cuenta</h1>
                    <el-form ref="form" :model="form" label-width="120px" label-position="top">
                        <el-form-item label="Correo electronico">
                            <el-input v-model="form.email" prop="email"></el-input>
                        </el-form-item>
                        <el-form-item label="Contrasena" class="label">
                            <el-input v-model="form.password" type="password"></el-input>
                        </el-form-item>
                        <el-checkbox v-model="checked">Recuerdame</el-checkbox>
                    </el-form>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default{
    name: 'Step2',
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

<style>
.el-form--label-top .el-form-item__label{
    font-size: 20px;
}

.el-checkbox__label{
    font-size: 20px;
}
</style>
