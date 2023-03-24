import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaNoEncontrado from '../views/PaginaNoEncontrado.vue'
import PaginaBienvenido from '../views/PaginaBienvenido.vue'
import PaginaEmpleado from '../views/PaginaEmpleado.vue'
import PaginaAcceder from '../views/PaginaAcceder.vue'
import PaginaRegistrarme from '../views/PaginaRegistrarme.vue'
import PaginaInicio from '../views/PaginaInicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'PaginaInicio',
    component: PaginaInicio
  },
  {
    path: '/acceder',
    name: 'PaginaAcceder',
    component: PaginaAcceder
  },
  {
    path: '/registrarme',
    name: 'PaginaRegistrarme',
    component: PaginaRegistrarme
  },
  {
    path: '/empleado/:id',
    name: 'PaginaEmpleado',
    component: PaginaEmpleado
  },
  {
    path: '/bienvenido',
    name: 'PaginaBienvenido',
    component: PaginaBienvenido
  },
  {
    path: '*',
    name: 'PaginaNoEncontrado',
    component: PaginaNoEncontrado
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
