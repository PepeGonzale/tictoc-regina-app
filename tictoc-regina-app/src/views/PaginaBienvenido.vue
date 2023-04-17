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

export default {
  name: "PaginaBienvenido",
  components: {
    "b-button": BButton,
  },
  created() {
    EmpleadoService.fncTestEmpleado().then((resp) =>
      alert(JSON.stringify(resp.data))
    );
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
