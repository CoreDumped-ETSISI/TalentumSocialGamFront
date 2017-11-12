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
@import url('https://fonts.googleapis.com/css?family=Alegreya:400,500,700|Varela+Round');

#app {
	font-family: 'Alegreya', serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	vertical-align: middle;
}

body{
	background-image: url("./assets/work.jpg");
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: bottom;
	background-size: cover;
}

h1, h2, h3{
	font-family: 'Varela Round', sans-serif;
	color: #2c3e50;
}


.width-48{    width: 48%;}
.half-width{    width: 50%;}
.full-width{    width: 100%;}

.text-centered{
	text-align: center;
}
.el-input__inner{
	text-align: center;
	font-size: 18pt;
}

.font-medium{    font-size: 14pt;}
.font-large{    font-size: 22pt;}

.el-checkbox__inner {
	border-radius: 25%;
	width: 24px;
	height: 24px;
}

.el-checkbox__inner::after {
	height: 17px;
	left: 8px;
	top: 2px;
	width: 6px;
}

.el-form--label-top .el-form-item__label {
    font-size: 24px;
}

</style>
