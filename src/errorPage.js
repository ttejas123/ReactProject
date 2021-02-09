import { NavLink } from 'react-router-dom';
const ErrorPage = () => {
	return (
		<div className="setStyle2">
			<h1>404 Error Page</h1>
			<p>Sorry, This page is desn't exist</p>
			<NavLink exact to="/"><button className="ErrorButton"> Go Back </button></NavLink>
		</div>  
	      );
} 

export default ErrorPage;
