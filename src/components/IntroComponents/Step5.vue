<template>
    <el-row>
        <el-col>
            <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                    <h1>Termina el registro</h1>
                    <el-form ref="form" :model="form" label-position="top">
                        <el-form-item label="Teléfono">
                            <el-input type='tel' class="font-large text-centered" v-model="form.phone" v-on:input="change"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </el-col>
    </el-row>

</template>

<script>
export default{
    name: 'Step5',
    data() {
        return {
            form: {
                phone: ''
            }
        }
    },
     methods: {
        change() {
            localStorage.setItem('phone', this.form.phone);
        }
   }
}
</script>
