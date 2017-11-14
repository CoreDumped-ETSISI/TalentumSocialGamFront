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
@import url('https://fonts.googleapis.com/css?family=Nunito|Varela+Round');

#app {
	font-family: 'Nunito', serif;
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
.width-45{    width: 45%;}
.half-width{    width: 50%;}
.full-width{    width: 100%;}

.text-centered{
	text-align: center;
	float: center;
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

.blue-bg{ background-color: #409EFF}
.red-bg{ background-color: #FA5555}
.green-bg{ background-color: #67C23A}
.yellow-bg{ background-color: #EB9E05}

.rounded-corners{ border-radius: 5px; }
.centered-w75{ 
	width: 75%;
	margin:auto;
}

#floating-button{
	  width:90px;
	  height: 90px;
	  border-radius: 50%;
	  border: 2px solid transparent;
	  background: #FA5555;
	  position: fixed;
	  bottom: 45px;
	  right: 45px;
	  cursor: pointer;
	  box-shadow: 0px 2px 5px #666;
	  z-index: 450;
}

#floating-button:hover{
	position: fixed;
	box-shadow: 0px 2px 10px #BA3131;
	border: 2px solid #BA3131;
	-webkit-transition: background-color 0.4s, box-shadow 0.4s, border 0.4s; /* For Safari 3.1 to 6.0 */
    transition: background-color 0.4s, box-shadow 0.4s, border 0.4s;
    transition-timing-function: ease-in-out;
	z-index: 450;
}

.floating-menu{
  line-height: 90px;
  font-size: 28pt;
  color: white;
  z-index: 500;
}
</style>
