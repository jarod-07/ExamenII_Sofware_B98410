import { React, useState, useEffect } from "react";
import "./SodasComp.css";
import { getSodasCount } from "../../Utils/SodasStockOperation";
import { sodasInfo } from "../../Data/SodasInfo";

export const SodasComp = (props) => {
  const [cocaCola, setCocaCola] = useState(0);
  const [pepsi, setPepsi] = useState(0);
  const [fanta, setFanta] = useState(0);
  const [sprite, setSprite] = useState(0);

  const setSodasCount = () => {
    setCocaCola(getSodasCount("Coca Cola", sodasInfo));
    setPepsi(getSodasCount("Pepsi", sodasInfo));
    setFanta(getSodasCount("Fanta", sodasInfo));
    setSprite(getSodasCount("Sprite", sodasInfo));
  }
  
  useEffect(() => {
    setSodasCount();
    props.setUpdateSodaStock(false);
  }, [props.updateSodaStock]);

  return (
    <div className="sodas-div">
      <div className="sodaComp-cocaCola">
        <img
          className="sodas-logo"
          src="https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg"
          alt=""
        ></img>
        <label className="title-logo-text">
          <b>Cant: </b>
          {cocaCola}
          <b> Costo: </b>500
        </label>
      </div>
      <div className="sodaComp-pepsi">
        <img
          className="sodas-logo"
          src="https://brandemia.org/contenido/subidas/2011/03/pepsi-a-traves-de-la-historia.jpg"
          alt=""
        ></img>
        <label className="title-logo-text">
          <b>Cant: </b>
          {pepsi}
          <b> Costo: </b>600
        </label>
      </div>
      <div className="sodaComp-fanta">
        <img
          className="sodas-logo"
          src="https://turbologo.com/articles/wp-content/uploads/2020/02/Fanta-logo.png"
          alt=""
        ></img>
        <label className="title-logo-text">
          <b>Cant: </b>
          {fanta}
          <b> Costo: </b>550
        </label>
      </div>
      <div className="sodaComp-sprite">
        <img
          className="sodas-logo"
          src="https://brandemia.org/contenido/subidas/2022/05/nueva-identidad-visual-de-sprite-2022.png"
          alt=""
        ></img>
        <label className="title-logo-text">
          <b>Cant: </b>
          {sprite}
          <b> Costo: </b>750
        </label>
      </div>
    </div>
  );
};
