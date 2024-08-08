import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Movie({ movieId, movieImg, movieTitle,  movieTrade, movieGenre, movieYear, movieRuntime }) {
  let navigator = useNavigate();
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

  return (
    <div className="poster" id={movieId}>
        <div className="poster-content_img" style={{backgroundImage:`url(${movieImg})`}}></div>
        <div className="poster-content_on"></div>
        <div className="poster-content" onClick={() => navigator(`/Practice5/${movieId}`)} style={{cursor:"pointer"}}>
          <h2 className="moveAnmation">{movieTitle}</h2>
          <p className="poster-content_info moveAnmation">{movieYear}년{ConvertRuntime(movieRuntime)}</p>
          <p className="poster-content_info moveAnmation">
            <span>★</span> {movieTrade}
          </p>
          <p className="poster-content_info poster-content_info-genre moveAnmation">
            {movieGenre.map((g, index) => {
              let distinction = movieGenre.length != index+1 ? " • " : "";
              return `${g}${distinction}` ;
            })}
          </p>
        </div>
    </div>
  );
}
Movie.protoTyps = {
  movieId: PropTypes.number.isRequired,
  movieImg: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieTrade: PropTypes.number.isRequired,
  movieGenre: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieYear: PropTypes.number.isRequired,
  movieRuntime: PropTypes.number
};

export default Movie;
