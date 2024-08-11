import { useEffect, useState } from "react";
import Loading from "../components/loading";
import selectArrow from "./../img/select_arrow.svg";
import { useAxios } from "../hooks/useAxios";

function Practice4() {
  const [coins, setCoins] = useState([]);
  const [InputValue, SetInputValue] = useState(1);
  const [chooseindex, setChooseIndex] = useState(0);

  const { data, loading, error } = useAxios({
    url: "https://api.coinpaprika.com/v1/tickers"
  });

  useEffect(() => {
    if(data && !loading){
      setCoins(data.data);
    }
  })
  
  const onChange = (e) => {
    SetInputValue(e.target.value);
  };
  const onSelect = (e) => {
    setChooseIndex(parseInt(e.target.value));
  };

  const USDToCoin = () => {
    if (InputValue === "" || coins.length === 0) {
      return null;
    }
    let CanBuyCoin = InputValue / coins[chooseindex].quotes.USD.price;
    return CanBuyCoin.toFixed(8);
  };

  return (
    <div className="content-div">
      <h1>The coins!</h1>
      <p>Total {coins.length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
      <hr/>
      {loading ? <Loading/> : null}
      <h3>USD</h3>
      <form>
        <div
          className="input-group mb-3"
          style={{ width: "500px", margin: "auto" }}
        >
          <input
            type="number"
            className="form-control"
            placeholder="Write your Money..."
            aria-label="Write your Money..."
            aria-describedby="button-addon2"
            onChange={onChange}
            value={InputValue}
          />
        </div>
      </form>
      {chooseindex >= 0 && !loading ? (
        <div>
          <select 
            className="form-select"
            aria-label="Disabled select example"
            value={chooseindex}
            onChange={onSelect}
            style={{backgroundImage: `url(${selectArrow})`}}
          >
            {coins.map(function (coin, index) {
              return (
                <option value={`${index}`} key={index}>
                  {coin.name} ({coin.symbol})
                </option>
              );
            })}
          </select>
          <form>
            <div
              className="input-group mb-3"
              style={{ width: "500px", margin: "auto" }}
            >
              <input
                type="number"
                className="form-control"
                placeholder="Write your Money..."
                aria-label="Write your Money..."
                aria-describedby="button-addon2"
                value={USDToCoin()}
                disabled
              />
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Practice4;
