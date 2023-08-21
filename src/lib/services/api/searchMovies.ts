import api from '@/lib/services/apiService'

interface SearchMoviesParams {
  query: string
  include_adult?: boolean
  page?: number
}

interface SearchMoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export default function searchMovies(params: SearchMoviesParams) {
  return api.get<SearchMoviesResponse>(`/search/movie`, { params })
}
