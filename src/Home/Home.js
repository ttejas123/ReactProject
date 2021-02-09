import React from "react";
import IMG from "../images/heart.gif";
import Common from "../common/common.js";
const Home =()=> { 
  return (
  	<>
  	<Common
  		brand="Grow your business with"
  		brandName="Thakare"
  		info="We are the team of talented developer making websites"
  		btn="Get Started"
  		Visit="/services"
  		IMG={IMG} />
    </>
  );
}

export default Home;