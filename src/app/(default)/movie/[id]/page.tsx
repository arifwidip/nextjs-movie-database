import { MOVIE_EMBED_URL } from "@/config";
import getMovie from "@/lib/services/api/getMovie";
import { tmdbImage } from "@/lib/utils";
import Image from "next/image";

export default async function Movie({ params }: { params: { id: number } }) {
  const movieDetails = await getMovie(params.id);
  const movie = movieDetails.data;

  return (
    <div>
      <div className="w-full aspect-[1440/400] relative">
        <Image
          src={tmdbImage("w1920_and_h800_multi_faces", movie.poster_path)}
          alt={`${movie.title} Poster`}
          fill
          className="object-cover"
        />
        <div className="bg-black inset-0 absolute bg-opacity-70"></div>
      </div>
      <div className="container relative">
        <div className="grid grid-cols-12 gap-x-8 mb-20">
          <div className="col-span-3 ">
            <figure className="-mt-[50%] overflow-hidden rounded-lg">
              <Image
                src={tmdbImage("w600_and_h900_bestv2", movie.poster_path)}
                alt={`${movie.title} Poster`}
                width={600}
                height={900}
                className="object-cover"
              />
            </figure>
          </div>
          <div className="col-span-9">
            <h1 className="text-5xl font-bold pt-5 mb-5">{movie.title}</h1>
            <div className="w-full aspect-video">
              <iframe src={`${MOVIE_EMBED_URL}/${movie.id}`} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
