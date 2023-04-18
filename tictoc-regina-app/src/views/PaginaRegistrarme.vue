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
            <b-card-body title="Registrarme" class="p-titulo">
              <div>
                <b-form
                  @submit="onSubmit"
                  @reset="onReset"
                  v-if="show"
                  id="formRegistrarEmpleado"
                >
                  <b-form-group id="input-formRegistrarme-nombres-empleado">
                    <b-form-input
                      id="input-formRegistrarme-nombres-empleado"
                      v-model="formRegistrarme.nombres"
                      placeholder="Ingrese nombre de empleado..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-formRegistrarme-apellidos-empleado">
                    <b-form-input
                      id="input-formRegistrarme-apellidos-empleado"
                      v-model="formRegistrarme.apellidos"
                      placeholder="Ingrese apellidos de empleado..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-formRegistrarme-departamento-empleado"
                  >
                    <b-form-input
                      id="input-formRegistrarme-departamento-empleado"
                      v-model="formRegistrarme.departamento"
                      list="input-formRegistrarme-list-departamentos"
                      placeholder="Ingrese departamento de empleado..."
                      required
                    ></b-form-input>
                    <b-form-datalist
                      id="input-formRegistrarme-list-departamentos"
                      :options="departamentos"
                    ></b-form-datalist>
                  </b-form-group>

                  <b-form-group id="input-formRegistrarme-numero-empleado">
                    <b-form-input
                      id="input-formRegistrarme-numero-empleado"
                      type="number"
                      v-model="formRegistrarme.numEmpleado"
                      placeholder="Ingrese número de empleado..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-formRegistrarme-correo-empleado">
                    <b-form-input
                      id="input-formRegistrarme-correo-empleado"
                      v-model="formRegistrarme.correo"
                      type="email"
                      placeholder="Ingrese correo de empleado..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group @submit.stop.prevent>
                    <b-form-input
                      id="input-formRegistrarme-password-empleado"
                      v-model="formRegistrarme.password"
                      type="password"
                      placeholder="Ingrese contraseña de empleado..."
                      aria-describedby="password-help-block"
                      required
                    ></b-form-input>
                    <b-form-text id="password-help-block">
                      La contraseña tiene que ser entre 8 - 20 caracteres,
                      contener letras y números, no puede contener espacios,
                      caracteres especiales, o emojis.
                    </b-form-text>
                  </b-form-group>

                  <div class="mt-3">
                    <b-button-group>
                      <b-button
                        type="submit"
                        variant="success"
                        id="btnFormRegistrarmeAceptar"
                        >Dar de alta</b-button
                      >
                      <b-button
                        type="reset"
                        variant="danger"
                        id="btnFormRegistrarmeCancelar"
                        >Cancelar</b-button
                      >
                    </b-button-group>
                  </div>

                  <p class="mt-3">
                    Estoy dado de alta al sistema. <br />
                    <b-button variant="link" :to="{ name: 'PaginaAcceder' }"
                      >Quiero entrar a mi cuenta.</b-button
                    >
                  </p>
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
      formRegistrarme: {
        correo: null,
        nombres: null,
        apellidos: null,
        departamento: null,
        numEmpleado: null,
        password: null,
      },
      show: true,
      departamentos: [
        "Camarista",
        "Steward",
        "Areas publicas",
        "Cocina (A&B)",
        "Mesero (A&B)",
        "Etc.",
      ],
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      console.log(this.formRegistrarme);

      const nuevoEmpleado = {
        nombres: this.formRegistrarme.nombres,
        apellidos: this.formRegistrarme.apellidos,
        departamento: this.formRegistrarme.departamento,
        numero_colaborador: this.formRegistrarme.numEmpleado + "",
        correo: this.formRegistrarme.correo,
        contrasenha: this.formRegistrarme.password,
      };

      AuthService.fncRegistrarEmpleado(nuevoEmpleado)
        .then(() => {
          //let empleado = resp.data;
          document.querySelector("#btnFormRegistrarmeCancelar").click();

          //***  Mensaje de exitosa */
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Hecho",
            text: "Registrado exitosamente.",
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            document.querySelector("#btnFormRegistrarmeCancelar").click();
            // Redirigir el usuario la pagina de acceder
            this.$router.push({ name: "PaginaAcceder" });
          });
        })
        .catch(() => {
          //***  Mensaje de error */
          Swal.fire({
            position: "bottom-right",
            icon: "error",
            title: "Aviso",
            text: "Hubo un error en la operación.",
            showConfirmButton: true,
          });
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.formRegistrarme.nombres = null;
      this.formRegistrarme.apellidos = null;
      this.formRegistrarme.departamento = null;
      this.formRegistrarme.numEmpleado = null;
      this.formRegistrarme.correo = null;
      this.formRegistrarme.password = null;
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
@import url("../assets/estilos.css");
.p-titulo {
  color: var(--primary-dark-color);
}

h1 {
  color: red;
}
</style>
