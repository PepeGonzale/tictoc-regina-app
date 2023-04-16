import axios from "axios";

class UsuarioService {

    // API BASE URL (default): http://localhost:3066/api/v1/tictoc-clubregina/usuarios
    BASE_AXIOS_USUARIO = "/usuario";

    getMascotas(){
        return axios.get(this.BASE_AXIOS_USUARIO);
    }

    createUsuario(empleado){
        return axios.post(this.BASE_AXIOS_USUARIO, empleado, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        });
    }

    getMascota(mascotaId){
        return axios.get(`${this.BASE_AXIOS_USUARIO}/${mascotaId}`);
    }

    getSearchMascota(mascotaNombre){
        return axios.get(`${this.BASE_AXIOS_USUARIO}/search/${mascotaNombre}`);
    }

    getEmpleadoByNumEmpleado(numEmpleado){
        return axios.get(`${this.BASE_AXIOS_USUARIO}/s/numEmpleado/${numEmpleado}`);
    }

    updateMascota(mascota, mascotaId){
        return axios.put(`${this.BASE_AXIOS_USUARIO}/${mascotaId}`, mascota);
    }

    deleteMascota(mascotaId){
        return axios.delete(`${this.BASE_AXIOS_USUARIO}/${mascotaId}`);
    }

}

export default new UsuarioService();