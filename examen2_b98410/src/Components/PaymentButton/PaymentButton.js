import React from "react";
import { changeSummaryCalculation } from "../../Utils/CalculateChange";
import { changeInfo } from "../../Data/ChangeInfo";
import "./PaymentButton.css";

export const PaymentButton = (props) => {
  return (
    <button
      className={`pay-btn ${props.totalCost !== 0 && props.moneyEntered >= props.totalCost ? (' ') : ('pay-btn-disable')}`}
      disabled={props.totalCost !== 0 && props.moneyEntered >= props.totalCost ? (false) : (true)}
      onClick={() => {
        let changeSummary = [];
        changeSummary = changeSummaryCalculation(props.change, changeInfo);
        props.setChangeSumary(changeSummary);
        if(changeSummary[0].coin === 222){
          props.setPay(false);
          props.setChangeSumary([{ Coin: 0, Count: 0 }]);
        }else{
          if(changeSummary[0].coin === 111){
            props.setChangeSumary([{ Coin: 0, Count: 0 }]);
            props.setPay(true);
          }
          props.setPay(true);
        }
        props.setReset(true);
      }}
      >
      Pagar
    </button>
  );
};
