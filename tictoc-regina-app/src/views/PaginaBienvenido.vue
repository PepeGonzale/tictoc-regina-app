<template>
  <div>
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Tab 1" :title-link-class="linkClass(0)"
          >Tab contents 1</b-tab
        >
        <b-tab title="Tab 2" :title-link-class="linkClass(1)"
          >Tab contents 2</b-tab
        >
        <b-tab title="Tab 3" :title-link-class="linkClass(2)"
          >Tab contents 3</b-tab
        >
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import EmpleadoService from "../servicies/EmpleadoService";
import Swal from "sweetalert2";

export default {
  name: "PaginaBienvenido",
  components: {},
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
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
