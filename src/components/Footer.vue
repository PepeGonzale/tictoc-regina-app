<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h4>Nosotros Somos</h4>
          <p>Club Regina es un hotel de lujo en Puerto Vallarta, México. Nos enfocamos en brindar una experiencia excepcional a nuestros huéspedes y colaboradores.</p>
        </div>
        <div class="col-sm-4">
          <h4>Contáctanos</h4>
          <address>
            Av. Paseo de la Marina Sur 205, Marina Vallarta<br>
            Puerto Vallarta, Jalisco<br>
            México<br>
            <abbr title="Phone">P:</abbr> +52 (322) 226-2300
          </address>
        </div>
        <div class="col-sm-4">
          <h4>Redes Sociales</h4>
          <ul class="list-unstyled">
            <li><a href="https://www.facebook.com/RaintreeVacationClub/">Facebook</a></li>
            <li><a href="https://www.youtube.com/user/raintreevacationclub">Youtube</a></li>
            <li><a href="https://www.instagram.com/raintreevacationclub/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <hr>
      <span class="text-muted">{{ copyright }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      copyright: `© ${new Date().getFullYear()} Club Regina, Puerto Vallarta`
    }
  }
}
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  background-color: #f2f2f2;
  padding: 20px 0;
}

.container {
  width: auto;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

h4 {
  font-weight: bold;
}

ul li a {
  color: #212529;
  text-decoration: none;
}

ul li a:hover {
  color: #007bff;
}

hr {
  border-top: 1px solid #ddd;
}
</style>
