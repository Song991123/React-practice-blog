import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/loading";
import playImg from "./../img/octicon-play-24.svg";
import backArrow from "./../img/arrow-back.svg";

let Detail = styled.div`
  display: flex;
  justify-content: center;
`;

let PlayMovie = styled.div`
  position: relative;

  .octicon-play-24 {
    width: 132px;
    height: 132px;
    position: absolute;
    left: calc(50% - 66px);
    top: calc(50% - 65.5px);
    opacity: 0.4;
    cursor: pointer;
  }
`;

let MovieInfo = styled.div`
    color: white;
    .movie-description{
        width: 896px;
    }
`;
let BackArrow = styled.img`
  width: 50px;
  position: absolute;
  left: 10px;
  top: 80px;
`;

function MovieDetail() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();
  
  function ConvertRuntime(runtime) {
    if (runtime) {
      const hours = Math.floor(runtime / 60);
      const minute = runtime % 60;
      if (minute) {
        return hours ? `• ${hours}시간 ${minute} 분`: `• ${minute} 분`;
      }
      return `• ${hours}시간`;
    }
    return null;
  }

  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    const response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    setMovieData(response.data.data.movie);
    setLoading(false);
  };

  return (
    <div className="content-div">
      <BackArrow src={backArrow} onClick={() => {navigate(-1)}} style={{cursor:"pointer"}}></BackArrow>
      {loading ? (
        <Loading lodingColor="white"/>
      ) : (
        <Detail>
          <div className="Detail-info">
            <PlayMovie>
              <img
                className="theater-img"
                src={movieData.background_image_original}
              />
              <img className="octicon-play-24" src={playImg} onClick={()=>{window.open(movieData.url)}}/>
            </PlayMovie>
            <MovieInfo>
              <img className="poster-img" src={movieData.medium_cover_image} />
              <h1>{movieData.title}</h1>
              <div>{movieData.year}년 {ConvertRuntime(movieData.runtime)}</div>
              <div className="movieRate-info">
                <span>rate : {movieData.rating}</span>
                <span>like : {movieData.like_count}</span>
              </div>
              <div key={id}>
                {movieData.genres.map((genre) => {
                    return(
                        <div>{genre}</div>
                    )
                })}
              </div>
              <div className="movie-description">
                {movieData.description_full}
              </div>
            </MovieInfo>
          </div>
        </Detail>
      )}
    </div>
  );
}
export default MovieDetail;
