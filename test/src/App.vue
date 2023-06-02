<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/objects">Objects</router-link>
      <router-link to="/statistics">Statistics</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  gap: 30px;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #d15f8f;
    }
  }
}
</style>
