import { useEffect, useState } from "react";

import Loading from "../components/loading";
import axios from "axios";
import Movie from "../components/Movies";
import styled from "styled-components";


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
      {loading ? <Loading lodingColor="white"/> : null}
      <CardDiv>
      {movies.map((movie) => {
        return (
            <Movie key={movie.id} movieId={movie.id} movieImg={movie.medium_cover_image} movieTrade={movie.rating} movieTitle={movie.title} movieGenre={movie.genres} movieYear={movie.year} movieRuntime={movie.runtime}/>
        )
      })}
      </CardDiv>

    </div>
  );
}
const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    color: white;
    margin-left: 30px;
    img{
      aspect-ratio: 2 / 3;
      position: absolute;
    }
    .poster{
      background-color: black;
      position: relative;
      width: 230px;
      height: 345px;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }

    .poster-content_img{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .poster-content{
      display: flex;
      position: absolute;
      flex-direction: column;
    }
    .poster-content_info{
      font-size: 14px;
      margin-bottom: 1px;
      span{
        color: yellow;
      }
    }
    .moveAnmation{
      transform: translateY(20px);
      opacity: 0;
    }

    .poster:hover .moveAnmation{
      transform: translateY(0px);
      transition: all 0.2s;
      opacity: 1;
    }
    .poster-content_on{
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .poster:hover .poster-content_on{
      background: linear-gradient(rgba(0, 0, 0, 0.5), #000000);
    }

    .poster:hover .poster-content_info-genre{
      opacity: 0.5;
    }
`;

export default Practice5;
