import Image from 'next/image'
import Link from 'next/link'
import { tmdbImage } from "@/lib/utils";

interface MovieItemProps {
  movie: Movie;
}

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        <figure className="rounded-md overflow-hidden mb-2">
          <Image
            src={tmdbImage("w440_and_h660_face", movie.poster_path)}
            alt={`${movie.title} Poster`}
            width={440}
            height={660}
          />
        </figure>
        <h3 className="font-medium">{movie.title}</h3>
        <p className="text-slate-500 text-sm mt-1">{movie.release_date}</p>
      </Link>
    </div>
  );
}
