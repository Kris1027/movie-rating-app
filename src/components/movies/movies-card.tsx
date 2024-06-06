import { type movieProps } from "./movies";
import { Card, CardContent, CardHeader } from "../ui/card";
import { FaStar, FaCalendar } from "react-icons/fa";

export function MoviesCard({ movie }: { movie: movieProps }) {
  return (
    <Card>
      <CardHeader>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        {movie.title}
      </CardHeader>
      <CardContent>
        <p className="flex items-center gap-1">
          <FaCalendar size={20} /> {movie.release_date}
        </p>
        <p className="flex items-center gap-1 font-bold">
          <FaStar color="#facc15" size={20} /> {movie.vote_average.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}
