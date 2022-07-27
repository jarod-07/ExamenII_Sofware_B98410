import { React, useState, useEffect } from "react";
import { changeInfo } from '../../Data/ChangeInfo';
import { sodasInfo } from "../../Data/SodasInfo";
import { getTotalCoins, updateCoinsStock } from "../../Utils/CoinsStockOperations";
import { outOfService } from "../../Utils/ErrorAlert";
import { getTotalSodas } from "../../Utils/SodasStockOperation";
import "./MoneyComp.css";

export const MoneyComp = (props) => {
  const [bill, setBill] = useState(0);
  const [fiveHCoin, setFiveHCoin] = useState(0);
  const [hundredCoin, setHundredCoin] = useState(0);
  const [fiftyCoin, setFiftyCoin] = useState(0);
  const [twentyFiveCoin, setTwentyFiveCoin] = useState(0);

  const reset = () =>{
    setBill(0);
    setFiveHCoin(0);
    setHundredCoin(0);
    setFiftyCoin(0);
    setTwentyFiveCoin(0);
  }

  useEffect(() => {
    let userPayment = bill * 1000 + fiveHCoin * 500 + hundredCoin * 100 +
                      fiftyCoin * 50 + twentyFiveCoin * 25;

    if (userPayment - props.totalCost < 0 || props.totalCost === 0) {
      props.setMoneyEntered(userPayment);
      props.setChange(0);
    } else {
      props.setMoneyEntered(userPayment);
      props.setChange(userPayment - props.totalCost);
    }
    if(props.pay === true){
      updateCoinsStock([fiveHCoin, hundredCoin, fiftyCoin, twentyFiveCoin], changeInfo);
      props.setCoinsStockUpdated(true)
    }
    if(props.reset === true ){
      reset();
      props.setReset(false);
    }
    if(getTotalCoins(changeInfo) === 0 || getTotalSodas(sodasInfo) === 0){
      outOfService();
      props.setMoneyEntered(-1);
      props.setOutOfService(true)
    }
  }, [ bill, fiveHCoin,  hundredCoin, fiftyCoin, twentyFiveCoin, props.totalCost, props.pay, props.reset]);

  return (
    <div className="money-input">
      <div className="money-input-title">Ingresar El Dinero</div>
      <div className="money-input-1000">
        <div className="money-div">1000</div>
         <button
          className="money-btn"
          onClick={() => {
            if (bill > 0) {
              setBill(bill - 1);
            }
          }}
        >
          -
        </button>
        <label>{bill}</label>
        <button
          className="money-btn"
          onClick={() => {
            setBill(bill + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="money-input-500">
        <div className="money-div">500</div>
        <button
          className="money-btn"
          onClick={() => {
            if (fiveHCoin > 0) {
              setFiveHCoin(fiveHCoin - 1);
            }
          }}
        >
          -
        </button>
        <label>{fiveHCoin}</label>
        <button
          className="money-btn"
          onClick={() => {
            setFiveHCoin(fiveHCoin + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="money-input-100">
        <div className="money-div">100</div>
        <button
          className="money-btn"
          onClick={() => {
            if (hundredCoin > 0) {
              setHundredCoin(hundredCoin - 1);
            }
          }}
        >
          -
        </button>
        <label>{hundredCoin}</label>
        <button
          className="money-btn"
          onClick={() => {
            setHundredCoin(hundredCoin + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="money-input-50">
        <div className="money-div">50</div>
        <button
          className="money-btn"
          onClick={() => {
            if (fiftyCoin > 0) {
              setFiftyCoin(fiftyCoin - 1);
            }
          }}
        >
          -
        </button>
        <label>{fiftyCoin}</label>
        <button
          className="money-btn"
          onClick={() => {
            setFiftyCoin(fiftyCoin + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="money-input-25">
        <div className="money-div">25</div>
                <button
          className="money-btn"
          onClick={() => {
            if (twentyFiveCoin > 0) {
              setTwentyFiveCoin(twentyFiveCoin - 1);
            }
          }}
        >
          -
        </button>
        <label>{twentyFiveCoin}</label>
        <button
          className="money-btn"
          onClick={() => {
            setTwentyFiveCoin(twentyFiveCoin + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
