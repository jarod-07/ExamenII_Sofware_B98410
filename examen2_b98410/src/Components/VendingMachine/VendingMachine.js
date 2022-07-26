import { React, useState } from "react";
import "./VendingMachine.css";
import { SodasComp } from "../SodasComp/SodasComp";
import { SodasTypeInput } from "../SodasTypeInput/SodasTypeInput";

export const VendingMachine = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [pay, setPay] = useState(false);
  const [updateSodaStock, setUpdateSodaStock] = useState(false);
  const [reset, setReset] = useState(false);
  
  return (
    <>
    <div className="name">Jarod Venegas Alpizar - B98410</div>
      <div className="vending-machine">
        <div className="vending-machine-top">
          <div className="vending-machine-sodas">
          <SodasComp
              updateSodaStock={updateSodaStock}
              setUpdateSodaStock={setUpdateSodaStock}
            />
          </div>
          <div className="vending-machine-panel">
          <SodasTypeInput
              setTotalCost={setTotalCost}
              pay={pay}
              setPay={setPay}
              setUpdateSodaStock={setUpdateSodaStock}
              reset={reset}
            />
          </div>
        </div>
          <div className="vending-machine-dispenser"></div>
      </div>
    </>
  );
};
