<template>
  <div>
    <div>
      <b-card
        no-body
        img-src="https://placekitten.com/380/200"
        img-alt="Image"
        img-top
      >
        <template #header>
          <h4 class="mb-0">Empleado</h4>
        </template>

        <b-list-group flush>
          <b-list-group-item>Steward</b-list-group-item>
          <b-list-group-item>Juan Perez</b-list-group-item>
          <b-list-group-item>19022441</b-list-group-item>
        </b-list-group>

        <b-card-body>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import EmpleadoService from "../servicies/EmpleadoService";
import Swal from "sweetalert2";

export default {
  name: "PaginaDatos",
  components: {},
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
