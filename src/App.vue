<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 10%;
	vertical-align: middle;
	min-width: 350px;
}

body{
	background-image: url("./assets/work.jpg");
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: bottom;
	background-size: cover;
}
</style>
