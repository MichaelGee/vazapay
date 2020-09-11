import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import PhotoGrid from "../components/PhotoGrid";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <PhotoGrid />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
