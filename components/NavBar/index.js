import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { TweenLite, Power3 } from "gsap";

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);
  let navContainer = useRef(null);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const scrollToButtom = () => {
    animateScroll.scrollToBottom();
  };

  const handleSetActive = (to) => {
    console.log("tooo =>", to);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});
    Events.scrollEvent.register("end", (to, element) => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 500) {
      TweenLite.to(navContainer, 0.4, {
        backgroundColor: "#fff",
        borderBottom: "1px solid gray",
        color: "gray",
        ease: Power3.easeInOut,
      });
    } else {
      TweenLite.to(navContainer, 0.4, {
        backgroundColor: "transparent",
        ease: Power3.easeIn,
      });
    }
  }, [scrollY]);
  console.log("scrollY =>", scrollY);
  return (
    <div className={"positionNav"}>
      <nav
        className="navbar"
        ref={(el) => {
          navContainer = el;
        }}
      >
        <div className="containerLogo">
          <img src={"/static/svg/logo.svg"} alt={"logo"} />
        </div>
        <div className="containerLinks">
          <Link
          u
            className="link"
            to="nosotros"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={() => handleSetActive()}
          >
            Nosotros
          </Link>
          <Link
            className="link"
            to="elegir"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={() => handleSetActive()}
          >
            Por que elegirnos
          </Link>
          <Link
            className="link"
            to="servicios"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={() => handleSetActive()}
          >
            Servicios
          </Link>
          <Link
            className="link"
            to="contacto"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={() => handleSetActive()}
          >
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
