import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

function Movie({movieId, movieImg, movieTitle, movieSummary, movieGenre}){
    let navigator = useNavigate();

    return(
        <div>
        <img src={movieImg}/>
        <h2 onClick={() => navigator(`/Practice5/${movieId}`)} style={{cursor:"pointer"}}>{movieTitle}</h2>
        <p>{movieSummary}</p>
        <ul>
          {movieGenre.map((g) => {
            return <li key={g}>{g}</li>;
          })}
        </ul>
      </div>
    )
}
Movie.protoTyps = {
    movieId: PropTypes.number.isRequired,
    movieImg: PropTypes.string.isRequired,
    movieTitle: PropTypes.string.isRequired,
    movieSummary:PropTypes.string.isRequired,
    movieGenre:PropTypes.arrayOf(PropTypes.string).isRequired,
}



export default Movie; 