<template>
    <el-row>
        <el-col :span="12" :offset="6">
            <el-steps :active="active" finish-status="success" simple>
                <el-step title="Step 1"></el-step>
                <el-step title="Step 2"></el-step>
                <el-step title="Step 3"></el-step>
            </el-steps>
            <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            active: 0
        };
    },

    methods: {
        next() {
            if (this.active++ > 2) this.active = 0;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-button{
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 25px;
}
.el-step__head{
    font-size: 20px !important;
}
.el-step__title{
    font-size: 20px !important;
}
.is-process{
    font-size: 25px !important;
}
</style>

