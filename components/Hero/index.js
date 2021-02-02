import React, { useEffect, useRef } from "react";
import MyButton from "../MyButton";
import { TweenLite, Power3 } from "gsap";

const Hero = () => {
  let h1Text1 = useRef(null);
  let h1Text2 = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    TweenLite.to(h1Text1, 0.9, {
      opacity: 1,
      y: -10,
      ease: Power3.easeIn,
    });
    TweenLite.to(h1Text2, 1, {
      opacity: 1,
      y: -10,
      ease: Power3.easeIn,
    });
    TweenLite.to(button, 1.2, {
      opacity: 1,
      y: -10,
      ease: Power3.easeIn,
    });
  }, []);

  return (
    <div className="Hero" data-aos="zoom-in">
      <div className={"capa"}>
        <h1
          ref={(el) => {
            h1Text1 = el;
          }}
        >
          Salud para todos.
        </h1>
        <h1
          ref={(el) => {
            h1Text2 = el;
          }}
        >
          Salud a tiempo.
        </h1>
        <div
          style={{ opacity: 0 }}
          ref={(el) => {
            button = el;
          }}
        >
          <MyButton style={"primary"} text={"Registrarme"} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
