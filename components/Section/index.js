import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, name }) => {
  return (
    <div className={"container"} name={name}>
      <div className="separatorFlex" />
      <section className={"content"}>{children}</section>
      <div className="separatorFlex" />
    </div>
  );
};
Section.propTypes = {
  children: PropTypes.object,
  name: PropTypes.string,
};
export default Section;
