
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3069/api/v1/tictoc-clubregina";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('__tkn');