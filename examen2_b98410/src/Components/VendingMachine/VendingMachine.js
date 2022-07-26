import { React, useState } from "react";
import "./VendingMachine.css";
import { SodasComp } from "../SodasComp/SodasComp";

export const VendingMachine = () => {
  const [updateSodaStock, setUpdateSodaStock] = useState(false);
  
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
          </div>
        </div>
          <div className="vending-machine-dispenser"></div>
      </div>
    </>
  );
};
