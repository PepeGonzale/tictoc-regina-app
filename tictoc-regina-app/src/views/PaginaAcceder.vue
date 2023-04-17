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
                      type="number"
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
                      <b-button
                        type="submit"
                        variant="success"
                        id="btnFormAccederAceptar"
                        >Acceder</b-button
                      >
                      <b-button
                        type="reset"
                        variant="danger"
                        id="btnFormAccederCancelar"
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
import AuthService from "../servicies/AuthService";
import Swal from "sweetalert2";

export default {
  name: "PaginaAcceder",
  data() {
    return {
      formAcceder: {
        numEmpleado: null,
        password: null,
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.formAcceder);

      const credencialesEmpleado = {
        numero_colaborador: this.formAcceder.numEmpleado + "",
        contrasenha: this.formAcceder.password,
      };

      AuthService.fncIngresarEmpleado(credencialesEmpleado)
        .then((resp) => {
          const data = resp.data;

          if (data.status === "failure") {
            //***  Mensaje de error autenticación */
            Swal.fire({
              position: "center",
              icon: "warning",
              title: data.error,
              text: data.message,
              showConfirmButton: true,
            });
          } else {

            // Guardar token en el almacenamiento local
            localStorage.setItem("__tkn", data.token);

            //***  Mensaje de autenticación exitosa */
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Hecho",
              text: data.message,
              showConfirmButton: false,
              timer: 1700,
            }).then(() => {
              // Vaciar el formulario
              document.querySelector("#btnFormAccederCancelar").click();

              /** Registrar una cookie */
              // // Generar caducidad de token
              // const today = new Date();
              // const expiry = new Date(
              //   today.getTime() + 30 * 24 * 60 * 60 * 1000
              // ); // Caduca en 30 días

              // // Obtener el dominio
              // const domain = window.location.hostname;

              // // Registar token en una cookie
              // document.cookie =
              //   "token=" +
              //   data.token +
              //   "; expires=" +
              //   expiry.toUTCString() +
              //   "; path=/; domain="+domain+"; secure";

              // Redirigir el usuario la pagina de bienvenido
              this.$router.push({ name: "PaginaBienvenido" });

            });
          }

          console.log(JSON.stringify(data));
        })
        .catch(() => {
          //***  Mensaje de error */
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Aviso",
            text: "Hubo un error en la operación. Verifica el servidor del API.",
            showConfirmButton: true,
          });
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.formAcceder.numEmpleado = null;
      this.formAcceder.password = null;
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
