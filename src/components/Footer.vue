<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h4>Nosotros Somos</h4>
          <p>Club Regina es un hotel de lujo en Puerto Vallarta, México. Nos enfocamos en brindar una experiencia excepcional a nuestros huéspedes y colaboradores.</p>
        </div>
        <div class="col-sm-6">
          <h4>Redes Sociales</h4>
          <ul class="list-unstyled rrss-h" >
            <li class="rrss"><span class="mdi mdi-facebook mdi-24px"></span><a href="https://www.facebook.com/RaintreeVacationClub/">Facebook</a></li>
            <li class="rrss"><span class="mdi mdi-youtube mdi-24px"></span><a href="https://www.youtube.com/user/raintreevacationclub">Youtube</a></li>
            <li class="rrss"><span class="mdi mdi-instagram mdi-24px"></span><a href="https://www.instagram.com/raintreevacationclub/">Instagram</a></li>
            <li class="rrss"><span class="mdi mdi-web mdi-24px"></span><a href="https://www.raintreevacationclub.com/es/vacation-resorts/mexico/puerto-vallarta/club-regina-puerto-vallarta/">Sitio Web</a></li>
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

.rrss-h {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 15px;
}

.rrss {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
