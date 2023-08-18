import { TMDB_API_KEY, TMDB_API_URL } from '@/config'
import Axios from 'axios'

const TIMEOUT = 10000

const instance = Axios.create({
  baseURL: TMDB_API_URL,
  timeout: TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`,
  }
})

// instance.interceptors.response.use((response) => {
//   return response.data;
// })

export default instance
