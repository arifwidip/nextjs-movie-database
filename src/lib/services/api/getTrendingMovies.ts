import api from '@/lib/services/apiService'

interface TrendingMoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export default function getTrendingMovies(timeWindow: String) {
  return api.get<TrendingMoviesResponse>(`/trending/movie/${timeWindow}`)
}
