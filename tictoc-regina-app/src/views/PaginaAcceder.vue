<template>
  <div>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 100%">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://scontent.fpvr1-1.fna.fbcdn.net/v/t39.30808-6/335471992_509740417817161_8473428636703509345_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=Zz5ympxb2XsAX8xiMMT&_nc_ht=scontent.fpvr1-1.fna&oh=00_AfAdlb8RBvNvMcBGbm3h7L9sA1CTYNXUYDO8AQylRpsjsw&oe=6422C950"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Acceder">
              <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="input-group-1" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="formAcceder.numEmpleado"
                      type="type"
                      placeholder="Ingrese su número de empleado..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group @submit.stop.prevent>
                    <b-form-input
                      id="input-password-empleado"
                      v-model="formAcceder.password"
                      type="password"
                      placeholder="Ingrese contraseña de empleado..."
                      aria-describedby="password-help-block"
                      required
                    ></b-form-input>
                    <b-form-text id="password-help-block">
                      <p>
                        He olvidado mi contraseña. <br />
                        <b-button variant="link" :to="{ name: 'PaginaInicio' }"
                          >Recuperar contraseña.</b-button
                        >
                      </p>
                    </b-form-text>
                  </b-form-group>

                  <div>
                    <b-button-group>
                      <b-button type="submit" variant="success"
                        >Acceder</b-button
                      >
                      <b-button type="reset" variant="danger"
                        >Cancelar</b-button
                      >
                    </b-button-group>
                  </div>
                </b-form>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import UsuarioService from "../servicies/UsuarioService";

export default {
  name: "PaginaAcceder",
  data() {
    return {
      formAcceder: {
        numEmpleado: "",
        password: ""
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      // Obtener los datos de un empleado con su numero de empleado
      UsuarioService.getEmpleadoByNumEmpleado(this.formAcceder.numEmpleado).then(
        (resp) => {
          let { contrasenha } = resp.data.data;

          if( contrasenha === this.formAcceder.password ){
            this.$router.push({ name: 'PaginaBienvenido' });
          }
        }
      )
      .catch((error) => {
        alert(error);
        console.log("Error : UsuarioService.createUsuario(nuevoEmpleado) >> ",error);
      });

    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
