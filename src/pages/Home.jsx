import React from "react";
import Slider from "../components/Carousel";
import Products from "../components/Products";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
