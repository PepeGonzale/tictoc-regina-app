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
                      v-model="form.email"
                      type="email"
                      placeholder="Ingrese su correo eléctronico..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      placeholder="Ingrese su contraseña..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <div class="mt-3">
                    <b-button-group>
                      <b-button type="submit" variant="primary"
                        >Acceder</b-button
                      >
                      <b-button type="reset" variant="danger"
                        >Cancelar</b-button
                      >
                    </b-button-group>
                  </div>

                  <p class="mt-3">
                    He olvidado mi contraseña. <br />
                    <b-button variant="link" :to="{ name: 'PaginaInicio' }"
                      >Quiero recuperar mi contraseña.</b-button
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
export default {
  name: "PaginaAcceder",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
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
