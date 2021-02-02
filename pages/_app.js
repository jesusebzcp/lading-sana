import React from "react";
import "../styles/globals.css";
import PropTypes from "prop-types";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
MyApp.propTypes = {
  Component: PropTypes.object,
  pageProps: PropTypes.object,
};
export default MyApp;
