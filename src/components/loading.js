import PropTypes from "prop-types";

function Loading({lodingColor="black"}) {
  let color = lodingColor;
  return (
    <div className="spinner-border" role="status" style={{color:`${color}`}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

Loading.propTypes = {
  lodingColor: PropTypes.string
};

export default Loading;