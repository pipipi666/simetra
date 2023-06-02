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
:root {
  --accent-color: #d15f8f;
  --br: 10px;
  --gap-s: 20px;
  --gap-m: 30px;
  --gap-l: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: var(--gap-m);
  display: flex;
  gap: var(--gap-m);
  justify-content: center;

  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: #2c3e50;
    text-decoration: none;

    &:hover,
    &.router-link-exact-active {
      color: var(--accent-color);
    }
  }
}
</style>
