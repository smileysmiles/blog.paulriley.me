<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/shared/menu.vue'

export default {
  name: 'App',
  components: { 'app-menu' : Menu }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {height:10%; width:10%}
</style>
