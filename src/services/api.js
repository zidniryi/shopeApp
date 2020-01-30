import axios from 'axios'

// Change http://192.168.43.166:3000 with your IP address.
const api = axios.create({
  baseURL: 'http://192.168.1.69:3000/api/'
})

export default api
