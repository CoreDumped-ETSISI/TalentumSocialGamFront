<template>
    <el-button v-on:click="select" v-bind:class="{ active: isActive }">
        <el-col :span="10">
            <div class="grid-content">
                <img src="https://icon-icons.com/icons2/738/PNG/512/cocktail_icon-icons.com_63176.png" class="image">
            </div>
        </el-col>
    </el-button>
</template>

<script>
export default{
    name: "IndustryItem",
    data: function () {
        return {
            isActive: false 
        }
    },
    methods: {
        select: function (event) {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style>
.active{
    background-color: #c7dff9;
}
</style>
