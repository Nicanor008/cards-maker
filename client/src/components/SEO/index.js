import React from "react";
import Helmet from "react-helmet";

const SEO = props => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <link rel="canonical" href="https://cards-maker.netlify.com" />
    </Helmet>
  );
};

export default SEO;
