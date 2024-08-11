import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/loading";
import playImg from "./../img/octicon-play-24.svg";
import backArrow from "./../img/arrow-back.svg";
import { useAxios } from "../hooks/useAxios";

let Detail = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 227px;
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
  .movie-description {
    width: 896px;
  }
  .movie-Info {
    margin: 40px 0px;
    min-width: 896px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:30px;
  }
  .fill {
    color: yellow;
    position: absolute;
    left: 0;
    top: 0;
  }
  .movie-Info_detail{
    max-width: 681px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .movieRate-info_rate {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .movieRate-info_rate_star {
    position: relative;
  }
  .clip {
    clip-path: polygon(0% 0%, var(--clip) 0%, var(--clip) 100%, 0% 100%);
  }
`;
let BackArrow = styled.img`
  width: 50px;
  position: absolute;
  left: 10px;
  top: 80px;
`;
let GenreBadge = styled.span`
  background-color: #da680b;
  border-radius: 10px;
  font-size: 0.8em;
  margin-right: 1em;
  padding: 0.5em 1em;
  color: white;
`;

function MovieDetail() {
  let navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { id } = useParams();

  function ConvertRuntime(runtime) {
    if (runtime) {
      const hours = Math.floor(runtime / 60);
      const minute = runtime % 60;
      if (minute) {
        return hours ? `• ${hours}시간 ${minute} 분` : `• ${minute} 분`;
      }
      return `• ${hours}시간`;
    }
    return null;
  }

  function starFill() {
    let fill = Math.floor(movieData.rating / 2);
    let halfStarPercentage = (movieData.rating / 2 - fill).toFixed(1) * 100;
    let creatStar = [];
    for (let i = 0; i < fill; i++) {
      creatStar.push(<span>★</span>);
    }
    creatStar.push(
      <span className="clip" style={{ "--clip": `${halfStarPercentage}%` }}>
        ★
      </span>
    );
    return creatStar;
  }
  const { data, loading, error, refetch } = useAxios({
    url: `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  });

  useEffect(() => {
    if (data && !loading) {
      setMovieData(data.data.data.movie);
    }
  }, [data, loading]);


  return (
    <div className="content-div">
      <BackArrow
        src={backArrow}
        onClick={() => {
          navigate(-1);
        }}
        style={{ cursor: "pointer", zIndex: "998" }}
      ></BackArrow>
      {loading ? (
        <Loading lodingColor="white" />
      ) : (
        <Detail>
          <div className="Detail-info">
            <PlayMovie>
              <img
                className="theater-img"
                src={movieData.background_image_original}
                onLoad={() => setImageLoaded(true)}
              />
              {
                imageLoaded && (
                  <img
                  className="octicon-play-24"
                  src={playImg}
                  onClick={() => {
                    window.open(movieData.url);
                  }}
                />
                )
              }

            </PlayMovie>
            {
                imageLoaded && (
            <MovieInfo>
              <div className="movie-Info">
                <img
                  className="poster-img"
                  src={movieData.medium_cover_image}
                  style={{width: "20%"}}
                />
                <div className="movie-Info_detail">
                  <h1>{movieData.title}</h1>
                  <div>
                    {movieData.year}년 {ConvertRuntime(movieData.runtime)}
                  </div>
                  <div className="movieRate-info">
                    <div className="movieRate-info_rate">
                      <div className="movieRate-info_rate_star">
                        <div className="stars">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                        <div className="stars fill">{starFill()}</div>
                      </div>
                      <p>{movieData.rating}</p>
                      <div>
                        <span style={{ color: "red" }}>♥</span>{" "}
                        {movieData.like_count}
                      </div>
                    </div>
                  </div>
                  <div key={id}>
                    {movieData.genres && movieData.genres.map((genre) => {
                      return <GenreBadge>{genre}</GenreBadge>;
                    })}
                  </div>
                </div>
              </div>
              <div className="movie-description">
                {movieData.description_full}
              </div>
            </MovieInfo>
                )}
          </div>
        </Detail>
      )}
    </div>
  );
}
export default MovieDetail;
