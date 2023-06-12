<template>
  <main class="layout">
    <NavBar />
    <router-view></router-view>
    <OurFooter />
  </main>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import OurFooter from './components/OurFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    OurFooter
    
  },
}
</script>

<style lang='scss'>
body {
  font-family: 'Raleway', sans-serif;
  color: #2c3e50;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}


li {
  list-style: none;
}
.layout {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
