import React, { useState } from 'react';

const Contact = ()=> { 
	const [Data, setData] = useState({
		name: "",
		phone:"",
		email: "",
		msg:"",
	});
	const [ViewData, setViewData] = useState({
		name: "",
		phone:"",
		email: "",
		msg:"",
	})
	const InputeEvent = (event)=>{
		const {name, value} = event.target;
		setData((preVal)=>{
			return{   
				...preVal,
			    [name] : value,
		    }
		});
	}
	const submitEvent = (e)=>{
		e.preventDefault();
	}


	const SubmitData = ()=>{
        setViewData((preVal)=>{
			return {
			    ...Data,
			}
		});
		setData(()=>{
			return {
				name: "",
				phone:"",
				email: "",
				msg:""
			}
		})
	}
  return (
    <>
    	<div className="my-4">
    		<h1 className="text-center"> Contact Page </h1>
    	</div>
    	<div className="my-3">
    		<h1 className="text-center"> {ViewData.name} </h1>
    	</div>

    	<div className="container contact_div">
    		<div className="row">
    			<div className="col-md-6 col-10 mx-auto">
					<form onSubmit={submitEvent}>
						  <div className="form-group mb-3">
						    <label>Name</label>
						    <input type="text" className="form-control" id="exampleFormControlInput1" name="name" onChange={InputeEvent} value={Data.name} placeholder="Rahul" />
						  </div>
						  <div className="form-group mb-3">
						    <label >Phone Number</label>
						    <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" onChange={InputeEvent} value={Data.phone} placeholder="847484****" />
						  </div>
						  <div className="form-group mb-3">
						    <label >Email address</label>
						    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" onChange={InputeEvent} value={Data.email} placeholder="name@example.com" />
						  </div>
						  <div className="form-group mb-3">
						    <label>Example textarea</label>
						    <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" onChange={InputeEvent} value={Data.msg} rows="3"></textarea>
						  </div>
						  <div className="col-12">
						  	<button className="btn btn-outline-primary" type="submit" onClick={SubmitData}>Submit Form</button>
						  </div>
					</form>    			
    			</div>
    		</div>
    	</div>
    </>
  );
}

export default Contact;