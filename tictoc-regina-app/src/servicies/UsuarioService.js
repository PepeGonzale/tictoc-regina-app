import axios from "axios";

const BASE_URL_TICTOC_CLUBREGINA_API = (process.env.BASE_URL_TICTOC_CLUBREGINA_API) 
    ? process.env.BASE_URL_TICTOC_CLUBREGINA_API 
    : "http://localhost:3069/api/v1/tictoc-clubregina/usuario";
    
axios.defaults.baseURL = BASE_URL_TICTOC_CLUBREGINA_API;

class UsuarioService {

    getMascotas(){
        return axios.get(BASE_URL_TICTOC_CLUBREGINA_API);
    }

    createUsuario(empleado){
        return axios.post(BASE_URL_TICTOC_CLUBREGINA_API, empleado, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        });
    }

    getMascota(mascotaId){
        return axios.get(`${BASE_URL_TICTOC_CLUBREGINA_API}/${mascotaId}`);
    }

    getSearchMascota(mascotaNombre){
        return axios.get(`${BASE_URL_TICTOC_CLUBREGINA_API}/search/${mascotaNombre}`);
    }

    getEmpleadoByNumEmpleado(numEmpleado){
        return axios.get(`${BASE_URL_TICTOC_CLUBREGINA_API}/s/numEmpleado/${numEmpleado}`);
    }

    updateMascota(mascota, mascotaId){
        return axios.put(`${BASE_URL_TICTOC_CLUBREGINA_API}/${mascotaId}`, mascota);
    }

    deleteMascota(mascotaId){
        return axios.delete(`${BASE_URL_TICTOC_CLUBREGINA_API}/${mascotaId}`);
    }

}

export default new UsuarioService();