import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";

const Home = () => {
  return (
    <div className="">
      <Section1 />
      <div className="mx-12 d:block p:hidden">
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
};

export default Home;