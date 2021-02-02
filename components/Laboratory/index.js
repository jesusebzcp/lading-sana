import React from "react";
import MyButton from "../MyButton";

const Laboratory = () => {
  const entries = [
    {
      icon: "icon",
      title: "Análisis de virus",
    },
    {
      icon: "icon",
      title: "Llevamos tus resultados",
    },
    {
      icon: "icon",
      title: "Pruebas de laboratorio",
    },
  ];
  return (
    <div className="containerLaboratory">
      <div className={"sectionInformation laboratory"}>
        <div>
          <h3>El mejor</h3> <h3>Laboratorio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            dignissim sem, eu faucibus lacus. Mauris feugiat, ligula id eleifend
            tristique, enim nibh consectetur nibh
          </p>
          <MyButton text={"Realizar consulta"} />
        </div>
      </div>
      <div className="options">
        {entries.map((item, index) => {
          return (
            <div className="option" key={index}>
              <div className="icon">{item.icon}</div>
              <div className="titleOption">
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Laboratory;
