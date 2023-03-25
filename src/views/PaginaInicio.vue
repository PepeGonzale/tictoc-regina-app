<template>
  <div>
    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=3"
      img-alt="Card Image"
      text-variant="white"
      title="Tick Tock Regina"
    >
      <b-card-text
        >Esta herramienta te permitirá revisar tu entrada y salida del trabajo
        de manera fácil y eficiente.</b-card-text
      >
    </b-card>
    <div class="home mt-3">
      <div class="container">
        <h1></h1>
        <p></p>
        <h2>¿Cómo funciona?</h2>
        <p>
          Al ingresar a la herramienta, podrás ver un registro detallado de tus
          entradas y salidas, junto con la hora y fecha exactas de cada una.
        </p>
        <p>
          Además, podrás registrar tu entrada y salida del trabajo al presionar
          el botón correspondiente. Asegúrate de hacerlo al inicio y final de tu
          jornada laboral para mantener un registro preciso y confiable de tus
          horas de trabajo.
        </p>
        <h2>¿Qué beneficios tiene para ti?</h2>
        <p>El uso de esta herramienta te permite:</p>
        <ul>
          <li>Llevar un registro preciso de tus horas de trabajo</li>
          <li>
            Facilitar la verificación de tu asistencia laboral por parte de tu
            supervisor
          </li>
          <li>
            Evitar errores y confusiones en el registro de tus horas de trabajo
          </li>
          <li>
            Garantizar el cumplimiento de las políticas de asistencia laboral de
            Club Regina, Puerto Vallarta
          </li>
        </ul>
        <p>
          ¡Gracias por tu colaboración en el uso de esta herramienta! Si tienes
          alguna duda o problema técnico, por favor no dudes en contactar al
          equipo de soporte técnico de Club Regina, Puerto Vallarta.
        </p>
      </div>

      <div class="container">
        <div>
          <b-card-group deck>
            <b-card
              bg-variant="light"
              header="Registro de entrada y salida"
              class="text-center"
            >
              <b-card-text>
                <span class="mdi mdi-exit-run" style="font-size: 120px;"></span><br />
                Accede al sistema para registrar tu entrada y salida del
                trabajo.
              </b-card-text>
            </b-card>

            <b-card
              bg-variant="light"
              header="Contacto con recursos humanos"
              class="text-center"
            >
              <b-card-text>
                <span class="mdi mdi-account-group-outline" style="font-size: 120px;"></span><br />
                Revisa tu horario de trabajo para saber en qué días y horarios
                debes estar presente.</b-card-text
              >
            </b-card>

            <b-card
              bg-variant="light"
              header="Registro de entrada y salida"
              class="text-center"
            >
              <b-card-text
                >
                <span class="mdi mdi-face-agent" style="font-size: 120px;"></span><br />
                Si necesitas ayuda o tienes alguna duda, contacta con el
                departamento de recursos humanos.</b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>

    <iframe
      class="mt-3"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14933.2155949112!2d-105.2489107!3d20.6572117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145b84bc90a43%3A0xd460ef9aa6d9f1c!2sClub%20Regina%20Puerto%20Vallarta!5e0!3m2!1ses-419!2smx!4v1679700352915!5m2!1ses-419!2smx"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped lang="css">
@import "../assets/estilos.css";

.home {
  background-color: var(--secondary-color);
  padding: 50px 0;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
}
.custom-boton {
  background-color: var(--primary-dark-color);
  color: var(--secondary-color);
}

h1 {
  font-size: 36px;
  margin-bottom: 30px;
}
h2 {
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
}
ul {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
  text-align: left;
}
li {
  margin-bottom: 10px;
}
</style>
