<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navbar-custom fixed-top">
      <b-navbar-brand
        :to="{ name: 'PaginaInicio' }"
        class="d-flex align-items-center justify-content-center"
      >
        <img
          src="@/assets/logo-raintree.png"
          class="d-inline-block align-top"
          alt="Tick Tock Regina"
        />
        <span>Tick Tock Regina</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav left v-if="session">
          <b-nav-item :to="{ name: 'PaginaInicio' }">Mis datos</b-nav-item>
          <b-nav-item :to="{ name: 'PaginaEntrada' }">Calendario</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" right>
          <b-navbar-nav v-if="!session">
            <b-nav-item :to="{ name: 'PaginaAcceder' }">Acceder</b-nav-item>
            <b-nav-item :to="{ name: 'PaginaRegistrarme' }"
              >Registrarme</b-nav-item
            >
          </b-navbar-nav>

          <b-nav-item-dropdown v-if="session">
            <template #button-content>
              <em>{{ empleado.nombres }} {{ empleado.apellidos }}</em>
            </template>
            <b-dropdown-item disabled>Modo: {{ modo[1] }}</b-dropdown-item>
            <b-dropdown-item>{{ empleado.departamento }}</b-dropdown-item>
            <b-dropdown-item>{{ empleado.noempleado }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav right v-if="session">
          <b-nav-item :to="{ name: 'PaginaBienvenido' }">
            <b-avatar
              src="https://placekitten.com/300/300"
              size="4em"
            ></b-avatar>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      empleado: {
        nombres: "Juan Carlos",
        apellidos: "Hernanadez Velazquez",
        departamento: "Mesero (A&B)",
        noempleado: "0101010110",
      },
      modo: ["Administrador", "Empleado"],
      session: false,
    };
  },
};
</script>

<style scoped lang="css">
@import "../assets/estilos.css";

.navbar-custom {
  background-color: var(--primary-dark-color) !important;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-center {
  justify-content: center;
}
</style>
