import React from "react";
import MyButton from "../MyButton";
const Team = () => {
  return (
    <div className="sectionTeam">
      <div className={"imgSection"}>
        <img src={"/static/images/doctor.png"} />
      </div>
      <div className={"sectionInformation"}>
        <div>
          <h3>Tenemos al mejor</h3>

          <h3> equipo de expertos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            dignissim sem, eu faucibus lacus. Mauris feugiat, ligula id eleifend
            tristique, enim nibh consectetur nibh
          </p>
          <MyButton style={"secondary"} text={"Ver equipo ->"} />
        </div>
      </div>
    </div>
  );
};

export default Team;
