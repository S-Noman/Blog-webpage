import React from "react";
import Carousel from "../components/Embla/Carousel";

const Home = () => {
  const SLIDE_COUNT = 2;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <Carousel slides={slides}/>
    </div>
  );
};

export default Home;
