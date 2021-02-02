import React from "react";
import MyButton from "../MyButton";
const Proof = () => {
  return (
    <div className="containerProof">
      <div className={"sectionInformation laboratory proof"}>
        <div>
          <h3>Realizamos pruebas</h3>
          <h3>Y consultas</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            dignissim sem, eu faucibus lacus. Mauris feugiat, ligula id eleifend
            tristique, enim nibh consectetur nibh
          </p>
          <MyButton style={"primary"} text={"Ver equipo ->"} />
        </div>
      </div>

      <div className="doctor2">
        <img src={"/static/images/doctor2.png"} />
      </div>
    </div>
  );
};

export default Proof;
