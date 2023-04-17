import axios from "axios";


class AuthService {

    // API BASE URL (default): http://localhost:3066/api/v1/tictoc-clubregina/auth
    BASE_AXIOS_AUTH = "/auth";

    fncRegistrarEmpleado(empleado) {
        /**
         * Campos requeridos:
         * nombres
         * apellidos
         * departamento
         * numero_colaborador
         * correo
         * contrasenha
         */
        return axios.post(`${this.BASE_AXIOS_AUTH}/registrar`, empleado, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json',
            }
        });
    }

    fncIngresarEmpleado(empleado) {
        /**
         * Campos requeridos:
         * numero_colaborador
         * contrasenha
         */
        return axios.post(`${this.BASE_AXIOS_AUTH}/ingresar`, empleado, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json',
            }
        });
    }

}

export default new AuthService();