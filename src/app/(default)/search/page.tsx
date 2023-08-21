import MovieItem from "@/components/ui/MovieItem";
import searchMovies from "@/lib/services/api/searchMovies";

interface SearchProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Search({ searchParams }: SearchProps) {
  const searchQuery = searchParams.query?.toString().toLowerCase()
  const results = await searchMovies({
    query: searchQuery!,
    include_adult: true,
  })

  return (
    <div className="container py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-7">
        {results?.data?.results.map((movie) => (
          <div key={movie.id} className="col-span-1">
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";
