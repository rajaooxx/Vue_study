<template>
  <div id="app">
    <div id="nav">
      <router-link to="/css">css</router-link>|
      <router-link to="/vuetify">vuetify</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    //
  })
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 100000;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
