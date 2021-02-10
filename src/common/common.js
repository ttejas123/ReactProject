import React from "react";
import { NavLink } from "react-router-dom"
const Common =(props)=> { 
  return (
  	<>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
      	<div className="row">
      		<div className="col-10 mx-auto">
      			<div className="row">

      			<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column paddUpp">
      				<h1>
      					{props.brand} <strong className="brand-name">{props.brandName}</strong>
      				</h1>
      				<h2 className="my-3">
      					{props.info}
      				</h2>
      				<div className="my-3">
      					<NavLink to={props.Visit} className="btn-get-started btn btn-outline-info">
      					 {props.btn}
      					</NavLink>
      				</div>
      			</div>

      			<div className="col-lg-6 order-1 order-lg-2 header-img">
      				<img src={props.IMG} className="img-fluid animated" alt="home img" />
      			</div>

      			</div>
      		</div>
      	</div>
      </div>
    </section>
    </>
  );
}

export default Common;