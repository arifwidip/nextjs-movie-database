import api from '@/lib/services/apiService'

export default function getMovie(id: number) {
  return api.get<MovieDetails>(`/movie/${id}`)
}
