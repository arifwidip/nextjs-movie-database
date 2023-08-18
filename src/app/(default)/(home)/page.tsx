import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BeakerIcon } from "@heroicons/react/24/solid";
import getTrendingMovies from "@/lib/services/api/getTrendingMovies";
import { Suspense } from "react";
import TrendingMovies from "./components/trendingMovies";

export default async function Home() {
  const todayTrending = await getTrendingMovies("day");
  const weekTrending = await getTrendingMovies("week");

  return (
    <div className="container py-10">
      <Suspense>
        <TrendingMovies
          today={todayTrending.data.results}
          week={weekTrending.data.results}
        />
      </Suspense>
    </div>
  );
}
