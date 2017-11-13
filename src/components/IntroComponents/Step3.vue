<template>
    <el-row>
        <el-col>
            <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                    <h1>Introduce tu nombre y apellidos</h1>
                    <el-form ref="form" :model="form" label-width="120px" label-position="top">
                        <el-form-item label="Nombre" class="label">
                            <el-input v-model="form.name" v-on:input='change'></el-input>
                        </el-form-item>
                        <el-form-item label="Apellidos" class="label">
                            <el-input v-model="form.lastnames" v-on:input="change"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </el-col>
    </el-row>

</template>

<script>
export default{
    name: 'Step3',
    data() {
        return {
            form: {
                name: '',
                lastnames: ''
            }
        }
    },
    methods: {
        change() {
            localStorage.setItem('name', this.form.name);
            localStorage.setItem('lastnames', this.form.lastnames);
        }
    }
}
</script>

<style scope>


</style>
