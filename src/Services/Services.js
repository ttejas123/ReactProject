import React from "react";
import Card from './card.js';
import Cards from "./CardsData.js";

const Services = ()=> {   
  return (
  	<>
      <div className="my-5">
      	<h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid nav_bg mb-5">
      	<div className="row">
      	   <div className="col-10 mx-auto">
      	   		<div className="row gy-4">

      	   			{Cards.map((val)=>{
      	   				return (
      	   					<Card
      	   						key = {val.id}
	                            imgsrc = {val.imgsrc} 
	                            title = {val.title} 
	                            sname = {val.sname}
	                            className = "card" />);
      	   			})}

      	   		</div>
      	   </div>
      	</div>
      </div>
    </>
  );
}

export default Services;