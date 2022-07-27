import { React, useState } from "react";
import "./VendingMachine.css";
import { SodasComp } from "../SodasComp/SodasComp";
import { SodasTypeInput } from "../SodasTypeInput/SodasTypeInput";
import { MoneyComp } from "../MoneyComp/MoneyComp";
import { ChangeSummary } from "../ChangeSummary/ChangeSummary";
import { VendingMachineReport } from "../VendingMachineReport/VendingMachineReport";
import { PaymentButton } from "../PaymentButton/PaymentButton";

export const VendingMachine = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [moneyEntered, setMoneyEntered] = useState(0);
  const [change, setChange] = useState(0);
  const [changeSumary, setChangeSumary] = useState([]);
  const [pay, setPay] = useState(false);
  const [updateSodaStock, setUpdateSodaStock] = useState(false);
  const [reset, setReset] = useState(false);
  const [coinsStockUpdated, setCoinsStockUpdated] = useState(false);
  const [outOfService, setOutOfService] = useState(false);

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
            <VendingMachineReport data={totalCost} tag={"A Pagar"} />
            <MoneyComp
              totalCost={totalCost}
              setChange={setChange}
              pay={pay}
              reset={reset}
              setReset={setReset}
              setMoneyEntered={setMoneyEntered}
              setCoinsStockUpdated={setCoinsStockUpdated}
              setOutOfService={setOutOfService}
            />
            <VendingMachineReport data={change} tag={"Vuelto"} />
            <PaymentButton
              change={change}
              totalCost={totalCost}
              moneyEntered={moneyEntered}
              setChangeSumary={setChangeSumary}
              setPay={setPay}
              setReset={setReset}
              coinsStockUpdated={coinsStockUpdated}
              setCoinsStockUpdated={setCoinsStockUpdated}
            />
          </div>
        </div>
        {outOfService ? (
          <div className="vending-machine-dispenser">Maquina Fuera De Servicio</div>
        ) : (
          <div className="vending-machine-dispenser"></div>
        )}
      </div>
      <ChangeSummary changeSumary={changeSumary} change={change} />
    </>
  );
};
