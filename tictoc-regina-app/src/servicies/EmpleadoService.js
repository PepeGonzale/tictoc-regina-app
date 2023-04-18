import axios from "axios";

class EmpleadoService {

    constructor() {
        // API BASE URL (default): http://localhost:3066/api/v1/tictoc-clubregina/empleado
        this._BASE_AXIOS_EMPLEADO = "/empleado";
    }

    fncTestEmpleado() {
        return axios.get(`${this._BASE_AXIOS_EMPLEADO}/test`);
    }

    fncDataEmpleado() {
        return axios.get(`${this._BASE_AXIOS_EMPLEADO}/data`);
    }

}

export default new EmpleadoService();