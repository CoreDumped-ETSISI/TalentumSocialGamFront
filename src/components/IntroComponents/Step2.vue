<template>
    <el-row>
        <el-col>
            <el-card >
                <div style="padding: 14px;">
                    <h1>Acceso</h1>
                    <div class="bottom clearfix description">Si no tienes una cuenta, introduce los datos que te gustaría usar.</div>
                    <el-form ref="form" :model="form" label-width="120px" label-position="top">
                        <el-form-item label="Correo electrónico">
                            <el-input v-model="form.email" prop="email" v-on:input="change"></el-input>
                        </el-form-item>
                        <el-form-item label="Contraseña" class="label">
                            <el-input v-model="form.password" type="password" v-on:input="change"></el-input>
                        </el-form-item>
                        <el-checkbox v-model="form.checked" class="font-medium">Recuérdame</el-checkbox>
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
                email: '',
                password: '',
                checked: ''
            }
        }
    },
    methods: {
        change() {
            localStorage.setItem('email', this.form.email);
            localStorage.setItem('password', this.form.password);
        }
    }
}
</script>

<style scope>
.el-form--label-top .el-form-item__label{
    font-size: 20px;
}

.el-checkbox__label{
    font-size: 20px;
}
</style>
