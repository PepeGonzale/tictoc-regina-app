<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navbar-custom">
      <b-navbar-brand href="#">Tick Tock Regina</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name : 'PaginaInicio'}">Mis datos</b-nav-item>
          <b-nav-item :to="{ name : 'PaginaEntrada'}">Calendario</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
    name: 'NavBar'
};
</script>

<style scoped lang="css">
@import "../assets/estilos.css";

.navbar-custom {
  background-color: var(--primary-dark-color) !important;
}
</style>
