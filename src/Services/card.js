import React from "react";
import Web from "../images/web.jpg";

const Card = (prop)=>{
	console.log(prop.imgsrc);
	return (
		<>
					<div className="col-md-4 col-10 mx-auto">
						<div className="card">
						  <img src={prop.imgsrc} className="card-img-top" alt="..." />
						  <div className="card-body">
						    <h5 className="card-title">{prop.title}</h5>
						    <p className="card-text">{prop.sname}</p>
						    <a href="#" className="btn btn-primary">Go somewhere</a>
						  </div>
						</div>
      	   			</div>
		</>
		);
}

export default Card;