import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import PhotoGrid from "../components/PhotoGrid";
import Description from "../components/Description";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <PhotoGrid />
      <Description />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
