<template>
  <div id="app">
    <panel class="panel"/><router-view class="container"/>
  </div>
</template>

<script>
import Panel from './components/Panel'

export default {
  name: 'App',
  components: {
    Panel,
   
  }
}
</script>

<style>
body{
	background: rgb(228,232,235);
	width:100%;
	

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
