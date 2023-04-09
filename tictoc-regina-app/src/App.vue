<template>
  <div id="app">
    <NavBar />

    <main style="flex: 1;margin-top: 100px;">
      <b-container class="my-5">
        <router-view />
      </b-container>
    </main>

    <footer style="flex-shrink: 0">
      <Footer />
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { BContainer } from "bootstrap-vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    BContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
