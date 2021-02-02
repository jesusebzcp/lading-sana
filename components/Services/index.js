import React from "react";

const entries = [
  {
    title: "SaanaLab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat magna in fermentum. Integer faucibus ullamcorper erat eu molestie.",
  },
  {
    title: "SaanaLab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat magna in fermentum. Integer faucibus ullamcorper erat eu molestie.",
  },
  {
    title: "SaanaLab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat magna in fermentum. Integer faucibus ullamcorper erat eu molestie.",
  },
];

const Services = () => {
  return (
    <div className="containerCards">
      {entries.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="icon">Icon</div>
            <h3 className="titleCard">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
