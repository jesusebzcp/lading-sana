import React from "react";
import PropTypes from "prop-types";

const MyButton = ({ style, text }) => {
  return (
    <>
      {style === "primary" && (
        <button className={"primaryButton"}>
          {text ? text : "escribe un texto"}
        </button>
      )}
      {style === "secondary" && (
        <button className={"secondaryButton"}>
          {text ? text : "escribe un texto"}
        </button>
      )}
    </>
  );
};
MyButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
};
export default MyButton;
