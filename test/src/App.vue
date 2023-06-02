<template>
  <div id="app">
    <nav>
      <router-link to="/">Карта</router-link>
      <router-link to="/objects">Объекты</router-link>
      <router-link to="/statistics">Статистика</router-link>
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
  --header-h: 80px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

nav {
  height: var(--header-h);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-m);
  padding: 0 var(--gap-m);

  a {
    font-weight: bold;
    font-size: clamp(1rem, 5vw, 1.5rem);
    color: #2c3e50;
    text-decoration: none;

    &:hover,
    &.router-link-exact-active {
      color: var(--accent-color);
    }
  }
}
</style>
