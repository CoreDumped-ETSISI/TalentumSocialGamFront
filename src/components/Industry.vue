<template>
    <div class="row">
        <el-row :gutter="20" :offset="6" style="background-color: lime;">
            <IndustryItem/>
            <IndustryItem/>
            <IndustryItem/>
            <IndustryItem/>
            <IndustryItem/>
            <IndustryItem/>
            <IndustryItem/>
            <IndustryItem/>
        </el-row>
    </div>
</template>

<script>
import IndustryItem from './IndustryComponents/IndustryItem'

export default{
    name: 'Industry',
    components:{
        IndustryItem
    }
}
</script>

<style>
.el-row{
    width: 95%;
    padding-left: 10%;
}
</style>
