import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <Partners />
    </div>
  );
};

export default Home;
