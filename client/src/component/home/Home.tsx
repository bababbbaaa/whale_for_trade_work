import React, { useState, useEffect } from "react";
import "./home.css";
import Forex from "./component/forex";
import Background from "./component/background";

import Bundle from "./component/bundleRev";
import About from "./component/about";
import axios from "axios";
import Contact from "./component/contacet";

const Home = (props) => {
  const [chart, setChart] = useState([]);
  const fetchForax = async () => {
    try {
      axios
        .get("https://api.exchangerate.host/lastest?base=USD")
        .then((response: any): any => {
          setChart(response.data.rates);
        });
    } catch (error) {}
  };
  useEffect(() => {
    fetchForax();
  }, []);

  return (
    <>
      {/* // container for home page */}
      <Background />
      <div className="container home-page">
        {/* for chart forex with price and async per min */}
        <Forex chart={chart} />
        <Bundle />
        {/* for slide img for product  */}
      </div>
      <div className="footer">
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Home;
