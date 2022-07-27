import { React, useState, useEffect } from "react";
import "./SodasTypeInput.css";
import { sodasInfo } from "../../Data/SodasInfo";
import { outOfService, sodaErrorAlert } from "../../Utils/ErrorAlert";
import { getTotalSodas, updateSodaStock } from "../../Utils/SodasStockOperation";

export const SodasTypeInput = (props) => {
  const [cocaCola, setCocaCola] = useState(0);
  const [pepsi, setPepsi] = useState(0);
  const [fanta, setFanta] = useState(0);
  const [sprite, setSprite] = useState(0);

  const reset = () => {
    setCocaCola(0);
    setPepsi(0);
    setFanta(0);
    setSprite(0);
  };

  useEffect(() => {
    let value = cocaCola * 500 + pepsi * 600 + fanta * 550 + sprite * 725;
    props.setTotalCost(value);
    
    if (props.pay === true) {
      updateSodaStock([cocaCola, pepsi, fanta, sprite], sodasInfo)
      props.setUpdateSodaStock(true);
      props.setPay(false);
    }
    if(props.reset === true ){
      reset();
    }
  }, [cocaCola, pepsi, fanta, sprite, props.pay, props.reset]);

  return (
    <div>
      <div className="sodas-types">
        <div className="sodas-type-title">
          <div>Sodas</div>
        </div>
        <div className="soda-cocaCola">
          <div className="soda-label">Coca Cola</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (cocaCola > 0) {
                setCocaCola(cocaCola - 1);
              }
            }}
          >
            -
          </button>
          <div className="soda-count">{cocaCola}</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (cocaCola >= sodasInfo[0].count) {
                sodaErrorAlert("Coca Cola");
              } else {
                setCocaCola(cocaCola + 1);
              }
            }}
          >
            +
          </button>
        </div>
        <div className="soda-pepsi">
          <div className="soda-label">Pepsi</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (pepsi > 0) {
                setPepsi(pepsi - 1);
              }
            }}
          >
            -
          </button>
          <div className="soda-count">{pepsi}</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (pepsi >= sodasInfo[1].count) {
                sodaErrorAlert("Pepsi");
              } else {
                setPepsi(pepsi + 1);
              }
            }}
          >
            +
          </button>
        </div>
        <div className="soda-fanta">
          <div className="soda-label">Fanta</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (fanta > 0) {
                setFanta(fanta - 1);
              }
            }}
          >
            -
          </button>
          <div className="soda-count">{fanta}</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (fanta >= sodasInfo[2].count) {
                sodaErrorAlert("Fanta");
              } else {
                setFanta(fanta + 1);
              }
            }}
          >
            +
          </button>
        </div>
        <div className="soda-sprite">
          <div className="soda-label">Sprite</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (sprite > 0) {
                setSprite(sprite - 1);
              }
            }}
          >
            -
          </button>
          <div className="soda-count">{sprite}</div>
          <button
            className="soda-btn"
            onClick={() => {
              if (sprite >= sodasInfo[3].count) {
                sodaErrorAlert("Sprite");
              } else {
                setSprite(sprite + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
