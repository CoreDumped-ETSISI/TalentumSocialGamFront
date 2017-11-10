<template>
<div>
  <el-button @click="visible = true">按钮</el-button>
  <el-dialog :visible.sync="visible" title="Hello world">
    <p>欢迎使用 Element</p>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
