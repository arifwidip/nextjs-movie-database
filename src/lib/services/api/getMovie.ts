import api from '@/lib/services/apiService'

interface MovieResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export default function getMovie(id: number) {
  return api.get<MovieDetails>(`/movie/${id}`)
}
