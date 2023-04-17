import axios from "axios";


class EmpleadoService {

    // API BASE URL (default): http://localhost:3066/api/v1/tictoc-clubregina/empleado
    BASE_AXIOS_EMPLEADO = "/empleado";

    fncTestEmpleado() {
        return axios.get(`${this.BASE_AXIOS_EMPLEADO}/test`);
    }

    fncTestEmpleado() {
        return axios.get(`${this.BASE_AXIOS_EMPLEADO}/test`);
    }

}

export default new EmpleadoService();