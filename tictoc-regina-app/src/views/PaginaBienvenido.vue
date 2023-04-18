.
<template>
  <div>
    <h1>Página: Bienvenido</h1>
    <b-button variant="primary">Primary</b-button>
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";
import EmpleadoService from "../servicies/EmpleadoService";
import Swal from "sweetalert2";


export default {
  name: "PaginaBienvenido",
  components: {
    "b-button": BButton,
  },
  created() {
    EmpleadoService.fncDataEmpleado()
      .then(() => {
        //alert(JSON.stringify(resp.data))
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
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
