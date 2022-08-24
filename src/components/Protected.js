import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
	// check if the user is authenticated
	if (!isLoggedIn) {
		// if not then redirect them to the homepage
		return <Navigate to="/login" replace />;
	}
	// if authenticated, the child component (the clicked Page) will be rendered
	return children;
};

export default Protected;