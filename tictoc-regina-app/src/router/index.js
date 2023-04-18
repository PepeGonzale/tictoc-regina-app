import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaNoEncontrado from '../views/PaginaNoEncontrado.vue'
import PaginaBienvenido from '../views/PaginaBienvenido.vue'
import PaginaEmpleado from '../views/PaginaEmpleado.vue'
import PaginaAcceder from '../views/PaginaAcceder.vue'
import PaginaRegistrarme from '../views/PaginaRegistrarme.vue'
import PaginaInicio from '../views/PaginaInicio.vue'
import PaginaDatos from '../views/PaginaDatos.vue'
import EmpleadoService from "@/servicies/EmpleadoService";
import Swal from "sweetalert2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/inicio',
    meta: { isAuthenticated: true } // ruta protegida
  },
  {
    path: '/inicio',
    name: 'PaginaInicio',
    component: PaginaInicio,
    meta: { isAuthenticated: true } // ruta protegida
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
    component: PaginaBienvenido,
    meta: { requiresAuth: true } // ruta protegida
  },
  {
    path: '/datos',
    name: 'PaginaDatos',
    component: PaginaDatos,
    meta: { requiresAuth: true } // ruta protegida
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
});

// verificar si el usuario está autenticado antes de acceder a una ruta protegida
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('__tkn');
    if (!token) {
      next({ name: 'PaginaInicio' });
      //***  Mensaje de error */
      Swal.fire({
        icon: 'warning',
        title: 'Es necesario la autenticación.',
        html: "¿Deseas darte de alta al sistema?" + "<br/>"
          + '<a href="/acceder">Reportar problema.<a/>',
        showDenyButton: true,
        confirmButtonText: 'Sí, quiero',
        footer: '<a href="/acceder">Tengo una cuenta y quiero acceder al sistema.<a/>'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = "/registrarme";
        }
      })
    } else {
      EmpleadoService.fncTestEmpleado()
        .then(() => {
          next();
        })
        .catch(error => {
          console.log(error);
          next({ name: 'PaginaInicio' });
        });
    }
  } else {
    next();
  }
});

// verificar si el usuario está autenticado para redireccionar al usuario
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isAuthenticated)) {
    EmpleadoService.fncTestEmpleado()
      .then(() => {
        next({ name: 'PaginaBienvenido' });
      })
      .catch(error => {
        console.log(error);
        next();
      });
  } else {
    next()
  }
})

export default router
