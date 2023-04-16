import axios from "axios";

    
class AuthService {

    // API BASE URL (default): http://localhost:3066/api/v1/tictoc-clubregina/auth
    BASE_AXIOS_AUTH = "/auth";

    fncRegistrarEmpleado(empleado){
        return axios.post(`${this.BASE_AXIOS_AUTH}/registrar`, empleado, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json',
            }
        });
    }

}

export default new AuthService();