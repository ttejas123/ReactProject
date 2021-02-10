import React from "react";
import IMG from "../images/AboutUS.gif";
import Common from "../common/common.js";
const About =()=> { 
  return (
  	<>
  	<Common
  		brand="Know About Us & Work "
  		brandName="Thakare"
  		info="We are the team of talented developer making websites"
  		btn="Contact us"
  		Visit="/contact"
  		IMG={IMG} />
    </>
  );
}

export default About;