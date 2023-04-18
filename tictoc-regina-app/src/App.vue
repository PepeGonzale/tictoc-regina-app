<template>
  <div id="app">
    <NavBar :empleado="navbar.empleado" :session="navbar.session" />
    <main style="flex: 1; margin-top: 100px">
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
import EmpleadoService from "./servicies/EmpleadoService";
import Swal from "sweetalert2";

export default {
  name: "App",
  data() {
    return {
      navbar: {
        empleado: {},
        session: false,
      },
    };
  },
  components: {
    NavBar,
    Footer,
    BContainer,
  },
  async mounted() {
    if (localStorage.getItem("__tkn")) {
      await EmpleadoService.fncDataEmpleado()
        .then((resp) => {
          //alert(JSON.stringify(resp.data.status));

          if (resp.data.status === "success") {
            const data = resp.data._data_empleado.data;
            const empleado = {
              nombres: data.nombres,
              apellidos: data.apellidos,
              departamento: data.departamento,
              numEmpleado: data.numero_colaborador,
            };

            this.navbar = {
              empleado,
              session: true,
            };
          }
        })
        .catch(() => {
          //alert(JSON.stringify(resp));
          this.$router.push({ name: "PaginaInicio" });

          //***  Mensaje de error */
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Aviso",
            text: "Hubo un error en la operación.",
            showConfirmButton: true,
          });
        });
    }
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
