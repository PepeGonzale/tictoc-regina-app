import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaNoEncontrado from '../views/PaginaNoEncontrado.vue'
import PaginaBienvenido from '../views/PaginaBienvenido.vue'
import PaginaEmpleado from '../views/PaginaEmpleado.vue'
import PaginaEntrada from '../views/PaginaEntrada.vue'
import PaginaInicio from '../views/PaginaInicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bienvenido'
  },
  {
    path: '/inicio',
    name: 'PaginaInicio',
    component: PaginaInicio
  },
  {
    path: '/entrada',
    name: 'PaginaEntrada',
    component: PaginaEntrada
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
  routes
})

export default router
