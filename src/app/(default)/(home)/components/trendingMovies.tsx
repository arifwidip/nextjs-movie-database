import MovieItem from "@/components/ui/MovieItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TrendingMoviesProps {
  today: Movie[];
  week: Movie[];
}

export default function TrendingMovies({ today, week }: TrendingMoviesProps) {
  return (
    <div>
      <Tabs defaultValue="today">
        <div className="flex items-center mb-5">
          <h2 className="mr-5">Trending</h2>
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="today">
          <div className="overflow-y-auto w-full">
            <div className="flex flex-nowrap gap-x-5">
              {today.map((movie) => (
                <div key={movie.id} className="w-[150px] shrink-0">
                  <MovieItem movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="week">
          <div className="overflow-y-auto w-full">
            <div className="flex flex-nowrap gap-x-5">
              {week.map((movie) => (
                <div key={movie.id} className="w-[150px] shrink-0">
                  <MovieItem movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
