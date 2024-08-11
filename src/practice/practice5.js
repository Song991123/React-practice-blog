import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/loading";
import Movie from "../components/Movies";
import styled from "styled-components";
import { useAxios } from "../hooks/useAxios";
import { setMovies } from "../store";


function Practice5() {
  let dispatch = useDispatch();
  let movies = useSelector((state) => {
    return state.movies;
  });
  const { data, loading, error } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  });


  useEffect(() => {
  // 영화 데이터가 없는 경우와 로딩이 완료된 후에만 dispatch 실행
    if (movies.length === 0 && !loading && data) {
      dispatch(setMovies(data.data.data.movies));
    }
  });

  return (
    <div className="content-div">
      {movies.length === 0 && loading ? <Loading lodingColor="white"/> : null}
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
    justify-content: center;

    .poster{
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
