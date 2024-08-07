import { useEffect, useState } from "react";
import Loading from "../components/loading";
import axios from "axios";
import Movie from "../components/Movies";

function Practice5() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    //axios(비동기방식)를 동기방식처럼 동작할 수 있도록 await 사용.
    const response = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    setMovies(response.data.data.movies);
    setLoading(false);
  };

  return (
    <div className="content-div">
      {loading ? <Loading /> : null}
      {movies.map((movie) => {
        return (
            <Movie key={movie.id} movieId={movie.id} movieImg={movie.medium_cover_image} movieTitle={movie.title} movieSummary={movie.summary} movieGenre={movie.genres}/>
        )
      })}
    </div>
  );
}

export default Practice5;
