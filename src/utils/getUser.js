import axios from 'axios';
import getAuthToken from './getAuthToken'

const getUser = async () => {

    const token = getAuthToken();
    const url = "https://laravel-product-api.herokuapp.com/api";

    if (token) {
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        let res = await axios.get(`${url}/user`);
        
        if (res.data.success) {
          const user = res.data.user;
          return user;
        } 
      } catch (err) {
        return (err.status);
      }
    } 
}

export default getUser;
